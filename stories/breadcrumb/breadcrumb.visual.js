import '../../dist/breadcrumb.css';
import * as stories from './breadcrumb.stories.js';

export default {
    title: 'Visual'
};

export const Breadcrumb = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
