import '../../dist/busy-indicator.css';
import * as stories from './busy-indicator.stories.js';

export default {
    title: 'Visual/Busy Indicator'
};

export const BusyIndicator = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
