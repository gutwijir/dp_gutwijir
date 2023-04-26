import type { FC } from 'react'

type Props = {
  fill: string
  isMuted?: boolean
}

export const VolumeIcon: FC<Props> = ({ fill, isMuted }) => {
  return isMuted ? (
    <svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4444 2V23L8.22222 17H3.55556C3.143 17 2.74733 16.842 2.45561 16.5607C2.16389 16.2794 2 15.8978 2 15.5V9.5C2 9.10218 2.16389 8.72064 2.45561 8.43934C2.74733 8.15804 3.143 8 3.55556 8H8.22222L14.4444 2Z"
        fill={fill}
      />
      <path
        d="M22.2222 16.25L30 8.75M22.2222 8.75L30 16.25M8.22222 8H3.55556C3.143 8 2.74733 8.15804 2.45561 8.43934C2.16389 8.72064 2 9.10218 2 9.5V15.5C2 15.8978 2.16389 16.2794 2.45561 16.5607C2.74733 16.842 3.143 17 3.55556 17H8.22222L14.4444 23V2L8.22222 8Z"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4499 2V23L8.22496 17H3.55624C3.1435 17 2.74766 16.842 2.45581 16.5607C2.16396 16.2794 2 15.8978 2 15.5V9.5C2 9.10218 2.16396 8.72064 2.45581 8.43934C2.74766 8.15804 3.1435 8 3.55624 8H8.22496L14.4499 2Z"
        fill={fill}
      />
      <path
        d="M25.9039 2.96094C28.5268 5.49219 30 8.92343 30 12.5009C30 16.0785 28.5268 19.5097 25.9039 22.0409"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5153 7.1875C22.2399 7.88419 22.8148 8.71182 23.2071 9.623C23.5994 10.5342 23.8013 11.511 23.8013 12.4975C23.8013 13.484 23.5994 14.4608 23.2071 15.372C22.8148 16.2832 22.2399 17.1108 21.5153 17.8075"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4499 2V23L8.22496 17H3.55624C3.1435 17 2.74766 16.842 2.45581 16.5607C2.16396 16.2794 2 15.8978 2 15.5V9.5C2 9.10218 2.16396 8.72064 2.45581 8.43934C2.74766 8.15804 3.1435 8 3.55624 8H8.22496L14.4499 2Z"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

VolumeIcon.defaultProps = {
  isMuted: false,
}
