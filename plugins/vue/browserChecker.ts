/* tslint:disable file-name-casing */
import Vue from 'vue';
import Bowser from 'bowser';

const browserChecker = {
    install (): void {
        const browser = Bowser.getParser(window.navigator.userAgent);
        document.body.classList.add(browser.getBrowserName().toLowerCase());

    },
};

Vue.use(browserChecker);
/* tslint:enable */
