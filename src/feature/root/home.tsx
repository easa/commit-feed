import { Container } from '@mui/material';
import getCommitsQuery from 'feature/commit/services/getCommitsQuery';
import SearchInputs from 'feature/search/inputs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Center from '../layout/center';

interface Props {
  org: string;
  repo: string;
}

export default function RootPage() {
  const navigate = useNavigate();
  const submit = ({ org, repo }: Props) => {
    getCommitsQuery({
      org, repo, page: 1, pageSize: 1,
    })().then((data) => {
      if (data.length) {
        navigate(`/${org}/${repo}`);
      } else {
        navigate('/does/not/exist');
      }
    }).catch(() => {
      navigate('/does/not/exist');
    });
  };
  return (
    <Center>
      <Container component="main" maxWidth="md">
        <SearchInputs onSubmit={submit} />
      </Container>
    </Center>
  );
}
