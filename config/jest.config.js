const path = require('path');
const puppeteer = require('puppeteer');

process.env.PUPPETEER_CHROMIUM_REVISION = puppeteer._preferredRevision;

module.exports = {
    rootDir: path.resolve(__dirname, '../storybook-testing/'),
    // verbose: true,
    testEnvironment: 'node',
    preset: 'jest-puppeteer-docker',
    setupFilesAfterEnv: [path.resolve(__dirname, 'storyshots-setup.js')],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'babel-jest'
    },
    transform: {
        '^.+\\.stories\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.?visual\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
    }
};
