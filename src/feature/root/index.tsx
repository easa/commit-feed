import { Container } from '@mui/material';
import SearchInputs from 'feature/search/inputs';
import React from 'react';
import Center from './center';

interface Props {
  org: string;
  repo: string;
}

export default function RootPage() {
  const submit = ({ org, repo }: Props) => {
    const url = `https://api.github.com/repos/${org}/${repo}/commits`;
    const params = { page: '1', per_page: '20' };
    // todo if url responds go next else show error
    console.log(url, params);
  };
  return (
    <Center>
      <Container component="main" maxWidth="md">
        <SearchInputs onSubmit={submit} />
      </Container>
    </Center>
  );
}
