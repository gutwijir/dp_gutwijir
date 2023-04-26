import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { blurRadius, borderRadius, transitions } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

const timeInfoWidth = '15rem'

export const SeekbarWrapper = styled.div<{
  sidebarWidth: number
}>`
  transition: opacity ${transitions.slow};
  opacity: 0;
  display: none;

  position: fixed;
  bottom: 1rem;
  left: 2.5%;

  display: grid;
  grid-auto-flow: row;
  column-gap: 0.8rem;
  align-items: center;

  ${(props) =>
    props.sidebarWidth &&
    css`
      width: calc(95% - ${props.sidebarWidth}px);
    `}
  padding: 1.6rem 1.6rem;
  background-color: ${colors.background.semiTransparent.black.dark};
  backdrop-filter: blur(${blurRadius.medium});
  border-radius: ${borderRadius.large};
`

export const VideoControls = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 1.2rem;
  align-items: center;
`

export const StyledSeekbar = styled.div<{ currentPercentage: number }>`
  background: ${colors.text.lightContextInfo};
  width: 100%;
  height: 0.8rem;
  border-radius: ${borderRadius.small};
  transition: ${transitions.fast};

  &::before {
    content: '';
    display: block;
    height: 100%;
    border-radius: ${borderRadius.small};

    ${(props) =>
      props.currentPercentage &&
      css`
        width: ${props.currentPercentage}%;
      `}
    background-color: ${colors.background.primary};
  }
`

export const StyledSeekbarContainer = styled.div`
  width: 100%;
  height: 1rem;
  cursor: pointer;

  //on hover gets higher -> from the bottom
  display: flex;
  align-items: flex-end;

  &:hover ${StyledSeekbar} {
    transition: ${transitions.fast};
    height: 100%;
  }
`

export const TimeInfo = styled.div`
  font-weight: ${fontWeight.bold};
  color: ${colors.text.lightTitle};
  width: ${timeInfoWidth};
`

export const SeekbarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MarkerSection = styled.div`
  display: flex;
  height: min-content;
  margin-top: 1rem;
`

export const MarkerButton = styled.button<{ position: number }>`
  display: flex;
  height: min-content;
  background: transparent;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.position &&
    css`
      position: relative;
      left: ${props.position}%;
    `}
`
