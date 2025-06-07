const { $ } = require('@wdio/globals');
const BasePage = require('../core/base.page');
const ElementUtils = require('../core/element.utils');

class LoginPage extends BasePage {
    get inputUsername () { return $('#username'); }
    get inputPassword () { return $('#password'); }
    get btnSubmit () { return $('button[type="submit"]'); }

    async login (username, password) {
        await ElementUtils.safeSetValue(this.inputUsername, username);
        await ElementUtils.safeSetValue(this.inputPassword, password);
        await ElementUtils.safeClick(this.btnSubmit);
    }

    open () { return super.open('login'); }
}

module.exports = new LoginPage();
