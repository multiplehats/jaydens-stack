import { getSession } from '$lib/server/authjs';
import type { TRPCContextInner } from '../createContext';
import { middleware } from '../trpc';
import type { Session } from '@auth/core/types';
import { type Maybe, TRPCError } from '@trpc/server';

export async function getUserFromSession(ctx: TRPCContextInner, session?: Maybe<Session>) {
    const { prisma } = ctx;

    if (!session?.user?.id) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        },
    });

    // Some hacks to make sure `username` and `email` are never inferred as `null`
    if (!user) {
        return null;
    }

    const { email, id } = user;
    if (!email || !id) {
        return null;
    }

    return {
        ...user,
        id,
        email
    };
}

const getUserSession = async (ctx: TRPCContextInner) => {
    const session = await getSession(ctx.request);
    const user = session ? await getUserFromSession(ctx, session) : null;

    return { user, session };
};

const sessionMiddleware = middleware(async ({ ctx, next }) => {
    const { user, session } = await getUserSession(ctx);

    return next({
        ctx: { user, session }
    });
});

export const isAuthed = middleware(async ({ ctx, next }) => {
    const { user, session } = await getUserSession(ctx);

    if (!user || !session) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return next({
        ctx: { ...ctx, user, session }
    });
});

export default sessionMiddleware;
