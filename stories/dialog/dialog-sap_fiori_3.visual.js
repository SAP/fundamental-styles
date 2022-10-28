import { withThemeProvider } from '../../.storybook/custom/decorators/themeProvider.js';
import * as Case from 'case';
import * as stories from './dialog.stories.js';

export default {
    title: 'Visual/Quartz Light/Dialog',
    parameters: {
        components: ['dialog', 'input-group', 'icon', 'bar', 'button', 'title', 'icon', 'list', 'checkbox', 'busy-indicator', 'form-label', 'form-layout-grid', 'layout-grid', 'input', 'popover', 'select', 'textarea'],
        theme: 'sap_fiori_3'
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

export const Dialog = () => {
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

