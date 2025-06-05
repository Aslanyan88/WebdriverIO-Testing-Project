# WebdriverIO Testing Project

Hey there! Welcome to my WebdriverIO testing framework. I've built this to showcase how to use WebdriverIO along with the powerful Chai assertion library to create reliable automated tests.

## Getting Started

Setting up is super easy:
1. Clone this repo to your machine
2. Run `npm install` to grab all the dependencies
3. You're ready to go!

## About Chai - My Assertion Library of Choice

I've integrated Chai into this project because it's incredibly flexible and gives us multiple ways to write assertions. Depending on your preferences, you can use any of these three styles:

### Assert Style (TDD)
This is the classic testing style many developers are familiar with:
```javascript
assert.equal(actual, expected, 'Values should match');
assert.isTrue(value, 'This should be true');
```

### Should Style (BDD)
For a more natural language feel, the should interface is nice:
```javascript
username.should.equal('admin');
loginButton.should.be.visible;
```

### Expect Style (BDD)
My personal favorite for its readability and flexibility:
```javascript
expect(loginPage.errorMessage).to.contain('Invalid credentials');
expect(dashboard.userInfo).to.exist;
```

### What's the Difference?

I've found that:
- Assert works great if you're coming from other testing frameworks
- Should feels natural to write but can sometimes cause issues in certain environments 
- Expect offers the best balance of readability and reliability

You can see all these styles in action in the test files I've created.

## Running Your Tests

I've set up several npm scripts to make running tests easy:

- Run everything: `npm test`
- Chrome only: `npm run test:chrome`
- Firefox only: `npm run test:firefox`
- Safari only: `npm run test:safari`
- Run tests in parallel: `npm run test:parallel`

## Cool Features

- Tests run in all major browsers (Chrome, Firefox, Safari)
- Parallel execution to save time
- Automatic retries when tests fail
- BDD-style tests that are easy to read

## Project Organization

I've structured everything logically:
- Tests live in `test/specs/`
- Page objects are in `test/pageobjects/`
- Main config is in `wdio.conf.js`

Happy testing!
