class TestDataUtils {
    static generateRandomEmail(domain = 'example.com') {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `test_${timestamp}_${random}@${domain}`;
    }

    static generateRandomString(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static getValidCredentials() {
        return {
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        };
    }


    static getInvalidCredentials() {
        return {
            username: 'invalid_user',
            password: 'invalid_password'
        };
    }
}

module.exports = TestDataUtils;
