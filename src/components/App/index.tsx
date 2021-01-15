import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import Main from '../Main/Main';

import './App.css';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </div>
  );
};

export default App;
