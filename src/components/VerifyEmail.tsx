'use client';

import { trpc } from '@/trpc/client';
import { XCircle } from 'lucide-react';

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery;
  ({
    token,
  });

  if (isError) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <XCircle className='h-8 w-8 text-red-600' />
        <h3>There was a problem</h3>
      </div>
    );
  }
};

export default VerifyEmail;
