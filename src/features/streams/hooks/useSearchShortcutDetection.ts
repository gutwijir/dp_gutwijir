import { useCallback, useEffect, useState } from 'react'

import { useStreamingCenterContext } from '../contexts/streaming-center'

export const useSearchShortcutDetection = () => {
  //search shortcut detection
  const [isCtrlPressed, setIsCtrlPressed] = useState(false)
  const { isSearchVisible, setIsSearchVisible } = useStreamingCenterContext()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key.toLocaleLowerCase() === 'meta' || event.ctrlKey) {
        setIsCtrlPressed(true)
      }

      if (isCtrlPressed && event.key === 'h') {
        setIsSearchVisible(!isSearchVisible)
      }

      if (event.key.toLocaleLowerCase() === 'escape') {
        setIsSearchVisible(false)
      }
    },
    [isCtrlPressed, isSearchVisible, setIsSearchVisible]
  )

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'meta' || event.ctrlKey) {
      setIsCtrlPressed(false)
    }
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return isSearchVisible
}
