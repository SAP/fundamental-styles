export default {
    title: 'Components/Off Screen',
    parameters: {
        description: `For aria-live to read any change in element, we need to place element but it should not be visible to user.
            same time, it can not be made hidden or display: none, as screen reader will not be able to pick this element.
            This component will make sure that element is not visible on screen but it can be read by screen reader.`,
        tags: ['a11y'],
        components: ['off-screen']
    }
};

export const primary = () => `<div class="fd-off-screen" aria-live="polite">
    This will be read whenever this element changes.
</div>
`;
primary.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `For aria-live to read any change in element, we need to place element but it should not be visible to user.
`
    }
};
