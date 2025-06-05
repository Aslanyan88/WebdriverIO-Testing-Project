const { expect: wdioExpect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Login Feature', () => {
    beforeEach(async () => {
        await LoginPage.open()
    });

    it('should login with valid credentials (WDIO expect style)', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await wdioExpect(SecurePage.flashAlert).toBeExisting()
        await wdioExpect(SecurePage.flashAlert).toHaveText(
            wdioExpect.stringContaining('You logged into a secure area!'))
    })
    
    it('should not login with invalid credentials (Chai Assert style)', async () => {
        await LoginPage.login('invalid_user', 'invalid_password')
        const alertExists = await SecurePage.flashAlert.isExisting();
        const alertText = await SecurePage.flashAlert.getText();
        
        // Using Chai Assert style
        assert.isTrue(alertExists, 'Flash alert should exist');
        assert.include(alertText, 'Your username is invalid', 'Alert should contain error message');
    })
    
    it('should have correct login form elements (Chai Should style)', async () => {
        // Using Chai Should style
        const usernameValue = await LoginPage.inputUsername.getValue();
        const usernameType = await LoginPage.inputUsername.getAttribute('type');
        const loginButtonText = await LoginPage.btnSubmit.getText();
        
        usernameValue.should.equal('', 'Username field should be empty initially');
        usernameType.should.equal('text', 'Username field should be a text input');
        loginButtonText.should.include('Login', 'Login button should contain "Login" text');
    })
    
    it('should have correct page title (Chai Expect style)', async () => {
        // Using Chai Expect style
        const title = await browser.getTitle();
          expect(title).to.be.a('string');
        expect(title).to.equal('The Internet');
        expect(title.length).to.be.above(3);
    })
})
