import styled from 'styled-components'

import { borders } from '@/styles/borders'
import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'
import { fontSize } from '@/styles/typography'

export const LayoutSettingsWrapper = styled.div`
  margin: 3.2rem;

  & > div {
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 23rem));
    justify-content: center;
    //grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    //grid-template-columns: auto auto;
  }
`

export const H2 = styled.h2`
  width: 100%;
  font-size: ${fontSize.base};
  border-bottom: ${borders.thin} solid ${colors.border.dark};
  margin-bottom: 2rem;
`
export const LayoutOption = styled.label`
  div {
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius.small};
    padding: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    border-radius: ${borderRadius.small};
    background-color: ${colors.background.hover};
  }

  svg {
    padding: 0.2rem;
  }

  input {
    display: none;
  }

  input:checked + div {
    background-color: ${colors.mood.successLight};
  }
`
