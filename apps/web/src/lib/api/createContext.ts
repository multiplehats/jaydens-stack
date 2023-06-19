import type { RequestEvent } from '@sveltejs/kit';

export type CreateInnerContextOptions = {
	request: RequestEvent['request'];
	isDataRequest: boolean;
};

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createSSGHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(opts: CreateInnerContextOptions) {
	return {
		...opts
	};
}

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext({ request, isDataRequest }: RequestEvent) {
	const contextInner = await createContextInner({ request, isDataRequest });

	return {
		...contextInner
	};
}

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
export type TRPCContextInner = Awaited<ReturnType<typeof createContextInner>>;
