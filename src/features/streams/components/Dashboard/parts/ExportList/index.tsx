import type { FC } from 'react'

import { demoExports } from '@/src/features/demo_data'

import { StyledExportList } from './styled'

import { ListItemType } from '../../types'
import { ExportItem } from '../ExportItem'
import { ListHeader } from '../ListHeader'

export const ExportList: FC = () => {
  return (
    <>
      <ListHeader type={ListItemType.EXPORT} />
      <StyledExportList>
        {demoExports.map((item) => (
          <ExportItem key={item.id} data={item} />
        ))}
      </StyledExportList>
    </>
  )
}
