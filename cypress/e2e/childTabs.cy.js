describe('Child Tabs', () => {
    beforeEach('Setting the dimensions', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        //cy.viewport(1280, 720)
        //cy.viewport('iphone-5')
    })
    //approach 1
    it('Remove web attribute in runtime', () => {
        cy.get('.example>a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    })
    //approach 2
    it.only('Capturing the href attribute', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((var1) => {
            let targetUrl = var1.prop('href')
            cy.visit(targetUrl)
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        })
    })
})