import * as stories from './generic-tile.stories.js';

export default {
    title: 'Visual/Generic Tile',
    parameters: {
        components: ['tile', 'badge', 'generic-tile']
    }
};

export const GenericTile = () => {
    const storyNames = Object.keys(stories).filter((story) => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames
        .map(function(item) {
            return '<div>' + stories[item]() + '</div>';
        })
        .join('');
    return div;
};
