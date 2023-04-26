import styled from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const TextDiv = styled.div`
  padding: 0.5rem 0.8rem;
  font-weight: ${fontWeight.bold};
  background-color: ${colors.background.inactive};
  font-size: 1.4rem;
  border-radius: ${borderRadius.small};
  transition: ${transitions.medium};
  text-align: center;

  &:hover {
    transition: ${transitions.medium};
    background-color: ${colors.background.hover};
    cursor: pointer;
  }
`

export const StyledRadioInput = styled.input`
  display: none;

  &:checked + ${TextDiv} {
    background-color: ${colors.mood.successLight};
    height: 100%;
    width: 100%;
  }
`
