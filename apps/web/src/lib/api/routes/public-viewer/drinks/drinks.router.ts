import publicProcedure from '$lib/api/procedures/publicProcedure';
import { router } from '$lib/api/trpc';
import { ZDrinkSchema, ZDrinksSchema } from './drinks.schema';
import { TRPCError } from '@trpc/server';
import drinks from './drinks.json';

export const drinksRouter = router({
	get: publicProcedure
		.input(ZDrinkSchema)
		.query(async ({ input }) => {
			const drink = drinks.find(drink => drink.id === input.id);

			if (!drink) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Drink not found',
				});
			}

			return drink;
		}),

	getMany: publicProcedure
		.input(ZDrinksSchema)
		.query(async ({ input: { filters, cursor, limit } }) => {
			const take = limit ?? 10;
			const skip = cursor ?? 0;

			const filteredDrinks = drinks.filter(drink => {
				if (filters.name) {
					return drink.name === filters.name;
				}

				return true;
			});

			const paginatedDrinks = filteredDrinks.slice(skip, skip + take);

			const drinksFetched = paginatedDrinks.length;
			let nextCursor: typeof skip | null = skip;

			if (drinksFetched === take) {
				nextCursor = skip + take;
			} else {
				nextCursor = null;
			}

			return {
				drinksData: paginatedDrinks,
				nextCursor,
			};
		})
});
