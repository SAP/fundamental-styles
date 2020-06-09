import '../../dist/input-group.css';
import '../../dist/form-item.css';
import '../../dist/form-label.css';
import '../../dist/input-group.css';
import '../../dist/popover.css';
import '../../dist/textarea.css';
import '../../dist/localization-editor.css';
import * as stories from './localization-editor.stories';

export default {
    title: 'Visual'
};

export const LocalizationEditor = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
