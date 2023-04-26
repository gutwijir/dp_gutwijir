import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const GridIcon: FC<IconProps> = ({ fill = colors.text.darkTitle }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7" height="6" fill={fill} />
      <rect y="9" width="7" height="6" fill={fill} />
      <rect y="18" width="7" height="6" fill={fill} />
      <rect x="10" width="7" height="6" fill={fill} />
      <rect x="10" y="9" width="7" height="6" fill={fill} />
      <rect x="10" y="18" width="7" height="6" fill={fill} />
      <rect x="20" width="7" height="6" fill={fill} />
      <rect x="20" y="9" width="7" height="6" fill={fill} />
      <rect x="20" y="18" width="7" height="6" fill={fill} />
    </svg>
  )
}
