import '../../dist/link.css';
import * as stories from './link.stories.js';

export default {
    title: 'Visual/Link'
};

export const Link = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
