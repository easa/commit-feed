/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import {
  Paper, Avatar, Typography, Grid,
} from '@mui/material';
import { CommitNode } from './commit.type';

export default function CommitComponent({ commitNode }: { commitNode: CommitNode }) {
  const {
    author: { avatar_url, login }, commit: { message, committer: { date } }, sha,
  } = commitNode;
  return (
    <Paper variant="outlined" sx={{ width: '100%', p: 2 }}>
      <Grid container columns={{ xs: 12, md: 6 }}>
        <Grid item xs={4} sm={2}>
          <Avatar src={avatar_url} />
        </Grid>
        <Grid item xs={8} sm={10}>
          <Typography variant="h5" overflow="hidden" sx={{ m: 2 }}>{login}</Typography>
        </Grid>
      </Grid>
      <Typography variant="body1">{message}</Typography>
      <Typography variant="subtitle1">{sha}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </Paper>
  );
}
