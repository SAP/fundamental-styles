import '../../dist/search-field.css';
import * as stories from './search-field.stories.js';

export default {
    title: 'Visual/Search Field'
};

export const SearchField = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
