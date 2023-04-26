import type { FC } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'

import { NotesInput } from './parts/NotesInput'
import { Seekbar } from './parts/Seekbar'
import { StreamLayout } from './parts/StreamLayout'
import { StyledStreamWrapper } from './styled'

export const StreamWrapper: FC<{ isLive: boolean }> = ({ isLive }) => {
  const { sidebarWidth, sidebarMinWidth } = useStreamingCenterContext()

  return (
    <StyledStreamWrapper
      displayNoteInput={sidebarWidth <= sidebarMinWidth + 50}
    >
      <StreamLayout />
      {isLive ? <NotesInput /> : <Seekbar />}
    </StyledStreamWrapper>
  )
}
