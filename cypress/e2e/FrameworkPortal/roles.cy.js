
require('cypress-xpath')
describe('Add Role', () => {
    it('user can add new role ', () => {
        cy.visit('https://hq.it-cores.com:8800/');
        cy.get(':nth-child(1) > :nth-child(2) > .formInput').type('admin');
        cy.get('.group-control > :nth-child(2) > .w-100').type('@dm!n@C0r$951%');
        cy.get('.col-12 > .w-100').click();
        cy.xpath("//span[normalize-space()='User Mangement']").click({force: true});
        cy.xpath("//a[@href='/users-management/roles']").click({force: true});
        cy.xpath("//span[normalize-space()='Create New']").click({force: true});
        cy.xpath("//span[@aria-label='Module Name']").click({force: true});
        cy.xpath("//div[contains(text(),'System')]").click({force: true});
        cy.xpath("//input[@name='nameEn']").type("NewRole1");
        cy.xpath("//input[@name='nameAr']").type("نيو رول 1");
        // Set as default role for sign-up ?
        // cy.xpath("//span[@class='p-inputswitch-slider']").click

        cy.xpath("(//div[@role='checkbox'])[1]").click();
        cy.xpath("//h5[normalize-space()='Dashboard']").should("be.visible");
      //  cy.xpath("(//div[@role='checkbox'])[2]").click();

        cy.xpath("(//div[@role='checkbox'])[3]").click();
        cy.xpath("//h5[normalize-space()='Master Data']").should("be.visible");
        cy.xpath("(//div[@role='checkbox'])[4]").click();
        cy.xpath("//h5[normalize-space()='Settings']").should("be.visible");
        cy.xpath("//h5[normalize-space()='User Mangement']").should("not.exist");
        cy.xpath("//span[normalize-space()='Save']").click();
    });
})
