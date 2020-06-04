const process = require("process");
const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../storybook-testing/"),
  verbose: true,
  preset: process.env["DOCKER"] ? "jest-puppeteer-docker" : "jest-puppeteer",
  setupFilesAfterEnv: [path.resolve(__dirname, "storyshots-setup.js")],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": 'babel-jest'
  },
  transform: {
      '^.+\\.stories\\.js$': '@storybook/addon-storyshots/injectFileName',
      '^.+\\.?visual\\.js?$': '@storybook/addon-storyshots/injectFileName',
      "^.+\\.html$": "jest-transform-svelte",
      '^.+\\.js?$': 'babel-jest'
  }
};
