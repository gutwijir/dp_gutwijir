import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'

export const StyledMiniNoteBubble = styled.button<{ fromMe: boolean }>`
  border: none;
  cursor: pointer;

  display: flex;
  padding: 1rem 1.4rem;
  border-radius: ${borderRadius.small};
  align-items: center;

  svg {
    margin-right: 1.2rem;
  }

  ${(props) =>
    props.fromMe
      ? css`
          background-color: ${colors.background.primary};
          color: white;
          justify-self: flex-end;

          svg path {
            stroke: ${colors.text.lightTitle};
          }
        `
      : css`
          background-color: ${colors.background.inactive};
          justify-self: flex-start;
        `}
`
