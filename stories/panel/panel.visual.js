import * as stories from './panel.stories.js';

export default {
    title: 'Visual/Panel',
    parameters: {
        components: ['button', 'icon', 'panel', 'segmented-button', 'toolbar']
    }
};

export const Panel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
