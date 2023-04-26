import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { breakpoints } from '@/styles/breakpoints'

import { NotFoundIcon } from '../../icons/NotFoundIcon'
import { H1, H2, HpLink, StyledNotFoundWrapper } from '../styled'

export const NotFoundPage: NextPage = () => {
  const [iconSize, setIconSize] = useState<{ width: number; height: number }>({
    width: 150,
    height: 200,
  })

  const handleScreenResize = () => {
    if (window.innerWidth < parseInt(breakpoints.content.medium, 10)) {
      setIconSize({
        width: 75,
        height: 100,
      })
    } else {
      setIconSize({
        width: 150,
        height: 200,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [])

  return (
    <StyledNotFoundWrapper>
      <NotFoundIcon width={iconSize.width} height={iconSize.height} />
      <div>
        <H1>404 Page not found</H1>
        <H2>
          Ooops, this site does not exist, better head back to{' '}
          <HpLink href="/dashboard">homepage</HpLink>
        </H2>
      </div>
    </StyledNotFoundWrapper>
  )
}
