import * as stories from './input-group.stories.js';

export default {
    title: 'Visual/Input Group',
    parameters: {
        components: ['form-item', 'form-label', 'input', 'popover', 'input-group']
    }
};

export const InputGroup = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
