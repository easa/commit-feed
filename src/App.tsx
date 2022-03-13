import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';
import RootPage from 'feature/root';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CommitsComponent from 'feature/commit/commits';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RootPage />} />
            <Route path="/:org/:repo" element={<CommitsComponent />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
