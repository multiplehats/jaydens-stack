<script lang="ts">
  import { cn } from "@acme/core/class-utils";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<div class={cn("p-6 pt-0", className)} {...$$restProps}>
  <slot />
</div>
