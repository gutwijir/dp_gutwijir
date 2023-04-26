import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const CheckIcon: FC<IconProps> = ({
  width = 10,
  height = 8,
  fill = colors.background.semiTransparent.primary.darkest,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.46023L3.3126 6.96085C3.36091 7.01301 3.4392 7.01309 3.48752 6.96085L9 1"
        stroke={fill}
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
