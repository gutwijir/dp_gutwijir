import styled, { css } from 'styled-components'

import { blurRadius } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

export const AvailableStreamListWrapper = styled.section`
  height: 100%;
  padding: 1.6rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 23rem));
  justify-content: center;
  align-content: flex-start;
  justify-items: center;
`

export const AvailableStreamThumbnail = styled.article<{
  backgroundImage: string
}>`
  width: 22rem;
  aspect-ratio: 16 / 9;
  margin-bottom: 1rem;
  font-weight: ${fontWeight.semiBold};
  cursor: pointer;
  ${(props) =>
    css`
      background: url(${props.backgroundImage}) rgba(255, 255, 255, 0.2);
      background-size: cover;
      background-blend-mode: overlay;
    `}

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    backdrop-filter: blur(${blurRadius.medium});
    text-align: center;
  }
`
