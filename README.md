<p align="center">
 <img align="center" src="https://github.com/multiplehats/jaydens-stack/blob/main/apps/web/static/opengraph.png" />
 <h1 align="center">
  Jayden's Stack ✨
 </h1>
</p>

Welcome to Jayden's Stack 👋, a modern, efficient, and feature-packed monorepo boilerplate focused on SvelteKit. This project is all about enhanced developer experience, massive scalability, and high performance.

Give me a [follow on Twitter](https://twitter.com/itschrisjayden) for updates. And if you dig this repo, don't forget to give it a star ⭐️

> **Note** <br> **This is quite an opinionated monorepo** <br> But, it's the exact structure I've used to build several production apps. And for me (and team members) it totally rocks. Over time, I might add additional utitilies and other libraries, but I'm trying to keep things "simple" (for my own sake).

## But, I don't need "X"
When building this monorepo template, I tried to make it so that if you don't need something, it's relatively easy to eject. There might be some manual work involved if you want to get rid of something (sorry, no fancy CLI's yet), but the main goal here is to save myself time and hopefully yours! 🎉

## Todos / Features

- [x] tRPC
- [x] Integrate Prisma + Planetscale
- [x] Incorporate AuthJS.
- [ ] Spin tRPC off into its own package.
- [ ] Edge routes are currently not supported because of `SvelteKitAuth` in hooks.server.ts (it loads Prisma).

  Have solved this in other projects by copying over [these functions](https://github.com/nextauthjs/next-auth/blob/50a88bb8783b3d81b29a567bf680a6fc6dcd6573/packages/frameworks-sveltekit/src/lib/client.ts#L37) and changing `/auth/` to `/api/auth/`. But for this template it's probably better to wait until this hardcoded path is fixed upstream and these functions allow for custom base paths so that our "handle" can sit in `/src/routes/api/auth/[...authjs]` next to the `trpc` entrypoint.

## Featured Technologies
- **tRPC**: Enables you to make end-to-end typesafe APIs like a ninja. It allows for the freedom of serverless applications without lock-ins and can be easily spun into a standalone server.
- **TanStack Query**: Your utility belt for fetching, caching, and updating asynchronous data. Its integration with tRPC and SvelteKit is just flawless.
- **SvelteKit**: A UI framework that's built on Svelte, enabling you to write stunningly concise components.
- **Tailwind CSS**: A utility-first CSS framework that lets you create modern websites in record time without ever leaving your HTML.
- **Shadcn Svelte**: Offers beautifully designed components without any lock-in. Just copy and paste them into your project. Simple as that!
- **TurboRepo**: A Rust-built, incremental build system that's optimized for JavaScript and TypeScript.

## Installation
1. Clone this repository using git:
   ```
   git clone https://github.com/multiplehats/jaydens-stack myapp
   ```
2. Navigate into your newly created project directory:
   ```
   cd myapp
   ```
3. Replace instances of `acme`.
4. Install the dependencies:
    ```
    pnpm install
    ```

5. Copy .env.example in the root of the project. Generate a new `AUTH_SECRET`. And set the `DATABASE_URL`. The schema is setup for Planetscale, but you can easily modify it to a different need.
   ```
   openssl rand -base64 32 # generate secret
   ```

6. Start the party:
    ```
    pnpm dev
    ```
Voila! You now have a local running instance of Jayden's Stack!

## Adding shadcn components

Adding new components is pretty simple, you can either manually over components to the `packages/ui` directory. Or, `cd` into `apps/web` and run the shadcn CLI command, e.g. `npx shadcn-svelte add accordion`. This will put the new component in the `packages/ui` directory.

Don't forget to update imports ✌️

## Gotcha's & Notes

- Prisma needs to be installed in `apps/web` as well as `packages/database`, because of this [issue](https://github.com/prisma/prisma/issues/6603), alternatively see [this Slack thread](https://prisma.slack.com/archives/CA491RJH0/p1677500075237659).

## Contributing
Contributions, issues, and feature requests are welcome! See our [Contributing Guide](CONTRIBUTING.md) for more details.

**Show your support**
If this project helped you, give it a ⭐️!

Feel free to provide feedback, report bugs, or make feature requests. You're welcome to create Pull Requests, too.

Happy coding!
