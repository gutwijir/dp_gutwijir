import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const ForwardMessageButton = styled.button`
  height: 3.4rem;
  width: 3.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: ${transitions.fast};

  margin-right: 0.8rem;
  border-radius: ${borderRadius.circle};
  border: none;
  background-color: ${colors.background.semiTransparent.primary.light};

  &:hover {
    transition: ${transitions.fast};
    transform: scale(1.1);
  }
`

export const ForwardMessageButtonLarge = styled.button<{
  isSentToModerator: boolean
}>`
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.8rem;
  align-items: center;

  margin-right: 0.8rem;

  border-radius: ${borderRadius.medium};
  border: none;
  background-color: ${colors.background.semiTransparent.primary.light};
  padding: 0.8rem 1.6rem;

  color: ${colors.background.semiTransparent.primary.darkest};
  font-weight: ${fontWeight.semiBold};

  ${(props) =>
    props.isSentToModerator &&
    css`
      padding: 0.5rem 1rem;
    `}
`
