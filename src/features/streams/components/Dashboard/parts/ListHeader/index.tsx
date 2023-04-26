import type { FC } from 'react'

import { GridIcon } from '@/src/features/ui/icons/GridIcon'
import { ListIcon } from '@/src/features/ui/icons/ListIcon'
import { colors } from '@/styles/colors'

import {
  H1,
  HeaderActionButton,
  StyledListHeader,
  ViewTypeControls,
} from './styled'

import { ListItemType, ViewType } from '../../types'

type Props = {
  type: ListItemType
  view?: ViewType | null
  setView?: ((view: ViewType) => void) | null
}

export const ListHeader: FC<Props> = ({ type, view, setView }) => {
  return (
    <StyledListHeader>
      <H1 data-cy="dashboardListHeader">
        {type === ListItemType.STREAM ? 'Streams and recordings' : 'Exports'}
      </H1>
      {setView ? (
        <ViewTypeControls>
          <HeaderActionButton
            type="button"
            onClick={() => setView(ViewType.GRID)}
            aria-label="Grid layout"
            data-cy="layoutChangeButton"
          >
            <GridIcon
              fill={
                view === ViewType.GRID
                  ? colors.border.dark
                  : colors.border.light
              }
            />
          </HeaderActionButton>
          <HeaderActionButton
            type="button"
            onClick={() => setView(ViewType.LIST)}
            aria-label="List layout"
            data-cy="layoutChangeButton"
          >
            <ListIcon
              fill={
                view === ViewType.LIST
                  ? colors.border.dark
                  : colors.border.light
              }
            />
          </HeaderActionButton>
        </ViewTypeControls>
      ) : null}
    </StyledListHeader>
  )
}

ListHeader.defaultProps = {
  view: null,
  setView: null,
}
