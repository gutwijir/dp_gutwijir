import type { FC, ReactElement } from 'react'
import React, { useState } from 'react'

import { StyledTooltip, TooltipTextSide, TooltipWrapper } from './styled'

type Props = {
  text: string
  side?: TooltipTextSide
  isDark?: boolean
  children: NonNullable<ReactElement>
}

export const Tooltip: FC<Props> = ({ text, side, isDark, children }) => {
  const [isHoveringOver, setHoveringOver] = useState<boolean>(false)

  return (
    <TooltipWrapper
      visible={isHoveringOver}
      side={side ?? TooltipTextSide.LEFT}
      dark={isDark ?? false}
      onMouseLeave={() => {
        setHoveringOver(false)
      }}
    >
      {React.cloneElement(children, {
        ...children.props,
        onMouseOver: () => {
          setHoveringOver(true)
        },
      })}
      <StyledTooltip data-cy="tooltipText">{text}</StyledTooltip>
    </TooltipWrapper>
  )
}

Tooltip.defaultProps = {
  side: TooltipTextSide.LEFT,
  isDark: false,
}
