import * as Case from 'case';
import * as stories from './dynamic-side-content.stories.js';

export default {
    title: 'Visual/Dynamic Side Content',
    parameters: {
        components: ['dynamic-side-content']
    }
};

export const DynamicSideContent = () => {
    let storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'dev');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<h2>' + Case.capital(item) + '</h2>' +
        '<div>' + stories[item]() + '</div> <br /> <hr /> <br /> <br />';
    }).join('');
    return div;
};

