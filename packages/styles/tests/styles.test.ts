import {describe, expect, it} from 'vitest'
import glob from 'glob';

const stories = glob.sync('packages/styles/stories/**/*.stories.js');

describe('Check stories', async () => {
    it('Should find all stories', function () {
        expect(stories.length).gt(1);
    });
    for (const storyFilePath of stories) {
        const storyModule = await import(storyFilePath);
        if (storyModule.default.title.match(/^(Visual|Ignore)/)) {
            continue;
        }
        const stories = Object.entries(storyModule).filter(([key]) => 'default' !== key);
        describe(storyModule.default.title, () => {
            it('should have a story', () => {
                expect(stories.length).gt(0);
            });

            for (const [key, story] of stories) {
                describe(`Story ${key}`, () => {
                    it('Should match snapshot', () => {
                        expect((story as () => string)()).toMatchSnapshot();
                    });
                });
            }
        });
    }
});
