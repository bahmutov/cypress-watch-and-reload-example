/// <reference types="Cypress" />

context('Example Cypress test', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('has header', function () {
    cy.contains('h2', 'simple HTML page')
  })
})
