const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'qj2bw2',
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    specPattern: "**/*.feature",

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportTitle: "BDD Test Report",
      reportPageTitle: "BDD Test Report",
    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      require("cypress-mochawesome-reporter/plugin")(on);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});


