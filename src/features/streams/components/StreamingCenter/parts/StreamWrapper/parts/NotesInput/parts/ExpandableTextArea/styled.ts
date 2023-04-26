import styled from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const StyledTextArea = styled.textarea`
  font-family: inherit;
  background: ${colors.background.semiTransparent.black.dark};
  border-radius: ${borderRadius.medium} ${borderRadius.small}
    ${borderRadius.small} ${borderRadius.medium}; //might be worth a prop later
  border: none;
  resize: none;
  color: ${colors.text.lightTitle};
  font-weight: ${fontWeight.semiBold};
  padding: 0.5rem;

  white-space: nowrap;

  &::placeholder {
    transition: ${transitions.medium};
    color: inherit;
  }

  //slowly erase the placeholder
  &:focus::placeholder {
    transition: ${transitions.medium};
    color: transparent;
  }

  //Hide scrollbar on all browsers
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

export const InvisibleLabel = styled.label`
  opacity: 0.0001;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 1px;
  width: 1px;
`
