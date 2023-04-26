import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'

export type DashboardContextType = {
  isStreamListDashboard: boolean
  setStreamListDashboard: (isStreamListDashboard: boolean) => void
}

export const DashboardContext = createContext<DashboardContextType>({
  isStreamListDashboard: true,
  setStreamListDashboard: () => true,
})

type Props = {
  children: NonNullable<ReactNode>
}

export const DashboardContextProvider: FC<Props> = ({ children }) => {
  const [isStreamListDashboard, setStreamListDashboard] =
    useState<boolean>(true)

  // always memo the context value to avoid re-rendering all the time
  const value = useMemo(
    () => ({
      isStreamListDashboard,
      setStreamListDashboard,
    }),
    [isStreamListDashboard]
  )

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
