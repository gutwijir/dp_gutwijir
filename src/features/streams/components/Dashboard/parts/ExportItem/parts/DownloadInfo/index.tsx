import type { FC } from 'react'

import { DownloadIcon } from './parts/DownloadIcon'
import { DownloadInfoWrapper, StyledDownloadButton } from './styled'

type Props = {
  size: number
}

export const DownloadInfo: FC<Props> = ({ size }) => {
  return (
    <DownloadInfoWrapper>
      <span>{size} GB</span>
      <StyledDownloadButton type="button" aria-label="Download export">
        <DownloadIcon />
      </StyledDownloadButton>
    </DownloadInfoWrapper>
  )
}
