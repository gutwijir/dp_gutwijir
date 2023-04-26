import styled from 'styled-components'

import { breakpoints, mediaQueries } from '@/styles/breakpoints'

export const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${breakpoints.content.large};
  width: 100%;

  margin-top: 10rem;
  margin-bottom: 5rem;

  ${mediaQueries.mdDown} {
    margin-top: 7.5rem;
    margin-bottom: 3.2rem;
  }

  ${mediaQueries.smDown} {
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }
`

export const HeaderActionButton = styled.button`
  height: 3.2rem;
  width: 5rem;
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${mediaQueries.mdDown} {
    height: 2.4rem;
  }
`

export const ViewTypeControls = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.8rem;

  ${mediaQueries.smDown} {
    display: none;
  }
`

export const H1 = styled.h1`
  ${mediaQueries.mdDown} {
    font-size: 3.2rem;
  }

  ${mediaQueries.smDown} {
    font-size: 2.4rem;
  }
`
