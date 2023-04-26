import type { FC } from 'react'

import { colors } from '@/styles/colors'

import type { IconProps } from '../../types'

export const BrokenIcon: FC<IconProps> = ({
  width = 200,
  height = 200,
  fill = colors.background.warning,
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill={fill}
          d="M257.709,254.287c-11.313-11.359-24.547-19.984-38.625-25.688c-21.141-8.578-44.172-10.688-66.25-6.422
   c-22.047,4.266-43.297,15.063-60.297,32.109l-36.563,36.484l-21.75,21.813C22.85,323.943,14.24,337.146,8.553,351.224
   c-8.578,21.141-10.672,44.156-6.406,66.266c4.25,22.031,15.016,43.297,32.078,60.313c11.328,11.328,24.563,19.938,38.656,25.625
   c21.141,8.578,44.141,10.719,66.203,6.422c22.078-4.219,43.313-15.031,60.328-32.047l58.297-58.344
   c11.359-11.297,19.969-24.563,25.672-38.657c8.563-21.109,10.703-44.141,6.438-66.188
   C285.553,292.505,274.771,271.302,257.709,254.287z M229.084,347.396c-2.031,10.438-6.984,20.234-15.094,28.344l-36.531,36.532
   l-21.75,21.797c-1.094,1.078-2.203,2.063-3.313,2.984c-0.109,0.125-0.219,0.188-0.313,0.281c-1.141,0.953-2.313,1.875-3.516,2.75
   c-3.484,2.484-7.188,4.516-11.047,6.047c-9.891,4.016-20.813,5.047-31.25,3.031c-10.391-2.047-20.188-7-28.344-15.094
   c-5.391-5.453-9.375-11.578-12.063-18.188c-4.016-9.891-5.031-20.813-3.031-31.25c2.031-10.375,6.969-20.188,15.094-28.344
   l35.047-35l2.141-2.156l21.125-21.125c5.438-5.438,11.594-9.375,18.188-12.094c9.891-3.984,20.813-5,31.219-3
   c10.438,2.063,20.188,6.969,28.344,15.094c5.438,5.438,9.391,11.578,12.063,18.156C230.068,326.037,231.1,336.974,229.084,347.396z
   "
        />
        <path
          fill={fill}
          d="M509.85,94.537c-4.25-22.078-15-43.281-32.094-60.313C466.428,22.865,453.193,14.287,439.1,8.568
   c-21.141-8.578-44.141-10.719-66.203-6.406c-22.047,4.219-43.313,15.016-60.344,32.063l-36.516,36.531l-21.797,21.75
   c-11.328,11.359-19.938,24.594-25.641,38.688c-7.578,18.688-10.094,38.844-7.641,58.516l21.359,19.938l20.641-22.906l23.766,10.984
   c-0.266-0.656-0.547-1.219-0.797-1.906c-4.016-9.875-5.047-20.828-3.031-31.219c2.031-10.406,6.984-20.219,15.094-28.328
   l35.047-35.063l2.125-2.125l21.141-21.125c5.438-5.453,11.594-9.406,18.156-12.094c9.891-4.016,20.844-5.031,31.25-3
   c10.406,2.047,20.188,7,28.344,15.094c5.422,5.406,9.375,11.594,12.063,18.172c4.016,9.859,5.047,20.813,3.031,31.203
   c-2.047,10.438-6.969,20.234-15.094,28.344l-36.516,36.547l-21.813,21.766c-1.078,1.078-2.156,2.078-3.266,3.031
   c-0.125,0.078-0.219,0.156-0.328,0.281c-1.156,0.922-2.328,1.859-3.5,2.719c-3.516,2.469-7.203,4.516-11.078,6.047
   c-9.859,4.016-20.813,5.063-31.219,3.031c-2.344-0.469-4.641-1.078-6.922-1.844l-6.078,25.922l25.188,13.734l-7.453,24.875
   c9.375,0.484,18.813-0.172,28.078-2c22.031-4.188,43.313-15,60.328-32.031l58.281-58.328
   c11.375-11.328,19.984-24.578,25.703-38.672C512.006,139.615,514.131,116.615,509.85,94.537z"
        />
        <polygon
          fill={fill}
          points="191.115,115.474 184.35,51.38 154.412,57.583 173.459,119.13 	"
        />
        <polygon
          fill={fill}
          points="129.209,161.302 73.912,128.208 60.834,155.833 121.49,177.599 	"
        />
        <polygon
          fill={fill}
          points="319.49,383.818 326.271,447.928 356.178,441.756 337.131,380.193 	"
        />
        <polygon
          fill={fill}
          points="381.381,338.021 436.693,371.115 449.771,343.505 389.131,321.677 	"
        />
      </g>
    </svg>
  )
}
