/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const path = require("path");

module.exports = (on, config) => {
  // Options for the output plugin (cypress-terminal-report)
  const options = {
    printLogsToConsole: "onFail",
    outputRoot: config.projectRoot + "/",
    // Used to trim the base path of specs and reduce nesting in the
    // generated output directory.
    specRoot: path.relative(config.fileServerFolder, config.integrationFolder),
    outputTarget: {
      "cypress-logs|json": "json",
    },
  };

  // Register the output plugin (cypress-terminal-report)
  require("cypress-terminal-report/src/installLogsPrinter")(on, options);
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });
};
