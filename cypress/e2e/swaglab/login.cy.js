describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    const usernames = ['standard_user', 'problem_user'];
    const password = 'secret_sauce';

    usernames.forEach((username) => {
        it(`should perform login with username: "${username}"`, () => {
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
        });
    });

    afterEach(() => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});
