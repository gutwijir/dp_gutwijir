import type { FC, ReactElement, ReactNode, SetStateAction } from 'react'
import React, { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'

import type { LoadRecordingQuery } from '@/src/generated-graphql/types'
import { sidebarMinimumWidth, sidebarMaximumWidth } from '@/styles/theme'

export type StreamingCenterContextType = {
  sidebarMinWidth: number //minimum size of sidebar for design purposes
  setSidebarMinWidth: (sidebarMinWidth: number) => void
  sidebarMaxWidth: number //maximum size of sidebar for practical purposes
  setSidebarMaxWidth: (sidebarMinWidth: number) => void
  sidebarWidth: number //default size of sidebar for tracking and responsive UI implementation
  setSidebarWidth: (sidebarWidth: number) => void
  sidebarContent: ReactElement | null
  setSidebarContent: React.Dispatch<SetStateAction<ReactElement | null>>
  isSearchVisible: boolean
  setIsSearchVisible: React.Dispatch<SetStateAction<boolean>>

  currentStream: LoadRecordingQuery['recordings'][0] | null
  setCurrentStream: React.Dispatch<
    SetStateAction<LoadRecordingQuery['recordings'][0] | null> //TODO add LoadOngoingStreamQuery['ongoingStreams']
  >

  isShowingMyNotesOnly: boolean
  setIsShowingMyNotesOnly: React.Dispatch<SetStateAction<boolean>>
}

export const StreamingCenterContext = createContext<StreamingCenterContextType>(
  {
    sidebarMinWidth: sidebarMinimumWidth,
    setSidebarMinWidth: () => null,
    sidebarMaxWidth: sidebarMaximumWidth,
    setSidebarMaxWidth: () => null,
    sidebarWidth: 0,
    setSidebarWidth: () => null,
    sidebarContent: null,
    setSidebarContent: () => null,
    isSearchVisible: false,
    setIsSearchVisible: () => null,

    currentStream: null,
    setCurrentStream: () => null,

    isShowingMyNotesOnly: false,
    setIsShowingMyNotesOnly: () => false,
  }
)

type Props = {
  children: NonNullable<ReactNode>
}

export const StreamingCenterContextProvider: FC<Props> = ({ children }) => {
  const [sidebarMinWidth, setSidebarMinWidth] =
    useState<number>(sidebarMinimumWidth)
  const [sidebarMaxWidth, setSidebarMaxWidth] =
    useState<number>(sidebarMaximumWidth)
  const [sidebarWidth, setSidebarWidth] = useState<number>(sidebarMinimumWidth)
  const [sidebarContent, setSidebarContent] = useState<ReactElement | null>(
    null
  )
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)

  const [currentStream, setCurrentStream] = useState<
    LoadRecordingQuery['recordings'][0] | null
  >(null)

  const [isShowingMyNotesOnly, setIsShowingMyNotesOnly] = useState(false)

  // always memo the context value to avoid re-rendering all the time
  const value = useMemo(() => {
    return {
      sidebarMinWidth,
      setSidebarMinWidth,
      sidebarMaxWidth,
      setSidebarMaxWidth,
      sidebarWidth,
      setSidebarWidth,
      sidebarContent,
      setSidebarContent,
      isSearchVisible,
      setIsSearchVisible,
      currentStream,
      setCurrentStream,
      isShowingMyNotesOnly,
      setIsShowingMyNotesOnly,
    }
  }, [
    currentStream,
    isSearchVisible,
    isShowingMyNotesOnly,
    sidebarContent,
    sidebarMaxWidth,
    sidebarMinWidth,
    sidebarWidth,
  ])

  return (
    <StreamingCenterContext.Provider value={value}>
      {children}
    </StreamingCenterContext.Provider>
  )
}

export const useStreamingCenterContext = () => {
  return useContext(StreamingCenterContext)
}
