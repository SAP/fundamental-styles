import * as stories from './counter.stories.js';

export default {
    title: 'Visual/Counter',
    parameters: {
        components: ['counter', 'tabs', 'button']
    }
};

export const Counter = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
