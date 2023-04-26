import type { FC } from 'react'
import { useEffect } from 'react'

import { UserRole } from '@/src/features/auth/types'
import { useIsRole } from '@/src/features/login/pages/LoginPage/hooks/useIsRole'
import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'
import { DragTab } from '@/src/features/ui/DragTab'

import { AvailableStreamList } from './parts/AvailableStreamList'
import { Notes } from './parts/Notes'
import { SidebarMenu } from './parts/SidebarMenu'
import { DragZone, StyledSideBar } from './styled'

export const Sidebar: FC<{
  setResizing: (isRes: boolean) => void
}> = ({ setResizing }) => {
  //const [currentContent, setCurrentContent] = useState(<AvailableStreamList />)
  const { sidebarContent, setSidebarContent } = useStreamingCenterContext()

  //automatically set context's sidebar content
  //run only once when component's mounted
  useEffect(() => {
    if (!sidebarContent) {
      setSidebarContent(<AvailableStreamList />)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isModerator = useIsRole(UserRole.MODERATOR)

  useEffect(() => {
    if (isModerator) {
      setSidebarContent(<Notes />)
    }
  }, [isModerator, setSidebarContent])

  const { setIsSearchVisible } = useStreamingCenterContext()
  return (
    <StyledSideBar>
      <DragZone
        onMouseDown={() => {
          setResizing(true)
        }}
        data-cy="sidebarDragZone"
      >
        <DragTab />
      </DragZone>
      {sidebarContent}
      {!isModerator && (
        <SidebarMenu
          setContent={(el) => {
            setSidebarContent(el)
            setIsSearchVisible(false)
          }}
        />
      )}
    </StyledSideBar>
  )
}
