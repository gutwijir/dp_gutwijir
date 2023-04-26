import type { FC, ReactNode } from 'react'

import { H1, LoginMain } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

/**
 * Layout of login page
 * @param children Any non-general content of login page
 * @returns JSX structure of login layout
 */
export const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <LoginMain>
      <H1>ooolab</H1>
      {children}
    </LoginMain>
  )
}
