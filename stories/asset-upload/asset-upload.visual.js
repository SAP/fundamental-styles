import '../../dist/asset-upload.css';
import * as stories from './asset-upload.stories.js';

export default {
    title: 'Visual'
};

export const AssetUpload = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
