const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const action = require("../../supports/action-helper");
const seleniumWebDriver = require('selenium-webdriver');

Given('I open Flip main page', function () {
    this.driver.get("http://www.flip.id");
});

When(/^I click button \'Masuk\' pada main page$/, async function () {
    await this.driver.findElement(seleniumWebDriver.By.css("a.btn-register-daftar")).click();
});

When('I fill in Email field with {string} and Password field {string}', async function (email, pass) {
    console.log("STATUS NODENAME ="+await action.waitElement("input[name='email']"));
    await this.driver.findElement(seleniumWebDriver.By.css("input[name='email']")).sendKeys(email);
    //await this.driver.findElement(seleniumWebDriver.By.css("input[name='password']")).sendKeys(pass);
    //await waitFind(seleniumWebDriver.By.css("input[name='email']")).sendKeys(email);
    action.sleepFor(10000);
    await action.waitFind(seleniumWebDriver.By.css("input[name='password']")).sendKeys(pass);
});

When('I click button \'Masuk\' pada login page', async function () {
    await this.driver.findElement(seleniumWebDriver.By.css("button.btn-primary")).click();
});

Then('I can see my dashboard page', async function () {
    const title = await this.driver.getTitle();
    console.log("TITLENYA ="+title);//div.container h4

    let helloWord = '';
    //helloWord = await driver.wait(until.elementLocated(By.css('div.container h4')),30000,"No Element",100).getText(); //#1
    //helloWord = await waitFind(By.css('div.container h4')).getText(); //#2
    //#1 dan #2 sama, kadang dapet kadang nggak textnya
    action.sleepFor(10000);
    helloWord = await action.getTextElement(seleniumWebDriver.By.css('div.container h4')); //pasti dapet
    console.log("ISI DARI helloWord ="+helloWord);
});