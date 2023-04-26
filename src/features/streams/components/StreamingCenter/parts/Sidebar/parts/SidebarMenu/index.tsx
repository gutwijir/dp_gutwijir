import type { FC, Key } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { Chevron } from '@/src/features/ui/Chevron'
import { SettingsIcon } from '@/src/features/ui/icons/SettingsIcon'
import { AvailableStreamsIcon } from '@/src/features/ui/StreamLayout/AvailableStreamsIcon'
import { ExportIcon } from '@/src/features/ui/StreamLayout/ExportIcon'
import { NotesIcon } from '@/src/features/ui/StreamLayout/NotesIcon'
import { ScriptIcon } from '@/src/features/ui/StreamLayout/ScriptIcon'
import { colors } from '@/styles/colors'

import {
  HiddenRadioInput,
  IconLabel,
  SidebarMenuItem,
  StyledSidebarMenu,
} from './styled'

import { AvailableStreamList } from '../AvailableStreamList'
import { ExportSetup } from '../ExportSetup'
import { Notes } from '../Notes'
import { StreamSettings } from '../StreamSettings'
import { TestScript } from '../TestScript'

type Props = {
  setContent: (content: JSX.Element) => void
}

export const SidebarMenu: FC<Props> = ({ setContent }) => {
  const menuContent = [
    <Chevron key="chevron" />,
    <AvailableStreamsIcon key="Available Streams" />,
    <NotesIcon key="Notes" />,
    <ScriptIcon key="Script" />,
    <ExportIcon key="Export" />,
    <SettingsIcon key="Settings" fill={colors.border.dark} />,
  ]
  const [isOpen, setIsOpen] = useState(true)

  const [selectedItem, setSelectedItem] = useState('Available Streams')

  const { sidebarContent } = useStreamingCenterContext()

  //detect changed sidebar's content and change menu accordingly
  useEffect(() => {
    if (sidebarContent) {
      switch (sidebarContent.type) {
        case (<AvailableStreamList />).type:
          setSelectedItem('Available Streams')
          break
        case (<Notes />).type:
          setSelectedItem('Notes')
          break
        case (<TestScript />).type:
          setSelectedItem('Script')
          break
        case (<ExportSetup />).type:
          setSelectedItem('Export')
          break
        default:
          setSelectedItem('Settings')
      }
    }
  }, [sidebarContent])

  const handleMenuClick = (key: Key | null) => {
    switch (key) {
      case 'chevron':
        setIsOpen(!isOpen)
        break
      case 'Available Streams':
        setContent(<AvailableStreamList />)
        setSelectedItem('Available Streams')
        break
      case 'Notes':
        setContent(<Notes />)
        setSelectedItem('Notes')
        break
      case 'Script':
        setContent(<TestScript />)
        setSelectedItem('Script')
        break
      case 'Export':
        setContent(<ExportSetup />)
        setSelectedItem('Export')
        break
      default:
        setContent(<StreamSettings />)
        setSelectedItem('Settings')
        break
    }
  }

  return (
    <StyledSidebarMenu
      isOpen={isOpen}
      onMouseLeave={() => setIsOpen(false)}
      data-cy="sidebarMenu"
    >
      {menuContent.map((icon, index) =>
        index > 0 ? (
          <SidebarMenuItem
            key={icon.key}
            isSidebarMenuOpen={isOpen}
            data-cy="sidebarMenuItem"
          >
            <HiddenRadioInput
              type="radio"
              checked={icon.key === selectedItem}
              onChange={() => handleMenuClick(icon.key)}
              name="sidebar-menu"
              id={String(icon.key)}
            />
            <IconLabel
              htmlFor={String(icon.key)}
              aria-label={`Switch to ${icon.key}`}
              title={String(icon.key)}
              data-cy="itemLabel"
            >
              {icon}
            </IconLabel>
          </SidebarMenuItem>
        ) : (
          <SidebarMenuItem
            key={icon.key}
            onMouseEnter={() => setIsOpen(true)}
            isSidebarMenuOpen={isOpen}
            data-cy="sidebarMenuChevron"
          >
            <HiddenRadioInput
              type="checkbox"
              onChange={() => handleMenuClick(icon.key)}
              id={String(icon.key)}
            />
            <IconLabel
              htmlFor={String(icon.key)}
              aria-label={`Switch to ${icon.key}`}
            >
              {icon}
            </IconLabel>
          </SidebarMenuItem>
        )
      )}
    </StyledSidebarMenu>
  )
}
