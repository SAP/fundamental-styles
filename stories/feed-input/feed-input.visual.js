import * as stories from './feed-input.stories.js';

export default {
    title: 'Visual/FeedInput',
    parameters: {
        components: ['button', 'textarea', 'avatar', 'feed-input']
    }
};

export const FeedInput = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
