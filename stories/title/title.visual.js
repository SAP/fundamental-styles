import * as stories from './title.stories.js';

export default {
    title: 'Visual/Title',
    parameters: {
        components: ['title']
    }
};

export const Title = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
