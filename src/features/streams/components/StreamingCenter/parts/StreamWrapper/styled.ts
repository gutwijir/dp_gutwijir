import styled, { css } from 'styled-components'

import { contentHeight } from '@/styles/theme'

import { NotesInputWrapper } from './parts/NotesInput/styled'
import { SeekbarWrapper } from './parts/Seekbar/styled'

export const StyledStreamWrapper = styled.div<{ displayNoteInput: boolean }>`
  height: ${contentHeight};
  background-color: black;

  &:hover {
    ${SeekbarWrapper} {
      opacity: 1 !important;
      display: grid;
    }

    ${(props) =>
      props.displayNoteInput &&
      css`
        ${NotesInputWrapper} {
          opacity: 1;
          display: grid;
        }
      `}
  }
`
