import * as NextRouter from 'next/router'
import React from 'react'

import { Header } from '@/src/features/ui/Header'

describe('<Header />', () => {
  beforeEach(() => {
    //simulate router environment
    const pathname = 'some-path'
    const push = cy.stub()
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push })

    cy.mount(<Header isDashboardHeader />)
  })

  it('has correct menu items', () => {
    cy.get("[data-cy='headerNavigation']").should('exist')
    cy.get("[data-cy='headerNavigation'] button").should('have.lengthOf', 2)
    cy.get("[data-cy='headerNavigation'] button")
      .eq(0)
      .should('have.text', 'Streams & Recordings')
    cy.get("[data-cy='headerNavigation'] button")
      .eq(1)
      .should('have.text', 'Exports')
  })

  it('has correct log out button content', () => {
    cy.get("[data-cy='logoutButton']")
      .should('exist')
      .should('have.attr', 'aria-label', 'Log out')
      .trigger('mouseover')
  })

  it('has correctly working logout button tooltip', () => {
    cy.get("[data-cy='logoutButton']")
    cy.get("[data-cy='tooltipText']").should('not.be.visible')

    cy.get("[data-cy='logoutButton']").trigger('mouseover')
    cy.get("[data-cy='tooltipText']").should('be.visible')

    cy.get("[data-cy='logoutButton']").trigger('mouseout')
    cy.get("[data-cy='tooltipText']").should('not.be.visible')
  })
})
