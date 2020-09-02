import '../../dist/carousel.css';
import * as stories from './carousel.stories.js';

export default {
    title: 'Visual/Carousel'
};

export const Carousel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
