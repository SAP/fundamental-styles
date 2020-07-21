import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/action-bar.css';
import * as stories from './action-bar.stories.js';

export default {
    title: 'Visual/Action Bar'
};


export const ActionBar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
