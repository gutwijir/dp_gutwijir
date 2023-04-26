import type { FC } from 'react'
import { useEffect } from 'react'

import {
  useLoadOngoingStreamQuery,
  useLoadRecordingQuery,
} from '@/src/generated-graphql/types'

import { Sidebar } from './parts/Sidebar'
import { StreamWrapper } from './parts/StreamWrapper'
import { StyledStreamingCenter } from './styled'

import { useStreamingCenterContext } from '../../contexts/streaming-center'
import { useVideoContext } from '../../contexts/video'
import { useResizingControl } from '../../hooks/useResizingControl'
import { useSearchShortcutDetection } from '../../hooks/useSearchShortcutDetection'

export const StreamingCenter: FC<{ streamId: string }> = ({ streamId }) => {
  const { setCurrentStream } = useStreamingCenterContext()
  const { isLive } = useVideoContext()

  const { setIsResizing, resizeEnd, stopResizing, handleResizing } =
    useResizingControl()

  useSearchShortcutDetection()

  const { loading: isOngoingStreamLoading, data: ongoingStreamData } =
    useLoadOngoingStreamQuery({
      variables: {
        id: streamId,
      },
    })

  const { loading: isRecordingLoading, data: recordingData } =
    useLoadRecordingQuery({
      variables: {
        id: streamId,
      },
    })

  //when loaded data ready -> set global context values
  useEffect(() => {
    if (isLive) {
      if (!isOngoingStreamLoading && ongoingStreamData) {
        //TODO change to ongoingStreamData.ongoingStreams[0] when implemented on BE + change context!
        //setCurrentStream(ongoingStreamData.ongoingStreams[0])
        setCurrentStream(null)
      }
    } else {
      if (!isRecordingLoading && recordingData) {
        setCurrentStream(recordingData.recordings[0])
      }
    }
  }, [
    isLive,
    ongoingStreamData?.recordings,
    isOngoingStreamLoading,
    recordingData?.recordings,
    isRecordingLoading,
    setCurrentStream,
    ongoingStreamData,
    recordingData,
  ])

  return (
    <StyledStreamingCenter
      onMouseUp={stopResizing}
      onMouseMove={handleResizing}
      sidebarLeftBorder={resizeEnd ? `${resizeEnd}px` : null}
      data-cy="streamingCenter"
    >
      {isOngoingStreamLoading || isRecordingLoading ? (
        <p>isLoading...</p>
      ) : (
        <>
          <StreamWrapper isLive={isLive} />
          <Sidebar
            setResizing={(isRes: boolean) => {
              setIsResizing(isRes)
            }}
          />
        </>
      )}
    </StyledStreamingCenter>
  )
}
