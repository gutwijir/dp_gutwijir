import Image from 'next/image'
import type { FC } from 'react'

import type { ExportThumbnail } from '@/src/features/streams/types'

import { DownloadInfo } from './parts/DownloadInfo'
import { StyledExportItem } from './styled'

type Props = {
  data: ExportThumbnail
}

export const ExportItem: FC<Props> = ({ data }) => {
  return (
    <StyledExportItem>
      <Image
        src={data.thumbnailPhoto}
        alt="Export thumbnail"
        width="39"
        height="22"
      />
      <h3>{data.name}</h3>
      {data.finished ? (
        <DownloadInfo size={data.totalSize ?? -1} />
      ) : (
        <span>
          {data.percentageRemaining ?? 0} % ({data.timeRemaining ?? 0} min.
          remaining)
        </span>
      )}
    </StyledExportItem>
  )
}
