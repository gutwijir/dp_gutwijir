import React from 'react'

import { ListHeader } from '../../src/features/streams/components/Dashboard/parts/ListHeader/index'
import { ListItemType } from '../../src/features/streams/components/Dashboard/types'

describe('<ListHeader />', () => {
  it('renders', () => {
    cy.mount(<ListHeader type={ListItemType.STREAM} />)
    cy.get("[data-cy='dashboardListHeader']").should(
      'contain',
      'Streams and recordings'
    )

    cy.mount(<ListHeader type={ListItemType.EXPORT} />)
    cy.get("[data-cy='dashboardListHeader']").should('contain', 'Exports')
  })
})
