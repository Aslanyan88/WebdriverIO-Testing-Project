const { browser } = require('@wdio/globals');

class BasePage {
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}

module.exports = BasePage;
