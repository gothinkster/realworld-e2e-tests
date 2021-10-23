# realworld-e2e-tests

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) [![End-to-end tests](https://github.com/gothinkster/realworld-e2e-tests/actions/workflows/cypress-workflow.yml/badge.svg)](https://github.com/gothinkster/realworld-e2e-tests/actions/workflows/cypress-workflow.yml)

## Test reports

Multiple test reports are set up for the Cypress tests.

- Terminal report when executing the Cypress tests.
  ![terminal test report](./assets/terminalReport.jpg)

- MochAwesome HTML report. Report is build with `yarn report:all` and you can find it locally under `cypress/reports/html/mochawesome-bundle.html`
  ![HTML test report](./assets/htmlReport.jpg)

- During a test run for each test spec Xml files are created under `dylan/data/test/cypress/results`.

Under `reporter-config.json` you can find all settings for the test report. More information to the reporter options are [here](https://docs.cypress.io/guides/tooling/reporters.html).
