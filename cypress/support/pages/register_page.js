///<reference types="cypress" />

const registerPage = {
  fillName(name) {
    cy.get('#user')
      .clear()
      .type(name);
  },

  fillEmail(email) {
    cy.get('#email')
      .clear()
      .type(email);
  },

  fillPassword(password) {
    cy.get('#password')
      .clear()
      .type(password);
  },

  clickRegister() {
    cy.get('#btnRegister').click();
  },

  checkErrorMessage(message) {
    cy.get('#errorMessageFirstName')
    .should('be.visible')
    .and('contain.text', message);


  },

  checkSuccessMessage() {
    cy.get('#swal2-title')
      .should('be.visible')
      .and('contain.text', 'Cadastro realizado');

    cy.get('#swal2-html-container')
      .should('be.visible');
  }
};

export default registerPage;
