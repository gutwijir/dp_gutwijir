import './commands'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { mount } from 'cypress/react18'
import type { ReactNode } from 'react'
import React from 'react'

import { getToken } from '../../src/features/auth/storage'
import { env } from '../../src/utils/env'
import { GlobalStyle } from '../../styles/global'

Cypress.Commands.add('mount', (component: ReactNode) => {
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      //TODO solve typing problem
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

  const wrapped = (
    <ApolloProvider client={client}>
      <GlobalStyle />
      {component}
    </ApolloProvider>
  )

  return mount(wrapped)
})
