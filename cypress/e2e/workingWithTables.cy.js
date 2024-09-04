describe('Working with tables', () => {
    beforeEach('Login and navigate to customers', () => {
        cy.visit('https://demo.opencart.com/admin')
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()
        cy.wait(15000)
        cy.get("#menu>li:nth-child(6)").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })
    it('No.of rows and columns', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '6')
    })
    it('Read all rows and columns in page 1', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })
        })
    })
    it.only('Pagination', () => {
        cy.get('.col-sm-6.text-end').then((var1) => {
            let myText = var1.text()
            totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)
            cy.log("Total no.of pages ="+totalPages)
        })
    })
})