module.exports = {
    timeout: 20000,
    browser: 'chrome',
    baseURL: 'http://www.flip.id',

    user: 'anjasmuhammadban_CZzegR',
    key: 'fvq2VQzZpLMAe5LgJpsS',
    server: 'hub-cloud.browserstack.com',

    server_capabilities : {
        'browserstack.user' : 'anjasmuhammadban_CZzegR',
        'browserstack.key' : 'fvq2VQzZpLMAe5LgJpsS',
        'browserName' : 'chrome',
        //'browser_version' : '81.0',
        //'os' : 'Windows',
        //'os_version' : '10',
        //'resolution' : '1024x768',
        build: "cucumber-js-browserstack",
        'name' : 'single_test'
    }
};