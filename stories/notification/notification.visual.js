import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/notification.css';
import * as stories from './notification.stories.js';

export default {
    title: 'Visual'
};

export const Notification = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
