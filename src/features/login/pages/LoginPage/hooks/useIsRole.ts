import { useEffect, useState } from 'react'

import { getPersistedUser } from '@/src/features/auth/storage'
import type { UserRole } from '@/src/features/auth/types'

export const useIsRole = (role: UserRole) => {
  const [isRole, setIsRole] = useState(false)

  useEffect(() => {
    const user = getPersistedUser()
    setIsRole(user?.roles.includes(role) ?? false)
  }, [role])

  return isRole
}
