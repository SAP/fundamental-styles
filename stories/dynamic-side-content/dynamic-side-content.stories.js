import '../../dist/dynamic-side-content.css';

export default {
    title: 'Layouts/Dynamic Side Content',
    parameters: {
        description: `
  Dynamic side content is a layout control that displays additional content to help the user better understand the data that’s being displayed on the screen. It is displayed in a way that flexibly adapts to different screen sizes.
        
  ## Elements
  - <code>.fd-dynamic-side\\__side</code>: Side content section.
  - <code>.fd-dynamic-side\\__main</code>: Main content section.
`,
        tags: ['f3', 'development']
    }
};

export const positionBefore = () => `
    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
`;

positionBefore.storyName = 'Side from the left';
positionBefore.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content from the left put <code class="docs-code">fd-dynamic-side\\__side</code> as the first child element of <code class="docs-code">fd-dynamic-side</code>.'
    }
};

export const positionAfter = () => `
    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`;

positionAfter.storyName = 'Side from the right';
positionAfter.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content from the right put <code class="docs-code">fd-dynamic-side\\__side</code> as the second child element of <code class="docs-code">fd-dynamic-side</code>.'
    }
};

export const positionBottom = () => `
    <div class="fd-dynamic-side fd-dynamic-side--below">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`;

positionBottom.storyName = 'Side at the bottom';
positionBottom.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content at the bottom keep <code class="docs-code">fd-dynamic-side\\__side</code> as the last child element and add the <code class="docs-code">fd-dynamic-side--below</code> modifier.'
    }
};

export const equalSplit = () => `
    <div class="fd-dynamic-side fd-dynamic-side--equal-split">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`;

equalSplit.storyName = 'Equal split';
equalSplit.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To enable the "Equal split" mode add the <code class="docs-code">fd-dynamic-side--equal-split</code> modifier to the container.'
    }
};
