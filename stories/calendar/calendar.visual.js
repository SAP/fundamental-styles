import '../../dist/calendar.css';
import * as stories from './calendar.stories.js';

export default {
    title: 'Visual/Calendar'
};

export const Calendar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
