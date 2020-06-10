import '../../dist/dialog.css';
import * as stories from './dialog.stories.js';

export default {
    title: 'Visual'
};

export const Dialog = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
