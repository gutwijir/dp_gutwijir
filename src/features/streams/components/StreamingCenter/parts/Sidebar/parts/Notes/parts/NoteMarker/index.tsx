import type { FC } from 'react'
import styled from 'styled-components'

import { useVideoContext } from '@/src/features/streams/contexts/video'
import { MarkerIcon } from '@/src/features/ui/icons/MarkerIcon'
import type { LoadRecordingQuery } from '@/src/generated-graphql/types'
import { borders } from '@/styles/borders'
import { colors } from '@/styles/colors'
import { fontWeight } from '@/styles/typography'

type Props = {
  note: LoadRecordingQuery['recordings'][0]['notes'][0]
}

const StyledMarker = styled.button`
  border: none;
  text-align: left;
  background: transparent;
  cursor: pointer;

  margin: 1.6rem 0;
  font-size: 1.4rem;
  font-weight: ${fontWeight.semiBold};
  white-space: nowrap;

  color: ${colors.text.lightContextInfo};

  display: grid;
  grid-template-columns: auto min-content auto;
  column-gap: 0.5rem;
  justify-content: stretch;

  padding-bottom: 0.4rem;
  border-bottom: ${borders.medium} dashed ${colors.text.lightContextInfo};

  & > span,
  & > svg {
    justify-self: flex-end;
    align-self: center;
  }
`

export const NoteMarker: FC<Props> = ({ note }) => {
  const { setRecordingShiftedTime } = useVideoContext()

  const timestampInSeconds = note.timestamp / 1000

  return (
    <StyledMarker
      onClick={() => {
        setRecordingShiftedTime(timestampInSeconds)
      }}
    >
      <MarkerIcon width={18} height={18} /> {note.text}
      <span>
        {' '}
        {String(Math.floor(timestampInSeconds / 60)).padStart(2, '0')}:
        {String(Math.floor(timestampInSeconds % 60)).padStart(2, '0')}
      </span>
    </StyledMarker>
  )
}
