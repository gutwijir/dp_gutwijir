import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getToken } from '../storage'

export const withLogin = (WrappedPage: NextPage): NextPage => {
  //checks for valid token in localStorage and when finds one, returns the former (Wrapped) page with its props
  const WrapperComponent: NextPage = ({ ...props }) => {
    const router = useRouter()
    useEffect(() => {
      const token = getToken()
      if (!token) void router.replace('/login')
    }, [router])

    return <WrappedPage {...props} />
  }

  return WrapperComponent
}
