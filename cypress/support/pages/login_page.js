// 3- cria as açoes da page
///<reference types="cypress" />

const loginPage = {
  fillEmail(email) {
    cy.get("#user").type(email);
  },

  fillPassword(password) {
    cy.get("#password").type(password);
  },

  doLogin() {
    cy.get("#btnLogin").click();
  },

  checkErrorMessage(message) {
    cy.get(".invalid_input")
      .should("be.visible")
      .should("have.text", message);
  },

  checkSuccessMessage(email) {
  cy.get('#swal2-title')
    .should('be.visible')
    .should('contain.text', 'Login realizado');

  cy.get('#swal2-html-container')
    .should('be.visible')
    .should('contain.text', `Olá, ${email}`);
}

};

export default loginPage;

