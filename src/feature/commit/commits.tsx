import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import CommitComponent from './commit';
import { CommitNode } from './commit.type';
import Layout from './layout';

type Commits = CommitNode[];

const getCommits = (uri: string, params: { [key: string]: string }) => async () => {
  const url = new URL(uri);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  return fetch(url.toString(), {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }).then((res) => res.json());
};

export default function CommitsComponent({ repoAddress, parameters }: {
  repoAddress: string; parameters: { [key: string]: string };
}) {
  const {
    data, error, isLoading, refetch,
  } = useQuery<Commits, Error>('commits', getCommits(repoAddress, parameters));
  useEffect(() => { refetch(); }, [repoAddress, parameters]);
  return (
    <Layout>
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
    </Layout>
  );
}
