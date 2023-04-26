import styled from 'styled-components'

import { colors } from '@/styles/colors'

export const LoginMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background.primary};
`

export const H1 = styled.h1`
  font-size: 9.6rem;
  margin: 5% 0 3.2rem 0;
  color: ${colors.text.lightTitle};
`
