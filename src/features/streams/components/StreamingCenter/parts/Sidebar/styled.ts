import styled from 'styled-components'

import { colors } from '@/styles/colors'
import {
  contentHeight,
  sidebarMaximumWidth,
  sidebarMinimumWidth,
} from '@/styles/theme'

export const StyledSideBar = styled.aside`
  max-height: ${contentHeight};
  min-width: ${`${Math.floor(sidebarMinimumWidth / 10)}rem`};
  max-width: ${`${Math.floor(sidebarMaximumWidth / 10)}rem`};
  overflow-y: scroll;

  display: grid;
  grid-template-columns: min-content auto;
`

export const DragZone = styled.div`
  height: 100%;
  width: min-content;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid ${colors.border.dark};

  &:hover {
    cursor: col-resize;
  }
`
