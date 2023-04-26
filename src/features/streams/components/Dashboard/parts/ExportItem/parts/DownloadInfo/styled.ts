import styled from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const DownloadInfoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 1.6rem;
  font-weight: ${fontWeight.normal};
  color: ${colors.text.contextInfo};

  ${mediaQueries.smDown} {
    font-size: 1.4rem;
  }
`

export const StyledDownloadButton = styled.button`
  display: flex;
  height: min-content;

  background: transparent;
  border: none;
  border-radius: ${borderRadius.small};
  cursor: pointer;
  transition: ${transitions.fast};

  &:hover {
    box-shadow: 0rem 0rem 0.8rem rgba(0, 0, 0, 0.25);
    transition: ${transitions.fast};
  }
`
