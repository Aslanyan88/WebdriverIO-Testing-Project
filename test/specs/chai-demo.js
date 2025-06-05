const { browser, $ } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Chai Assertion Demonstration', () => {
    beforeEach(async () => {
        // Open login page before each test
        await LoginPage.open();
    });

    describe('Assert Interface', () => {
        it('should verify login functionality using assert style', async () => {
            // Perform login
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
            
            // Get text from flash alert
            const alertText = await SecurePage.flashAlert.getText();
            
            // Using Assert interface
            assert.isTrue(await SecurePage.flashAlert.isExisting(), 'Flash alert should exist');
            assert.include(alertText, 'You logged into a secure area', 'Alert should contain success message');
            assert.isNotEmpty(alertText, 'Alert text should not be empty');
        });
    });


    describe('Should Interface', () => {
        it('should verify login page elements using should style', async () => {
            // Using Should interface
            const usernameField = await LoginPage.inputUsername;
            const passwordField = await LoginPage.inputPassword;
            const loginButton = await LoginPage.btnSubmit;
            
            // Get element properties
            const usernameType = await usernameField.getAttribute('type');
            const passwordType = await passwordField.getAttribute('type');
            const loginBtnText = await loginButton.getText();
            
            // Should assertions
            usernameType.should.equal('text', 'Username field should be of type text');
            passwordType.should.equal('password', 'Password field should be of type password');
            loginBtnText.should.not.be.empty;
            loginBtnText.should.include('Login');
        });
    });


    describe('Expect Interface', () => {
        it('should verify URL and title using expect style', async () => {
            // Get page information
            const pageUrl = await browser.getUrl();
            const pageTitle = await browser.getTitle();
            expect(pageUrl).to.include('login', 'URL should contain login path');
            expect(pageTitle).to.not.be.empty;
            expect(pageTitle).to.equal('The Internet', 'Title should match expected pattern');
            
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
            const newUrl = await browser.getUrl();
            
            expect(newUrl).to.not.equal(pageUrl, 'URL should change after login');
        });
    });
});
