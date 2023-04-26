import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { font, fontWeight } from '@/styles/typography'

import { TextButtonType } from './types'

export const TextButton = styled.button<{ buttonType?: TextButtonType }>`
  font-family: ${font.base};

  ${(props) =>
    props.buttonType && props.buttonType === TextButtonType.PRIMARY
      ? css`
          background-color: ${colors.background.primary};
        `
      : css`
          background-color: ${colors.background.inactive};
        `};
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: ${borderRadius.small};
  font-weight: ${fontWeight.bold};
  transition: ${transitions.medium};

  &:hover {
    cursor: pointer;
    transition: ${transitions.medium};

    ${(props) =>
      props.buttonType && props.buttonType === TextButtonType.PRIMARY
        ? css`
            background-color: ${colors.background.dimmed};
          `
        : css`
            background-color: ${colors.background.hover};
          `};
  }
`
