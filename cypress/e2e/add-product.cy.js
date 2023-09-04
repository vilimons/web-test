/// <reference types="Cypress" />

describe('Testing shopping cart funcionalities', () => {
    beforeEach(() => {
        cy.visit('https://demo.reactstorefront.io/')
    })

    it('should click on the category and add items to the cart', () => {
        cy.get('[href="/s/1"] > .MuiTab-wrapper').click()
        cy.get('#item-0').click()

        cy.url().should('include', 'p/1')
        cy.get('.MuiGrid-container > :nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.jss253').contains('Product 1')
        cy.get('.jss254').contains('Qty: 1')
        cy.get('.jss252').contains('$10.99')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
    })
})