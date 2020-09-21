import * as bylineListStories from './byline/byline-list.stories.js';
import * as objectListStories from './object/object-list.stories';
import * as standardListStories from './standard/standard-list.stories.js';


export default {
    title: 'Visual/List'
};

const buildFunction = (stories) => () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};

export const StandardList = buildFunction(standardListStories);
export const BylineList = buildFunction(bylineListStories);
export const ObjectList = buildFunction(objectListStories);
