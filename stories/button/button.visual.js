import * as stories from './button.stories.js';

export default {
    title: 'Visual/Button',
    parameters: {
        components: ['popover', 'segmented-button', 'menu', 'icon', 'button-split', 'button']
    }
};

export const Button = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
