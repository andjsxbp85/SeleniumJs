const seleniumWebDriver = require('selenium-webdriver');
const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const {instance_env, timeout, browser, user, key, server, server_capabilities} = require('./config');
const _ = require('lodash');

global.username = 'YOUR_USERNAME';
global.authkey = 'YOUR_AUTHKEY';
function myWorld(){
    this.driver =  instance_env.toLowerCase() == 'local' ?
        new seleniumWebDriver.Builder().forBrowser('chrome').build() :
        new seleniumWebDriver.Builder().usingServer(server+'/wd/hub').withCapabilities(server_capabilities).build();


    // this.driver = new seleniumWebDriver.Builder()
    //     .usingServer(remoteHub)
    //     .withCapabilities(caps)
    //     .build();

    // this.driver = new seleniumWebDriver
    //     .Builder()
    //     .forBrowser('chrome')
    //     .build();

    // const capabilities = seleniumWebDriver.Capabilities.chrome();
    // capabilities.set('chromeOptions', { "w3c": false });
    // this.driver = new seleniumWebDriver.Builder().withCapabilities(capabilities).build();

    this.driver.manage().window().maximize();
}

setDefaultTimeout(60 * timeout);
setWorldConstructor(myWorld);