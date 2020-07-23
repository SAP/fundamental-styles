import * as stories from './semantic.stories.js';

export default {
    title: 'Visual/Semantic'
};

export const Semantic = () => {
    const div = document.createElement('div');
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
