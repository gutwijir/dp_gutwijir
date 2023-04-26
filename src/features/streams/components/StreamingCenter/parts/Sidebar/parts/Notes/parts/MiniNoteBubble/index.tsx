import type { FC } from 'react'

import { useAuthContext } from '@/src/features/auth/contexts/auth'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import { NotesIcon } from '@/src/features/ui/StreamLayout/NotesIcon'
import type { LoadRecordingQuery } from '@/src/generated-graphql/types'

import { StyledMiniNoteBubble } from './styled'

import { StyledTimeStamp } from '../NoteBubble/styled'

type Props = {
  note: LoadRecordingQuery['recordings'][0]['notes'][0]
}

export const MiniNoteBubble: FC<Props> = ({ note }) => {
  const { user } = useAuthContext()

  const isFromMe = note.author.email === `${user?.username}@example.com`

  const { setRecordingShiftedTime } = useVideoContext()

  const timestampInSeconds = note.timestamp / 1000

  return (
    <StyledMiniNoteBubble
      fromMe={isFromMe}
      onClick={() => {
        setRecordingShiftedTime(timestampInSeconds)
      }}
    >
      <NotesIcon />
      <StyledTimeStamp fromMe={isFromMe}>
        {String(Math.floor(timestampInSeconds / 60)).padStart(2, '0')}:
        {String(Math.floor(timestampInSeconds % 60)).padStart(2, '0')}
      </StyledTimeStamp>
    </StyledMiniNoteBubble>
  )
}
