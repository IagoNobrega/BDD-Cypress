# 🧪 BDD Cypress Automation

Projeto de automação de testes end-to-end utilizando **Cypress** com **BDD (Behavior Driven Development)**, aplicando **Cucumber/Gherkin**, **Page Objects** e boas práticas de automação.

Este projeto tem como objetivo validar os fluxos de **Login** e **Cadastro de Usuário** de uma aplicação web.

---

## 📌 Tecnologias Utilizadas

- **Node.js**
- **Cypress**
- **Cucumber (BDD)**
- **@badeball/cypress-cucumber-preprocessor**
- **JavaScript**
- **Gherkin**
- **Git / GitHub**

---

## 📂 Estrutura do Projeto

```bash
BDD-Cypress
├── cypress
│   ├── e2e
│   │   └── features
│   │       ├── login.feature
│   │       └── register_user.feature
│   ├── support
│   │   ├── pages
│   │   │   ├── home_page.js
│   │   │   ├── login_page.js
│   │   │   └── register_page.js
│   │   └── step_definitions
│   │       ├── login_steps.js
│   │       └── register_steps.js
│   └── fixtures
├── cypress.config.js
├── package.json
└── README.md
🧠 Padrões Aplicados

BDD com Gherkin

Page Object Model (POM)

Reutilização de steps

Separação de responsabilidades

Asserções robustas

Boas práticas de Cypress

🧪 Cenários Automatizados
✅ Login

Login com e-mail vazio

Login com senha vazia

Login com sucesso

✅ Cadastro de Usuário

Campo nome vazio

Campo e-mail vazio

Campo e-mail inválido

Campo senha vazia

Campo senha inválida

Cadastro realizado com sucesso

▶️ Como Executar o Projeto
1️⃣ Instalar dependências
npm install

2️⃣ Abrir Cypress (modo interativo)
npx cypress open

3️⃣ Executar testes em modo headless
npx cypress run

🌐 Aplicação Testada

URL base:
👉 https://automationpratice.com.br

👨‍💻 Autor

Iago Nobrega Araújo
🔹 Analista de Testes / QA
🔹 Automação de Testes com Cypress e BDD

🔗 GitHub:
https://github.com/IagoNobrega

📄 Observações

Este projeto foi desenvolvido com foco em aprendizado, boas práticas de automação e simulação de desafios técnicos reais.

Contribuições e melhorias são bem-vindas 🚀
