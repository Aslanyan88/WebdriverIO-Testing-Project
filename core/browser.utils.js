const { browser } = require('@wdio/globals');

class BrowserUtils {

    static async navigateToUrl(url, retries = 3) {
        for (let i = 0; i < retries; i++) {
            try {
                await browser.url(url);
                await browser.waitUntil(
                    async () => (await browser.getUrl()).includes(url.split('//')[1].split('/')[0]),
                    { timeout: 10000, timeoutMsg: `Failed to navigate to ${url}` }
                );
                return;
            } catch (error) {
                if (i === retries - 1) throw error;
                await browser.pause(1000);
            }
        }
    }


    static async waitForPageLoad(timeout = 30000) {
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'),
            { timeout, timeoutMsg: 'Page did not load completely' }
        );
    }

    static async takeScreenshot(name = 'screenshot') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await browser.saveScreenshot(`./screenshots/${name}_${timestamp}.png`);
    }
}

module.exports = BrowserUtils;
