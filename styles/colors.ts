const palette = {
  black: '#000',
  gray_100: '#E9E9E9',
  gray_300: '#DADADA',
  gray_400: '#CFCFCF',
  gray_600: '#757575',
  gray_900: '#686868',
  lightBlue: '#0070D6',
  ctuBlue: '#0070D6',
  dimmedBlue: '#00529C',
  green: '#51D600',
  lightGreen: '#A1FFAB',
  fitOrange: '#F0AB00',
  white: '#FFF',
}

export const colors = {
  text: {
    lightTitle: palette.white,
    darkTitle: palette.black,
    contextInfo: palette.gray_900,
    lightContextInfo: palette.gray_600,
    link: palette.ctuBlue,
    linkHover: palette.dimmedBlue,
  },
  background: {
    primary: palette.ctuBlue,
    dimmed: palette.dimmedBlue,
    light: palette.white,
    inactive: palette.gray_100,
    hover: palette.gray_300,
    warning: palette.fitOrange,
    marker: palette.fitOrange,
    dark: palette.black,
    semiTransparent: {
      primary: {
        light: 'rgba(0, 112, 214, .35)',
        medium: 'rgba(0, 112, 214, .6)',
        dark: 'rgba(0, 112, 214, .7)',
        darkest: 'rgba(0, 112, 214, .9)',
      },
      black: {
        dark: 'rgba(0, 0, 0, .6)',
      },
    },
  },
  border: {
    dark: palette.black,
    light: palette.gray_400,
  },
  mood: {
    success: palette.green,
    successLight: palette.lightGreen,
  },
}
