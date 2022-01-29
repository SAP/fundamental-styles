import { addons } from '@storybook/addons';
import { SET_STORIES, CURRENT_STORY_WAS_SET } from '@storybook/core-events';
import { ADDON_ID, FioriVersions, isFioriComponent, isFioriNextComponent } from './constants';
import { EVENTS } from './constants';

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();
    let originalStories;
    let currentStoryData;
    let currentVersion;
    const getFilterer = (version) => {
        if (version === 'all') {
            return () => true
        }
        return (version === 'fiori' ? isFioriComponent : isFioriNextComponent)
    };

    const updateSidebar = (newVersion) => {
        const filterer = getFilterer(newVersion);
        return api.setStories(
            Object.values(originalStories.stories)
                .filter(({ id }) => filterer(id))
                .reduce((acc, story) => {
                    acc[story.id] = story;
                    return acc;
                }, {})
        );
    };
    const changeNavigation = (version) => {
        const matcher = getFilterer(version);
        if (!matcher(currentStoryData.storyId)) {
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
        currentStoryData = currentStory;
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
