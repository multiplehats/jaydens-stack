/**
 * Place for public routes.
 */
import { mergeRouters, router } from "$lib/api/trpc";
import { drinksRouter } from "./drinks/drinks.router";

export const publicViewerRouter = mergeRouters(
  // Easily merge "one-off" routers that don't make sense to put in their own file until they grow.
  router({
    drinks: drinksRouter,
  })
);
