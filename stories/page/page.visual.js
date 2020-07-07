import '../../dist/page.css';
import * as stories from './page.stories.js';

export default {
    title: 'Visual/Page'
};

export const Page = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
