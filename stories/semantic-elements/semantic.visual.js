import * as stories from './semantic.stories.js';

export default {
    title: 'Visual/Semantic'
};

export const Semantic = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'mobileMode');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
