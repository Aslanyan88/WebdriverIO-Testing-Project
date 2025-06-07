const { expect } = require('@wdio/globals');
const LoginPage = require('../business/login.page');
const SecurePage = require('../business/secure.page');
const TestDataUtils = require('../core/testdata.utils');

describe('Login Feature', () => {
    it('should login with valid credentials', async () => {
        const credentials = TestDataUtils.getValidCredentials();
        await LoginPage.open();
        await LoginPage.login(credentials.username, credentials.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'));
    });
    
    it('should not login with invalid credentials', async () => {
        const credentials = TestDataUtils.getInvalidCredentials();
        await LoginPage.open();
        await LoginPage.login(credentials.username, credentials.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'));
    });
});
