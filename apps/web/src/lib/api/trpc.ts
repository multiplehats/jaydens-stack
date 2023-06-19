import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import type { createContextInner } from "./createContext";

export const tRPCContext = initTRPC.context<typeof createContextInner>().create({
  transformer: superjson,
});
export const router = tRPCContext.router;
export const mergeRouters = tRPCContext.mergeRouters;
export const middleware = tRPCContext.middleware;
export const procedure = tRPCContext.procedure;
