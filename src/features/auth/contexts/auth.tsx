import type { FC, ReactNode } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'

import { removePersistedAll } from '../storage'
import type { UserRole } from '../types'

export type UserType = {
  username: string
  roles: UserRole[]
}

export type AuthContextType = {
  user: UserType | null
  setUser: (user: UserType) => void
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  handleLogout: () => null,
})

type Props = {
  children: NonNullable<ReactNode>
}

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null)

  const handleLogout = useCallback(() => {
    setUser(null)
    removePersistedAll()
  }, [])

  const value = useMemo(
    () => ({
      user,
      setUser,
      handleLogout,
    }),
    [handleLogout, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
