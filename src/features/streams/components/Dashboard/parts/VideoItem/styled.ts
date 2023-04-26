import styled from 'styled-components'

import { borders } from '@/styles/borders'
import { colors } from '@/styles/colors'
import { fontSize } from '@/styles/typography'

export const StyledVideoItem = styled.section`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 0.8rem;

  padding: 0.8rem 0 0.8rem 0.8rem;
  border-bottom: ${borders.thin} solid ${colors.border.light};

  h3 {
    font-size: ${fontSize.base};
  }
`
