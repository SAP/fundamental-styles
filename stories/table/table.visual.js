import '../../dist/button.css';
import '../../dist/checkbox.css';
import '../../dist/icon.css';
import '../../dist/link.css';
import '../../dist/object-status.css';
import '../../dist/table.css';
import '../../dist/toolbar.css';
import * as stories from './table.stories.js';

export default {
    title: 'Visual'
};

export const Table = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
