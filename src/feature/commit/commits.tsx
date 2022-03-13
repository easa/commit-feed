import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
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
  const { data, error, isLoading } = useQuery<Commits, Error>(['commits', page], getCommitsQuery({ org, repo, page }));
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
      {data && data.length
        ? (
          <>
            {data.map((node) => (
              <CommitComponent key={node.sha} commitNode={node} />
            ))}
            <Button onClick={() => { setPage((prev) => prev + 1); }}>load more</Button>
          </>
        )
        : (<p>No commits found</p>)}
    </>
  );
}
