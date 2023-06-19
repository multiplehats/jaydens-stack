import { z } from "zod";

export const ZDrinkSchema = z.object({
  id: z.number(),
});

export type TDrinkSchema = z.infer<typeof ZDrinkSchema>;

export const ZDrinksSchema = z.object({
  filters: z.object({
    name: z.string().nullish(),
  }),
  limit: z.number().min(1).max(100).nullish(),
  /**
   * Cursor needs to exist to use useInfiniteQuery.
   * This is automatically set by Tanstack Query.
   */
  cursor: z.number().nullish(),
});

export type TDrinksSchema = z.infer<typeof ZDrinksSchema>;
