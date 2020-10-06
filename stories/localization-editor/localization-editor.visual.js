import * as stories from './localization-editor.stories';

export default {
    title: 'Visual/Localization Editor',
    parameters: {
        components: ['input-group', 'form-item', 'form-label', 'popover', 'textarea', 'localization-editor']
    }
};

export const LocalizationEditor = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
