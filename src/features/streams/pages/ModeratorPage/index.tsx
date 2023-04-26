import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { withLogin } from '@/src/features/auth/hocs/withLogin'
import { withRole } from '@/src/features/auth/hocs/withRole'
import { UserRole } from '@/src/features/auth/types'
import { InternalLayout } from '@/src/features/ui/InternalLayout'

import { ModeratorCenter } from '../../components/ModeratorCenter'
import { StreamingCenterContextProvider } from '../../contexts/streaming-center'
import { VideoContextProvider } from '../../contexts/video'

const Page: NextPage = () => {
  const router = useRouter()
  const streamId = router.query.id as string

  return (
    <StreamingCenterContextProvider>
      <VideoContextProvider>
        <InternalLayout isDashboardHeader={false}>
          <ModeratorCenter streamId={streamId} />
        </InternalLayout>
      </VideoContextProvider>
    </StreamingCenterContextProvider>
  )
}

export const ModeratorPage = withRole(UserRole.MODERATOR, withLogin(Page))
