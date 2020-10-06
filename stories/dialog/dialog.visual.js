import * as stories from './dialog.stories.js';

export default {
    title: 'Visual/Dialog',
    parameters: {
        components: ['dialog', 'input-group', 'icon']
    }
};

export const Dialog = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
