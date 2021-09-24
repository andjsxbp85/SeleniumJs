const seleniumWebDriver = require('selenium-webdriver');
const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const {timeout, browser, user, key, server, server_capabilities} = require('./config');
const _ = require('lodash');

global.username = 'YOUR_USERNAME';
global.authkey = 'YOUR_AUTHKEY';
function myWorld(){
    let remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';
    let caps = {
        name : 'Basic Example',
        build : '1.0',
        browserName : 'Chrome', // Pulls latest version of Chrome by default
        platform : 'Windows 10', // To specify version, add version : 'desired version'
        screen_resolution : '1366x768',
        record_video : 'true',
        username : "",
        password : ""
    };

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

    //SERVER GRID
    this.driver = new seleniumWebDriver.Builder().usingServer('http://'+server+'/wd/hub').withCapabilities(server_capabilities).build();
}

let webDriver = this.driver;

setDefaultTimeout(60 * timeout);
setWorldConstructor(myWorld);

module.exports = {myWorld,webDriver};