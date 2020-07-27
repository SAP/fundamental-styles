import * as stories from './semantic.stories.js';

export default {
    title: 'Visual/Semantic'
};

export const Semantic = () => {
    const div = document.createElement('div');
    div.innerHTML = stories.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
