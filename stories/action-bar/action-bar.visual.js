import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/action-bar.css';
import * as stories from './action-bar.stories.js';

// TO DO: change title to "Visual" once addon-storyshots is updated https://github.com/storybookjs/storybook/pull/11267
export default {
    title: 'Ignore'
};


export const ActionBar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
