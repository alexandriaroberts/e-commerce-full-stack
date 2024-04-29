import { initTRPC } from '@trpc/server/unstable-core-do-not-import';

const t = initTRPC.context().create();

export const router = t.router;
export const publicProcedure = t.procedure;
