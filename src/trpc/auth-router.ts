//This file is like a separate api endpoint that handles all the authentication logic

import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validators';
import { publicProcedure, router } from './trpc';
import { getPayloadClient } from '../get-payload';
import { TRPCError } from '@trpc/server/unstable-core-do-not-import';
import { z } from 'zod';

export const authRouter = router({
  // Create a user
  // publicProcedure is that anyone can access the endpoint
  // input is we get email and password from AuthCredentialsValidator
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      // We need access to email and password that user sent along
      const { email, password } = input;
      // Access to cms to create a user
      const payload = await getPayloadClient();

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' });

      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: 'user',
        },
      });
      return { success: true, sentToEmail: email };
    }),

  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const { token } = input;

      const payload = await getPayloadClient();

      const isVerified = await payload.verifyEmail({
        collection: 'users',
        token,
      });

      if (!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' });

      return { success: true };
    }),
});
