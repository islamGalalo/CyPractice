describe('verify user sign up',() =>{
it ('verify user can sign up successfully ' , ()=>{
    cy.visit('https://hq.it-cores.com:8800/');
    cy.get('.justify-content-center > .text-center > .cursor-pointer').click();
    cy.get('.p-dropdown-trigger').click();
    cy.get('#pn_id_4_0 > .ng-star-inserted').click() ;
    cy.get('.gap-3 > :nth-child(2) > :nth-child(2) > .formInput').type('username');
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .formInput').type('firstname');
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2) > .formInput').type('lastname');
    cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .formInput').type('1211212222');
    cy.get('.gap-3 > :nth-child(4) > :nth-child(2) > :nth-child(2) > .formInput').type('555222333');
    cy.get(':nth-child(4) > :nth-child(3) > :nth-child(2) > .formInput').type('email@email.com'); 
    cy.get('.p-calendar > .ng-tns-c419082668-2').click().type('2020-03-26');
    cy.get(':nth-child(5) > :nth-child(2) > .w-100').type('111111');
    cy.get(':nth-child(6) > :nth-child(2) > .w-100').type('111111');
    cy.get('.btn-full-width > a').click();


})
 
})