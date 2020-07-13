import '../../dist/radio.css';
import * as stories from './time-picker.stories.js';

export default {
    title: 'Visual/Time Picker'
};

export const TimePicker = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
