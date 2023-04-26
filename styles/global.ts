import { createGlobalStyle } from 'styled-components'

import { font, fontSize, fontWeight } from './typography'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body, #__next {
    padding: 0;
    height: 100%;
  }

  // Together with font-size 1.6rem makes calculation of px -> rem easier (by dividing by 10, not 16)
  // e.g. size of 32px in Figma -> 3.2rem -> 0.625 * 3.2 = 2 -> actual result is 2rem
  html {
    font-size: 62.5%;
  }

  body {
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.base};
    font-family: ${font.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  &:focus {
    outline: none;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 2.4rem;
  }
`
