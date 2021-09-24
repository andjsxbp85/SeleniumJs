module.exports = {
    instance_env: "server", //or "server"
    timeout: 20000,
    browser: 'chrome',
    baseURL: 'http://www.flip.id',

    user: 'anjasmuhammadban_CZzegR',
    key: 'fvq2VQzZpLMAe5LgJpsS',
    //server: 'hub-cloud.browserstack.com',
    server: "http://147.139.191.58:4444",

    server_capabilities : {
        "screen_resolution" : '1024x768',
        "record_video" : 'true',
        'browserName' : 'chrome',
        'browser_version' : '87.0',
        'platform' : 'linux',
        //'os_version' : '10',
        //'resolution' : '1024x768',
        //build: "cucumber-js-browserstack",
        'name' : 'Automation Test',
        'enableVNC': true
    }
};