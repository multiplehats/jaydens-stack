import type { RequestEvent } from "@sveltejs/kit";
import { resolveHTTPResponse } from "@trpc/server/http";

import { createContext } from "$lib/api/createContext";
import { appRouter } from "$lib/api/root";

/**
 * This function is the entrypoint for all requests to the TRPC server.
 * Instead of being handled in hooks.server.ts this function is called directly in a +server.ts file.
 * Please note that this differs from the `trpc-sveltekit` package instructions.
 *
 * This is because if you have certain SvelteKit routes that are deployed on the edge, and use something
 * like Prisma, the edge routes will error because Prisma is not available on the edge, and since all requests
 * "move through" hooks.server.ts, the edge routes will never be called.
 *
 * For more background refer to this Github discussion: https://github.com/icflorescu/trpc-sveltekit/discussions/87
 *
 * @param event The SvelteKit request event
 */
export async function trpcServerHandle<
  Event extends RequestEvent<Partial<Record<string, string>>, string | null>
>(event: Event) {
  const apiEndpointUrl = "/api/trpc";
  const { request, url } = event;
  const router = appRouter;

  const req = {
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
    query: url.searchParams,
    body: await request.text(),
  };

  const httpResponse = await resolveHTTPResponse({
    router,
    req,
    path: url.pathname.substring(apiEndpointUrl.length + 1),
    batching: {
      enabled: true,
    },
    createContext: async () => createContext?.(event),
    onError: import.meta.env.DEV
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
        }
      : undefined,
    responseMeta({ paths, type, errors, ctx }) {
      const allOk = errors.length === 0;
      const isQuery = type === "query";
      const noHeaders = {};

      /**
       * NOTE: This only handles caching for requests made from the client.
       * Server side queries are handled directly in the SvelteKit load() function.
       */
      if (ctx?.isDataRequest) {
        return noHeaders;
      }

      const defaultHeaders: Record<"headers", Record<string, string>> = {
        headers: {},
      };

      const allPublic =
        paths &&
        paths.every((path) => {
          return path.includes("public");
        });

      // No cache by default
      defaultHeaders.headers["cache-control"] = `no-cache`;

      if (allPublic && allOk && isQuery) {
        // cache request for 1 hour + revalidate once every second
        const HOUR_IN_SECONDS = 60 * 60;

        return {
          headers: {
            "cache-control": `max-age=${HOUR_IN_SECONDS}, stale-while-revalidate`,
          },
        };
      }

      return defaultHeaders;
    },
  });

  const { status, headers, body } = httpResponse as {
    status: number;
    headers: Record<string, string>;
    body: string;
  };

  return new Response(body, { status, headers });
}
