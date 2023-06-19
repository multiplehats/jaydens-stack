<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from "radix-svelte";

  import { cn } from "@acme/core/class-utils";

  import { buttonVariants } from "../button";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<AlertDialogPrimitive.Action class={cn(buttonVariants(), className)} {...$$restProps}>
  <slot />
</AlertDialogPrimitive.Action>
