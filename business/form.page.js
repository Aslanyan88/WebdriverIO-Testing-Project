const { $ } = require('@wdio/globals');
const BasePage = require('../core/base.page');
const ElementUtils = require('../core/element.utils');

class FormPage extends BasePage {
    get inputEmail () { return $('#email'); }
    get btnSubmit () { return $('#form_submit'); }
    get formMessage () { return $('#content'); }
    get emailError () { return $('.error'); }

    async fillForm (email) {
        await ElementUtils.safeSetValue(this.inputEmail, email);
    }
    
    async submitForm () {
        await ElementUtils.safeClick(this.btnSubmit);
    }
    
    open () { return super.open('forgot_password'); }
}

module.exports = new FormPage();
