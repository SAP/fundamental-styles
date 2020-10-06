import * as stories from './message-box.stories.js';

export default {
    title: 'Visual/MessageBox',
    parameters: {
        components: ['message-box', 'title', 'bar', 'button', 'link']
    }
};

export const MessageBox = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
