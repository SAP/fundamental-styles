import * as stories from './carousel.stories.js';

export default {
    title: 'Visual/Carousel',
    parameters: {
        components: ['carousel', 'button', 'icon']
    }
};

export const Carousel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
