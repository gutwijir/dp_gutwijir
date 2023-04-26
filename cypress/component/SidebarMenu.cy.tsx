import React from 'react'

import { SidebarMenu } from '@/src/features/streams/components/StreamingCenter/parts/Sidebar/parts/SidebarMenu'

describe('<SidebarMenu />', () => {
  beforeEach(() => {
    cy.mount(<SidebarMenu setContent={() => null} />)
  })

  it('is open by default', () => {
    cy.get("[data-cy='sidebarMenuChevron']")
      .should('be.visible')
      .should('have.lengthOf', 1)
    cy.get("[data-cy='sidebarMenuItem']")
      .should('be.visible')
      .should('have.lengthOf', 5)
  })

  it('hides menu items on mouse leave', () => {
    //leave menu
    cy.get("[data-cy='sidebarMenu']").trigger('mouseout')

    cy.get("[data-cy='sidebarMenuItem']").should('not.be.visible')
    cy.get("[data-cy='sidebarMenuChevron']").should('be.visible')
  })

  it('shows menu items on hover', () => {
    //hide menu and check that only chevron is visible
    cy.get("[data-cy='sidebarMenu']").trigger('mouseout')
    cy.get("[data-cy='sidebarMenuItem']").should('not.be.visible')
    cy.get("[data-cy='sidebarMenuChevron']").should('be.visible')

    //hover over chevron -> open menu
    cy.get("[data-cy='sidebarMenuChevron']").trigger('mouseover')

    //check that menu opened
    cy.get("[data-cy='sidebarMenuItem']").should('be.visible')
    cy.get("[data-cy='sidebarMenuChevron']").should('be.visible')
  })

  it('highlights first item by default', () => {
    //first one highlighted
    cy.get("[data-cy='sidebarMenuItem'] [data-cy='itemLabel']")
      .first()
      .should('not.have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    //others transparent
    cy.get("[data-cy='sidebarMenuItem'] [data-cy='itemLabel']")
      .filter(':gt(0)')
      .should('have.css', 'background-color')
      .and('eq', 'rgba(0, 0, 0, 0)')
  })

  it('highlights selected item when clicked', () => {
    //transparent first
    cy.get("[data-cy='sidebarMenuItem'] [data-cy='itemLabel']")
      .filter(':eq(2)')
      .should('have.css', 'background-color')
      .and('eq', 'rgba(0, 0, 0, 0)')

    //not transparent after click
    cy.get("[data-cy='sidebarMenuItem'] [data-cy='itemLabel']")
      .filter(':eq(2)')
      .click()
    cy.get("[data-cy='sidebarMenuItem'] [data-cy='itemLabel']")
      .filter(':eq(2)')
      .should('not.have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
})
