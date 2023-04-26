import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { fontWeight } from '@/styles/typography'

import { StyledVideoItem } from '../VideoItem/styled'

export const StyledExportItem = styled(StyledVideoItem)`
  grid-template-columns: min-content 1fr auto;
  margin-top: 0.8rem;

  & > span {
    font-weight: ${fontWeight.normal};
    color: ${colors.text.contextInfo};
  }

  ${mediaQueries.smDown} {
    grid-template-columns: min-content auto min-content;

    & > span {
      font-size: 1.4rem;
    }
  }
`
