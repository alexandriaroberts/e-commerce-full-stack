import { ExpressContext } from '@/server';
import { initTRPC } from '@trpc/server/unstable-core-do-not-import';

const t = initTRPC.context<ExpressContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
