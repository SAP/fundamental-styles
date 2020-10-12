import * as stories from './time.stories';

export default {
    title: 'Visual/Time',
    parameters: {
        components: ['icon', 'time']
    }
};

export const Time = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
