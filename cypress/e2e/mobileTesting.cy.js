describe('Mobile Test Cases', () => {
    it('Test with invalid creds', () => {
        cy.viewport('iphone-x')
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type('test')
        cy.get('#txt-password').type('test')
        cy.get('#btn-login').click()
    })
})