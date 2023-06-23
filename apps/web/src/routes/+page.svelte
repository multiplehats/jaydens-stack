<script lang="ts">
  import { page } from "$app/stores";

  import { cn } from "@acme/core/class-utils";
  import { Button } from "@acme/ui";
  import { badgeVariants } from "@acme/ui";

  import { api } from "$lib/api/client";

  const client = api($page);
  const features = [
    {
      title: "Turborepo",
      description:
        "Turbo is an incremental build system optimized for JavaScript and TypeScript, written in Rust.",
      link: "https://turbo.build/",
    },
    {
      title: "SvelteKit",
      description:
        "SvelteKit is built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components.",
      link: "https://kit.svelte.dev/",
    },
    {
      title: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      link: "https://tailwindcss.com",
    },
    {
      title: "Shadcn Svelte",
      description:
        "Beautifully designed components without lock-in. Simply copy and paste them into your project.",
      link: "https://www.shadcn-svelte.com/",
    },
    {
      title: "tRPC",
      description:
        "End-to-end typesafe APIs made easy. No serverless lock-in, can be spun off into a standalone server.",
      link: "https://trpc.io",
    },
    {
      title: "Tanstack Query",
      description:
        "Utils for fetching, caching and updating asynchronous data. Tightly integrated for you with tRPC and SvelteKit",
      link: "https://tanstack.com/query/latest/docs/svelte/overview",
    },
    {
      title: "Auth.js",
      description: "Formerly Next Auth, a flexible, extensible, and powerful authentication library",
      link: "https://authjs.dev/"
    }
  ] satisfies {
    title: string;
    description: string;
    link: string;
  }[];

  $: session = client.session.createQuery();
</script>

<section class="bg-black h-full min-h-screen">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a href="/drinks" class={cn(badgeVariants({ variant: "secondary" }), "mb-8")}>
      <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">tRPC + Tanstack Query</span>
      <span class="text-sm font-medium">See example</span>
      <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd" /></svg>
    </a>

    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
      Jaydens Stack
    </h1>

    <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
      A modern monorepo boilerplate focused on developer experience, scalability, and performance. Start small
      and scale up with confidence.
    </p>

    {#if $session.data?.session}
      <p class="mb-8 mt-4 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
        You're logged in as. Your user ID is: {$session.data.session?.user.id}
      </p>
    {/if}
    <div
      class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <Button href="https://github.com/multiplehats/jaydens-stack/tree/main#installation"
        >Installation</Button>
      <Button href="/auth-demo">Auth Demo</Button>
      <Button variant="destructive" href="/auth-demo/guarded-page">View guarded page</Button>
      <Button variant="secondary" href="https://github.com/multiplehats/jaydens-stack">Star on Github</Button>
    </div>

    <div
      class="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-900 sm:grid-cols-2 lg:grid-cols-4">
      {#each features as feature (feature.title)}
        <div>
          <h2 class="mb-1 text-lg font-bold text-white">{feature.title}</h2>
          <p class="mb-1 text-sm text-gray-400">{feature.description}</p>
          <a
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-2 text-sm font-semibold text-gray-100 hover:underline">
            Learn more
            <svg
              class="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" /></svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
