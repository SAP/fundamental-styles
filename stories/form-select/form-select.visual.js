import * as stories from './form-select.stories.js';

export default {
    title: 'Visual/Form Select',
    parameters: {
        components: ['form-item', 'form-label', 'form-select']
    }
};

export const FormSelect = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
