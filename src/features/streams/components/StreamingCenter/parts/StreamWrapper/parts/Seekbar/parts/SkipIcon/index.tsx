import type { FC } from 'react'
import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'

import { SkipDirection } from '../../types'

type Props = {
  direction: SkipDirection
  fill: string
}

export const StyledSkipIcon = styled.svg<{ direction: SkipDirection }>`
  ${(props) =>
    props.direction === SkipDirection.BACK &&
    css`
      transform: rotateY(180deg);
    `}
`

export const SkipIcon: FC<Props> = ({
  direction = SkipDirection.FORWARD,
  fill = colors.border.light,
}) => {
  return (
    <StyledSkipIcon
      version="1.1"
      width="18px"
      height="18px"
      viewBox="-1.5 0 21 21"
      direction={direction}
    >
      <title>
        multimedia / 8 - multimedia, skip, forward, replay, video icon
      </title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1267.000000, -305.000000)">
          <g transform="translate(1263.000000, 302.000000)">
            <path
              d="M12,7 C8.13400675,7 5,10.1340068 5,14 C5,17.8659932 8.13400675,21 12,21 C15.8659932,21 19,17.8659932 19,14"
              stroke={fill}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6739085,10.8857148 L17.8043198,7.30477744 C18.0204304,7.17854145 18.0642284,6.93976099 17.9021455,6.77144635 L17.8567088,6.73064394 L17.8567088,6.73064394 L12.6739085,3.11431886 C12.3497426,2.92496489 11.889863,2.97613213 11.6467386,3.2286041 C11.551489,3.32751578 11.5,3.4478202 11.5,3.5714598 L11.5,10.4285738 C11.5,10.7441638 11.8284855,11 12.2336928,11 C12.3924421,11 12.5469091,10.9598985 12.6739085,10.8857148 Z"
              fill={fill}
            />
          </g>
        </g>
      </g>
    </StyledSkipIcon>
  )
}
