<script lang="ts">
  import { cn } from "@acme/core/class-utils";
  import { badgeVariants } from "@acme/ui";

  import DrinksGrid from "$lib/drinks/components/DrinksGrid.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ drinks, drinksQueryProps } = data);
</script>

<section class="py-32 bg-black min-h-screen h-full">
  <div class="container">
    <div class="mb-10 max-w-screen-sm">
      <a href="/" class={cn(badgeVariants({ variant: "secondary" }), "mb-8")}> Return to home </a>
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">tRPC + Tanstack Query example</h2>

      <p class="mt-4 text-lg text-gray-500">
        An example of how to use tRPC with Tanstack Query. Gets the data on the server and hydrates the
        initial page. Then uses createInfiniteQuery to fetch more data on the client.
      </p>
    </div>

    <DrinksGrid {drinks} {drinksQueryProps}>
      <div slot="empty">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">No drinks found</h2>
          <p class="mt-4 text-lg text-gray-500">Check back later for more drinks.</p>
        </div>
      </div>
    </DrinksGrid>
  </div>
</section>
