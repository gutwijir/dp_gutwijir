import type { FC } from 'react'
import { useEffect, useState } from 'react'

import type { Rectangle } from './types'
import { RectDirection, rectGenMapping } from './types'

type Props = {
  rectCount: number
  direction?: RectDirection
}

export const DynamicScreen: FC<Props> = ({ rectCount, direction }) => {
  const [generatedRect, setGeneratedRect] = useState([
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  ])

  const [overallSVGSize, setOverallSVGsize] = useState({
    width: 0,
    height: 0,
  })

  const generateRectangles = () => {
    const maxW = 220,
      maxH = 120

    //get the right mapping
    let configuration = rectGenMapping[rectCount - 1]

    //if two rectangles -> direction tells which configuration will be used
    if (rectCount === 2 && direction === RectDirection.HORIZONTAL) {
      configuration = [configuration[0]]
    } else if (rectCount === 2 && direction === RectDirection.VERTICAL) {
      configuration = [configuration[1]]
    }

    //always generate two rectangles (1 of which might be empty and filtered later)
    let firstRowRect = {
      width: 0,
      height: 0,
    }
    let secondRowRect = {
      width: 0,
      height: 0,
    }

    //generate two rectangles while remaining the right ratio for the chosen layout
    while (
      firstRowRect.width + configuration[0].ratioX < maxW &&
      firstRowRect.height +
        configuration[0].ratioY +
        (configuration.length > 1
          ? secondRowRect.height + configuration[1].ratioY
          : 0) <
        maxH
    ) {
      firstRowRect.width += configuration[0].ratioX
      secondRowRect.width +=
        configuration.length > 1 ? configuration[1].ratioX : 0
      firstRowRect.height += configuration[0].ratioY
      secondRowRect.height +=
        configuration.length > 1 ? configuration[1].ratioY : 0
    }

    setOverallSVGsize({
      width: firstRowRect.width,
      height: firstRowRect.height + secondRowRect.height,
    })

    let res: Rectangle[] = [
      { x: 0, y: 0, width: firstRowRect.width, height: firstRowRect.height },
      { x: 0, y: 0, width: secondRowRect.width, height: secondRowRect.height },
    ]

    //division of row rectangles (cases of 2 - vertical, 3, 4, 5 rectangles)
    switch (rectCount) {
      case 2:
        if (direction === RectDirection.HORIZONTAL) {
          res = [
            {
              x: 0,
              y: 0,
              width: firstRowRect.width / 2,
              height: firstRowRect.height,
            },
            {
              x: firstRowRect.width / 2,
              y: 0,
              width: firstRowRect.width / 2,
              height: firstRowRect.height,
            },
          ]
        } else {
          res = [
            {
              x: 0,
              y: 0,
              width: firstRowRect.width,
              height: firstRowRect.height / 2,
            },
            {
              x: 0,
              y: firstRowRect.height / 2,
              width: firstRowRect.width,
              height: firstRowRect.height / 2,
            },
          ]
        }
        break
      case 3:
        res = [
          {
            x: 0,
            y: 0,
            width: firstRowRect.width,
            height: firstRowRect.height,
          },
          {
            x: 0,
            y: firstRowRect.height,
            width: secondRowRect.width / 2,
            height: secondRowRect.height,
          },
          {
            x: secondRowRect.width / 2,
            y: firstRowRect.height,
            width: secondRowRect.width / 2,
            height: secondRowRect.height,
          },
        ]
        break
      case 4:
        res = [
          {
            x: 0,
            y: 0,
            width: firstRowRect.width / 2,
            height: firstRowRect.height,
          },
          {
            x: firstRowRect.width / 2,
            y: 0,
            width: firstRowRect.width / 2,
            height: firstRowRect.height,
          },
          {
            x: 0,
            y: firstRowRect.height,
            width: secondRowRect.width / 2,
            height: secondRowRect.height,
          },
          {
            x: secondRowRect.width / 2,
            y: firstRowRect.height,
            width: secondRowRect.width / 2,
            height: secondRowRect.height,
          },
        ]
        break
      case 5:
        res = [
          {
            x: 0,
            y: 0,
            width: firstRowRect.width / 2,
            height: firstRowRect.height,
          },
          {
            x: firstRowRect.width / 2,
            y: 0,
            width: firstRowRect.width / 2,
            height: firstRowRect.height,
          },
          {
            x: 0,
            y: firstRowRect.height,
            width: secondRowRect.width / 3,
            height: secondRowRect.height,
          },
          {
            x: secondRowRect.width / 3,
            y: firstRowRect.height,
            width: secondRowRect.width / 3,
            height: secondRowRect.height,
          },
          {
            x: (2 * secondRowRect.width) / 3,
            y: firstRowRect.height,
            width: secondRowRect.width / 3,
            height: secondRowRect.height,
          },
        ]
        break
      default:
        break
    }

    res = res.filter((rect) => rect.width)

    setGeneratedRect(res)
  }

  //run only once when component mounted
  useEffect(() => {
    generateRectangles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      width={overallSVGSize.width}
      height={overallSVGSize.height}
      viewBox={`0 0 ${overallSVGSize.width} ${overallSVGSize.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {generatedRect.map((rect) => (
        <rect
          key={`${rect.width}_${rect.height}_${Math.random()}`} //TODO look for more convenient solution
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          fill="white"
          stroke="black"
        />
      ))}
    </svg>
  )
}

DynamicScreen.defaultProps = {
  direction: RectDirection.HORIZONTAL,
}
