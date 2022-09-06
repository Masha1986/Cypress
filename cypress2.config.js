const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        
    },
    viewportWidth: 768,
    viewportHeight: 1024
  },
});