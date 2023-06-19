module.exports = {
    bracketSpacing: true,
    bracketSameLine: true,
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "es5",
    semi: true,
    printWidth: 110,
    arrowParens: "always",
    importOrder: [
      "^@(acme)/(.*)$",
      "^\\$lib/(.*)$",
      "^\\$components/(.*)$",
      "^\\$(core)/(.*)$",
      "^[./]",
    ],
    importOrderSeparation: true,
    plugins: [
      "@trivago/prettier-plugin-sort-imports",
      /**
       * Tailwind plugin must come last!
       *
       * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
       */
      "prettier-plugin-tailwindcss",
    ]
  };