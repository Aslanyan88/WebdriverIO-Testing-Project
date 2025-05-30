# WebdriverIO Testing Project

This project demonstrates automated testing using WebdriverIO.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

## Running Tests

The following commands are available to run tests:

- Run all tests in all browsers:
  ```
  npm test
  ```

- Run tests in Chrome only:
  ```
  npm run test:chrome
  ```

- Run tests in Firefox only:
  ```
  npm run test:firefox
  ```

- Run tests in Safari only:
  ```
  npm run test:safari
  ```

- Run tests in parallel (using 2 instances):
  ```
  npm run test:parallel
  ```

## Features

- Tests run in headless mode in Chrome, Firefox, and Safari browsers
- Parallel test execution with 2 instances
- Test retry functionality (tests run up to 2 times before failing)
- BDD-style test scenarios

## Project Structure

- `wdio.conf.js` - WebdriverIO configuration file
- `test/specs/` - Test specifications in BDD format
- `test/pageobjects/` - Page Object pattern implementation

## Requirements Completed

1. WebdriverIO setup and configuration
2. Creation of BDD-style test scenarios
3. Test execution in different browsers (Chrome, Firefox, Safari)
4. Parallel test execution
5. Tests run in headless mode
6. Auto-retry functionality for failed tests
