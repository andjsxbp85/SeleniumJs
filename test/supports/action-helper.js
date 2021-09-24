let driver = this.driver;

function sleepFor(durationMs){
    let now = new Date().getTime();
    while(new Date().getTime() < now + durationMs){ /* Do nothing */ }
}

// const waitFind = async (locator,timoutMs = 30000, polMs = 100, errMsg = "NO ELEMENT") => {
//     return driver.findElement(async () => {
//         await driver.wait(this.driver.until.elementLocated(locator),timoutMs,errMsg,polMs);
//         return await driver.findElement(locator);
//     });
// }

const getTextElement = async (locator, trial = 5, timoutMs = 15000, polMs = 150, errMsg = "NO ELEMENT", pollEachTrial = 1000) => {
    let webb = require("../../test/supports/World");
    let Text = '';
    for(let i=0; i<trial; i++){
        Text = webb.webDriver.findElement(locator).getText().then(ret_val => {return ret_val}, reason => {});
        if(Text!=='') return Text;
        sleepFor(pollEachTrial);
    }
    return Text;
}

const cekCSSElement = async (cssLocator) => {
    driver.executeScript(`return document.querySelector('${cssLocator}').nodeName`).then(ret_val => {
        console.log("Element Exist With Node Name"+ret_val);
        return true;
    }, reason => {
        console.log("The element doesnt exist with error \""+reason+"\"");
        return false;
    });
}

const waitCSSElement = async (locator, timoutMs = this.timeout, pollEachTrial = 100) => {
    let numOfTrial = timoutMs / pollEachTrial;
    let exist = false;
    for(let i=0; i<numOfTrial; i++){
        exist = await cekCSSElement(locator);
        if(exist) break;
        sleepFor(pollEachTrial);
    }
}

const sendKeys = async (locator, words, timoutMs = this.timeout, pollEachTrial = 100) => {
    let numOfTrial = timoutMs / pollEachTrial;
    let done = false;
    for(let i=0; i<numOfTrial; i++){
        await driver.findElement(locator).sendKeys(words).then(ret_val => {
            done = true;
        }, reason => {});
        if(done) break;
        sleepFor(pollEachTrial);
    }
}

module.exports = {sleepFor, getTextElement, cekCSSElement, waitCSSElement, sendKeys}