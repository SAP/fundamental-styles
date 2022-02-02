export default (docsContext) => {
    // do not display disabled stories (dev only)
    return docsContext
        .componentStories()
        .filter((story) => story.kind === docsContext.kind && !story.parameters?.docs?.disable)
}
