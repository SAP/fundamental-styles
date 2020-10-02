// import '../../dist/dynamic-side-content.css';
import * as stories from './dynamic-side-content.stories.js';

export default {
    title: 'Visual/Dynamic Side Content'
};

export const DynamicSideContent = () => {
    const storyNames = Object.keys(stories).filter((story) => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames
        .map(function(item) {
            return '<div>' + stories[item]() + '</div>';
        })
        .join('');
    return div;
};
