import type { FC, ReactElement } from 'react'
import { useState } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import type { ApiVideoDataStream } from '@/src/features/streams/types'

import { DynamicScreen } from './parts/dynamicScreen'
import { RectDirection } from './parts/types'
import { H2, LayoutOption, LayoutSettingsWrapper } from './styled'

import { AvailableStreamList } from '../AvailableStreamList'

export const StreamSettings: FC = () => {
  const {
    setVideoSlotsDirection,
    setVideoSlots,
    videoSlots,
    videoSlotsDirection,
  } = useVideoContext()

  const { setSidebarContent } = useStreamingCenterContext()

  const [chosenLayoutKey, setChosenLayoutKey] = useState<string>(
    `${videoSlots.length}${
      videoSlots.length === 2 ? '_' + videoSlotsDirection : ''
    }`
  )

  const generateSlots = (slotCount: number) => {
    const slots: ApiVideoDataStream[] = []
    for (let i = 0; i < slotCount; i++) {
      slots.push({
        id: `empty_slot_${i}`,
        name: '',
        url: '',
        thumbnailPhoto: '',
      })
    }

    return slots
  }

  const layoutOptionPics: Array<ReactElement<{ direction: RectDirection }>> = [
    <DynamicScreen key="1" rectCount={1} />,
    <DynamicScreen
      key={'2_' + RectDirection.HORIZONTAL}
      rectCount={2}
      direction={RectDirection.HORIZONTAL}
    />,
    <DynamicScreen
      key={'2_' + RectDirection.VERTICAL}
      rectCount={2}
      direction={RectDirection.VERTICAL}
    />,
    <DynamicScreen key="3" rectCount={3} />,
    <DynamicScreen key="4" rectCount={4} />,
    <DynamicScreen key="5" rectCount={5} />,
  ]

  return (
    <LayoutSettingsWrapper>
      <H2>Layout</H2>
      <div>
        {layoutOptionPics.map((optionPic) => (
          <LayoutOption key={optionPic.key} data-cy="layoutOption">
            <input
              type="radio"
              value={String(optionPic.key)}
              checked={chosenLayoutKey === optionPic.key}
              onChange={(ev) => {
                console.log(ev.target.value)
                setChosenLayoutKey(ev.target.value)
                if (isFinite(Number(ev.target.value))) {
                  setVideoSlots(generateSlots(Number(ev.target.value)))
                } else {
                  setVideoSlots(generateSlots(2))
                  setVideoSlotsDirection(optionPic.props.direction)
                }
                setSidebarContent(<AvailableStreamList />)
              }}
            />
            <div>{optionPic}</div>
          </LayoutOption>
        ))}
      </div>
    </LayoutSettingsWrapper>
  )
}
