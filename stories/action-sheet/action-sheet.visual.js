import * as stories from './action-sheet.stories.js';

export default {
    title: 'Visual/Avatar',
    parameters: {
        components: ['avatar', 'icon', 'action-sheet']
    }
};

export const Avatar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
