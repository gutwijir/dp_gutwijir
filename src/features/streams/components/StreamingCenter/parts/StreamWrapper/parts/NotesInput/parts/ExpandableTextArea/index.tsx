import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import { InvisibleLabel, StyledTextArea } from './styled'

type Props = {
  onChange: (text: string) => void
}

export const ExpandableTextArea: FC<Props> = ({ onChange }) => {
  const [note, setNote] = useState<string>('')
  const noteInputRef = useRef<HTMLTextAreaElement>(null)

  //resize note textarea based on content
  useEffect(() => {
    onChange(note)

    if (noteInputRef.current) {
      noteInputRef.current.style.height = '0px' //necessary?
      noteInputRef.current.style.height = `${noteInputRef.current.scrollHeight}px`
    }
  }, [note, onChange])

  return (
    <>
      <StyledTextArea
        rows={1}
        ref={noteInputRef}
        value={note}
        onChange={(ev) => {
          setNote(ev.target.value)
        }}
        id="invisible-text-area"
        placeholder="Comment what's happening..."
      />
      <InvisibleLabel htmlFor="invisible-text-area">Note</InvisibleLabel>
    </>
  )
}
