import * as stories from './tree.stories.js';

export default {
    title: 'Visual/Tree',
    parameters: {
        components: ['button', 'checkbox', 'icon', 'radio', 'tree']
    }
};

export const Tree = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
