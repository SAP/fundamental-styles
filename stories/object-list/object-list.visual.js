import * as stories from './object-list.stories.js';

export default {
    title: 'Visual/Object List',
    parameters: {
        components: ['list', 'icon', 'object-identifier', 'avatar', 'object-marker', 'object-number', 'object-status', 'object-list']
    }
};

export const ObjectList = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');

    return div;
};




