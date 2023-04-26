import type { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { contentHeight } from '@/styles/theme'

import { Header } from '../Header'

type Props = {
  isDashboardHeader?: boolean
  children: NonNullable<ReactNode>
}

export const Main = styled.main`
  max-height: ${contentHeight};
  height: 100%;
`

/**
 * Layout of any page behind (after successful pass of) the login form.
 * @param children Any non-general content of the layout
 * @returns JSX structure of internal pages
 */
export const InternalLayout: FC<Props> = ({ children, isDashboardHeader }) => {
  return (
    <>
      <Header isDashboardHeader={isDashboardHeader ?? false} />
      <Main>{children}</Main>
    </>
  )
}

InternalLayout.defaultProps = {
  isDashboardHeader: false,
}
