/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import dateFormat from 'dateformat';

import {
  Paper, Typography, Grid,
} from '@mui/material';
import { CommitNode } from './commit.type';

export default function CommitComponent({ commitNode }: { commitNode: CommitNode }) {
  const {
    commit: { message, committer: { date } }, html_url, author,
  } = commitNode;
  return (
    <Paper variant="outlined" sx={{ width: '100%', p: 2 }}>
      <Grid container columns={{ xs: 12, md: 6 }}>
        <Grid item xs={4} sm={3}>
          <Typography variant="caption" noWrap>{dateFormat(date, 'fullDate')}</Typography>
        </Grid>
        <Grid item xs={6} sm={8}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <Typography variant="body1" noWrap>{message}</Typography>
          </a>
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography variant="body1" noWrap>{author?.login}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
