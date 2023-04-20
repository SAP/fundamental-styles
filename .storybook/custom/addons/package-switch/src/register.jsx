const React = require('react');
const { addons, types } = require('@storybook/addons');
const { ADDON_ID } = require('./constants');
const { getOwner } = require('../../utilities/get-owner');
const { isValidProject } = require('../../utilities/projects');
const { useStorybookState } = require('@storybook/api');
const { useEffect, useState, useMemo } = require('react');
const { useMemoWithComparator } = require('../../utilities/use-memo-with-comparator');
const deepEqual = require('fast-deep-equal');

addons.register(ADDON_ID, (api) => {
    const setStories = (stories) => {
        return api.setIndex({ v: 4, entries: stories });
    };

    const getUpdatedIndex = (originalStories, packageId) => {
        if (packageId === 'all') {
            return originalStories;
        }
        return Object.entries(originalStories).reduce((acc, [storyId, story]) => {
            const owner = getOwner(story);
            if (owner?.value === packageId || !owner) {
                acc[storyId] = story;
            }
            return acc;
        }, {});
    };

    const updateIndex = (originalIndex, packageId) => {
        packageId = !isValidProject(packageId) ? 'all' : packageId;
        const newStories = getUpdatedIndex(originalIndex, packageId);
        return setStories(newStories).then(() => ({ packageId, newStories }));
    };

    addons.add(ADDON_ID, {
        // I need this because otherwise there is no way to get initial stories
        title: ADDON_ID,
        type: types.TOOL,
        render: () => {
            const state = useStorybookState();
            const {
                storyId,
                globals,
                globals: { packageId: selectedPackageId },
                index
            } = state;
            const [originalIndex, setOriginalIndex] = useState({});
            const titledStories = useMemoWithComparator(
                () => {
                    if (index) {
                        return Object.entries(index).reduce((acc, [storyId, story]) => {
                            if (story.title) {
                                acc[storyId] = story;
                            }
                            return acc;
                        }, {});
                    }
                    return {};
                },
                [index],
                deepEqual
            );
            useEffect(() => {
                if (selectedPackageId) {
                    const isFirstLoad = Object.keys(originalIndex).length === 0;
                    if (!storyId) {
                        return api.selectFirstStory();
                    }
                    if (isFirstLoad) {
                        setOriginalIndex(titledStories);
                        return;
                    }
                    updateIndex(originalIndex, selectedPackageId).then(({ packageId }) => {
                        api.updateGlobals({ ...globals, packageId });
                        if (!api.getCurrentStoryData()) {
                            api.selectFirstStory();
                        }
                    });
                }
            }, [storyId, selectedPackageId, titledStories]);
            return <></>;
        }
    });
});
