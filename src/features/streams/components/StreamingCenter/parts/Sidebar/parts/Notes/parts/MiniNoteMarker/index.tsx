import type { FC } from 'react'
import styled from 'styled-components'

import { useVideoContext } from '@/src/features/streams/contexts/video'
import { MarkerIcon } from '@/src/features/ui/icons/MarkerIcon'
import type { LoadRecordingQuery } from '@/src/generated-graphql/types'
import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'
import { fontWeight } from '@/styles/typography'

const StyledMiniNoteMarker = styled.button`
  border: none;
  cursor: pointer;

  display: flex;
  padding: 1rem 1.4rem;
  border-radius: ${borderRadius.small};
  align-items: center;

  svg {
    margin-right: 1.2rem;
  }

  background-color: ${colors.background.warning};
  justify-self: flex-end;

  span {
    font-size: 1.2rem;
    font-weight: ${fontWeight.semiBold};
  }
`

type Props = {
  note: LoadRecordingQuery['recordings'][0]['notes'][0]
}

export const MiniNoteMarker: FC<Props> = ({ note }) => {
  const { setRecordingShiftedTime } = useVideoContext()

  const timestampInSeconds = note.timestamp / 1000

  return (
    <StyledMiniNoteMarker
      onClick={() => {
        setRecordingShiftedTime(timestampInSeconds)
      }}
    >
      <MarkerIcon />
      <span>
        {String(Math.floor(timestampInSeconds / 60)).padStart(2, '0')}:
        {String(Math.floor(timestampInSeconds % 60)).padStart(2, '0')}
      </span>
    </StyledMiniNoteMarker>
  )
}
