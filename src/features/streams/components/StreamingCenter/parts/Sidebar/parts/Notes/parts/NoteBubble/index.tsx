import type { FC } from 'react'

import { getPersistedUser } from '@/src/features/auth/storage'
import { UserRole } from '@/src/features/auth/types'
import { useIsRole } from '@/src/features/login/pages/LoginPage/hooks/useIsRole'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import type { LoadRecordingQuery } from '@/src/generated-graphql/types'

import { ForwardMessage } from './parts/ForwardMessage'
import {
  Email,
  NoteBubbleWrapper,
  StyledNoteBubble,
  StyledTimeStamp,
  Text,
} from './styled'

type Props = {
  note: LoadRecordingQuery['recordings'][0]['notes'][0]
}

export const NoteBubble: FC<Props> = ({ note }) => {
  const user = getPersistedUser()

  const isFromMe = note.author.email === `${user?.username}@example.com`

  const timestampInSeconds = note.timestamp / 1000

  const { setRecordingShiftedTime } = useVideoContext()

  const isModerator = useIsRole(UserRole.MODERATOR)

  return (
    <NoteBubbleWrapper fromMe={isFromMe}>
      {isFromMe && !isModerator ? <ForwardMessage /> : null}
      <StyledNoteBubble
        fromMe={isFromMe}
        onClick={() => {
          setRecordingShiftedTime(timestampInSeconds)
        }}
      >
        {!isFromMe && <Email>{note.author.email}</Email>}
        <StyledTimeStamp fromMe={isFromMe}>
          {String(Math.floor(timestampInSeconds / 60)).padStart(2, '0')}:
          {String(Math.floor(timestampInSeconds % 60)).padStart(2, '0')}
        </StyledTimeStamp>
        <Text>{note.text}</Text>
      </StyledNoteBubble>
    </NoteBubbleWrapper>
  )
}
