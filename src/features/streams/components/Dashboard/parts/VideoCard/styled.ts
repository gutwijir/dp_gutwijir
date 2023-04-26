import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'
import { fontSize, fontWeight } from '@/styles/typography'

export const H3 = styled.h3`
  display: block;
  width: 90%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.bold};

  ${mediaQueries.smDown} {
    font-size: 1.4rem;
  }
`

export const StyledVideoCard = styled.section`
  width: 27.5rem;
  border: 1px solid ${colors.border.dark};
  border-radius: ${borderRadius.small};
  padding: 1rem 1rem;

  .thumbnail-photos {
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    column-gap: 1rem;

    margin-top: 0.8rem;
  }
`

export const VideoCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
