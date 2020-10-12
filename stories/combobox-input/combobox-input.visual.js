import * as stories from './combobox-input.stories.js';

export default {
    title: 'Visual/Combobox Input',
    parameters: {
        components: ['radio', 'title', 'form-label', 'popover', 'icon', 'input-group', 'input', 'list']
    }
};

export const ComboboxInput = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
