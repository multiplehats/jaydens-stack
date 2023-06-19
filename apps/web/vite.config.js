import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), tsconfigPaths()]
};

export default config;
