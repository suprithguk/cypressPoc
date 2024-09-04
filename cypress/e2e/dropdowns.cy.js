describe('Working with dropdowns', () => {
    it.skip('Select option', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')    
    })
    it.skip('Bootstrap dropdown, without select option', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        //cy.get('input.select2-search__field').type('Japan').type('{enter}')
        //cy.get('#select2-billing_country-container').should('have.text', 'Japan')
        cy.get('input.select2-search__field')
        .type('India')
        .type('{downArrow}')
        .type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'India')
    })
    it.skip('auto suggested drop downs', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestions-dropdown').contains('University').click()
    })
    it('auto suggested drop downs', () => {
        cy.visit('https://www.google.com')
        cy.get("input[name='q']").type('Cypress')
        cy.get('div.wM6W7d>span').each(($el, index, $list) =>{
            
        })
    })
})