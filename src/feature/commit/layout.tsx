/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, Grid } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        {children}
      </Grid>
    </Container>
  );
}
