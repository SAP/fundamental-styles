import * as stories from './file-uploader.stories.js';

export default {
    title: 'Visual/File Uploader',
    parameters: {
        components: ['button', 'form-item', 'file-uploader', 'form-label', 'input']
    }
};

export const FileUploader = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
