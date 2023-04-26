import type { FC } from 'react'
import { useRef } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import { MarkerIcon } from '@/src/features/ui/icons/MarkerIcon'
import { colors } from '@/styles/colors'

import { SeekbarActionButton } from './parts/SeekbarActionButton'
import { SettingsControls } from './parts/SettingsControls'
import {
  MarkerButton,
  MarkerSection,
  SeekbarHeader,
  SeekbarWrapper,
  StyledSeekbar,
  StyledSeekbarContainer,
  TimeInfo,
  VideoControls,
} from './styled'
import { SeekbarActionType } from './types'

export const Seekbar: FC = () => {
  const {
    isRecordingPlaying,
    toggleIsRecordingPlaying,
    recordingCurrentTime,
    setRecordingShiftedTime,
    recordingDuration,
  } = useVideoContext()

  const { sidebarWidth, currentStream } = useStreamingCenterContext()

  let seekbarRef = useRef<HTMLDivElement>(null)

  return (
    <SeekbarWrapper sidebarWidth={sidebarWidth}>
      <SeekbarHeader>
        <TimeInfo>
          {String(Math.floor(recordingCurrentTime / 60)).padStart(2, '0')}:
          {String(Math.floor(recordingCurrentTime % 60)).padStart(2, '0')} /{' '}
          {String(Math.floor(recordingDuration / 60)).padStart(2, '0')}:
          {String(Math.floor(recordingDuration % 60)).padStart(2, '0')}
        </TimeInfo>
        <VideoControls>
          <SeekbarActionButton
            actionType={SeekbarActionType.SKIP_BACK}
            onClick={() => setRecordingShiftedTime(recordingCurrentTime - 3)}
          />
          <SeekbarActionButton
            actionType={
              isRecordingPlaying
                ? SeekbarActionType.PAUSE
                : SeekbarActionType.PLAY
            }
            onClick={() => toggleIsRecordingPlaying(!isRecordingPlaying)}
          />
          <SeekbarActionButton
            actionType={SeekbarActionType.SKIP_FORWARD}
            onClick={() => setRecordingShiftedTime(recordingCurrentTime + 3)}
          />
        </VideoControls>
        <SettingsControls />
      </SeekbarHeader>
      <MarkerSection>
        {currentStream?.notes
          .filter(
            (note) =>
              note.isMarker && note.timestamp <= recordingDuration * 1000
          )
          .map((marker) => {
            return (
              <MarkerButton
                type="button"
                key={marker.id}
                position={(marker.timestamp / recordingDuration) * 100}
                onClick={() => setRecordingShiftedTime(marker.timestamp)}
              >
                <MarkerIcon
                  fill={colors.background.marker}
                  width={15}
                  height={30}
                />
              </MarkerButton>
            )
          })}
      </MarkerSection>
      <StyledSeekbarContainer>
        <StyledSeekbar
          currentPercentage={(recordingCurrentTime / recordingDuration) * 100}
          ref={seekbarRef}
          onClick={(ev) => {
            if (seekbarRef.current) {
              setRecordingShiftedTime(
                ((ev.clientX - seekbarRef.current.getBoundingClientRect().x) /
                  seekbarRef.current.getBoundingClientRect().width) *
                  recordingDuration
              )
            }
          }}
        />
      </StyledSeekbarContainer>
    </SeekbarWrapper>
  )
}
