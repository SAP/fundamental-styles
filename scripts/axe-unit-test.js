// Global helper file (axe-helper.js)
const { configureAxe } = require('jest-axe');

export const axe = configureAxe({
    rules: {
    // disabled landmark rules when testing isolated components.
        'region': { enabled: false }
    }
});
