const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    viewportWidth: 667,
    viewportHeight: 375
  },
});
