import '../../dist/icon.css';
import '../../dist/tile.css';
import './generic-tile.css';
import * as stories from './generic-tile.stories.mdx';

export default {
    title: 'Visual/GenericTile'
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
