import '../../dist/object-number.css';
import * as stories from './object-number.stories.js';

export default {
    title: 'Visual/Object Number'
};

export const ObjectNumber = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
