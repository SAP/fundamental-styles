import * as stories from './object-number.stories.js';

export default {
    title: 'Visual/Object Number',
    parameters: {
        components: ['object-number']
    }
};

export const ObjectNumber = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
