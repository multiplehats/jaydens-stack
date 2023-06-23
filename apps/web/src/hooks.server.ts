import { authConfig } from "$lib/server/authjs";
import { SvelteKitAuth } from "@auth/sveltekit";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const authHandle = SvelteKitAuth(authConfig) satisfies Handle;

export const handle = sequence(authHandle);