import {DocsContext, DocsStory} from "@storybook/addon-docs";
import React, {useContext, useMemo} from "react";

export default () => {
    const docsContext = useContext(DocsContext);
    const stories = useMemo(() => {
        return docsContext
            .componentStories()
            .filter((story) => story.kind === docsContext.title && !story.parameters?.["docs"]?.disable)
    }, [docsContext]);

    return <>
        {stories.map((story) => <DocsStory key={story.id} {...story} expanded withToolbar/>)}
    </>
}
