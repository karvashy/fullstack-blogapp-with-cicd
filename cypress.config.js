const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', {
                log(message) {
                    console.log(message +'\n\n');
                    return null;
                },
            });
        },
        baseUrl: 'http://localhost:3003',
    },
    screenshotOnRunFailure: false,
})
