import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import './index.css';
import App from './App';

const TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const httpLink: object = {
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${TOKEN}`
    }
};

const client: ApolloClient<any> = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache(),
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);