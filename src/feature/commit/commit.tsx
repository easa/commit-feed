/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import dateFormat from 'dateformat';

import {
  Paper, Avatar, Typography, Grid, Tooltip,
} from '@mui/material';
import { CommitNode } from './commit.type';

export default function CommitComponent({ commitNode }: { commitNode: CommitNode }) {
  const {
    commit: { message, committer: { date } }, sha, committer: { login, avatar_url },
  } = commitNode;
  return (
    <Paper variant="outlined" sx={{ width: '100%', p: 2 }}>
      <Grid container columns={{ xs: 12, md: 6 }}>
        <Grid item xs={4} sm={2}>
          <Avatar src={avatar_url} />
        </Grid>
        <Grid item xs={8} sm={10}>
          <Typography variant="h5" noWrap>{login}</Typography>
        </Grid>
      </Grid>
      <Typography variant="body1">{message}</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
        <Tooltip title="copy commit SHA">
          <Typography variant="caption" sx={{ cursor: 'pointer' }} onClick={() => { navigator.clipboard.writeText(sha); }}>{sha}</Typography>
        </Tooltip>
        <Typography variant="caption">{dateFormat(date, 'fullDate')}</Typography>
      </div>
    </Paper>
  );
}
