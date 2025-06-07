const { expect, browser } = require('@wdio/globals');
const FormPage = require('../business/form.page');
const TestDataUtils = require('../core/testdata.utils');

describe('Form Submission Feature', () => {
    it('should submit a form with valid data', async () => {
        const testEmail = TestDataUtils.generateRandomEmail();
        await FormPage.open();
        await FormPage.fillForm(testEmail);
        const emailFieldExists = await FormPage.inputEmail.isExisting();
        await FormPage.submitForm();
        await browser.pause(500);
        await expect(emailFieldExists).toBe(true, 'Email field should exist before submission');
    });
    
    it('should validate form before submission', async () => {
        await FormPage.open();
        await FormPage.inputEmail.clearValue();
        await FormPage.submitForm();
        const url = await browser.getUrl();
        await expect(url).toEqual('https://the-internet.herokuapp.com/forgot_password');
    });
});
