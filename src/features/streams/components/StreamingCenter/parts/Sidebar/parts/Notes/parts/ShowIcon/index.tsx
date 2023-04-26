import type { FC } from 'react'

import type { IconProps } from '@/src/features/ui/types'
import { colors } from '@/styles/colors'

export const ShowIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = colors.text.darkTitle,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2624 3.19989C16.0848 3.19794 15.9069 3.20022 15.7285 3.20666C10.0212 3.41284 5.02428 7.77317 0.354452 14.7684C0.159433 15.076 0.0463827 15.4284 0.0260678 15.792C0.0174307 15.8468 0.0109338 15.9019 0.0065918 15.9572C0.011165 16.0627 0.0235582 16.1676 0.0436691 16.2713C0.0573967 16.4074 0.0841823 16.5418 0.123656 16.6728C0.133962 16.6963 0.144692 16.7196 0.155838 16.7427C0.206525 16.897 0.274663 17.045 0.35893 17.1839C1.8901 19.4775 3.45743 21.481 5.07243 23.1546L8.10589 20.1206C6.99346 18.9736 5.85765 17.5999 4.70374 15.973C8.74159 10.2821 12.5685 7.59024 15.8824 7.47052C17.119 7.42585 18.4237 7.72352 19.7928 8.43177L22.9097 5.31437C20.7581 3.95193 18.5447 3.22495 16.2624 3.19989ZM27.0128 8.75313L23.9959 11.7705C25.0736 12.915 26.1825 14.3033 27.3238 15.9795C23.0553 22.2462 19.2244 24.6025 15.8868 24.4819C14.7573 24.4411 13.567 24.0935 12.3302 23.4381L9.18696 26.5819C11.2717 27.9025 13.4444 28.6631 15.7329 28.7458C21.4402 28.9519 26.7235 24.8502 31.6653 17.1519C31.9171 16.7571 32.032 16.2905 31.9924 15.824C31.9897 15.7813 31.9856 15.7388 31.9803 15.6964C31.9783 15.6815 31.9761 15.6667 31.9738 15.6519C31.9317 15.3489 31.825 15.0586 31.6609 14.8005C30.1446 12.4384 28.5958 10.4175 27.0128 8.75313ZM15.9972 9.59927C12.4821 9.59927 9.59825 12.4836 9.59825 15.9993C9.59825 16.7797 9.74736 17.5257 10.0069 18.2193L12.8594 15.3664C13.1079 14.0947 14.093 13.1095 15.3644 12.8609L18.2168 10.008C17.5234 9.7484 16.7775 9.59927 15.9972 9.59927ZM21.9875 13.7793L19.135 16.6322C18.8865 17.9038 17.9014 18.8891 16.63 19.1376L13.7776 21.9905C14.471 22.2502 15.2169 22.3993 15.9972 22.3993C19.5123 22.3993 22.3962 19.5149 22.3962 15.9993C22.3962 15.2189 22.2471 14.4728 21.9875 13.7793Z"
        fill={fill}
      />
      <path
        d="M30.395 0C29.9707 8.8585e-06 29.5638 0.168586 29.2638 0.468646L0.468536 29.2687C0.168537 29.5687 0 29.9757 0 30.4C0 30.8244 0.168537 31.2313 0.468536 31.5314C0.768543 31.8314 1.17544 32 1.5997 32C2.02397 32 2.43087 31.8314 2.73087 31.5314L31.5262 2.73136C31.8262 2.4313 31.9947 2.02434 31.9947 1.6C31.9947 1.17566 31.8262 0.768703 31.5262 0.468646C31.2262 0.168586 30.8193 8.8585e-06 30.395 0Z"
        fill={fill}
      />
    </svg>
  )
}