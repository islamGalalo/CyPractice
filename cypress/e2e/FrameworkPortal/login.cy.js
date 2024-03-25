describe('Login page', () => {
it ('verify user can login successfully ' , ()=> {
    cy.visit('https://hq.it-cores.com:8800/');
    cy.get(':nth-child(1) > :nth-child(2) > .formInput').type('admin');
    cy.get('.group-control > :nth-child(2) > .w-100').type('@dm!n@C0r$951%');
    cy.get('.col-12 > .w-100').click();
})
})
