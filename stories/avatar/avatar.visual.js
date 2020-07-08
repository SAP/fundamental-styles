import '../../dist/avatar.css';
import '../../dist/icon.css';
import * as stories from './avatar.stories.js';

export default {
    title: 'Visual/Avatar'
};

export const Avatar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
