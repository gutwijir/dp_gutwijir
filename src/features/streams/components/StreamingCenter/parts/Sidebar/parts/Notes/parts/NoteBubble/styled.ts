import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const NoteBubbleWrapper = styled.div<{ fromMe: boolean }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.fromMe &&
    css`
      justify-content: flex-end;
    `}
`

export const StyledNoteBubble = styled.button<{ fromMe: boolean }>`
  border: none;
  text-align: left;
  cursor: pointer;

  display: grid;
  max-width: 25rem;
  grid-template-columns: 80% 20%;
  grid-template-rows: min-content min-content;
  border-radius: ${borderRadius.small};
  padding: 0.8rem 1rem;
  height: min-content;

  ${(props) =>
    props.fromMe
      ? css`
          background-color: ${colors.background.primary};
          color: white;
          grid-template-areas:
            'text timestamp'
            'text .';
        `
      : css`
          background-color: ${colors.background.inactive};
          grid-template-areas:
            'email timestamp'
            'text text';
        `}
`

export const Email = styled.span`
  grid-area: email;
  font-size: 1.4rem;
  font-weight: ${fontWeight.semiBold};
`

export const StyledTimeStamp = styled.span<{ fromMe: boolean }>`
  grid-area: timestamp;
  font-size: 1.2rem;
  font-weight: ${fontWeight.semiBold};
  text-align: right;

  ${(props) =>
    props.fromMe
      ? css`
          color: ${colors.text.lightTitle};
        `
      : css`
          color: ${colors.text.contextInfo};
        `}
`
export const Text = styled.p`
  grid-area: text;
  font-size: 1.4rem;
`
