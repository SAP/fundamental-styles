import * as stories from './wizard.stories.js';

export default {
    title: 'Visual/Wizard',
    parameters: {
        components: ['button', 'icon', 'wizard', 'bar', 'popover', 'action-sheet']
    }
};

export const Wizard = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
