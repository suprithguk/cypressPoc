describe("Playing with radio buttons and check boxes", ()=> {
    it("Radio buttons", ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('xpath').check().should(be.checked)
    })
    it('Check Boxes', () => {
        cy.visit("")
        cy.get('xpath').check().should(be.checked)
        cy.get('xpath').first().check()
    })
})