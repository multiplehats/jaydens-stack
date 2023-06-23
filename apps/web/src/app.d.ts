/// <reference types="@sveltejs/kit" />
import type { DefaultSession, Session } from '@auth/core/types';

type ExtendedUser = {
  /** The user's ID in the database. */
  id: string
} & DefaultSession["user"]

type ExtendedSession = DefaultSession & {
  user: ExtendedUser
}

/**
 * @see https://kit.svelte.dev/docs/types#app
 */
declare namespace App {
  // interface Locals {}
  interface PageData {
    session?: ExtendedSession | null;
  }
  // interface Platform {}
}

/**
 * The `@auth/sveltekit` declares this as non-optionally required.
 * So we need to redeclare it here, to ensure sessions are not mandatory
 * to be returned from load() functions.
 *
 * @see https://github.com/nextauthjs/next-auth/blob/50a88bb8783b3d81b29a567bf680a6fc6dcd6573/packages/frameworks-sveltekit/src/lib/index.ts#L298
 */
declare global {
  namespace App {
    interface PageData {
      session?: ExtendedSession | null;
    }
  }
}

/**
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module '@auth/core/types' {
  /**
   * Overwrite the default `Session` type with our extended version.
   */
  interface Session {
    user: ExtendedUser
  }
}

export { };