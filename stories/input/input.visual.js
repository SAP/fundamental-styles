
import * as stories from './input.stories.js';

// TO DO: change title to "Visual" once addon-storyshots is updated https://github.com/storybookjs/storybook/pull/11267
export default {
    title: 'Ignore/Input'
};

export const Input = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
