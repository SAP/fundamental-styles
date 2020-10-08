import * as stories from './object-marker.stories.js';

export default {
    title: 'Visual/ObjectMarker',
    parameters: {
        components: ['object-marker']
    }
};

export const ObjectMarker = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
