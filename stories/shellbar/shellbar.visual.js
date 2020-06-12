import '../../dist/button.css';
import '../../dist/input-group.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/avatar.css';
import '../../dist/input-group.css';
import '../../dist/popover.css';
import '../../dist/product-switch.css';
import '../../dist/shellbar.css';
import * as stories from './shellbar.stories.js';

export default {
    title: 'Visual'
};

export const Shellbar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
