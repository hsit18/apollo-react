import React from 'react';
import ReactDOM from 'react-dom';

import './scss/bootstrap.scss';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './App';

const client = new ApolloClient({
    uri: 'https://7lw5x7q58j.lp.gql.zone/graphql',
});

/** render APP */
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
