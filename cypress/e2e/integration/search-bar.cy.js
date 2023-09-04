/// <reference types="Cypress" />

describe('Verifying search bar functionality', () => {
    beforeEach(() => {
        cy.visit('https://demo.reactstorefront.io/');
    });
    
    it('should click the search bar and search for a product', () => {
        const searchTerm = 'Product';

        cy.get('.search-desktop-jss4').click();
        cy.get('.jss67').type(searchTerm).type('{enter}');

        cy.url().should('include', `/search?q=${encodeURIComponent(searchTerm)}`);
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiTypography-root').contains(searchTerm);
    });
});