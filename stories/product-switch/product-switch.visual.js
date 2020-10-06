import * as stories from './product-switch.stories.js';

export default {
    title: 'Visual/ProductSwitch',
    parameters: {
        components: ['product-switch', 'popover', 'button']
    }
};

export const ProductSwitch = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
