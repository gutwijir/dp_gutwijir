import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const MarkerIcon: FC<IconProps> = ({
  width = 23,
  height = 31,
  fill = colors.text.darkTitle,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 0C5.152 0 0 5.208 0 11.625C0 23.25 11.5 31 11.5 31C11.5 31 23 23.25 23 11.625C23 5.208 17.848 0 11.5 0ZM11.5 15.5C8.326 15.5 5.75 12.896 5.75 9.6875C5.75 6.479 8.326 3.875 11.5 3.875C14.674 3.875 17.25 6.479 17.25 9.6875C17.25 12.896 14.674 15.5 11.5 15.5Z"
        fill={fill}
      />
    </svg>
  )
}
