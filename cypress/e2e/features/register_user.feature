Feature: Register User
  Eu como cliente
  Quero me cadastrar na aplicação
  Para fazer um pedido de compra

  Background: Access Register screen
    Given I am on Register screen

  Scenario: Campo nome vazio
    When I click on Register
    Then I see message "O campo nome deve ser prenchido" on Register


  Scenario: Campo email vazio
    And I fill name
    When I click on Register
    Then I see message "O campo e-mail deve ser prenchido corretamente" on Register

  Scenario: Campo email inválido
    And I fill name
    And I fill e-mail "invalidEmail"
    When I click on Register
    Then I see message "O campo e-mail deve ser prenchido corretamente" on Register

  Scenario: Campo senha vazio
    And I fill name
    And I fill e-mail "iago@teste.com"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on Register

  Scenario: Campo senha inválida
    And I fill name
    And I fill e-mail "iago@teste.com"
    And I fill password "123"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on Register
