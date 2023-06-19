<p align="center">
 <img align="center" src="https://github.com/multiplehats/jaydens-stack/blob/main/apps/web/static/opengraph.png" />
 <h1 align="center">
  Jayden's Stack ✨
 </h1>
</p>

Welcome to Jayden's Stack 👋, a modern, efficient, and feature-packed monorepo boilerplate focused on SvelteKit. This project is all about enhanced developer experience, massive scalability, and high performance.

> **Note** <br> **This is quite an opinionated monorepo** <br> But, it's the exact structure I've used to build several production apps. And for me, it totally rocks.

## I don't need "X"
When building this monorepo template, I believed that if you don't need something, it should be easy to remove. So yes, there might be some manual work involved, but the main goal here is to save myself time and hopefully yours! 🎉

## Todo's

**Important:**

- [x] Setup Husky, commitlint and CLI.
- [x] Type checking doesn't work. Weird error is thrown.

**Less important:**

- [ ] Spin tRPC off into its own package.
- [ ] Integrate Prisma.
- [ ] Incorporate AuthJS.

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

5. Start the party:
    ```
    pnpm dev
    ```
Voila! You now have a local running instance of Jayden's Stack!

## Contributing
Contributions, issues, and feature requests are welcome! See our [Contributing Guide](CONTRIBUTING.md) for more details.

**Show your support**
If this project helped you, give it a ⭐️!

Feel free to provide feedback, report bugs, or make feature requests. You're welcome to create Pull Requests, too.

Happy coding!
