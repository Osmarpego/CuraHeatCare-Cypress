const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // Configuración del navegador para que se ejecute en modo incógnito
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Añade el flag para iniciar en modo incógnito
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });
    },
    },
});
