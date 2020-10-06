import * as stories from './context-menu.stories.js';

export default {
    title: 'Visual/Contextual Menu',
    parameters: {
        components: ['radio', 'popover', 'menu', 'button', 'icon']
    }
};

export const ContextMenu = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
