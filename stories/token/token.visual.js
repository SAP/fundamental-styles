import '../../dist/token.css';
import '../../dist/tokenizer.css';

import * as stories from './token.stories.js';

export default {
    title: 'Visual'
};

export const Token = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
