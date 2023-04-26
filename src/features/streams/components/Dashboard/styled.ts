import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'

//Just for centering whatever content on the site (for content's max-width to work properly)
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  padding: 0 3.2rem;

  ${mediaQueries.smDown} {
    padding: 0 1.6rem;
  }
`
