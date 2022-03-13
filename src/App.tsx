import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';
import RootPage from 'feature/root';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <RootPage />
    </QueryClientProvider>
  );
}

export default App;
