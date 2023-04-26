import styled from 'styled-components'

import { colors } from '@/styles/colors'
import { blurRadius, borderRadius, headerHeight } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const StyledSearchBar = styled.div`
  background: ${colors.background.semiTransparent.primary.medium};
  border-radius: 0 0 ${borderRadius.small} ${borderRadius.small};
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  backdrop-filter: blur(${blurRadius.medium});

  display: flex;
  width: min-content;
  align-items: center;

  position: absolute;
  top: ${headerHeight};
  right: 10rem;
`

export const SearchInput = styled.input`
  color: ${colors.text.lightTitle};
  font-family: inherit;
  font-weight: ${fontWeight.normal};
  padding: 0.2rem 0.8rem;
  background-color: ${colors.background.semiTransparent.primary.dark};
  border: none;
  border-radius: ${borderRadius.small};
  margin-right: 0.5rem;
  width: 30rem;

  &::placeholder {
    color: ${colors.text.lightTitle};
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const SearchBarCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: ${borderRadius.small};
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: ${colors.background.dimmed};
  }
`
