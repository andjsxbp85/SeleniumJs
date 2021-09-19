const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

//Scenario 1:
Given('today is Sunday', function () {
    this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

//Scenario 2:
Given('today is Friday', function () {
    this.today = 'Friday';
});

//Scenario 3:
Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});