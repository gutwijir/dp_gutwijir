import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { MarkerIcon } from '@/src/features/ui/icons/MarkerIcon'

import { ExpandableTextArea } from './parts/ExpandableTextArea'
import { SendSign } from './parts/SendSign'
import { NotesInputWrapper, SendMarkerButton, SendNoteButton } from './styled'

export const NotesInput: FC<{ inSidebar?: boolean }> = ({
  inSidebar = false,
}) => {
  const [note, setNote] = useState<string>('')

  useEffect(() => {
    console.log(note)
  }, [note])

  const { sidebarWidth } = useStreamingCenterContext()

  const sendNote = () => {
    alert(`sending note ${note}`)
    setNote('')
  }

  const sendMarker = () => {
    alert(`sending marker ${note}`)
    setNote('')
  }

  return (
    <NotesInputWrapper
      sidebarWidth={sidebarWidth}
      onSubmit={(ev) => {
        ev.preventDefault()
        sendNote()
      }}
      inSidebar={inSidebar}
    >
      <ExpandableTextArea
        onChange={(note: string) => {
          setNote(note)
        }}
      />
      <SendMarkerButton
        aria-label="Create marker"
        type="button"
        onClick={() => {
          sendMarker()
        }}
      >
        <MarkerIcon width={18} height={18} />
      </SendMarkerButton>
      <SendNoteButton aria-label="Create note" type="submit">
        <SendSign />
        {/* TODO refactor icon/sign names */}
      </SendNoteButton>
    </NotesInputWrapper>
  )
}

NotesInput.defaultProps = {
  inSidebar: false,
}
