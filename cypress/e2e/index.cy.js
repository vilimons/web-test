/// <reference types='Cypress' />

describe('Visit the index and verify its content', () => {
    it('should visit the index and verify its contents', () => {
        cy.visit('https://demo.reactstorefront.io/');
        
    })
    it('should click the button and redirect to the main page', () => {
        cy.visit('https://demo.reactstorefront.io/');
        cy.get('a[aria-label="logo"] > svg').click();
    })
    it('should verify the text on the main page', () => {
        cy.visit('https://demo.reactstorefront.io/');
        cy.get('.MuiTypography-root').should('have.text', "Welcome to your new React Storefront app.");
    })
    it('should click the search bar and verify its content', () => {
        cy.visit('https://demo.reactstorefront.io/');
        cy.get('.search-desktop-jss4').click()
        cy.get(':nth-child(1) > .jss79 > .jss80').should('have.text', 'Suggested Searches')
        cy.get(':nth-child(1) > .jss79 > .jss81 > :nth-child(1) > a > div > .MuiTypography-root').should('have.text', 'Small ')
        cy.get(':nth-child(1) > .jss79 > .jss81 > :nth-child(2) > a > div > .MuiTypography-root').should('have.text', 'Large ')
        cy.get(':nth-child(1) > .jss79 > .jss81 > :nth-child(3) > a > div > .MuiTypography-root').should('have.text', ' with red stripes')
        cy.get(':nth-child(2) > .jss79 > .jss80').should('have.text', 'Suggested Categories')
        cy.get(':nth-child(2) > .jss79 > .jss81 > :nth-child(1) > a > div > .MuiTypography-root').should('have.text', 'Category 1')
        cy.get(':nth-child(2) > .jss79 > .jss81 > :nth-child(2) > a > div > .MuiTypography-root').should('have.text', 'Category 2')
        cy.get(':nth-child(2) > .jss79 > .jss81 > :nth-child(3) > a > div > .MuiTypography-root').should('have.text', 'Category 3')
        cy.get(':nth-child(3) > .jss79 > .jss80').should('have.text', 'Suggested Products')
        cy.get(':nth-child(1) > a > [data-ui="thumbnails"] > .MuiTypography-root').should('have.text', 'Product 1')
        cy.get(':nth-child(2) > a > [data-ui="thumbnails"] > .MuiTypography-root').should('have.text', 'Product 2')
        cy.get(':nth-child(3) > a > [data-ui="thumbnails"] > .MuiTypography-root').should('have.text', 'Product 3')
        cy.get(':nth-child(4) > a > [data-ui="thumbnails"] > .MuiTypography-root').should('have.text', 'Product 4')
        cy.get(':nth-child(5) > a > [data-ui="thumbnails"] > .MuiTypography-root').should('have.text', 'Product 5')
    })

})