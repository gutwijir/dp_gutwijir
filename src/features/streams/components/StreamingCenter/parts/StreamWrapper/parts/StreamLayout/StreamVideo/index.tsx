import type { FC } from 'react'
import { useEffect, useRef } from 'react'

import { useVideoContext } from '@/src/features/streams/contexts/video'

import { Video } from './styled'

type Props = {
  sourcePath: string
}

export const StreamVideo: FC<Props> = ({ sourcePath }) => {
  let videoRef = useRef<HTMLVideoElement>(null)

  const {
    recordingShiftedTime,
    setRecordingCurrentTime,
    setRecordingDuration,

    recordingCurrentTime,
  } = useVideoContext()

  //detect time and duration update on the video and set it to the global context
  useEffect(() => {
    const currRef = videoRef.current

    //video is setting global current time
    const updateCurrentTime = () => {
      setRecordingCurrentTime(currRef?.currentTime ?? 0)
    }

    const updateDuration = () => {
      setRecordingDuration(currRef?.duration ?? 0)
    }

    //global current time is setting the video time
    //newly added video catches up
    const updateCurrentTimeWithGlobalCurrentTime = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = recordingCurrentTime
      }
    }

    currRef?.addEventListener('timeupdate', updateCurrentTime)
    currRef?.addEventListener('durationchange', updateDuration)
    currRef?.addEventListener(
      'loadedmetadata',
      updateCurrentTimeWithGlobalCurrentTime
    )

    return () => {
      currRef?.removeEventListener('timeupdate', updateCurrentTime)
      currRef?.removeEventListener('durationchange', updateDuration)
      currRef?.removeEventListener(
        'loadedmetadata',
        updateCurrentTimeWithGlobalCurrentTime
      )
    }
  }, [recordingCurrentTime, setRecordingCurrentTime, setRecordingDuration])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = recordingShiftedTime
    }
  }, [recordingShiftedTime])

  return <Video src={sourcePath} ref={videoRef} muted />
}
