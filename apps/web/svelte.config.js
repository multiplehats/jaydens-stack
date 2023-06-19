import vercel from "@sveltejs/adapter-vercel";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /**
   * For more information about preprocessors, see the following links
   *
   * @see https://github.com/sveltejs/svelte-preprocess
   */
  preprocess: preprocess(),

  kit: {
    adapter: vercel(),
  },

  vitePlugin: {
    /**
     * Inspector mode shows you the file location where the element under cursor is
     * defined and you can click to quickly open your code editor at this location.
     *
     * @see https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector
     */
    inspector: {
      toggleKeyCombo: "control-shift",
      holdMode: true,
      showToggleButton: "never",
    },
  },

  /**
   * Shadcn Svelte CLI
   *
   * @see https://www.shadcn-svelte.com/docs/cli
   */
  shadcn: {
    componentPath: "../../packages/ui/components",
  },
};

export default config;
