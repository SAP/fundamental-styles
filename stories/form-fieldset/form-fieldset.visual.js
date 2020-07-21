import '../../dist/fieldset.css';
import '../../dist/form-item.css';
import '../../dist/form-group.css';
import '../../dist/checkbox.css';
import '../../dist/radio.css';
import * as stories from './form-fieldset.stories.js';

export default {
    title: 'Visual/Field Set'
};

export const FieldSet = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
