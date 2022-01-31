import { addons } from '@storybook/addons';
import { SET_STORIES, CURRENT_STORY_WAS_SET } from '@storybook/core-events';
import { ADDON_ID, FioriVersions, fioriVersionCompliance } from './constants';
import { EVENTS } from './constants';

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();
    let originalStories;
    let currentStoryData;
    let currentVersion;

    const updateSidebar = (newVersion) => {
        const filterer = fioriVersionCompliance[newVersion];
        const stories = Object.values(originalStories.stories);
        return api.setStories(
            stories
                .filter((story) => filterer(story))
                .reduce((acc, story) => {
                    acc[story.id] = story;
                    return acc;
                }, {})
        );
    };
    const changeNavigation = (version) => {
        const matcher = fioriVersionCompliance[version];
        if (!matcher(currentStoryData)) {
            api.selectFirstStory();
        }
    };

    const setVersion = (newVersion) => {
        if (currentVersion === newVersion) return;
        currentVersion = newVersion;
        updateSidebar(newVersion).then(() => {
            changeNavigation(newVersion);
        });
    };
    channel.once(SET_STORIES, (stories) => {
        originalStories = stories;
    });
    channel.on(CURRENT_STORY_WAS_SET, (currentStory) => {
        currentStoryData = originalStories.stories[currentStory.storyId];
    });
    channel.on(EVENTS.SET_VERSION, (version) => {
        if (!FioriVersions.includes(version)) {
            throw new Error(
                `${version} does not exist or is not supported. Supported versions are [${FioriVersions.join(', ')}]`
            );
        }
        setVersion(version);
    });
});
