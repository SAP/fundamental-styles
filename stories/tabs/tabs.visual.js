import * as stories from './tabs.stories.js';

export default {
    title: 'Visual/Tabs',
    parameters: {
        components: ['tabs', 'icon']
    }
};

export const Tabs = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
