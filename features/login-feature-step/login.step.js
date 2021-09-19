const assert = require('assert');
const {Before, Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const {until, Builder, By, Capabilities, Key } = require('selenium-webdriver');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

//driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();


Before({timeout: 60 * 1000}, function() {

});

Given('I open Flip main page', async function () {
    await driver.get('http://www.flip.id');
});

When(/^I click button \'Masuk\' pada main page$/, async function () {
    await driver.findElement(By.css("a.btn-register-daftar")).click();
});

When('I fill in Email field with {string} and Password field {string}', async function (email, pass) {
    //await driver.findElement(By.css("input[name='email']")).sendKeys(email);
    //await driver.findElement(By.css("input[name='password']")).sendKeys(pass);
    await waitFind(By.css("input[name='email']")).sendKeys(email);
    await waitFind(By.css("input[name='password']")).sendKeys(pass);
});

When('I click button \'Masuk\' pada login page', async function () {
    await driver.findElement(By.css("button.btn-primary")).click();
});

Then('I can see my dashboard page', async function () {
    const title = await driver.getTitle();
    console.log("TITLENYA ="+title);//div.container h4

    let helloWord = '';
    //helloWord = await driver.wait(until.elementLocated(By.css('div.container h4')),30000,"No Element",100).getText(); //#1
    //helloWord = await waitFind(By.css('div.container h4')).getText(); //#2
    //#1 dan #2 sama, kadang dapet kadang nggak textnya
    helloWord = await getTextElement(By.css('div.container h4')); //pasti dapet
    console.log("ISI DARI helloWord ="+helloWord);



});

AfterAll(async function(){
    await driver.quit();
});

function sleepFor(durationMs){
    var now = new Date().getTime();
    while(new Date().getTime() < now + durationMs){ /* Do nothing */ }
}

const waitFind = (locator,timoutMs = 30000, polMs = 100, errMsg = "NO ELEMENT") => {
    return driver.findElement(async () => {
        await driver.wait(until.elementLocated(locator),timoutMs,errMsg,polMs);
        return driver.findElement(locator);
    });
}

const getTextElement = async (locator, trial = 5, timoutMs = 15000, polMs = 150, errMsg = "NO ELEMENT", pollEachTrial = 1000) => {
    let Text = '';
    for(let i=0; i<trial; i++){
        Text = await waitFind(locator).getText();
        if(Text!=='') return Text;
        sleepFor(pollEachTrial);
    }
    return Text;
}