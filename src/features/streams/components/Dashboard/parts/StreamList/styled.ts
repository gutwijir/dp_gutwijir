import styled, { css } from 'styled-components'

import { borders } from '@/styles/borders'
import { breakpoints, mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'

import { ViewType } from '../../types'

export const ListSection = styled.section`
  margin-bottom: 5rem;
  width: 100%;
  max-width: ${breakpoints.content.large};
`

export const ListSectionContent = styled.div<{ view: ViewType }>`
  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      display: grid;
      justify-content: flex-start;
      grid-template-columns: repeat(auto-fill, 27.5rem);
      row-gap: 1.6rem;
      column-gap: 5rem;

      ${mediaQueries.smDown} {
        justify-content: center;
      }
    `}
`

export const ListSectionHeader = styled.h2<{ view: ViewType }>`
  line-height: 3.6rem;
  border-bottom: ${borders.medium} solid ${colors.border.light};
  margin-bottom: 0.8rem;

  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      margin-bottom: 1.6rem;
    `}

  ${mediaQueries.smDown} {
    font-size: 1.6rem;
  }
`
