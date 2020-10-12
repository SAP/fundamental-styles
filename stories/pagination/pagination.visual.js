import * as stories from './pagination.stories.js';

export default {
    title: 'Visual/Pagination',
    parameters: {
        components: ['pagination']
    }
};

export const Pagination = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
