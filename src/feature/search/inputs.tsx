import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

export default function SearchInputs({ onSubmit }: {
  onSubmit: (
    url: string,
    params: {
      [key: string]: string
    }) => void
}) {
  const [text, setText] = useState('m3db/m3');
  const [page, setPage] = useState('1');
  const [branch, setBranch] = useState('master');
  const handleFetch = () => {
    const url = `https://api.github.com/repos/${text}/commits`;
    onSubmit(url, { page, per_page: '20', sha: branch });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <TextField
          size="small"
          name="stepValue"
          variant="outlined"
          required
          fullWidth
          label="github repository"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          size="small"
          name="branch"
          variant="outlined"
          required
          fullWidth
          label="branch"
          autoFocus
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          size="small"
          name="page"
          variant="outlined"
          required
          fullWidth
          label="page"
          autoFocus
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" onClick={handleFetch}>fetch</Button>
      </Grid>
    </Grid>
  );
}
