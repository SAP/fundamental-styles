import capitalize from 'lodash/capitalize';
import { StoryFn } from '@storybook/html-vite';

const wrappedStory = (storyName: string, storyFn, direction: 'ltr' | 'rtl', compact = false) => `
<h2> ${storyName} </h2>
<div ${compact ? ' class="is-compact"' : ''}>
    <div  dir="${direction}">
     ${storyFn()}
    </div>
</div>
<br />
<hr />
<br />
<br />`;

const ignoredStoryNames = new Set(['default', 'dev', '__namedExportsOrder']);

/**
 * Function, which is being called for each story file, which needs to be visualized
 * for chromatic testing.
 *
 * idea is that it takes object of stories and returns function, which returns
 * html element with all stories wrapped in divs, in both ltr and rtl directions,
 * as well as compact and non-compact versions.
 *
 * @param stories
 */
export function visualStory(stories: Record<string, StoryFn>) {
    return () => {
        const storyNames = Object.keys(stories).filter(story => !ignoredStoryNames.has(story));
        const allVisualStories = document.createElement('div');
        allVisualStories.innerHTML = storyNames.map(function (eachStoryName) {
            const eachStory = stories[eachStoryName];
            const storyName = capitalize(eachStoryName);
            const eachStoryLTR = wrappedStory(storyName, eachStory, 'ltr');

            if (eachStory && eachStory.parameters && eachStory.parameters.skipRTLSnapshot) return eachStoryLTR;

            const eachStoryRTL = wrappedStory(`${storyName}  (RTL and compact)`, eachStory, 'rtl', true);

            return eachStoryLTR + eachStoryRTL;
        }).join('');
        return allVisualStories;
    };
}
