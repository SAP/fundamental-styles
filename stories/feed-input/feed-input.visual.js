import '../../dist/input.css';
import '../../dist/feed-input.css';
import * as stories from './feed-input.stories.js';

export default {
    title: 'Visual/FeedInput'
};

export const InputGroup = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
