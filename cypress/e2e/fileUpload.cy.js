import 'cypress-file-upload';

describe('File upload tests', () => {
    it('Single file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Report.pdf')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })
    it('Multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Report.pdf', 'Report copy.pdf'])
        cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:')
    })
    it('Single file upload, rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'Report.pdf', fileName:'myReport.pdf'})
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })
    it('Drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("Report.pdf", {subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Report.pdf')  
    })
    it.only('Shadow dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('Report.pdf')
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('Report.pdf')
    })
})