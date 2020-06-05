import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/panel.css';
import '../../dist/segmented-button.css';
import '../../dist/toolbar.css';
import * as stories from './panel.stories.js';

export default {
    title: 'Visual'
};

export const Panel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
