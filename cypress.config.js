const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "http://127.0.0.1:8080/#/login",
    defaultCommandTimeout:30000,
    numTestsKeptInMemory:100,
    chromeWebSecurity: false,
    includeShadowDom:true,
    pageLoadTimeout:60000,
    video:false,
    trashAssetsBeforeRuns:true,
    responseTimeout: 60000,
    experimentalInteractiveRunEvents: true
  },
  env: {
    CYPRESS_FLUTTER_HTML_RENDERER: "on"
  }
 
});
