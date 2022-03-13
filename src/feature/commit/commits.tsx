import React from 'react';
import { useQuery } from 'react-query';
import CommitComponent from './commit';
import { CommitNode } from './commit.type';
import Layout from './layout';

type Commits = CommitNode[];

// const getCommits = async () => fetch('https://api.github.com/orgs/facebook/repos', {
const getCommits = (url: string) => async () => fetch(url, {
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
}).then((res) => res.json());

function CommitsComponent({ repoAddress }: { repoAddress: string }) {
  const { data, error, isLoading } = useQuery<Commits, Error>('commits', getCommits(repoAddress));

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
      {data && data.map((node) => (
        <CommitComponent key={node.sha} commitNode={node} />
      ))}
    </>
  );
}

export default ({ repoAddress }: { repoAddress: string }) => (
  <Layout>
    <CommitsComponent {...{ repoAddress }} />
  </Layout>
);
