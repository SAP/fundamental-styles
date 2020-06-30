/**
 * @jest-environment jsdom
 */
/* eslint-disable no-console */
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import initStoryshots from '@storybook/addon-storyshots';

// needed to prevent failures from @storybook/components
global.window = { ...global };

const getMatchOptions = ({ context }) => {
    return {
        failureThreshold: 0.2,
        failureThresholdType: 'percent',
        customSnapshotIdentifier: () => context.name.replace(/\s/g, ''),
        allowSizeMismatch: true
    };
};

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

// create visual regession images from each story
initStoryshots({
    framework: 'html',
    storyKindRegex: /Visual/,
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006/',
        customizePage,
        getMatchOptions,
        beforeScreenshot
    })
});
