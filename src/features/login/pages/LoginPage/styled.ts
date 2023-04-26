import styled from 'styled-components'

import { borders } from '@/styles/borders'
import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { fontWeight, font } from '@/styles/typography'

export const LoginFormWrapper = styled.div`
  padding: 8rem 6rem;
  background-color: ${colors.background.light};
  border-radius: ${borderRadius.large};
`

export const H2 = styled.h2`
  margin-bottom: 7.5rem;
  font-size: 4.8rem;
  text-align: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-bottom: ${borders.thin} solid ${colors.border.dark};
  padding-bottom: 0.5rem;
  margin-bottom: 1.6rem;
  width: 25rem;

  input {
    margin-right: 1.6rem; //shift by width of the left icon
    margin-top: 1rem;
    border: none;
    text-align: center;
    font-family: ${font.base};
    font-size: 1.4rem;
    width: 100%;
    transition: ${transitions.slow};

    //slowly erase the placeholder
    &:focus::placeholder {
      transition: ${transitions.medium};
      color: transparent;
    }
    &:-webkit-autofill {
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
`

export const SubmitButton = styled.input`
  font-family: inherit;
  margin-top: 3rem;
  text-transform: uppercase;
  background-color: ${colors.background.primary};
  padding: 1.3rem 6rem;
  font-weight: ${fontWeight.bold};
  border: none;
  border-radius: ${borderRadius.small};
  transition: ${transitions.fast};
  color: white;
  cursor: pointer;

  &:hover {
    transition: ${transitions.fast};
    transform: scale(1.05);
  }
`
