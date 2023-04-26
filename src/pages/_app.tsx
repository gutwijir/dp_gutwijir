import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import type { AppProps } from 'next/app'

import { DefaultHead } from '@/src/features/core/DefaultHead'
import { GlobalStyle } from '@/styles/global'

import { AuthContextProvider } from '../features/auth/contexts/auth'
import { getToken } from '../features/auth/storage'
import { env } from '../utils/env'

export default function App({ Component, pageProps }: AppProps) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${
            locations && locations[0].line
          }, Path: ${path && path[0]}`
        )
      })
    }
    if (networkError) console.log(`[Network error]: ${networkError.name}`)
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      // straight from docs: https://www.apollographql.com/docs/react/networking/authentication/
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const link = from([
    errorLink,
    authLink,
    new HttpLink({
      uri: env('NEXT_PUBLIC_API_URL'),
    }),
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })

  return (
    <ApolloProvider client={client}>
      <DefaultHead />
      <GlobalStyle />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>
  )
}
