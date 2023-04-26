import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'

export const StyledSeekbarActionButton = styled.button<{ main: boolean }>`
  ${(props) =>
    props.main
      ? css`
          background: ${colors.background.primary};
        `
      : css`
          background: transparent;
        `}
  border: none;
  border-radius: ${borderRadius.circle};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`
