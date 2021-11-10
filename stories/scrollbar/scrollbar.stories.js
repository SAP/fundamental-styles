export default {
    title: 'Components/Scrollbar',
    parameters: {
        description: `
Themeable scrollbar is the scrollbar component made accordingly to the Fiori 3 design guidelines. 
Using the themeable scrollbar is preferred over the browser's default in the components that support having scrollbars and made accordingly to the Fiori 3 design guidelines.
Themeable scrollbar works in Chrome, Safari, and other WebKit-based browsers and partially works in Firefox (no hover effects).
Component not working in the IE, default scrollbar is shown instead.
            `,
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
