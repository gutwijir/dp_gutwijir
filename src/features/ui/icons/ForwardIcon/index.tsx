import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const ForwardIcon: FC<IconProps> = ({
  width = 17,
  height = 12,
  fill = colors.background.semiTransparent.primary.darkest,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.0689 0V2.4077C17.8077 2.4077 16.9877 12 16.9877 12C14.6843 5.3013 6.0689 7.243 6.0689 7.243V9.70911L0 4.77689L6.0689 0Z"
        fill={fill}
      />
    </svg>
  )
}
