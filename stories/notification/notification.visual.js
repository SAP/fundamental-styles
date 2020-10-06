import * as stories from './notification.stories.js';

export default {
    title: 'Visual/Notifications',
    parameters: {
        components: ['button', 'icon', 'notification']
    }
};

export const Notifications = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
