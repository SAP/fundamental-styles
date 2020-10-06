import * as stories from './card.stories.js';

export default {
    title: 'Visual/Card',
    parameters: {
        components: ['button', 'avatar', 'badge', 'card']
    }
};

export const Card = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
