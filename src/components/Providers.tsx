'use client';
import { useState } from 'react';
import { QueryClient } from '@tanstack/react-query';

// This function helps to use trpc throughout the frontend part
const Providers = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createCient());
};

export default Providers;
