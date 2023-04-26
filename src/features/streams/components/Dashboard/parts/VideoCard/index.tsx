import Image from 'next/image'
import Link from 'next/link'
import type { Route } from 'nextjs-routes'
import { route } from 'nextjs-routes'
import type { FC } from 'react'

import { getPersistedUser } from '@/src/features/auth/storage'
import { UserRole } from '@/src/features/auth/types'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import { LiveIcon } from '@/src/features/ui/icons/LiveIcon/styled'
import { env } from '@/src/utils/env'

import { H3, StyledVideoCard, VideoCardHeader } from './styled'

import type { StreamThumbnail } from '../../../../types'

type Props = {
  data: StreamThumbnail
  isLive?: boolean
}

export const VideoCard: FC<Props> = ({ data, isLive }) => {
  const { setIsLive } = useVideoContext()

  const user = getPersistedUser()

  const cardLink = route({
    pathname: user?.roles.includes(UserRole.MODERATOR)
      ? '/moderator-center/[id]'
      : '/stream-center/[id]',
    query: { id: data.id },
  }) as unknown as Route

  return (
    //while "isLive" is not implemented as parameter of streams (general streams - ongoingStreams or recordings) -> need to set isLive manually to context
    <Link
      href={cardLink}
      onClick={() => {
        setIsLive(isLive ? isLive : false)
      }}
      data-cy={isLive ? 'videoCardStream' : 'videoCardRecording'}
    >
      <StyledVideoCard>
        <VideoCardHeader>
          <H3>{data.name}</H3>
          {isLive && <LiveIcon data-cy="liveIcon" />}
        </VideoCardHeader>
        <div className="thumbnail-photos">
          {data.thumbnails.slice(0, 2).map((photo, index) => (
            <Image
              src={env('NEXT_PUBLIC_BASE_URL') + photo}
              alt="Stream thumbnail"
              width="120"
              height="67"
              key={index} //temporary
            />
          ))}
        </div>
      </StyledVideoCard>
    </Link>
  )
}

VideoCard.defaultProps = {
  isLive: false,
}
