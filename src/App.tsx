import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommitsComponent from 'feature/commit/commits';
import { Container, CssBaseline } from '@mui/material';
import SearchInputs from 'feature/search/inputs';

const queryClient = new QueryClient();

function App() {
  const [repoAddress, setRepoAddress] = useState('https://api.github.com/repos/m3db/m3/commits');
  const [parameters, setParameters] = useState<{ [key: string]: string }>({ page: '1', per_page: '20', sha: 'master' });
  const handleFetch = (
    url: string,
    params: { [key: string]: string },
  ) => {
    setRepoAddress(url);
    setParameters(params);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Container component="main" maxWidth="md">
        <h1>commit feed</h1>
        <CssBaseline />
        <SearchInputs onSubmit={handleFetch} />
        <CommitsComponent repoAddress={repoAddress} parameters={parameters} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
