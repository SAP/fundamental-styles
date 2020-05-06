const process = require("process");
const path = require("path");
module.exports = {
  rootDir: path.resolve(__dirname, "../"),
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
    "^.+\\.html$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest",
  },
  verbose: true,
  preset: process.env["DOCKER"] ? "jest-puppeteer-docker" : "jest-puppeteer",
  testRegex: path.resolve(__dirname, "../integration/storyshots.test.js"),
  setupFilesAfterEnv: [path.resolve(__dirname, "storyshots-setup.js")],
  moduleNameMapper: {},
};
