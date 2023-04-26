import type { FC } from 'react'

import type { IconProps } from '../../types'

export const LogoutIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width ? `${width}px` : '100%'}
      height={height ? `${height}px` : '100%'}
      viewBox="0 1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9-4-4m4 4-4 4m4-4H9"
      />
    </svg>
  )
}
