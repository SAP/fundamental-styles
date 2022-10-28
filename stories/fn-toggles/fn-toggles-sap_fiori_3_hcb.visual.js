import { withThemeProvider } from '../../.storybook/custom/decorators/themeProvider.js';
import * as Case from 'case';
import * as stories from './fn-toggles.stories.js';

export default {
    title: 'Visual/High Contrast Black/Fn Toggles',
    parameters: {
        components: ['fn-checkbox', 'fn-fieldset', 'fn-radio', 'fn-switch'],
        theme: 'sap_fiori_3_hcb'
    },
    decorators: [
        withThemeProvider
    ]
};

const wrappedStory = (storyName, storyFn, direction) =>`
<h2> ${Case.capital(storyName)} </h2>
<div dir="${direction}">
    ${storyFn()}
</div>
<br />
<hr />
<br />
<br />`;

export const FnToggles = () => {
    let storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'dev');
    const allVisualStories = document.createElement('div');
    allVisualStories.innerHTML = storyNames.map(function(eachStoryName) {
        const eachStory = stories[eachStoryName];

        const eachStoryLTR = wrappedStory(eachStoryName, eachStory, 'ltr');

        if (eachStory && eachStory.parameters && eachStory.parameters.skipRTLSnapshot) return eachStoryLTR;

        const eachStoryRTL = wrappedStory(Case.capital(eachStoryName) + ' (Right to Left)', eachStory, 'rtl');

        return eachStoryLTR + eachStoryRTL;
    }).join('');
    return allVisualStories;
};

