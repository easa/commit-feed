import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import produce from 'immer';
import CommitComponent from './commit';
import { CommitNode } from './commit.type';
import getCommitsQuery from './services/getCommitsQuery';

type Commits = CommitNode[];

export default function CommitsComponent() {
  const { org, repo } = useParams();
  if (org === undefined || repo === undefined) {
    return null;
  }
  const [page, setPage] = useState(1);
  const [commits, setCommits] = useState<Commits>([]);
  const { data, error, isLoading } = useQuery<Commits, Error>(['commits', page, org, repo], getCommitsQuery({ org, repo, page }));
  useEffect(() => {
    if (data) {
      setCommits(produce((draft) => {
        draft.splice(draft.length, 0, ...data);
      }));
    }
  }, [data]);
  useEffect(() => { setPage(1); }, [org, repo]);
  return (
    <>
      {error && (
        <p>
          Error:
          {' '}
          {error.message}
        </p>
      )}
      {isLoading && <p>Loading...</p>}
      {commits && commits.length && (
        <>
          {' '}
          {commits.map((node) => (
            <CommitComponent key={node.sha} commitNode={node} />
          ))}
          {data?.length && (
            <Box m="auto" mt={2}>
              <Button variant="outlined" onClick={() => { setPage((prev) => prev + 1); }}>load more</Button>
            </Box>
          )}
        </>
      )}
    </>
  );
}
