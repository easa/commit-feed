import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

export default function SearchInputs({ onSubmit }: {
  onSubmit: (opt: { org: string; repo: string; }) => void
}) {
  const [org, setOrg] = useState('m3db');
  const [repo, setRepo] = useState('m3');
  const handleFetch = () => {
    onSubmit({ org, repo });
  };
  return (
    <Grid container spacing={2}>

      <Grid item xs={5} sm={5}>
        <TextField
          size="small"
          name="org"
          variant="outlined"
          required
          fullWidth
          label="github organization"
          autoFocus
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </Grid>
      <Grid item xs={5} sm={5}>
        <TextField
          size="small"
          name="stepValue"
          variant="outlined"
          required
          fullWidth
          label="github repository"
          autoFocus
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
      </Grid>
      <Grid item xs={2} sm={2}>
        <Button variant="contained" onClick={handleFetch}>fetch</Button>
      </Grid>
    </Grid>
  );
}
