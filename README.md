# realworld-e2e-tests

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) [![End-to-end tests](https://github.com/gothinkster/realworld-e2e-tests/actions/workflows/cypress-workflow.yml/badge.svg)](https://github.com/gothinkster/realworld-e2e-tests/actions/workflows/cypress-workflow.yml)

This repo aims to implement UI tests, similar to those described here:

- https://gothinkster.github.io/realworld/docs/specs/backend-specs/introduction/
- https://github.com/gothinkster/realworld/tree/main/api

Oddly, the tests mostly won't hit a real API for the time being.

This is because the Gothinkster org would need to setup a way to seed data from the frontend test runner and we don't have that yet.

So, since the API spec is well defined [here](https://gothinkster.github.io/realworld/docs/specs/backend-specs/endpoints), every API response will be stubbed instead.

## Setup

```bash
yarn install
yarn cy:open # run interactive
yarn cy:run # run headless

yarn report:all # for GUI output. Then open ./cypress/reports/html/mochawesome-bundle.html  
```

## Test report outputs

Multiple test reports are set up for the Cypress tests.

- Terminal report when executing the Cypress tests.
  ![terminal test report](./assets/terminalReport.jpg)

- MochAwesome HTML report. Report is build with `yarn report:all` and you can find it locally under `cypress/reports/html/mochawesome-bundle.html`
  ![HTML test report](./assets/htmlReport.jpg)

- During a test run for each test spec Xml files are created under `./test/cypress/results`.

Under `reporter-config.json` you can find all settings for the test report. More information to the reporter options are [here](https://docs.cypress.io/guides/tooling/reporters.html).
