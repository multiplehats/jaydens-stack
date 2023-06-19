import authedProcedure from '$lib/api/procedures/authedProcedure';
import { mergeRouters, router } from '$lib/api/trpc';

const meRouter = router({
	me: authedProcedure.query(async () => {
		return {
			id: '1',
			name: 'John Doe',
		}
	})
});

export const AuthedViewerRouter = mergeRouters(
	// Easily merge "one-off" routers that don't make sense to put in their own file until they grow.
	meRouter,
	// Add more routers here 👇
	// router({
	//
	// })
);
