import type { FC } from 'react'

import { ExportList } from './parts/ExportList'
import { StreamList } from './parts/StreamList'
import { ListWrapper } from './styled'

import { useDashboardContext } from '../../contexts/dashboard'

export const Dashboard: FC = () => {
  const { isStreamListDashboard } = useDashboardContext()
  return (
    <ListWrapper>
      {isStreamListDashboard ? <StreamList /> : <ExportList />}
    </ListWrapper>
  )
}
