/**
 * Place for public routes.
 */
import publicProcedure from "$lib/api/procedures/publicProcedure";
import { mergeRouters, router } from "$lib/api/trpc";

import { drinksRouter } from "./drinks/drinks.router";

const helloWorldRouter = router({
  hello: publicProcedure.query(async () => {
    return "Hello World!";
  }),
});

export const publicViewerRouter = mergeRouters(
  // Easily merge "one-off" routers that don't make sense to put in their own file until they grow.
  helloWorldRouter,
  router({
    drinks: drinksRouter,
  })
);
