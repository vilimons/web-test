/// <reference types='Cypress' />

describe('Visit the index and verify its content', () => {
    beforeEach(() => {
        cy.visit('https://demo.reactstorefront.io/');
    });

    it('should verify the main page content', () => {
        cy.get('.MuiTypography-root').should('have.text', "Welcome to your new React Storefront app.");
    });

    it('should click the button and redirect to the main page', () => {
        cy.get('a[aria-label="logo"] > svg').click();
        cy.location('pathname').should('eq', '/');
    });
});