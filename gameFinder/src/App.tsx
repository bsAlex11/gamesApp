import React, {FunctionComponent} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import CreateEvent from './pages/create-event/CreateEvent';

import 'fontsource-roboto';

import './styles/index.scss';

const App: FunctionComponent = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: Infinity,
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <CreateEvent />
    </QueryClientProvider>
  );
};

export default App;
