import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

import { useAuthContext } from '@/src/features/auth/contexts/auth'
import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import { TooltipTextSide } from '@/src/features/ui/Tooltip/styled'

import { MiniNoteBubble } from './parts/MiniNoteBubble'
import { MiniNoteMarker } from './parts/MiniNoteMarker'
import { NoteBubble } from './parts/NoteBubble'
import { NoteMarker } from './parts/NoteMarker'
import { ShowIcon } from './parts/ShowIcon'
import {
  NotesComponentWrapper,
  NotesWrapper,
  ShowHideMessagesButton,
  StyledNotesTooltip,
} from './styled'

import { NotesInput } from '../../../StreamWrapper/parts/NotesInput'
import { SearchableComponent } from '../SearchableComponent'

export const Notes: FC = () => {
  let notesWrapperRef = useRef<HTMLDivElement>(null)
  const {
    sidebarMinWidth,
    sidebarWidth,
    isShowingMyNotesOnly,
    setIsShowingMyNotesOnly,
    currentStream,
  } = useStreamingCenterContext()

  const { isLive, recordingDuration } = useVideoContext()

  const { user } = useAuthContext()

  const [displayedNotes, setDisplayedNotes] = useState(currentStream?.notes)
  useEffect(() => {
    setDisplayedNotes(
      [...(currentStream?.notes ?? [])]
        .filter((note) => {
          //if recording && timestamp of a note does not make sense
          if (!isLive && note.timestamp > recordingDuration * 1000) {
            return false
          }
          if (isShowingMyNotesOnly) {
            return note.author.email === `${user?.username}@example.com`
          }
          return true
        })
        .sort((noteA, noteB) => noteA.timestamp - noteB.timestamp)
    )
  }, [
    currentStream?.notes,
    isLive,
    isShowingMyNotesOnly,
    recordingDuration,
    user?.username,
  ])

  useEffect(() => {
    console.log('displayed notes', displayedNotes)
  }, [displayedNotes])

  return (
    <SearchableComponent>
      <NotesComponentWrapper data-cy="notesComponent">
        <StyledNotesTooltip
          text="Show messages"
          side={TooltipTextSide.RIGHT}
          isDark
        >
          <ShowHideMessagesButton
            type="button"
            onClick={() => {
              setIsShowingMyNotesOnly(!isShowingMyNotesOnly)
            }}
          >
            <ShowIcon />
          </ShowHideMessagesButton>
        </StyledNotesTooltip>
        <NotesWrapper ref={notesWrapperRef}>
          {displayedNotes?.map((note) => {
            //when width of sidebar is 50px from the total minimum width -> switch to minified mode
            if (sidebarWidth <= sidebarMinWidth + 50) {
              return note.isMarker ? (
                <MiniNoteMarker note={note} key={String(note.id)} />
              ) : (
                <MiniNoteBubble note={note} key={String(note.id)} />
              )
            } else {
              return note.isMarker ? (
                <NoteMarker note={note} key={String(note.id)} />
              ) : (
                <NoteBubble note={note} key={String(note.id)} />
              )
            }
          })}
          {sidebarWidth >= sidebarMinWidth + 50 && isLive ? (
            <NotesInput inSidebar />
          ) : null}
        </NotesWrapper>
      </NotesComponentWrapper>
    </SearchableComponent>
  )
}
