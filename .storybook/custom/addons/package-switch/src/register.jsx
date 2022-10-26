const React = require('react');
const { default: addons, types } = require('@storybook/addons');
const { ADDON_ID } = require('./constants');
const { getOwner } = require('../../utilities/get-owner');
const { isValidProject } = require('../../utilities/projects');
const { useStorybookState } = require('@storybook/api');
const { useEffect, useState, useMemo } = require('react');
const { useMemoWithComparator } = require('../../utilities/use-memo-with-comparator');
const deepEqual = require('fast-deep-equal');
const { DOCS_RENDERED } = require('@storybook/core-events');
const { BehaviorSubject, filter, first } = require('rxjs');

addons.register(ADDON_ID, (api) => {
    const setStories = (stories) => {
        return api.setStories(stories);
    };
    const getOwnerOfStory = (story) => getOwner(story);
    const getKindOfStory = (story) => {
        const owner = getOwnerOfStory(story);
        return owner ? `${owner.title}/${story.kind}` : story.kind;
    };

    const getUpdatedStories = (originalStories, packageId) => {
        if (packageId === 'all') {
            return originalStories.reduce((acc, [storyId, story]) => {
                acc[storyId] = { ...story, kind: getKindOfStory(story) };
                return acc;
            }, {});
        }
        return originalStories.reduce((acc, [storyId, story]) => {
            const owner = getOwnerOfStory(story);
            if (!owner || owner.value === packageId) {
                acc[storyId] = story;
            }
            return acc;
        }, []);
    };

    const updateStories = (originalStories, packageId) => {
        packageId = !isValidProject(packageId) ? 'all' : packageId;
        const newStories = getUpdatedStories(originalStories, packageId);
        return setStories(newStories).then(() => ({ packageId, newStories }));
    };

    const selectStory = (kindOrId, story, config) => {
        api.selectStory(kindOrId, story, config);
    };
    addons.add(ADDON_ID, {
        // I need this because otherwise there is no way to get initial stories
        title: ADDON_ID,
        type: types.TOOL,
        render: () => {
            const state = useStorybookState();
            const {
                storyId: selectedStoryId,
                globals,
                globals: { packageId },
                storiesHash
            } = state;
            const [originalStories, setOriginalStories] = useState([]);
            const storyId = useMemo(() => selectedStoryId, [selectedStoryId]);
            const selectedPackageId = useMemo(() => packageId, [packageId]);
            const stories = useMemoWithComparator(
                () => Object.entries(storiesHash).filter(([, story]) => story.type === 'story'),
                [storiesHash],
                deepEqual
            );
            const renderedDocStory$ = useMemo(() => new BehaviorSubject(null), []);
            useEffect(() => {
                const storyNameUpdater = (storyName) => renderedDocStory$.next(storyName);
                api.on(DOCS_RENDERED, storyNameUpdater);
                return () => api.off(DOCS_RENDERED, storyNameUpdater);
            }, []);
            useEffect(() => {
                let renderSubscription;
                if (selectedPackageId) {
                    const isFirstLoad = originalStories.length === 0;
                    if (!storyId) {
                        return api.selectFirstStory();
                    }
                    if (isFirstLoad) {
                        setOriginalStories(stories);
                    }
                    renderSubscription = renderedDocStory$
                        .pipe(
                            filter((storyName) => storyName === storyId),
                            first()
                        )
                        .subscribe(() => {
                            updateStories(isFirstLoad ? stories : originalStories, selectedPackageId).then(({ packageId }) => {
                                api.updateGlobals({ ...globals, packageId });
                                if (!api.getCurrentStoryData()) {
                                    api.selectFirstStory();
                                }
                            });
                        });
                }
                return () => {
                    if (renderSubscription) {
                        renderSubscription.unsubscribe();
                    }
                }
            }, [storyId, selectedPackageId, stories]);
            return <></>;
        }
    });
});
