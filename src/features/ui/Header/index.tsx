import Image from 'next/image'
import { useRouter } from 'next/router'
import { route } from 'nextjs-routes'
import type { FC } from 'react'

import { colors } from '@/styles/colors'

import {
  Navigation,
  StyledHeader,
  LogoutButton,
  HeaderH1,
  HeaderCloseButton,
} from './styled'

import { useAuthContext } from '../../auth/contexts/auth'
import { useDashboardContext } from '../../streams/contexts/dashboard'
import { useStreamingCenterContext } from '../../streams/contexts/streaming-center'
import { CloseIcon } from '../icons/CloseIcon'
import { LogoutIcon } from '../icons/LogoutIcon'
import { Tooltip } from '../Tooltip'

type Props = {
  isDashboardHeader: boolean //-> DashboardLayout, not StreamLayout
}

export const Header: FC<Props> = ({ isDashboardHeader }) => {
  const { isStreamListDashboard, setStreamListDashboard } =
    useDashboardContext()

  const { currentStream } = useStreamingCenterContext()

  const router = useRouter()

  const { handleLogout } = useAuthContext()

  return (
    <StyledHeader isDashboard={isDashboardHeader}>
      {isDashboardHeader ? (
        <>
          <Image src="/ooolab.svg" alt="ooolab" width="90" height="32" />
          <Navigation data-cy="headerNavigation">
            <button
              type="button"
              onClick={() => setStreamListDashboard(true)}
              className={isStreamListDashboard ? 'selected' : ''}
            >
              Streams & Recordings
            </button>
            <button
              type="button"
              onClick={() => setStreamListDashboard(false)}
              className={!isStreamListDashboard ? 'selected' : ''}
            >
              Exports
            </button>
          </Navigation>
          <Tooltip text="Logout">
            <LogoutButton
              type="button"
              aria-label="Log out"
              onClick={() => {
                handleLogout()
                void router.push('/login')
              }}
              data-cy="logoutButton"
            >
              <LogoutIcon
                fill={colors.background.light}
                width={22}
                height={22}
              />
            </LogoutButton>
          </Tooltip>
        </>
      ) : (
        <>
          <HeaderH1>{currentStream?.name}</HeaderH1>
          <Tooltip text="Close stream">
            <HeaderCloseButton href={route({ pathname: '/dashboard' })}>
              <CloseIcon />
            </HeaderCloseButton>
          </Tooltip>
        </>
      )}
    </StyledHeader>
  )
}
