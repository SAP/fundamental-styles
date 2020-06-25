import '../../dist/button.css';
import '../../dist/form-item.css';
import '../../dist/file-uploader.css';
import '../../dist/input.css';
import * as stories from './file-uploader.stories.js';

export default {
    title: 'Visual'
};

export const FileUploader = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
