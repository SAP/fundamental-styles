import { withThemeProvider } from '../../.storybook/custom/decorators/themeProvider.js';
import * as Case from 'case';
import * as stories from './user-menu.stories.js';

export default {
    title: 'Visual/Quartz Light/User Menu',
    parameters: {
        components: ['user-menu', 'shellbar', 'popover', 'notification', 'tabs', 'avatar', 'list', 'input', 'bar', 'button', 'icon', 'title', 'badge', 'input-group'],
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

export const UserMenu = () => {
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

