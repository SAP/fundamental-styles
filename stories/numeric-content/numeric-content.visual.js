import "./numeric-content-playground.scss";
import "../../dist/numeric-content.css";
import "../../dist/icon.css";
import * as stories from './numeric-content.stories.js';

export default {
    title: "Visual"
};

export const NumericContent = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function (item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
}