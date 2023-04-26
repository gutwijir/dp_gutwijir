import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getPersistedUser } from '../storage'
import { UserRole } from '../types'

export const withRole = (role: UserRole, WrappedPage: NextPage): NextPage => {
  //checks for valid token in localStorage and when finds one, returns the former (Wrapped) page with its props
  const WrapperComponent: NextPage = ({ ...props }) => {
    const router = useRouter()
    useEffect(() => {
      const user = getPersistedUser()
      if (!user || !user.roles.includes(UserRole.MODERATOR)) {
        void router.replace('/login')
      }
    }, [router])

    return <WrappedPage {...props} />
  }

  return WrapperComponent
}
