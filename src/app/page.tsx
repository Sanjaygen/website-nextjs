'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import HomePage from "@/pages/homepage/Homepage"


const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache
})
export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
     <HomePage/>
     </ApolloProvider>
    </main>
  );
}
