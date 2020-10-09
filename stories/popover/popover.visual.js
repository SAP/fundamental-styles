import * as stories from './popover.stories.js';

export default {
    title: 'Visual/Popover',
    parameters: {
        components: ['avatar', 'button', 'icon', 'menu', 'popover', 'segmented-button']
    }
};

export const Popover = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
