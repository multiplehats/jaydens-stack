
import authedProcedure from '$lib/api/procedures/authedProcedure';
import { router } from '$lib/api/trpc';

export const meRouter = router({
	me: authedProcedure.query(async () => {
		return {
			id: '1',
			name: 'John Doe',
		}
	})
});
