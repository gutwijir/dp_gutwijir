import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import {
  blurRadius,
  borderRadius,
  headerHeight,
  transitions,
} from '@/styles/theme'

export const StyledSidebarMenu = styled.menu<{ isOpen: boolean }>`
  position: fixed;
  top: calc(${headerHeight} + 0.5rem);
  right: 0.5rem;

  //general layout
  display: grid;
  grid-auto-flow: row;
  align-items: flex-start;
  padding: 0;

  //colors and theme
  background-color: ${colors.background.semiTransparent.primary.light};
  backdrop-filter: blur(${blurRadius.small});

  backdrop-filter: blur(${blurRadius.medium});
  border-radius: ${borderRadius.medium};
  list-style-type: none;

  transition: ${transitions.medium};
`

export const IconLabel = styled.label`
  position: relative;

  height: 4.6rem;
  width: 5.2rem;
  margin: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: none;
  border-radius: ${borderRadius.small};
  transition: ${transitions.medium};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.75);
  }

  & > svg {
    transition: ${transitions.medium};
  }
`

export const SidebarMenuItem = styled.li<{ isSidebarMenuOpen: boolean }>`
  ${(props) =>
    !props.isSidebarMenuOpen &&
    css`
      &:first-child {
        ${IconLabel} > svg {
          transition: ${transitions.medium};
          transform: rotate(180deg);
        }
      }

      &:not(:first-child) {
        opacity: 0;
        height: 0;
        display: none;
        transition: ${transitions.medium};
      }
    `}
`

export const HiddenRadioInput = styled.input`
  display: none;

  &:checked + ${IconLabel} {
    background: rgba(255, 255, 255, 0.75);
  }
`
