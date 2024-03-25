class PageOne {
    getUsername(){
        return cy.get('#name')
    }
    getUserEmail(){
        return cy.get('#email')
    }

    getUserPhone(){
        return cy.get('#phone')
    }
    getUserAddress(){
        return cy.get('#textarea')
    }
    chooseGender(){
        return cy.get('#male000')
    }
}
export default PageOne