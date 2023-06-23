import { authedViewerRouter } from "./routes/authed-viewer/_router";
import { publicViewerRouter } from "./routes/public-viewer/_router";
import { sessionRouter } from "./routes/public-viewer/session.router";
import { mergeRouters, router } from "./trpc";

/**
 * This is the primary router.
 */
export const appRouter = mergeRouters(
  sessionRouter,
  authedViewerRouter,
  router({
    /**
     *  All routes here are prefixed with `public`.
     * This makes it easy to add things such as:
     * cache headers, rate limiting, etc.
     */
    public: publicViewerRouter,
  })
);

export type AppRouter = typeof appRouter;
