import '../../dist/dynamic-page-layout.css';
import '../../dist/breadcrumb.css';

import * as stories from './dynamic-page-layout.stories.js';

export default {
    title: 'Visual/DynamicPageLayout'
};

export const DynamicPageLayout = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
