import * as stories from './table.stories.js';

export default {
    title: 'Visual/Table',
    parameters: {
        components: ['button', 'checkbox', 'icon', 'link', 'object-status', 'table', 'toolbar']
    }
};

export const Table = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
