import * as stories from './side-navigation.stories.js';

export default {
    title: 'Visual/Side Navigation',
    parameters: {
        components: ['side-nav', 'button', 'icon', 'nested-list']
    }
};

export const SideNavigation = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'mobileMode');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
