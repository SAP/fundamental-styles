import * as stories from './fd-icon.stories.js';

export default {
    title: 'Visual/Fd-icon',
    parameters: {
        components: ['button', 'button-split', 'fd-icon', 'menu', 'popover', 'segmented-button']
    }
};

export const Icon = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
