import { useRouter } from 'next/router'
import type { Route } from 'nextjs-routes'
import { useEffect } from 'react'

import { getToken } from '@/src/features/auth/storage'

/**
 * Redirection hook for when user is logged in
 * @param url URL to redirect to
 */
export const useLoginRedirect = (url: Route) => {
  const router = useRouter()
  useEffect(() => {
    const token = getToken()
    if (token) {
      void router.replace(url)
    }
  }, [url, router])
}
