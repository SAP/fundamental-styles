import * as stories from './form-grid.stories.js';

export default {
    title: 'Visual/Form Grid',
    parameters: {
        components: ['form-label', 'form-layout-grid', 'layout-grid', 'input', 'popover', 'select']
    }
};

export const FormGrid = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
