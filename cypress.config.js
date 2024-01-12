const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
    },

  projectId: 'matkmn',

  //projectId: "matkmn"
  //npx cypress run --record --key dd780cf0-dbc1-486e-be6f-a3f895c9e889
  "video":true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
