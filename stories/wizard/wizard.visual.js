import '../../dist/button.css';
import '../../dist/icon.css';
import * as stories from './wizard.stories.js';

export default {
    title: 'Visual/Wizard'
};

export const Wizard = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
