require('cypress-xpath')
describe('add department page', () => {
    it('verify user can login successfully ', () => {
        cy.visit('https://hq.it-cores.com:8800/');
        cy.get(':nth-child(1) > :nth-child(2) > .formInput').type('admin');
        cy.get('.group-control > :nth-child(2) > .w-100').type('@dm!n@C0r$951%');
        cy.get('.col-12 > .w-100').click();
        cy.xpath("//span[normalize-space()='Master Data']").click({force: true});
        cy.xpath("//span[normalize-space()='Departments']").click({force: true});
        cy.xpath("//span[normalize-space()='Create New']").click({force: true});
        cy.get("input[placeholder='English Description']").type("desc1");
        cy.get("input[placeholder='Arabic Description']").type("desc2");
        cy.xpath("//span[normalize-space()='Save']").click({force: true});
    })
})
 