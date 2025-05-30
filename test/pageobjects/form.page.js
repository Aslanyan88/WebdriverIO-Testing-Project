const { $ } = require('@wdio/globals')
const Page = require('./page');

class FormPage extends Page {
    get inputEmail () {
        return $('#email');
    }

    get btnSubmit () {
        return $('#form_submit');
    }
    
    get formMessage () {
        return $('#content');
    }
    
    get emailError () {
        return $('.error');
    }

    async fillForm (email) {
        await this.inputEmail.setValue(email);
    }
    
    async submitForm () {
        await this.btnSubmit.click();
    }

    open () {
        return super.open('forgot_password');
    }
}

module.exports = new FormPage();
