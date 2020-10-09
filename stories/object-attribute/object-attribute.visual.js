import * as stories from './object-attribute.stories.js';

export default {
    title: 'Visual/ObjectAttribute',
    parameters: {
        components: ['object-attribute']
    }
};

export const ObjectAttribute = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
