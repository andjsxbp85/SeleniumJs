const {Before, After, Status} = require('cucumber');
const _ = require('lodash');
const seleniumWebDriver = require('selenium-webdriver');

Before(function() {
    //return this.driver.manage().window().maximize();
});

After(async function(scenario) {
    switch (scenario.result.status){
        case 'FAILED': break;
        case 'PASSED': break;
        case 'PENDING': break;
        case 'UNDEFINED': break;
        case 'SKIPPED': break;
    }

    if(_.isFunction(this.driver.manage)){
        console.log('After Hook: '+_.isFunction(this.driver.manage));

        await this.driver.quit();
    }
});