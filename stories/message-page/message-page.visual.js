import * as stories from './message-page.stories.js';

export default {
    title: 'Visual/MessagePage'
};

export const MessagePage = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
