import '../../dist/calendar.css';
import '../../dist/input-group.css';
import '../../dist/popover.css';
import * as stories from './datepicker.stories.js';

export default {
    title: 'Visual/Date Picker'
};

export const DatePicker = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
