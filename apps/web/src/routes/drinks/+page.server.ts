import type { TDrinksSchema } from '$lib/api/routes/public-viewer/drinks/drinks.schema';
import { trpcLoad } from '$lib/api/trpc-load';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
    const drinksQueryFilter = {
        name: null,
    };

    const drinksQueryLimit = 6;

    const drinksQueryProps = {
        filters: drinksQueryFilter,
        limit: drinksQueryLimit
    } satisfies Omit<TDrinksSchema, 'cursor'>;

    return {
        drinks: trpcLoad(event, (trpc) => trpc.public.drinks.getMany({
            ...drinksQueryProps,
        })),
        drinksQueryProps,
    };
}) satisfies PageServerLoad;