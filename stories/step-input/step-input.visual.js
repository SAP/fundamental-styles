import * as stories from './step-input.stories.js';

export default {
    title: 'Visual/StepInput',
    parameters: {
        components: ['button', 'icon', 'form-item', 'step-input', 'form-label', 'input']
    }
};

export const StepInput = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
