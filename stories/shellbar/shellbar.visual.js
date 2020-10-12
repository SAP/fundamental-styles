import * as stories from './shellbar.stories.js';

export default {
    title: 'Visual/Shellbar',
    parameters: {
        components: ['button', 'input-group', 'icon', 'menu', 'avatar', 'input-group', 'popover', 'product-switch', 'shellbar']
    }
};

export const Shellbar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
