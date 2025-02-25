Prerequisites:
    Install Node.JS and initialize
    Install Cypress : npm install cypress

Execution:
    For the web app test suite, 
        use the following command for command line execution:
            npx cypress run --spec cypress/integrations/examples/testV2.js
        Alternatively to execute in Cypress runner:
            npx cypress open
            Choose E2E Testing -> Start E2E testing in Electron
            Click on testV2
    For API test suite, [Please note- 1 test will always fail since we are expecting 404 response but are receiving 200 response]
        use the following command for command line execution:
            npx cypress run --spec cypress/integrations/examples/api.js
        Alternatively, for Cypress runner, follow the steps mentioned for the web test suite but chose the API file

Relevant Folders in the project:
    cypress/integrations/examples/testV2.js
        Main spec file containing the 3 automated test cases
    cypress/support/command.js
        File containing the code for the parameterized custom function which conatins the main logic and assertions of our test
    cypress/fixtures/testV2Data.json
        File containing the relevant data for the tests
    cypress/PageObjects/testV2Page.js
        File containing all the page objects for our tests
    cypress/cypress.config.js
        Project config file containing the spec pattern and overridden settings

Future framework scope:
    Installing mochawesome plugin for reporting
    Connecting with Cypress Cloud for data analytics

Note: Not adding node_modules to gitignore in case there are specific dependencies identified.
