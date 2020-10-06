import * as stories from './select.stories.js';

export default {
    title: 'Visual/Select',
    parameters: {
        components: ['icon', 'popover', 'list', 'form-label', 'form-message', 'select', 'dialog', 'bar']
    }
};

export const Select = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'mobileMode');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
