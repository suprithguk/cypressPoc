import 'cypress-iframe';
describe('Handling Alerts', () => {
    beforeEach('Open the app', () => {
        //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })
    it('Js alert with only OK button', () => {
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (var1) => {
            expect(var1).to.contain('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('Js confirm alert with OK', () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (var2) => {
            expect(var2).to.contain('I am a JS Confirm')
        })
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })
    it('Js confirm alert with Cancel', () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', () => false) 
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })
    it('Js prompt alert with OK', () => {
        cy.window().then((var3) => {
            cy.stub(var3, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        //cy.on('window:prompt', () => false) // if you want to close the prompt using cancel button
        cy.get('#result').should('have.text', 'You entered: welcome')
    })
    it('Authenticated alerts', () => {
        //approach1
        /*cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
            {
                username:"admin", 
                password:"admin"
            }
        })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')*/
        //approach2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })
    it('iFrames', () => {
        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap) //wraps the iframe into a variable to be able to interact

        iframe.clear().type("Welcome, {cmd+a}")
        //cy.get('').click()
    })
    it('iFrames using custom commands', () => {
        cy.getIframe('#mce_0_ifr').clear().type("Welcome")
    })
    it.only('iFrames using plugin', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Welcome")
    })
})