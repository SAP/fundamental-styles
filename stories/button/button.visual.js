import "../../dist/button.css";
import "../../dist/button-split.css";
import "../../dist/icon.css";
import "../../dist/menu.css";
import "../../dist/popover.css";
import "../../dist/segmented-button.css";
import * as stories from './button.stories.js';

export default {
    title: "Visual"
};

export const Button = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function (item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
}