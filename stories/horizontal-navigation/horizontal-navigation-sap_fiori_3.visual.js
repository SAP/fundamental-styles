import { withThemeProvider } from '../../.storybook/custom/decorators/themeProvider.js';
import * as Case from 'case';
import * as stories from './horizontal-navigation.stories.js';

export default {
    title: 'Visual/Quartz Light/Horizontal Navigation',
    parameters: {
        components: ['tool-header', 'button', 'icon', 'list', 'popover', 'icon-tab-bar', 'avatar', 'form-label', 'input-group', 'text', 'title', 'horizontal-navigation'],
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

export const HorizontalNavigation = () => {
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

