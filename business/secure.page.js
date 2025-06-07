const { $ } = require('@wdio/globals');
const BasePage = require('../core/base.page');

class SecurePage extends BasePage {
    get flashAlert () { return $('#flash'); }
}

module.exports = new SecurePage();
