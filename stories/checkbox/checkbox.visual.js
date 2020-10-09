
import * as stories from './checkbox.stories.js';

export default {
    title: 'Visual/Checkbox',
    parameters: {
        components: ['form-label', 'checkbox', 'fieldset']
    }
};

export const Checkbox = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
