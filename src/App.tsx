import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommitsComponent from 'feature/commit/commits';
import {
  Button, Container, CssBaseline, Grid, TextField,
} from '@mui/material';

const queryClient = new QueryClient();

function App() {
  const [text, setText] = useState('https://api.github.com/repos/m3db/m3/commits');
  const [repoAddress, setRepoAddress] = useState(text);
  return (
    <QueryClientProvider client={queryClient}>
      <Container component="main" maxWidth="md">
        <h1>commit feed</h1>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <TextField
              size="small"
              name="stepValue"
              variant="outlined"
              required
              fullWidth
              label="repository address"
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" onClick={() => { setRepoAddress(text); }}>fetch</Button>
          </Grid>
        </Grid>
        <CommitsComponent repoAddress={repoAddress} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
