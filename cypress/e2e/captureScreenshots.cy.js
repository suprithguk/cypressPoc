describe('My Test Suite', () => {
    it('Capture screenshots', () => {
        cy.visit('https://demo.opencart.com/')
        cy.screenshot("filename")

        cy.get("img[title='Your Store']").screenshot("filename1") //screenshot of a logo only
    })
})