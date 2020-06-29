import '../../dist/section.css';
import '../../dist/layout-grid.css';
import '../../dist/layout-panel.css';
import '../../dist/layout.css';
import * as stories from './section.stories.js';

export default {
    title: 'Visual'
};

export const Section = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
