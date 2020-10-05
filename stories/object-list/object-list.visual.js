import '../../dist/object-list.css';
import * as stories from './object-list.stories.js';

export default {
    title: 'Visual/Object List'
};

export const ObjectList = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');

    return div;
};




