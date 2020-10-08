import * as stories from './rating-indicator.stories.js';

export default {
    title: 'Visual/Rating Indicator',
    parameters: {
        components: ['rating-indicator']
    }
};

export const RatingIndicator = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(item => `<div>${stories[item]()}</div>`).join('');

    return div;
};

