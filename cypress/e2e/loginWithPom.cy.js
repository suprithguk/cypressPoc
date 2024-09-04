import loginTest from "../PageObjects/loginTest";

describe('Demonstrating login witn POM', () => {
    it('login usingg fixture and plain json', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('orangehrm').then((data) => {
            const var1=new loginTest()
            var1.setUsername(data.username)
            var1.setPassword(data.password)
            var1.clickSubmit()
            var1.validateLogin()
        })
    })
    it.only('login using cypress env var', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[placeholder='Password']").type(password, {log:false})
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text', 'Dashboard')
    })
})