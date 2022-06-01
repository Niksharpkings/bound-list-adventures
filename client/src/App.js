import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import LoginForm  from './components/LoginForm';
import SignupForm from './components/SignupForm';
import memories from './images/Logo1.png';


const App = () => {

  return (
    <>
    </>
  );
}

export default App;