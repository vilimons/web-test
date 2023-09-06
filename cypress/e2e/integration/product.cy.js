describe('Testing products functionalities', () => {
    beforeEach(() => {
        cy.visit('https://demo.reactstorefront.io/')
    })

    it('should click on the category and add items to the cart', () => {
        cy.get('[href="/s/1"] > .MuiTab-wrapper').click()
        cy.get('#item-0').click()

        cy.url().should('include', 'p/1')
        cy.get('.MuiGrid-container > :nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()

        cy.get('.MuiContainer-root > :nth-child(1) > .MuiTypography-root').should('have.text', 'My Cart (1 item)')
    })

    it('should remove items when required', () => {
        cy.visit('https://demo.reactstorefront.io/cart')
        cy.get(':nth-child(1) > .jss70').click()
        cy.get(':nth-child(1) > .MuiButton-label').click()
        cy.get('.MuiGrid-root > .MuiTypography-root').should('have.text', 'There are no items in your cart')
    })
})