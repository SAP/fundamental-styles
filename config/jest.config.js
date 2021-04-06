const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, '../storybook-testing/'),
    testEnvironment: 'node',
    setupFilesAfterEnv: [path.resolve(__dirname, 'storyshots-setup.js')],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'babel-jest'
    },
    transform: {
        '^.+\\.stories\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/@storybook/addon-docs']
};
