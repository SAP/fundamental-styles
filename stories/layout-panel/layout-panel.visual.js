import "../../dist/layout-panel.css";
import * as stories from './layout-panel.stories.js';

export default {
    title: "Visual"
};

export const LayoutPanel = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function (item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
}