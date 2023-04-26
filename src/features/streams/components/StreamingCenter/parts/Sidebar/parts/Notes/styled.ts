import styled from 'styled-components'

import { Tooltip } from '@/src/features/ui/Tooltip'

export const NotesWrapper = styled.section`
  margin: 3.2rem;

  display: grid;
  grid-template-rows: repeat(auto-fill, min-content);
  align-content: flex-end;
  row-gap: 1.6rem;
  align-items: flex-end;
`

export const StyledNotesTooltip = styled(Tooltip)`
  position: relative;
  left: 0;
  top: 1rem;
  width: min-content;

  justify-content: flex-start;
`

export const NotesComponentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ShowHideMessagesButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`
