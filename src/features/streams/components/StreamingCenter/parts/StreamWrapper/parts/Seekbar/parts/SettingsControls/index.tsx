import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useVideoContext } from '@/src/features/streams/contexts/video'
import { RadioInput } from '@/src/features/ui/RadioInput'

import { availablePlaybackSpeeds } from './constants'
import { SpeedSetting, StyledSettingsControls } from './styled'

import { SeekbarActionType } from '../../types'
import { SeekbarActionButton } from '../SeekbarActionButton'

interface ISettingsInputs {
  speed: number
}

export const SettingsControls: FC = () => {
  const { register, watch } = useForm<ISettingsInputs>({
    defaultValues: {
      speed: 1,
    },
  })

  const { setPlaybackSpeed, playbackSpeed } = useVideoContext()
  const [isPlaybackSpeedSettingVisible, setIsPlaybackSpeedSettingVisible] =
    useState<boolean>(false)

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'speed') {
        setPlaybackSpeed(Number(value['speed']))
      }

      console.log(value, name, type)
    })
    return () => subscription.unsubscribe()
  }, [playbackSpeed, setPlaybackSpeed, watch])

  return (
    <StyledSettingsControls>
      <SeekbarActionButton
        actionType={SeekbarActionType.VOLUME}
        onClick={() => null}
      />
      <SpeedSetting visible={isPlaybackSpeedSettingVisible}>
        {availablePlaybackSpeeds.map((speed) => {
          return (
            <RadioInput
              key={speed}
              isChecked={playbackSpeed === speed}
              labelText={`${speed}x`}
              value={speed}
              registerFunction={() => register('speed')}
            />
          )
        })}
      </SpeedSetting>
      <SeekbarActionButton
        actionType={SeekbarActionType.SETTINGS}
        onClick={() => {
          setIsPlaybackSpeedSettingVisible(!isPlaybackSpeedSettingVisible)
        }}
      />
    </StyledSettingsControls>
  )
}
