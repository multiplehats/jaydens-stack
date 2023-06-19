<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from "radix-svelte";

  import { cn } from "@acme/core/class-utils";

  import { buttonVariants } from "$components/button";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<AlertDialogPrimitive.Cancel
  class={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
  {...$$restProps}>
  <slot />
</AlertDialogPrimitive.Cancel>
