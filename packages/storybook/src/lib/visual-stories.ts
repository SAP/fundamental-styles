import capitalize from 'lodash/capitalize';

const wrappedStory = (storyName, storyFn, direction) => `
<h2> ${capitalize(storyName)} </h2>
<div dir="${direction}">
    ${storyFn()}
</div>
<br />
<hr />
<br />
<br />`;

const ignoredStoryNames = new Set(['default', 'dev', '__namedExportsOrder']);

export function visualStory(stories) {
    return () => {
        const storyNames = Object.keys(stories).filter(story => !ignoredStoryNames.has(story));
        const allVisualStories = document.createElement('div');
        allVisualStories.innerHTML = storyNames.map(function (eachStoryName) {
            const eachStory = stories[eachStoryName];

            const eachStoryLTR = wrappedStory(eachStoryName, eachStory, 'ltr');

            if (eachStory && eachStory.parameters && eachStory.parameters.skipRTLSnapshot) return eachStoryLTR;

            const eachStoryRTL = wrappedStory(capitalize(eachStoryName) + ' (Right to Left)', eachStory, 'rtl');

            return eachStoryLTR + eachStoryRTL;
        }).join('');
        return allVisualStories;
    };
}
