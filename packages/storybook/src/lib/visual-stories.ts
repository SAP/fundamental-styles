import capitalize from 'lodash/capitalize';

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

export function visualStory(stories) {
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
