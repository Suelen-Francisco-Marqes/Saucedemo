const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reporteEnabled: 'cypress-mochawesome-reporter, mocha-junit-reeporter',

      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/junit/results-[hash].xml'
      },

      cypressMochawesomeReporterReporterOptions: {
        charts: true,
        reportpageTitle: 'Relatório de testes',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAtempts: false,

        reportDir: 'cypress/reports/html',
        overwrite: false,
        html: true,
        json: true

      }

  },

  chromeWebSecurity: false,
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here

      return config;

    },
  },
});
