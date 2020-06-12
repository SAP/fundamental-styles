import '../../dist/object-status.css';
import * as stories from './object-status.stories.js';

export default {
    title: 'Visual'
};

export const ObjectStatus = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
