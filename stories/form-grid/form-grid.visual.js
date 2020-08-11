import '../../dist/form-layout-grid.css';
import * as stories from './form-grid.stories.js';

export default {
    title: 'Visual/Form Grid'
};

export const FormGrid = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
