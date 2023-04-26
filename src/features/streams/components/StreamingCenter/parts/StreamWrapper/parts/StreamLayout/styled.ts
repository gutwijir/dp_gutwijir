import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius, contentHeight, transitions } from '@/styles/theme'

import type { RectDirection } from '../../../Sidebar/parts/StreamSettings/parts/types'

export const VideoSlotHeaderHeight = '6.4rem'

const gridTemplateAreasForTwo: { [key in RectDirection]: string[] } = {
  HORIZONTAL: [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-1 video-slot-1 video-slot-1"',
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-1 video-slot-1 video-slot-1"',
  ],
  VERTICAL: [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0"',
    '"video-slot-1 video-slot-1 video-slot-1 video-slot-1 video-slot-1 video-slot-1"',
  ],
}

const gridTemplateAreas = [
  [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0"',
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0"',
  ],
  [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0 video-slot-0"',
    '"video-slot-1 video-slot-1 video-slot-1 video-slot-2 video-slot-2 video-slot-2"',
  ],
  [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-1 video-slot-1 video-slot-1"',
    '"video-slot-2 video-slot-2 video-slot-2 video-slot-3 video-slot-3 video-slot-3"',
  ],
  [
    '"video-slot-0 video-slot-0 video-slot-0 video-slot-1 video-slot-1 video-slot-1"',
    '"video-slot-2 video-slot-2 video-slot-3 video-slot-3 video-slot-4 video-slot-4"',
  ],
]

export const StyledStreamLayout = styled.section<{
  slotCount: number
  slotsDirection?: RectDirection
}>`
  max-height: ${contentHeight};
  height: 100%;

  //6 x 2 for all possible combinations
  display: grid;

  justify-content: stretch;
  align-items: center;
  grid-gap: 0.5rem;
  padding: 0.5rem;

  ${(props) =>
    props.slotCount &&
    props.slotCount === 1 &&
    css`
      grid-template-areas: ${gridTemplateAreas[props.slotCount - 1].join(' ')};
    `}

  ${(props) =>
    props.slotCount &&
    props.slotCount === 2 &&
    props.slotsDirection &&
    css`
      grid-template-areas: ${gridTemplateAreasForTwo[props.slotsDirection].join(
        ' '
      )};
    `}

  ${(props) =>
    props.slotCount &&
    props.slotCount > 2 &&
    css`
      grid-template-areas: ${gridTemplateAreas[props.slotCount - 2].join(' ')};
    `}
`

export const VideoSlotHeader = styled.div`
  opacity: 0;
  display: none;
  transition: opacity ${transitions.slow};

  position: relative;
  top: ${VideoSlotHeaderHeight};
  margin-top: -${VideoSlotHeaderHeight};

  z-index: 100;
  width: 100%;
  padding: 1.6rem 1.6rem;
  height: ${VideoSlotHeaderHeight};

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
`

export const VideoSlot = styled.article<{
  gridAreaName: string
  selfAlign: string
  emptySlot: boolean
}>`
  ${(props) =>
    props.gridAreaName &&
    css`
      grid-area: ${props.gridAreaName};
    `}

  ${(props) =>
    props.emptySlot &&
    css`
      border: 1px solid ${colors.border.light};
      height: 100%;
    `}
    
  display: flex;
  flex-direction: column;
  justify-content: flex-start; //NEEDED

  min-width: 16rem;
  min-height: 9rem;

  max-width: 100%;
  max-height: 100%;

  ${(props) =>
    props.selfAlign &&
    css`
      align-self: ${props.selfAlign};
    `}

  &:hover ${VideoSlotHeader} {
    opacity: 1;
    display: flex;
  }
`

export const VideoSlotLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  padding: 0.5rem 0.8rem;
  white-space: nowrap;
  background-color: ${colors.background.light};
  border-radius: ${borderRadius.small};
  font-size: 1.4rem;
`

export const VideoCloseButton = styled.button`
  border: none;
  border-radius: ${borderRadius.small};
  transition: ${transitions.fast};
  background: transparent;
  cursor: pointer;
`
