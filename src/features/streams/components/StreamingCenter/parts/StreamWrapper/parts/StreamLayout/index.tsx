import type { FC } from 'react'
import { useEffect } from 'react'

import { useVideoContext } from '@/src/features/streams/contexts/video'
import type { ApiVideoDataStream } from '@/src/features/streams/types'
import { CloseIcon } from '@/src/features/ui/icons/CloseIcon'
import { colors } from '@/styles/colors'

import { StreamVideo } from './StreamVideo'
import {
  StyledStreamLayout,
  VideoCloseButton,
  VideoSlot,
  VideoSlotHeader,
  VideoSlotLabel,
} from './styled'

import { RectDirection } from '../../../Sidebar/parts/StreamSettings/parts/types'

export const StreamLayout: FC = () => {
  const {
    videoSlots,
    isRecordingPlaying,
    videoSlotsDirection,
    setVideoSlots,
    playbackSpeed,
  } = useVideoContext()

  // play / pause videos when play/pause button clicked
  useEffect(() => {
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      if (isRecordingPlaying) {
        void video.play()
      } else {
        video.pause()
      }

      video.playbackRate = playbackSpeed
    })
  }, [isRecordingPlaying, playbackSpeed])

  const removeVideoFromLayout = (index: number) => {
    const newSlots = videoSlots
    const emptySlot: ApiVideoDataStream = {
      id: `empty_slot_${index}`,
      name: '',
      url: '',
      thumbnailPhoto: '',
    }
    newSlots.splice(index, 1, emptySlot)
    setVideoSlots(videoSlots.map((slot, i) => (i === index ? emptySlot : slot)))
  }

  return (
    <StyledStreamLayout
      slotCount={videoSlots.length}
      slotsDirection={videoSlotsDirection}
      data-cy="streamLayout"
    >
      {videoSlots.map((slot, index) => (
        <VideoSlot
          key={slot.id}
          gridAreaName={`video-slot-${index}`}
          emptySlot={!slot.name.length}
          selfAlign={
            videoSlots.length === 1 ||
            (videoSlots.length === 2 &&
              videoSlotsDirection === RectDirection.HORIZONTAL)
              ? 'center'
              : index < Math.floor(videoSlots.length / 2)
              ? 'flex-end'
              : 'flex-start'
          }
          data-cy="videoSlot"
        >
          {slot.name.length ? (
            <VideoSlotHeader>
              <VideoSlotLabel data-cy="videoSlotLabel">
                {slot.name}
              </VideoSlotLabel>
              <VideoCloseButton
                aria-label="Remove video from layout"
                onClick={() => {
                  removeVideoFromLayout(index)
                }}
                data-cy="videoSlotCloseButton"
              >
                <CloseIcon fill={colors.background.light} />
              </VideoCloseButton>
            </VideoSlotHeader>
          ) : null}
          {slot.url ? <StreamVideo sourcePath={slot.url} /> : null}
        </VideoSlot>
      ))}
    </StyledStreamLayout>
  )
}
