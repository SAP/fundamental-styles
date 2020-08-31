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
        failureThreshold: 0.001,
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
    name: 'Macbook Pro 15',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
    viewport: {
        width: 1400,
        height: 900,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    }
};

const customizePage = (page) => page.emulate(view);
const beforeScreenshot = (page) => page.emulate(view);

// create visual regession images from each story
initStoryshots({
    framework: 'html',
    storyKindRegex: /Visual\/([A-Z])\w+/,
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006/',
        customizePage: customizePage,
        getMatchOptions: getMatchOptions,
        beforeScreenshot: beforeScreenshot,
        setupTimeout: 30000
    })
});
