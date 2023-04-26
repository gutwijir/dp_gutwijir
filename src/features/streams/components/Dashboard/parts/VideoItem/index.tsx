import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { useMemo } from 'react'

import { getPersistedUser } from '@/src/features/auth/storage'
import { UserRole } from '@/src/features/auth/types'
import { useVideoContext } from '@/src/features/streams/contexts/video'
import type { StreamThumbnail } from '@/src/features/streams/types'
import { LiveIcon } from '@/src/features/ui/icons/LiveIcon/styled'
import { env } from '@/src/utils/env'

import { StyledVideoItem } from './styled'

type Props = {
  data: StreamThumbnail
  isLive?: boolean
}

export const VideoItem: FC<Props> = ({ data, isLive }) => {
  const { setIsLive } = useVideoContext()

  const urlPrefix = useMemo(() => {
    const user = getPersistedUser()

    return user?.roles.includes(UserRole.MODERATOR)
      ? 'moderator-center'
      : 'stream-center'
  }, [])

  return (
    //while "isLive" is not implemented as parameter of streams (general streams - ongoingStreams or recordings) -> need to set isLive manually to context
    <Link
      href={`${urlPrefix}/${data.id}`}
      onClick={() => {
        setIsLive(isLive ? isLive : false)
      }}
      data-cy={isLive ? 'videoItemStream' : 'videoItemRecording'}
    >
      <StyledVideoItem>
        {isLive ? <LiveIcon data-cy="LiveIcon" /> : null}
        <Image
          src={env('NEXT_PUBLIC_BASE_URL') + data.thumbnails[0]}
          alt="Stream thumbnail"
          width="39"
          height="22"
        />
        <h3>{data.name}</h3>
      </StyledVideoItem>
    </Link>
  )
}

VideoItem.defaultProps = {
  isLive: false,
}
