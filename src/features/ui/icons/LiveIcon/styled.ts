import styled from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'

export const LiveIcon = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${colors.mood.success};
  border-radius: ${borderRadius.circle};
`
