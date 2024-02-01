'use client';

import React from 'react';
import createApolloClient from '@/service/apollo-client';
import { ApolloProvider } from '@apollo/client';

const client = createApolloClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={client}>
                    {children}
        </ApolloProvider>
    );
};

export default AppProviders;
