import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

export const createWrapper = () => {
  const queryClientMock = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        retry: false
      }
    }
  });

  return ({children}: any) => (
    <QueryClientProvider client={queryClientMock}>
      {children}
    </QueryClientProvider>
  );
};
