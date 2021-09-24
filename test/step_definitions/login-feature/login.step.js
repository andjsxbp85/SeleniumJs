const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const action = require("../../supports/action-helper");
const seleniumWebDriver = require('selenium-webdriver');
const {baseURL} = require("../../supports/config");

Given('I open Flip main page', function () {
    this.driver.get(baseURL);
});

When(/^I click button \'Masuk\' pada main page$/, async function () {
    await action.waitCSSElement("a.btn-register-daftar");
    await this.driver.findElement(seleniumWebDriver.By.css("a.btn-register-daftar")).click();
});

When('I fill in Email field with {string} and Password field {string}', async function (email, pass) {
    // await action.waitCSSElement("input[name='email']");
    // await action.waitCSSElement("input[name='password']");

    await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("input[name='email']")),20000,"DOESNT EXIST",150);

    //await action.sendKeys(this.driver.findElement(seleniumWebDriver.By.css("input[name='email']")), email);
    await this.driver.findElement(seleniumWebDriver.By.css("input[name='email']")).sendKeys(email);
    await this.driver.findElement(seleniumWebDriver.By.css("input[name='password']")).sendKeys(pass);
});

When('I click button \'Masuk\' pada login page', async function () {
    await this.driver.findElement(seleniumWebDriver.By.css("button.btn-primary")).click();
});

Then('I can see my dashboard page', async function () {
    const webTitle = await this.driver.getTitle();

    //action.sleepFor(10000);
    //await action.waitCSSElement("div.container h4");

    //let textHello = await action.getTextElement(seleniumWebDriver.By.css('div.container h4')); //pasti dapet
    //await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("div.container h4")),20000,"DOESNT EXIST",150);
    //await this.driver.wait(seleniumWebDriver.until.elementIsVisible(this.driver.findElement(seleniumWebDriver.By.css("div.container h4"))), 20000,"DOESNT EXIST",150);

    let textHello = '';
    await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("div.container h4"))).then(el => el.getText().then(x => textHello = x));
    //let textHello = this.driver.findElement(seleniumWebDriver.By.css("div.container h4")).getText();
    console.log("ISI DARI helloWord ="+textHello);
});