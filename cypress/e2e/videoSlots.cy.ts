// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

import { homeUrl } from '../support/constants'

describe('Layout switching', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', homeUrl)
    cy.get("[data-cy='videoCardRecording']").first().click()

    //stub any video requests with test video
    cy.intercept('*video*', { fixture: 'media/test-video.mp4,null' })
  })

  it('adds video to one-slot layout', () => {
    cy.get("[data-cy='availableDataSource']").first().click()
  })

  it('switches layouts', () => {
    cy.get("[data-cy='itemLabel']").eq(4).click()

    //select layout of three screens
    cy.get("[data-cy='layoutOption']").eq(3).click()

    //verify that truly three screens popped out
    cy.get("[data-cy='streamLayout'] > [data-cy='videoSlot']").should(
      'have.lengthOf',
      3
    )
  })
})

describe('Layout filling and working', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', homeUrl)
    cy.get("[data-cy='videoCardRecording']").first().click()

    //stub any video requests with test video
    cy.intercept('*video*', { fixture: 'media/test-video.mp4,null' })

    //select layout switching on menu
    cy.get("[data-cy='itemLabel']").eq(4).click()

    //select layout of three screens
    cy.get("[data-cy='layoutOption']").eq(3).click()

    //verify that truly three screens popped out
    cy.get("[data-cy='streamLayout'] article").should('have.lengthOf', 3)
  })

  it('fills layout', () => {
    cy.get("[data-cy='availableDataSource']").first().click()
    cy.get("[data-cy='availableDataSource']").eq(2).click()
    cy.get("[data-cy='availableDataSource']").eq(3).click()
  })

  it('shows options on hover over full slot', () => {
    //fill layout
    cy.get("[data-cy='availableDataSource']").first().click()
    cy.get("[data-cy='availableDataSource']").eq(2).click()
    cy.get("[data-cy='availableDataSource']").eq(3).click()

    //options invisible
    cy.get("[data-cy='videoSlot']")
      .first()
      .within(() => {
        cy.get("[data-cy='videoSlotLabel']").should('not.be.visible')

        cy.get("[data-cy='videoSlotCloseButton']").should('not.be.visible')
      })

    //hover over first slot using cypress-real-events plugin (testing of :hover pseudo-class not supported by Cypress natively yet)
    cy.get("[data-cy='videoSlot']").first().realHover()

    //options visible
    cy.get("[data-cy='videoSlot']")
      .first()
      .within(() => {
        cy.get("[data-cy='videoSlotLabel']").should('be.visible')

        cy.get("[data-cy='videoSlotCloseButton']").should('be.visible')
      })
  })

  it('empties slot when close button clicked over full slot', () => {
    //fill layout
    cy.get("[data-cy='availableDataSource']").first().click()
    cy.get("[data-cy='availableDataSource']").eq(2).click()
    cy.get("[data-cy='availableDataSource']").eq(3).click()

    //video exists in the first slot
    cy.get("[data-cy='videoSlot']")
      .first()
      .within(() => {
        cy.get('video').should('exist')
      })

    cy.get("[data-cy='videoSlot']").first().realHover()

    //delete the video
    cy.get("[data-cy='videoSlot']")
      .first()
      .within(() => {
        cy.get("[data-cy='videoSlotCloseButton']").click()
        cy.get('video').should('not.exist')
      })
  })
})
