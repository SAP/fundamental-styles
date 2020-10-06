import * as stories from './bar.stories.js';

export default {
    title: 'Visual/Bar',
    parameters: {
        components: ['button', 'icon', 'input', 'segmented-button']
    }
};

export const Bar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
