import React, { useEffect } from 'react';
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

  const {
    data, error, isLoading, refetch,
  } = useQuery<Commits, Error>('commits', getCommitsQuery({ org, repo }));
  useEffect(() => { refetch(); }, [org, repo]);
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
      {data
        && data.length
        ? data.map((node) => (
          <CommitComponent key={node.sha} commitNode={node} />
        ))
        : (<p>No commits found</p>)}
    </>
  );
}
