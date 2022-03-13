/* eslint-disable react/function-component-definition */
import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="md" sx={{ p: 1, mx: 'auto' }}>
      <Button variant="outlined" component={Link} to="/">back to home</Button>
      <Grid container columns={{ xs: 4, md: 12 }}>
        {children}
      </Grid>
    </Container>
  );
}
