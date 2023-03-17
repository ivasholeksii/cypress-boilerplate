describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should perform login', () => {
        const usernames = [
            'standard_user',
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
        ];
        const password = 'secret_sauce';

        usernames.forEach((username) => {
            cy.get('#user-name')
                .clear()
                .type(username)
                .should('have.value', username);

            cy.get('#password')
                .clear()
                .type(password)
                .should('have.value', password);

            cy.get('#login-button').click();

            cy.url().should('include', '/inventory.html');

            cy.get('.inventory_item_description')
                .find('.pricebar')
                .should('have.length', 6);
        });
    });
});
