import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import './index.css';
import App from './App';

const TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const httpLink: object = {
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${TOKEN}`
    }
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                user: {
                    merge(existing, incoming) {
                        return { ...existing, ...incoming };
                    },
                },
                repository: {
                    merge(existing, incoming) {
                        return { ...existing, ...incoming };
                    }
                }
            }
        }
    }
});

const client: ApolloClient<any> = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: cache,
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
