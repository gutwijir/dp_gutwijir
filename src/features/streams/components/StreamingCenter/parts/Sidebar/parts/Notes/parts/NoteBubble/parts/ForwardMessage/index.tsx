import type { FC, MouseEventHandler, ReactElement } from 'react'
import { useEffect, useState } from 'react'

import { CheckIcon } from '@/src/features/ui/icons/CheckIcon'
import { ForwardIcon } from '@/src/features/ui/icons/ForwardIcon'

import { ForwardMessageButton, ForwardMessageButtonLarge } from './styled'

export const ForwardMessage: FC = () => {
  const [isSendToModeratorOpen, setIsSendToModeratorOpen] =
    useState<boolean>(false)

  //will be in global state later
  const [isSentToModerator, setIsSentToModerator] = useState<boolean>(false)

  const handleSendToModerator: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsSendToModeratorOpen(false)
    setIsSentToModerator(true)
    alert('sending to moderator ' + String(e))
  }

  const [largeButtonContent, setLargeButtonContent] = useState<ReactElement>(
    <span>Send to moderator</span>
  )

  useEffect(() => {
    if (isSentToModerator) {
      setLargeButtonContent(
        <>
          <span>Sent to moderator</span>
          <CheckIcon />
        </>
      )
    }
  }, [isSentToModerator])

  return isSendToModeratorOpen || isSentToModerator ? (
    <ForwardMessageButtonLarge
      type="button"
      onClick={handleSendToModerator}
      onMouseLeave={() => {
        setIsSendToModeratorOpen(false)
      }}
      isSentToModerator={isSentToModerator}
    >
      {largeButtonContent}
    </ForwardMessageButtonLarge>
  ) : (
    <ForwardMessageButton
      type="button"
      onClick={() => {
        setIsSendToModeratorOpen(true)
      }}
    >
      <ForwardIcon />
    </ForwardMessageButton>
  )
}
