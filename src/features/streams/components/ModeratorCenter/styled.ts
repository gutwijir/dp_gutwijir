import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { contentHeight } from '@/styles/theme'

import { StyledStreamingCenter } from '../StreamingCenter/styled'

export const StyledModeratorCenter = styled(StyledStreamingCenter)`
  max-height: ${contentHeight};
  height: 100%;
  ${mediaQueries.mdDown} {
    > * {
      display: none;
    }

    display: flex;
    flex-direction: column;
  }
`

export const MobileNavigation = styled.nav`
  //hide for non-mobile
  ${mediaQueries.mdUp} {
    display: none;
  }

  ${mediaQueries.mdDown} {
    margin-top: 1.6rem;

    display: grid;
    grid-auto-flow: column;
    column-gap: 1.6rem;
    justify-content: center;
    align-items: center;
  }
`

export const ExchangeableContentWrapper = styled.div`
  //hide for non-mobile
  ${mediaQueries.mdUp} {
    display: none;
  }

  ${mediaQueries.mdDown} {
    display: block;
  }
`
