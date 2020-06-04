/**
 * @jest-environment jsdom
 */
import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// create jest snapshot tests from each story
initStoryshots({
    integrityOptions: { cwd: path.join(__dirname, 'stories', 'stories') },
    test: multiSnapshotWithOptions()
});
