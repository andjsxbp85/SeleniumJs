const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const action = require("../../supports/action-helper");
const seleniumWebDriver = require('selenium-webdriver');
const {baseURL} = require("../../supports/config");

Given('I open Flip main page', function () {
    this.driver.get(baseURL);
    action.sleepFor(10000);
});

When(/^I click button \'Masuk\' pada main page$/, async function () {
    //await this.driver.findElement(seleniumWebDriver.By.css("a.btn-register-daftar")).click();
    await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("a.btn-register-daftar"))).then(el => el.click());
});

When('I fill in Email field with {string} and Password field {string}', async function (email, pass) {
    await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("input[name='email']")),20000,"DOESNT EXIST",150);

    await this.driver.findElement(seleniumWebDriver.By.css("input[name='email']")).sendKeys(email);
    await this.driver.findElement(seleniumWebDriver.By.css("input[name='password']")).sendKeys(pass);
});

When('I click button \'Masuk\' pada login page', async function () {
    await this.driver.findElement(seleniumWebDriver.By.css("button.btn-primary")).click();
});

Then('I can see my dashboard page', async function () {
    const webTitle = await this.driver.getTitle();
    assert(webTitle === "Login dan Mulai Kirim Uang Tanpa Biaya Admin - Flip");

    let textHello = '';
    await this.driver.wait(seleniumWebDriver.until.elementLocated(seleniumWebDriver.By.css("div.container h4"))).then(el => el.getText().then(x => textHello = x));
    assert(textHello === "Halo Flip!");
});