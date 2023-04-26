//index + 1 = # of rectangles
export const rectGenMapping = [
  [
    //1 rectangle
    {
      //16:9
      ratioX: 2,
      ratioY: 1.125,
    },
  ],
  [
    //2 rectangles
    //first - horizontal version, second - vertical version
    {
      //32:9
      ratioX: 4,
      ratioY: 1.125,
    },
    {
      //16:18
      ratioX: 1,
      ratioY: 1.125,
    },
  ],
  [
    //3 rectangles; combination of these
    {
      //16:9 (shortly 2:1.125) * 2 (needs to grow twice faster than the row below)
      ratioX: 2,
      ratioY: 1.125,
    },
    {
      //32:9
      ratioX: 4 / 2,
      ratioY: 1.125 / 2,
    },
  ],
  [
    //4 rectangles; combination of these
    {
      //32:9
      ratioX: 4,
      ratioY: 1.125,
    },
    {
      //32:9
      ratioX: 4,
      ratioY: 1.125,
    },
  ],
  [
    //5 rectangles; combination of these
    {
      //32:9 but twice slower growth (will be divided to two rectangles)
      ratioX: 4 / 2,
      ratioY: 1.125 / 2,
    },
    {
      //48:9 but three times slower growth (will be divided to three rectangles)
      ratioX: 6 / 3,
      ratioY: 1.125 / 3,
    },
  ],
]

export enum RectDirection {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export type Rectangle = {
  x: number
  y: number
  width: number
  height: number
}
