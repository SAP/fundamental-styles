import '../../dist/textarea.css';
import * as stories from './textarea.stories.js';

export default {
    title: 'Visual'
};

export const Textarea = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
