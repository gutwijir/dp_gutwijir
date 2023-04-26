import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { blurRadius, borderRadius, transitions } from '@/styles/theme'

export const NotesInputWrapper = styled.form<{
  sidebarWidth: number
  inSidebar?: boolean
}>`
  transition: opacity ${transitions.slow};
  opacity: 0;
  display: none;

  position: fixed;
  bottom: 1rem;
  left: 10%; // 100% - 80% / 2

  display: grid;
  grid-template-columns: auto min-content min-content;
  align-items: center;
  grid-gap: 0.4rem;

  ${(props) =>
    props.sidebarWidth &&
    css`
      width: calc(80% - ${props.sidebarWidth}px);
    `}

  padding: .5rem;
  background-color: ${colors.background.semiTransparent.black.dark};
  backdrop-filter: blur(${blurRadius.medium});
  border-radius: ${borderRadius.large};

  //for cases notes input is located in sidebar
  ${(props) =>
    props.inSidebar &&
    css`
      position: static;
      opacity: 1;
      width: 100%;
    `}
`

const SendButton = styled.button`
  background: ${colors.background.primary};
  border: none;
  border-radius: ${borderRadius.small};
  padding: 0.6rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SendNoteButton = styled(SendButton)`
  border-radius: ${borderRadius.small} ${borderRadius.medium}
    ${borderRadius.medium} ${borderRadius.small};
`

export const SendMarkerButton = styled(SendButton)`
  background: ${colors.background.marker};
`
