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
      '^.+\\.?visual\\.js?$': '@storybook/addon-storyshots/injectFileName',
      '^.+\\.js?$': 'babel-jest',
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  }
};
