<script lang="ts">
  import { cn } from "@acme/core/class-utils";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<div
  class={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
  {...$$restProps}
  on:click
  on:focusin
  on:focusout
  on:mouseenter
  on:mouseleave>
  <slot />
</div>
