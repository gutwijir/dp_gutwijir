// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

//TODO find solution for using nextjs-routes; fails when using import like the ones from https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/fundamentals__node-modules/cypress/e2e/es2015-commonjs-modules-spec.cy.js

import { baseUrl, homeUrl, loginUrl } from '../support/constants'

describe('Persisted info after login', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', `${homeUrl}`)
  })

  it('stores JWT token', () => {
    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('JWTtoken')
    })
  })

  it('stores user data', () => {
    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('user')
    })
  })
})

describe('Persisted info after refresh', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', homeUrl)
  })

  it('stores JWT token', () => {
    cy.reload()

    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('JWTtoken')
    })
  })

  it('stores user data', () => {
    cy.reload()

    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('user')
    })
  })
})

describe('Persisted sidebar width after resize', () => {
  it('stores sidebar width after drag', () => {
    const testingResizeEnd = 400

    //log in and check validity
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', homeUrl)

    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('JWTtoken')
    })

    //click on the first card of recordings to transfer to streaming center
    cy.get("[data-cy='videoCardRecording']").first().click()

    //calculate width of drag zone for exact calculation of where resizing actually ends
    let dragZoneWidth = 0
    cy.get("[data-cy='sidebarDragZone']").then((dragZone) => {
      //clientWidth (width without border) still contains paddings, but content with needed
      dragZoneWidth =
        dragZone.get(0).clientWidth -
        parseInt(getComputedStyle(dragZone.get(0)).paddingLeft, 10) -
        parseInt(getComputedStyle(dragZone.get(0)).paddingRight, 10)
    })

    //move with sidebar drag zone
    cy.get("[data-cy='sidebarDragZone']").trigger('mousedown')
    cy.get("[data-cy='streamingCenter']").trigger('mousemove', {
      clientX: testingResizeEnd,
    })
    cy.get("[data-cy='sidebarDragZone']").trigger('mouseup')

    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('resizeEnd')
      expect(result[baseUrl]['resizeEnd']).equal(
        String(testingResizeEnd + dragZoneWidth)
      )
    })

    //test persistance over reload
    cy.reload()

    cy.getAllLocalStorage().then((result) => {
      expect(result[baseUrl]).to.haveOwnProperty('resizeEnd')
      expect(result[baseUrl]['resizeEnd']).equal(
        String(testingResizeEnd + dragZoneWidth)
      )
    })
  })
})

describe('Deleted persisted info after logout', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.url().should('eq', homeUrl)
  })

  it('deletes everything from LocalStorage', () => {
    cy.get('[data-cy="logoutButton"]').click()

    cy.url().should('eq', loginUrl)

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.not.haveOwnProperty(baseUrl)
    })
  })
})
