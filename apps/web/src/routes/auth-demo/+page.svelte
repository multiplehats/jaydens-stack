<script lang="ts">
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { cn } from "@acme/core/class-utils";
  import { badgeVariants, Button } from "@acme/ui";

  import { api } from "$lib/api/client";

  const client = api($page);
  let email = "";

  $: session = client.session.createQuery();
</script>

<section class="bg-black h-full min-h-screen">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a href="/" class={cn(badgeVariants({ variant: "secondary" }), "mb-8")}> Return to home </a>

    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
      Auth Demo
    </h1>

    <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
      You can only test this locally. Check your terminal for the login link.
    </p>

    <div class="max-w-sm mx-auto text-left">
      <form
        class="space-y-6"
        on:submit|preventDefault={async () => {
          await signIn("http-email", {
            callbackUrl: "/",
            email,
          });
        }}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              disabled={import.meta.env.PROD}
              bind:value={email}
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <Button type="submit" variant="secondary" disabled={import.meta.env.PROD} class="w-full"
            >Sign in</Button>
        </div>
      </form>
    </div>

    {#if $session.data?.session?.user}
      <div class="p-10">
        <p class="text-sm mb-4 font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          You're logged in as. Your user ID is: {$session.data.session?.user.id}
        </p>

        <Button variant="destructive" on:click={() => signOut()}>Logout</Button>
      </div>
    {/if}
  </div>
</section>
