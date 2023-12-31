<script lang="ts">
  import type { VariantProps } from "class-variance-authority";
  import type { SvelteComponent } from "svelte";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

  import { cn } from "@acme/core/class-utils";

  import Pulse from "../pulse/Pulse.svelte";

  import { buttonVariants } from ".";

  let className: string | undefined | null = undefined;
  export { className as class };
  export let href: HTMLAnchorAttributes["href"] = undefined;
  export let type: HTMLButtonAttributes["type"] = undefined;
  export let variant: VariantProps<typeof buttonVariants>["variant"] = "default";
  export let size: VariantProps<typeof buttonVariants>["size"] = "default";
  export let loading = false;
  export let icon: typeof SvelteComponent | undefined = undefined;
  export let iconPlacement: "left" | "right" = "left";
  export let iconClasses: string | undefined = undefined;

  type Props = {
    class?: string | null;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
    loading?: boolean;
    icon?: typeof SvelteComponent;
    iconPlacement?: "left" | "right";
    iconClasses?: string;
  };

  interface AnchorElement extends Props, HTMLAnchorAttributes {
    href?: HTMLAnchorAttributes["href"];
    type?: "submit" | "reset" | "button" | null
  }

  interface ButtonElement extends Props, HTMLButtonAttributes {
    type?: HTMLButtonAttributes["type"];
    href?: "submit" | "reset" | "button" | null
  }

  // TODO: Figure out how to make this work
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Props = AnchorElement | ButtonElement;
</script>

<svelte:element
  this={href ? "a" : "button"}
  type={href ? undefined : type}
  {href}
  class={cn(buttonVariants({ variant, size, className }))}
  disabled={loading}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:mouseenter
  on:mouseleave>
  {#if loading}
    <Pulse class="mr-2" />
  {/if}

  {#if icon && iconPlacement === "left"}
    <svelte:component
      this={icon}
      class={cn("h-5 w-5", $$slots.default ? "mr-1" : "",
      size === 'default' && 'h-5 w-5',
      size === 'sm' && 'h-4 w-4',
      size === 'lg' && 'h-6 w-6',
      iconClasses)} />
  {/if}

  <slot />
</svelte:element>
