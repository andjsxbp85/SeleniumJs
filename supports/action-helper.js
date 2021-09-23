const seleniumWebDriver = require('selenium-webdriver');

function sleepFor(durationMs){
    let now = new Date().getTime();
    while(new Date().getTime() < now + durationMs){ /* Do nothing */ }
}

const waitFind = async (locator,timoutMs = 30000, polMs = 100, errMsg = "NO ELEMENT") => {
    await this.driver.wait(this.driver.until.elementLocated(locator),timoutMs,errMsg,polMs);
    return await this.driver.findElement(locator);
    // return await this.driver.findElement(async () => {
    //     await this.driver.wait(this.driver.until.elementLocated(locator),timoutMs,errMsg,polMs);
    //     return await this.driver.findElement(locator);
    // });
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

const waitElement = async (locator, trial = 5, timoutMs = 15000, polMs = 150, errMsg = "NO ELEMENT", pollEachTrial = 1000) => {
    // for(let i=0; i<trial; i++){
    //     Text = await waitFind(locator).getText();
    //     if(Text!=='') return Text;
    //     sleepFor(pollEachTrial);
    // }
    return await this.driver.executeAsyncScript(`document.querySelector('${locator}').nodeName`);
}

module.exports = {sleepFor, waitFind, getTextElement, waitElement}