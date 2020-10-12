import * as stories from './layout-grid.stories.js';

export default {
    title: 'Visual/LayoutGrid',
    parameters: {
        components: ['layout-grid']
    }
};

export const LayoutGrid = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
