import type { MouseEventHandler } from 'react'
import { useEffect, useState } from 'react'

import {
  getPersistedResizeEnd,
  setPersistedResizeEnd,
} from '../../auth/storage'
import { useStreamingCenterContext } from '../contexts/streaming-center'

export const useResizingControl = () => {
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [resizeEnd, setResizeEnd] = useState<number | null>(null)

  //minimum width of sidebar in px
  const { sidebarMinWidth, setSidebarWidth, sidebarMaxWidth, sidebarWidth } =
    useStreamingCenterContext()

  //sets initial value of resizeEnd (to previously remembered or default) which guides width of (above else) video seekbar
  //run only once when component mounted
  useEffect(() => {
    const persistedResizeEnd = getPersistedResizeEnd()
    setResizeEnd(
      persistedResizeEnd ? persistedResizeEnd : window.innerWidth - sidebarWidth
    )
    if (
      persistedResizeEnd &&
      window.innerWidth - persistedResizeEnd > sidebarMinWidth &&
      window.innerWidth - persistedResizeEnd < sidebarMaxWidth
    ) {
      setSidebarWidth(window.innerWidth - persistedResizeEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //stop resizing at minimum width of the sidebar
  useEffect(() => {
    if (
      isResizing &&
      resizeEnd &&
      resizeEnd > window.innerWidth - sidebarMinWidth
    ) {
      setResizeEnd(window.innerWidth - sidebarMinWidth)
      setSidebarWidth(sidebarMinWidth)
    } else if (
      isResizing &&
      resizeEnd &&
      resizeEnd < window.innerWidth - sidebarMaxWidth
    ) {
      setResizeEnd(window.innerWidth - sidebarMaxWidth)
      setSidebarWidth(sidebarMaxWidth)
    }
  }, [isResizing, resizeEnd, setSidebarWidth, sidebarMaxWidth, sidebarMinWidth])

  const stopResizing: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isResizing) {
      setPersistedResizeEnd(e.clientX)
      console.log(
        `setting persisted resize end: ${e.clientX}, current resize end ${resizeEnd}`
      )
    }
    setIsResizing(false)
  }

  const handleResizing: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isResizing) {
      setResizeEnd(e.clientX)
      setSidebarWidth(window.innerWidth - e.clientX)
    }
  }

  return {
    isResizing,
    setIsResizing,
    resizeEnd,
    setResizeEnd,
    stopResizing,
    handleResizing,
  }
}
