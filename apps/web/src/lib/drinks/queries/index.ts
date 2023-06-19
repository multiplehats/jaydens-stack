import { page } from "$app/stores";
import type { InfiniteData } from "@tanstack/svelte-query";
import { get } from "svelte/store";

import { api } from "$lib/api/client";
import type { AppRouter } from "$lib/api/root";
import type { TDrinksSchema } from "$lib/api/routes/public-viewer/drinks/drinks.schema";

type TInitialData = AppRouter["public"]["drinks"]["getMany"]["_def"]["_output_in"];

/**
 * An example of how I like to create re-useable queries.
 * Always matches up with the trpc route, so ultimate type safety.
 */
export function useDrinksQuery({
  initialData,
  drinksQueryProps,
  onSuccess,
}: {
  initialData: TInitialData;
  drinksQueryProps: Omit<TDrinksSchema, "cursor">;
  onSuccess?: (data: InfiniteData<TInitialData>) => void;
}) {
  const client = api(get(page));
  const query = client.public.drinks.getMany.createInfiniteQuery(drinksQueryProps, {
    queryKey: ["drinks", drinksQueryProps],
    initialData: {
      pages: [
        {
          ...initialData,
        },
      ],
      pageParams: [],
    },
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    staleTime: 1000,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return query;
}
