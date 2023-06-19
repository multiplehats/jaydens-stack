<script lang="ts">
  import { cn } from "@acme/core/class-utils";

  export let size: "small" | "medium" | "large" = "small";

  let sizeClasses = {
    small: "w-3 h-3",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };
</script>

<span class={cn("simple-pulse", sizeClasses[size], $$props.class)} role="status" aria-hidden="true" />

<style>
  .simple-pulse {
    display: inline-block;
    vertical-align: -0.125em;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    animation: 0.8s linear infinite spinner-grow;
  }

  @-webkit-keyframes spinner-grow {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      transform: none;
    }
  }
</style>
