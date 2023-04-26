import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { withLogin } from '@/src/features/auth/hocs/withLogin'
import { InternalLayout } from '@/src/features/ui/InternalLayout'

import { StreamingCenter } from '../../components/StreamingCenter'
import { StreamingCenterContextProvider } from '../../contexts/streaming-center'
import { VideoContextProvider } from '../../contexts/video'

const Page: NextPage = () => {
  const router = useRouter()
  const streamId = router.query.id as string

  return (
    <StreamingCenterContextProvider>
      <VideoContextProvider>
        <InternalLayout>
          <StreamingCenter streamId={streamId} />
        </InternalLayout>
      </VideoContextProvider>
    </StreamingCenterContextProvider>
  )
}

export const StreamPage = withLogin(Page)
