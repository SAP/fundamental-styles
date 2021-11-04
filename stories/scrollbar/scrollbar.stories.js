export default {
    title: 'Components/Scrollbar',
    parameters: {
        description: 'Themeable scrollbar',
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development'],
        components: ['scrollbar']
    }
};

export const defaultExample = () => `
    <div style="width: 300px; height: 100px" class="fd-scrollbar">
        <div style="width: 9000px; height: 9000px;"></div>
    </div>
`;

defaultExample.storyName = 'Default';
defaultExample.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `To use themeable scrollbar use \`fd-scrollbar\` class on scrollable element.
`
    }
};
