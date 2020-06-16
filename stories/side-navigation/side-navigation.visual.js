import '../../dist/icon.css';
import '../../dist/button.css';
import '../../dist/side-nav.css';
import * as stories from './side-navigation.stories.js';

export default {
    title: 'Visual'
};

export const SideNavigation = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'mobileMode');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
