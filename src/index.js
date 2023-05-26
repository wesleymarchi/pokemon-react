import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './routes/App';

const client = new ApolloClient({
    uri: 'https://blissful-mile-280405.ue.r.appspot.com/graphql'
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('app')
)
