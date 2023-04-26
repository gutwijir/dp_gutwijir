import styled, { css } from 'styled-components'

import { mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { borderRadius, headerHeight, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const StyledHeader = styled.header<{ isDashboard: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${headerHeight};
  background-color: ${colors.background.dimmed};

  padding: 0 4.8rem;

  //override default padding when NOT on dashboard (-> when in stream center)
  ${(props) =>
    !props.isDashboard &&
    css`
      & {
        padding: 0 3.2rem;
      }
    `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.mdDown} {
    padding: 0 2.4rem;

    img {
      width: 4.8rem;
      content: url('/ooo.svg');
    }
  }
`

export const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: 4rem;

  button {
    color: white;
    background: transparent;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;

    &.selected {
      font-weight: ${fontWeight.bold};
    }
  }

  ${mediaQueries.mdDown} {
    column-gap: 2rem;
  }

  ${mediaQueries.smDown} {
    column-gap: 0.8rem;
    width: min-content;

    button {
      line-height: 1.8rem;
    }
  }
`

export const LogoutButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;

  ${mediaQueries.mdDown} {
    width: 3rem;
    height: 3rem;
  }
`
export const HeaderH1 = styled.h1`
  font-size: 2.4rem;
  color: ${colors.text.lightTitle};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${mediaQueries.mdDown} {
    font-size: 2rem;
  }

  ${mediaQueries.smDown} {
    font-size: 1.6rem;
  }
`

export const HeaderCloseButton = styled.a`
  display: flex;
  height: min-content;
`

export const ToolTipText = styled.div`
  position: absolute;
  left: 0;

  font-weight: ${fontWeight.semiBold};
  background-color: ${colors.background.light};
  margin-right: 0.5rem;
  border-radius: ${borderRadius.medium};
  transition: width ${transitions.medium}, opacity 0s;

  width: 0;
  opacity: 0;
`

export const NewDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${borderRadius.medium};
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${colors.background.light};
    ${ToolTipText} {
      transition: width ${transitions.medium}, opacity 0.3s;
      width: auto;
      opacity: 1;
    }
  }
`
