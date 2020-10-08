import * as stories from './section.stories.js';

export default {
    title: 'Visual/Section',
    parameters: {
        components: ['section', 'layout-grid', 'layout-panel', 'layout']
    }
};

export const Section = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
