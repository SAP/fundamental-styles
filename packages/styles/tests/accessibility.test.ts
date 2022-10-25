import {describe, expect, it} from 'vitest'
import glob from 'glob';
import {axe} from "vitest-axe";

const stories = glob.sync('packages/styles/stories/**/*.stories.+(ts|js|jsx|tsx)', {
    ignore: [
        ...[
            'avatar',
            'object-list',
            'object-status',
            'tabs',
            'facets',
            'counter',
            'busy-indicator',
            'object-marker',
            'multi-input',
            'token',
            'notification',
            'card',
            'grid-list',
            'wizard',
            'table',
            'numeric-content',
            'shellbar',
            'user-menu',
            'dialog',
            'avatar-group',
            'side-navigation',
            'multi-combo-box',
            'generic-tile',
            'dynamic-page'
        ].map((name) => `packages/styles/stories/**/${name}.stories.*`),
        'packages/styles/stories/**/utils/**/*.*'
    ]
});

describe('Check Accessibility', async () => {
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
                    it('Should have no a11y violations ', async () => {
                        expect(
                            await axe((story as () => string)(), {
                                rules: {
                                    'region': {enabled: false}
                                }
                            })
                        ).toHaveNoViolations()
                    });
                });
            }
        });
    }
});
