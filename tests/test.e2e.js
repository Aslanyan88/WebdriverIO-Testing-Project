const { expect } = require('@wdio/globals');
const LoginPage = require('../business/login.page');
const SecurePage = require('../business/secure.page');
const TestDataUtils = require('../core/testdata.utils');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const credentials = TestDataUtils.getValidCredentials();
        await LoginPage.open();
        await LoginPage.login(credentials.username, credentials.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'));
    });
});
