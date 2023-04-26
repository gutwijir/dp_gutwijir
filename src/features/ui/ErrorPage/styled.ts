import Link from 'next/link'
import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { fontSize } from '@/styles/typography'

export const StyledNotFoundWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  column-gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  ${mediaQueries.mdDown} {
    column-gap: 2rem;
  }
`

export const H1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  ${mediaQueries.mdDown} {
    font-size: 3rem;
  }
`

export const H2 = styled.h1`
  font-size: 2rem;
  color: ${colors.text.contextInfo};

  ${mediaQueries.mdDown} {
    font-size: ${fontSize.base};
  }
`

export const HpLink = styled(Link)`
  color: ${colors.text.link};
  text-decoration: underline;
`
