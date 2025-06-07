const { $ } = require('@wdio/globals');

class ElementUtils {

    static async waitForElementToBeClickable(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
        await element.waitForClickable({ timeout });
    }


    static async safeClick(element) {
        await this.waitForElementToBeClickable(element);
        await element.click();
    }

    static async safeSetValue(element, value) {
        await element.waitForDisplayed();
        await element.clearValue();
        await element.setValue(value);
    }

    static async getSafeText(element) {
        await element.waitForDisplayed();
        return await element.getText();
    }
}

module.exports = ElementUtils;
