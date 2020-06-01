/* eslint-disable no-console */
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import initStoryshots from "@storybook/addon-storyshots";

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: "percent",
});

const view = {
  name: "Desktop 800x600",
  userAgent: "placeholder",
  viewport: {
    width: 800,
    height: 600,
  },
};

const customizePage = (page) => page.emulate(view);
const beforeScreenshot = (page) => page.emulate(view);

initStoryshots({
  test: imageSnapshot({
    getMatchOptions,
    storybookUrl: "http://localhost:6006/",
    customizePage,
    beforeScreenshot,
  }),
});
