// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

describe('Valid credentials login', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })

  it('displays right text at heading', () => {
    cy.get('[data-cy="heading"]').should('have.text', 'Sign in')
  })

  context('given correct credentials', () => {
    it('redirects after login', () => {
      cy.url().should('eq', 'http://localhost:3000/')
    })

    it('stores JWT token', () => {
      cy.url().should('eq', 'http://localhost:3000/')

      cy.getAllLocalStorage().then((result) => {
        expect(result['http://localhost:3000']).to.haveOwnProperty('JWTtoken')
      })
    })
  })
})

describe('Protected routes', () => {
  it('does not connect to protected route while not logged in', () => {
    cy.visit('')
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})

export {}
