///<reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import register_page from "../pages/register_page";

const name = "Iago";
const email = "iago@teste.com";
const password = "123456";

Given("I am on Register screen", () => {
  home_page.accessRegister();
});

Given("I fill name", () => {
  register_page.fillName(name);
});

Given("I fill e-mail {string}", (email) => {
  register_page.fillEmail(email);
});

Given("I fill password {string}", (password) => {
  register_page.fillPassword(password);
});

Given("I fill my register data", () => {
  register_page.fillName(name);
  register_page.fillEmail(email);
  register_page.fillPassword(password);
});

When("I click on Register", () => {
  register_page.clickRegister();
});

Then("I see message {string} on Register", (message) => {
  register_page.checkErrorMessage(message);
});

Then("I see success message on Register", () => {
  register_page.checkSuccessMessage();
});
