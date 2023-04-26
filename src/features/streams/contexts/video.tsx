import type { FC, ReactNode, SetStateAction } from 'react'
import React, { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'

import type { VideoFileGraphQlModel } from '@/src/generated-graphql/types'

import { RectDirection } from '../components/StreamingCenter/parts/Sidebar/parts/StreamSettings/parts/types'
import type { ApiVideoDataStream } from '../types'

export type VideoContextType = {
  isRecordingPlaying: boolean
  toggleIsRecordingPlaying: (isRecordingPlaying: boolean) => void
  isLive: boolean
  setIsLive: (isLive: boolean) => void
  playbackSpeed: number
  setPlaybackSpeed: React.Dispatch<SetStateAction<number>>

  recordingCurrentTime: number
  setRecordingCurrentTime: React.Dispatch<SetStateAction<number>>
  recordingShiftedTime: number
  setRecordingShiftedTime: React.Dispatch<SetStateAction<number>>
  recordingDuration: number
  setRecordingDuration: React.Dispatch<SetStateAction<number>>

  videoSlots: VideoFileGraphQlModel[] | ApiVideoDataStream[]
  setVideoSlots: React.Dispatch<
    SetStateAction<VideoFileGraphQlModel[] | ApiVideoDataStream[]>
  >
  videoSlotsDirection: RectDirection
  setVideoSlotsDirection: React.Dispatch<SetStateAction<RectDirection>>
}

export const VideoContext = createContext<VideoContextType>({
  isRecordingPlaying: false,
  toggleIsRecordingPlaying: () => null,
  recordingCurrentTime: 0,
  setRecordingCurrentTime: () => 0,
  recordingShiftedTime: 0,
  setRecordingShiftedTime: () => 0,
  recordingDuration: 0,
  setRecordingDuration: () => 0,
  videoSlots: [
    {
      id: '',
      name: '',
      url: '',
      thumbnailPhoto: '',
    },
  ],
  setVideoSlots: () => 0,
  videoSlotsDirection: RectDirection.HORIZONTAL,
  setVideoSlotsDirection: () => 0,
  isLive: false,
  setIsLive: () => false,
  playbackSpeed: 1,
  setPlaybackSpeed: () => 1,
})

type Props = {
  children: NonNullable<ReactNode>
}

export const VideoContextProvider: FC<Props> = ({ children }) => {
  const [isRecordingPlaying, toggleIsRecordingPlaying] =
    useState<boolean>(false)
  const [recordingCurrentTime, setRecordingCurrentTime] = useState<number>(0)
  const [recordingShiftedTime, setRecordingShiftedTime] = useState<number>(0)
  const [recordingDuration, setRecordingDuration] = useState<number>(0)
  const [videoSlots, setVideoSlots] = useState<
    VideoFileGraphQlModel[] | ApiVideoDataStream[]
  >([
    {
      id: '',
      name: '',
      url: '',
      thumbnailPhoto: '',
    },
  ])
  const [videoSlotsDirection, setVideoSlotsDirection] = useState(
    RectDirection.HORIZONTAL
  )
  const [isLive, setIsLive] = useState<boolean>(false)
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1)

  // always memo the context value to avoid re-rendering all the time
  const value = useMemo(() => {
    return {
      isRecordingPlaying,
      toggleIsRecordingPlaying,
      recordingCurrentTime,
      setRecordingCurrentTime,
      recordingShiftedTime,
      setRecordingShiftedTime,
      recordingDuration,
      setRecordingDuration,
      videoSlots,
      setVideoSlots,
      videoSlotsDirection,
      setVideoSlotsDirection,
      isLive,
      setIsLive,
      playbackSpeed,
      setPlaybackSpeed,
    }
  }, [
    isLive,
    isRecordingPlaying,
    playbackSpeed,
    recordingCurrentTime,
    recordingDuration,
    recordingShiftedTime,
    videoSlots,
    videoSlotsDirection,
  ])

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}

export const useVideoContext = () => {
  return useContext(VideoContext)
}
