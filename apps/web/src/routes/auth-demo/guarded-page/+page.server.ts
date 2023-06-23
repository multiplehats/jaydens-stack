import { trpcLoad } from '$lib/api/trpc-load';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
    const { session } = await trpcLoad(event, (t) => t.session());

    if (!session) {
        throw redirect(302, '/auth-demo')
    }

    return {
        session
    };
}) satisfies PageServerLoad;