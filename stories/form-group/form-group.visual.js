import * as stories from './form-group.stories.js';

export default {
    title: 'Visual/Form Group',
    parameters: {
        components: ['form-group', 'form-item', 'form-label', 'input']
    }
};

export const FormGroup = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
