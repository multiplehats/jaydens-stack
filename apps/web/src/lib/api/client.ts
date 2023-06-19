/**
 * This is the client-side entrypoint for the tRPC API.
 */
import type { AppRouter } from '$lib/api/root';
import type { QueryClient } from '@tanstack/svelte-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';
import { svelteQueryWrapper } from 'trpc-svelte-query-adapter';
import { type TRPCClientInit, createTRPCClient } from 'trpc-sveltekit';

let browserClient: ReturnType<typeof svelteQueryWrapper<AppRouter>>;

export function api(init?: TRPCClientInit, queryClient?: QueryClient) {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = svelteQueryWrapper<AppRouter>({
		client: createTRPCClient<AppRouter>({ init, transformer: superjson, url: '/api/trpc' }),
		queryClient
	});
	if (isBrowser) browserClient = client;
	return client;
}

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
