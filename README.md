# Guild Cypress Test Suite
The purpose of this test suite is to show my abilities towards automating a smoke test against the Guild Education website.

## Setup
This requires that node.js and npm be pre-installed.

`npm ci` to istall dependencies.

## Testing
To run the tests, the url for the guild website needs to be providedvia an environemnt variable.
`export CYPRESS_baseUrl="https://..."`

`npm run cy:open` to run through the cypress UI
`npm run cy:test` to run in headless mode

