// 3 Cria as açoes da page 
///<reference types="cypress" />

const homePage = {
  accessLogin() {
    cy.visit('/');
    cy.get('#top_header');
    cy.get('.fa-user').click();
  },

  accessRegister() {
    cy.visit('/');
    cy.get('#top_header');
    cy.get('.fa-lock').click();
  }
};

export default homePage;

