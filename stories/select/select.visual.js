import '../../dist/icon.css';
import '../../dist/dialog.css';
import '../../dist/bar.css';
import '../../dist/popover.css';
import '../../dist/list.css';
import '../../dist/form-label.css';
import '../../dist/form-message.css';
import '../../dist/select.css';
import * as stories from './select.stories.js';

export default {
    title: 'Visual'
};

export const Select = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
