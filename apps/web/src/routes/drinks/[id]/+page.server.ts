import { trpcLoad } from "$lib/api/trpc-load";

import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
  return {
    drink: trpcLoad(event, (trpc) => trpc.public.drinks.get({ id: Number(event.params.id) })),
  };
}) satisfies PageServerLoad;
