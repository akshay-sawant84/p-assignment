import React from 'react'
import { Container, LoginContainer } from './styles';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Grid from '@mui/material/Grid';

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <LeftPanel />
          </Grid>
          <Grid item xs={12} md={5}>
            <RightPanel />
          </Grid>
        </Grid>
      </LoginContainer>
    </Container>
  );
}

export default Login;