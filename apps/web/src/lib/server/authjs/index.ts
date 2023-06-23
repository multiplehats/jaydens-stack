import type { Provider } from '@auth/core/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '$lib/server/db';
import type { Adapter } from '@auth/core/adapters';
import { env } from '$env/dynamic/private';
import { type SvelteKitAuthConfig, getSession as _getSession, } from '@auth/sveltekit';
import type { Session } from '@auth/core/types';

const providers = [
    /*
     * HTTP Email Provider
     * @see https://authjs.dev/guides/providers/email-http
     */
    {
        id: 'http-email',
        name: 'HTTP Email',
        type: 'email',
        sendVerificationRequest({ identifier: email, url, provider: { server, from } }) {
            console.log('Sending email to', email);
            console.log('Server:', server);
            console.log('From:', from);
            console.log('Verification URL', url);

            return Promise.resolve();
        }
    },
] as Provider[];

export const authConfig = {
    secret: env.AUTH_SECRET,
    adapter: PrismaAdapter(prisma) as Adapter,
    providers,
    trustHost: true,
    session: {
        /**
         * Using JWTs for sessions instead of database sessions
         * to avoid loading the database on every request.
         */
        strategy: 'jwt'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            // In the future we can do stuff like this here too: (await isBlacklistedEmail(token.email))

            if (!token.email) {
                return {};
            }

            if (user) {
                token.userId = user.id;
            }

            return token;
        },
        session: async ({ session, token }) => {
            // @ts-expect-error - TODO: Fix this
            session.user.id = token.sub;

            return session;
        }
    },
} as SvelteKitAuthConfig;

export async function getSession(req: Request): ReturnType<App.Locals["getSession"]> {
    return _getSession(req, authConfig);
}