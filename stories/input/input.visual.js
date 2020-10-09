
import * as stories from './input.stories.js';

export default {
    title: 'Visual/Input',
    parameters: {
        components: ['form-item', 'form-label', 'input', 'popover']
    }
};

export const Input = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
