describe('Test Suite', () => {
    it('Handling links', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("APPLE MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })
    it.only('Login command test', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("Log In")
        cy.loginApp("testing@gmail.com", "testing123")
    })
})