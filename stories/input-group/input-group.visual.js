import '../../dist/form-label.css';
import '../../dist/form-item.css';
import '../../dist/input.css';
import '../../dist/popover.css';
import '../../dist/input-group.css';
import * as stories from './input-group.stories.js';

// TO DO: change title to "Visual" once addon-storyshots is updated https://github.com/storybookjs/storybook/pull/11267
export default {
    title: 'Visual/InputGroup'
};

export const InputGroup = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
