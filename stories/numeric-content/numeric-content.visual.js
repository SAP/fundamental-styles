import * as stories from './numeric-content.stories.js';

export default {
    title: 'Visual/NumericContent',
    parameters: {
        components: ['numeric-content', 'icon']
    }
};

export const NumericContent = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
