<script lang="ts">
  import { cn } from "@acme/core/class-utils";
  import { badgeVariants } from "@acme/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ drink } = data);
</script>

<section class="py-32 bg-black min-h-screen h-full">
  <div class="container">
    <div class="mb-10 max-w-screen-sm">
      <a href="/drinks" class={cn(badgeVariants({ variant: "secondary" }), "mb-8")}> Return to drinks </a>
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        {drink.name}
      </h2>

      <p class="mt-4 text-lg text-gray-500">
        {drink.description}
      </p>
    </div>
  </div>
</section>
