import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';
import RootPage from 'feature/root/home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CommitsComponent from 'feature/commit/commits';
import Layout from 'feature/layout/pageContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RootPage />} />
            <Route path="/does/not/exist" element={(<Layout>does not exist!</Layout>)} />
            <Route path="/:org/:repo" element={<Layout><CommitsComponent /></Layout>} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
