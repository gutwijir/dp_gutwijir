import type { FC } from 'react'

import type { IconProps } from '../../types'

export const NotFoundIcon: FC<IconProps> = ({ width = 150, height = 200 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M300 0C134.4 0 0 134.4 0 300C0 600 300 800 300 800C300 800 600 600 600 300C600 134.4 465.6 0 300 0Z"
        fill="#F0AB00"
      />
      <rect
        x="216.008"
        y="158.684"
        width="309.743"
        height="72.1347"
        rx="36.0673"
        transform="rotate(45 216.008 158.684)"
        fill="white"
      />
      <path
        d="M189.76 397.521C176.092 383.853 176.092 361.692 189.76 348.024L357.035 180.749C370.704 167.08 392.865 167.08 406.533 180.749L409.374 183.589C423.042 197.258 423.042 219.419 409.374 233.087L242.099 400.362C228.43 414.03 206.27 414.03 192.601 400.362L189.76 397.521Z"
        fill="white"
      />
    </svg>
  )
}
