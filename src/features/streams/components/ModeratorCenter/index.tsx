import type { FC, ReactElement } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { RadioInput } from '@/src/features/ui/RadioInput'
import {
  useLoadOngoingStreamQuery,
  useLoadRecordingQuery,
} from '@/src/generated-graphql/types'

import {
  ExchangeableContentWrapper,
  MobileNavigation,
  StyledModeratorCenter,
} from './styled'

import { useStreamingCenterContext } from '../../contexts/streaming-center'
import { useVideoContext } from '../../contexts/video'
import { useResizingControl } from '../../hooks/useResizingControl'
import { useSearchShortcutDetection } from '../../hooks/useSearchShortcutDetection'
import { Sidebar } from '../StreamingCenter/parts/Sidebar'
import { Notes } from '../StreamingCenter/parts/Sidebar/parts/Notes'
import { TestScript } from '../StreamingCenter/parts/Sidebar/parts/TestScript'

type ContentType = {
  key: string
  content: ReactElement
}

export const ModeratorCenter: FC<{ streamId: string }> = ({ streamId }) => {
  console.log(streamId) //just so es lint is happy with usage of streamid
  const { isLive } = useVideoContext()

  const { setCurrentStream } = useStreamingCenterContext()

  const { setIsResizing, resizeEnd, stopResizing, handleResizing } =
    useResizingControl()

  const exchangeableContents: { [key: string]: ReactElement } = {
    Script: <TestScript />,
    Notes: <Notes />,
  }
  const [currentContent, setCurrentContent] = useState<ContentType>({
    key: 'Script',
    content: <TestScript />,
  })

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

  const customRegisterFunction = (c: string | number) => {
    return {
      onChange: () => {
        setCurrentContent({
          key: String(c),
          content: exchangeableContents[c],
        })
      },
    }
  }

  return (
    <StyledModeratorCenter
      onMouseUp={stopResizing}
      onMouseMove={handleResizing}
      sidebarLeftBorder={resizeEnd ? `${resizeEnd}px` : null}
    >
      {isOngoingStreamLoading || isRecordingLoading ? (
        <p>isLoading...</p>
      ) : (
        <>
          <MobileNavigation>
            {Object.keys(exchangeableContents).map((c) => {
              return (
                <RadioInput
                  key={c}
                  labelText={c}
                  value={c}
                  registerFunction={() => {
                    return customRegisterFunction(c)
                  }}
                  isChecked={currentContent.key === c}
                />
              )
            })}
          </MobileNavigation>
          <ExchangeableContentWrapper>
            {currentContent.content}
          </ExchangeableContentWrapper>

          <TestScript />
          <Sidebar
            setResizing={(isRes: boolean) => {
              setIsResizing(isRes)
            }}
          />
        </>
      )}
    </StyledModeratorCenter>
  )
}
