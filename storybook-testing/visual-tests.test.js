/* eslint-disable no-console */
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import initStoryshots from '@storybook/addon-storyshots';

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: 'percent',
});

//This is needed to keep CI from failing due to viewport differences
const view = {
  name: 'Desktop 1200x800',
  userAgent: 'placeholder',
  viewport: {
      width: 1200,
      height: 800
  }
};

const customizePage = (page) => page.emulate(view);
const beforeScreenshot = (page) => page.emulate(view);

initStoryshots({
  framework: "html",
  test: imageSnapshot({
    storyKindRegex: /Visual/,
    getMatchOptions,
    storybookUrl: 'http://localhost:6006/',
    customizePage,
    beforeScreenshot,
  }),
});
