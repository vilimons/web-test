/// <reference types="Cypress" />

describe('Products should change its colours and sizes', () => {
    it('subcategory should contain the correct label', () => {
        cy.visit('https://demo.reactstorefront.io/')
        cy.get('[href="/s/2"]').click()
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiTypography-root').contains('Subcategory 2')
        cy.get('#item-2').click()
        
        cy.url().should('include', 'p/3')

        cy.get(':nth-child(2) > .jss74 > .jss109 > .jss115').click()
        cy.get(':nth-child(1) > [style="align-items: center; justify-content: flex-start; flex-direction: row; margin-bottom: 10px;"] > :nth-child(2) > span')
          .should('have.text', 'Green')

        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.MuiGrid-container > :nth-child(2) > .jss74').should('have.text', 'SIZE: LG')
        cy.get('[style="padding-bottom: 8px;"] > .jss193 > .MuiTypography-h6').should('have.text', 'Product 3')
        
        cy.get('.jss249').should('have.value', 1)
        cy.get('.jss248').click()
        cy.get('.jss249').should('have.value', 2)

    })
})