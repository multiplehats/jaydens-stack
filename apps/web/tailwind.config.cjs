const base = require("@acme/config/tailwind-preset");

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base],
  content: ["./src/**/*.{html,js,svelte,ts}", "../../packages/ui/components/**/*.{svelte,ts}"],
};
