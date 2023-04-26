// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

import { homeUrl } from '../support/constants'

describe('Sidebar content switching', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })

  it('logs in', () => {
    cy.url().should('eq', homeUrl)
  })

  it('navigates to streaming center', () => {
    cy.get("[data-cy='videoCardRecording']").first().click()
  })

  it('switches menu content', () => {
    //navigate to stream list
    cy.get("[data-cy='videoCardRecording']").first().click()

    //click on notes
    cy.get("[data-cy='itemLabel']").eq(1).click()
    cy.get("[data-cy='notesComponent']").should('be.visible')

    //switch to test script and validate content change
    cy.get("[data-cy='itemLabel']").eq(2).click()
    cy.get("[data-cy='testScriptComponent']").should('be.visible')
    cy.get("[data-cy='notesComponent']").should('not.exist')

    //switch to export setup and validate content change
    cy.get("[data-cy='itemLabel']").eq(3).click()
    cy.get("[data-cy='exportSetupComponent']").should('be.visible')
    cy.get("[data-cy='testScriptComponent']").should('not.exist')
  })
})
