import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import { env } from '@/src/utils/env'

import { AvailableStreamListWrapper, AvailableStreamThumbnail } from './styled'

export const AvailableStreamList: FC = () => {
  const { videoSlots, setVideoSlots } = useVideoContext()

  const { currentStream } = useStreamingCenterContext()

  const [firstEmptySlot, setFirstEmptySlot] = useState<number>(0)

  useEffect(() => {
    let firstEmpty = -1
    for (let i = 0; i < videoSlots.length; i++) {
      if (!videoSlots[i].name.length) {
        firstEmpty = i
        break
      }
    }
    setFirstEmptySlot(firstEmpty)
  }, [videoSlots])

  return (
    <AvailableStreamListWrapper>
      {currentStream &&
        currentStream.sources.map((stream, index) => (
          <AvailableStreamThumbnail
            key={String(stream.id)}
            backgroundImage={
              env('NEXT_PUBLIC_BASE_URL') + currentStream.thumbnails[index]
            }
            onClick={() => {
              if (firstEmptySlot > -1) {
                setVideoSlots((oldSlots) => {
                  return oldSlots.map((oldSlot, index) => {
                    if (index === firstEmptySlot) {
                      return stream
                    } else {
                      return oldSlot
                    }
                  })
                })
              }
            }}
            data-cy="availableDataSource"
          >
            <div>{stream.name}</div>
          </AvailableStreamThumbnail>
        ))}
    </AvailableStreamListWrapper>
  )
}
