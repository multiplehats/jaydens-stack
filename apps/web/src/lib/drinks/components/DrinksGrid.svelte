<script lang="ts">
  import { cn } from "@acme/core/class-utils";
  import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@acme/ui";

  import type { AppRouter } from "$lib/api/root";
  import type { TDrinksSchema } from "$lib/api/routes/public-viewer/drinks/drinks.schema";
  import { useDrinksQuery } from "$lib/drinks/queries";

  export let drinks: AppRouter["public"]["drinks"]["getMany"]["_def"]["_output_in"];
  export let drinksQueryProps: Omit<TDrinksSchema, "cursor">;

  $: query = useDrinksQuery({
    initialData: drinks,
    drinksQueryProps,
  });
</script>

{#if $query.data && $query.data.pages[0]?.drinksData.length === 0}
  <slot name="empty" />
{:else if $query.data}
  <div class={cn("grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3", $$props.class)}>
    {#each $query.data.pages as { drinksData }}
      {#each drinksData as drink (drink.id)}
        <Card>
          <CardHeader>
            <CardTitle>
              {drink.name}
            </CardTitle>
            <CardDescription>
              {drink.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" href="/drinks/{drink.id}">View drink</Button>
          </CardFooter>
        </Card>
      {/each}
    {/each}
  </div>
{/if}

<div class="mt-10 flex w-full content-center items-center justify-center">
  {#if $query.hasNextPage}
    <Button
      type="button"
      variant="secondary"
      disabled={!$query.hasNextPage || $query.isFetchingNextPage}
      on:click={() => $query.fetchNextPage()}>
      {#if $query.isFetchingNextPage}
        Loading...
      {:else}
        Next page
      {/if}
    </Button>
  {:else}
    <div class="text-gray-500">No more drinks</div>
  {/if}
</div>
