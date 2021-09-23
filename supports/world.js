const seleniumWebDriver = require('selenium-webdriver');
const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const {timeout, browser} = require('../supports/config');


global.username = 'YOUR_USERNAME';
global.authkey = 'YOUR_AUTHKEY';
function World() {
    var remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';
    var caps = {
        name : 'Basic Example',
        build : '1.0',
        browserName : 'Chrome', // Pulls latest version of Chrome by default
        platform : 'Windows 10', // To specify version, add version : 'desired version'
        screen_resolution : '1366x768',
        record_video : 'true',
        username : global.username,
        password : global.authkey
    };

    // this.driver = new seleniumWebDriver.Builder()
    //     .usingServer(remoteHub)
    //     .withCapabilities(caps)
    //     .build();

    this.driver = new seleniumWebDriver
        .Builder()
        .forBrowser(browser)
        .build();

    // const capabilities = seleniumWebDriver.Capabilities.chrome();
    // capabilities.set('chromeOptions', { "w3c": false });
    // this.driver = new seleniumWebDriver.Builder().withCapabilities(capabilities).build();
}

setDefaultTimeout(60 * timeout);
setWorldConstructor(World);
