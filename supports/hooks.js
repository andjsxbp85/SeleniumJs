const { Before, After, Status, BeforeAll, AfterAll } = require('cucumber');

After({tags: '@smoke'}, async function (scenario) {
    await this.sleep(500);
    await driver.quit();
    console.log("Masuk After")
});