import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const CloseIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = colors.background.light,
}) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.707,8.707,13.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z"
        stroke={fill}
        strokeWidth={2}
      />
    </svg>
  )
}
