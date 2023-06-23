import sessionMiddleware from '$lib/api/middlewares/sessionMiddleware';
import publicProcedure from '$lib/api/procedures/publicProcedure';
import { router } from '$lib/api/trpc';

export const sessionRouter = router({
	session: publicProcedure
		.use(sessionMiddleware)
		.query(async ({ ctx: { session } }) => {
			return {
				session,
			};
		})
});
