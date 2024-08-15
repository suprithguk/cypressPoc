describe('Working with assertions', () => {
  it('implicit assertions', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('include', 'cypress.io')
  })
})