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
        failureThreshold: 0.5,
        failureThresholdType: 'percent',
        customSnapshotIdentifier: () => context.name.replace(/\s/g, ''),
        // Will output base64 string of a diff image to console in case of failed tests (in addition to creating a diff image).
        // This string can be copy-pasted to a browser address string to preview the diff for a failed test.
        dumpDiffToConsole: true,
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
