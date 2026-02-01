#1 Criar um cenário
Feature: Login
    Eu como clinete
    Quero fazer login na aplicação
    Para fazer um pedido de compra 

  Scenario: Login com campo e-mail vazio
    Given I am on Login screen
    When I click on Login
    Then I see the message "E-mail inválido."

  Scenario: Login com campo senha vazio
    Given I am on Login screen
    And I fill e-mail
    When I click on Login
    Then I see the message "Senha inválida."

  Scenario: Login com sucesso
    Given I am on Login screen
    And I fill my credencials
    When I click on Login
    Then I see success message
