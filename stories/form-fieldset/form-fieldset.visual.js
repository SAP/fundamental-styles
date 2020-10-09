import * as stories from './form-fieldset.stories.js';

export default {
    title: 'Visual/Field Set',
    parameters: {
        components: ['form-fieldset', 'form-item', 'form-group', 'checkbox', 'radio']
    }
};

export const FieldSet = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
