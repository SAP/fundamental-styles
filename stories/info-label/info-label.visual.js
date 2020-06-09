import * as stories from '../info-label/info-label.stories';

export default {
    title: 'Visual'
};

export const InfoLabel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function (item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};

