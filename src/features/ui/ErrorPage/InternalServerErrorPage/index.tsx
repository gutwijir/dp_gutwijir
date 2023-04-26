import type { NextPage } from 'next'
import router from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { breakpoints, mediaQueries } from '@/styles/breakpoints'
import { colors } from '@/styles/colors'
import { fontSize, fontWeight } from '@/styles/typography'

import { BrokenIcon } from '../../icons/BrokenIcon'
import { H1, H2, StyledNotFoundWrapper } from '../styled'

const ReloadButton = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  padding: 0;
  font-weight: ${fontWeight.bold};
  color: ${colors.text.link};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  ${mediaQueries.mdDown} {
    font-size: ${fontSize.base};
  }
`

export const InternalServerError: NextPage = () => {
  const [iconSize, setIconSize] = useState<{ width: number; height: number }>({
    width: 200,
    height: 200,
  })

  const handleScreenResize = () => {
    if (window.innerWidth < parseInt(breakpoints.content.medium, 10)) {
      setIconSize({
        width: 100,
        height: 100,
      })
    } else {
      setIconSize({
        width: 200,
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
      <BrokenIcon width={iconSize.width} height={iconSize.height} />
      <div>
        <H1>500 Internal server error</H1>
        <H2>
          Ooops, something wrong happened, better{' '}
          <ReloadButton
            onClick={() => {
              router.reload()
            }}
          >
            reload
          </ReloadButton>{' '}
          the page
        </H2>
      </div>
    </StyledNotFoundWrapper>
  )
}
