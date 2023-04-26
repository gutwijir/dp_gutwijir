import type { FC, MouseEventHandler, ReactElement } from 'react'

import { SettingsIcon } from '@/src/features/ui/icons/SettingsIcon'
import { colors } from '@/styles/colors'

import { StyledSeekbarActionButton } from './styled'

import { SeekbarActionType } from '../../types'
import { SkipDirection } from '../../types'
import { PlayIcon } from '../PlayIcon'
import { SkipIcon } from '../SkipIcon'
import { StopIcon } from '../StopIcon'
import { VolumeIcon } from '../VolumeIcon'

const actionTypeToIconMapping: { [key in SeekbarActionType]: ReactElement } = {
  PLAY: <PlayIcon />,
  PAUSE: <StopIcon />,
  SKIP_BACK: (
    <SkipIcon direction={SkipDirection.BACK} fill={colors.border.light} />
  ),
  SKIP_FORWARD: (
    <SkipIcon direction={SkipDirection.FORWARD} fill={colors.border.light} />
  ),
  SETTINGS: <SettingsIcon fill={colors.border.light} />,
  VOLUME: <VolumeIcon fill={colors.border.light} />,
}

type Props = {
  actionType: SeekbarActionType
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const SeekbarActionButton: FC<Props> = ({ actionType, onClick }) => {
  return (
    <StyledSeekbarActionButton
      type="button"
      aria-label={actionType}
      onClick={onClick}
      main={
        actionType === SeekbarActionType.PLAY ||
        actionType === SeekbarActionType.PAUSE
      }
    >
      {actionTypeToIconMapping[actionType]}
    </StyledSeekbarActionButton>
  )
}
