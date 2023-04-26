import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export enum TooltipTextSide {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export const StyledTooltip = styled.div`
  font-weight: ${fontWeight.normal};
  margin-right: 0.5rem;

  visibility: hidden;
`

export const TooltipWrapper = styled.div<{
  visible: boolean
  side: TooltipTextSide
  dark: boolean
}>`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.8rem;
  align-items: center;
  width: min-content;
  white-space: nowrap;

  ${(props) =>
    props.visible &&
    css`
      background-color: ${colors.background.light};
      border-radius: ${borderRadius.medium};
      cursor: pointer;

      svg {
        path {
          stroke: ${colors.text.darkTitle};
        }
      }

      ${StyledTooltip} {
        visibility: visible;
        padding-right: 0.5rem;
      }
    `}

  ${(props) =>
    props.dark &&
    props.visible &&
    css`
      background-color: ${colors.background.dark};

      ${StyledTooltip} {
        color: ${colors.text.lightTitle};
      }

      //TODO find generally working solution for fill / stroke
      svg {
        path {
          fill: ${colors.text.lightTitle};
        }
      }
    `}
  
  ${(props) =>
    props.side === TooltipTextSide.RIGHT &&
    css`
      flex-direction: row;
      justify-content: flex-start;

      ${StyledTooltip} {
        padding-left: 0.5rem;
      }
    `}

  > *:first-child {
    padding-right: 0;
  }
`
