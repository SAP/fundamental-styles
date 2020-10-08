import '../../dist/dynamic-side-content.css';

export default {
    title: 'Layouts/Dynamic Side Content',
    parameters: {
        description: `
Dynamic side content is a layout control that displays supplemental content in a separate area to support the users' understanding of the main content displayed.

## The dynamic side content consists of two elements:
*  \`.fd-dynamic-side__side\`: Side content section.
*  \`.fd-dynamic-side__main\`: Main content section.


## Usage
### Use dynamic side content if:
*  You want to display information that:
  *  Will enrich the main content and will help the user better perform his/her tasks;
  *  Only makes sense when displayed next to the main container (side-by-side);
  *  Influences the main content (for example, a filter for list; settings for chart, details for map).
*  Users should have access to all of the key functions and critical information in the app even if they do not see the side content.  
This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.  


## Sizes
The screen width ratio between the side and main content area will vary depending on the available screen space or window size. The default style displays side content on the left or right side of the main content area but if the space is limited, it can display at the bottom.

| Screen size &nbsp;&nbsp; | Main content width ratio &nbsp;&nbsp; | Side content width ratio &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- | :--- | :--- |
| >= 1400px &nbsp;&nbsp; | 75% | 25% | \`fd-dynamic-side--xl\` |
| < 1400px & > 720px &nbsp;&nbsp; | 66.66% | 33.33% | \`fd-dynamic-side--md\` |
| < 720px &nbsp;&nbsp; | 100% | Disappears | \`fd-dynamic-side--sm\` |
| > 720px Equal split mode &nbsp;&nbsp; | 50% | 50% |

Note: For all screens < 720px, the side content disappears entirely.
`,
        tags: ['f3', 'development']
    }
};

export const positionLeft = () => `
    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
`;

positionLeft.storyName = 'Left';
positionLeft.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content from the left, put `fd-dynamic-side__side` as the first child element of `fd-dynamic-side`.'
    }
};

export const positionRight = () => `
    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`;

positionRight.storyName = 'Right';
positionRight.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content from the right, put `fd-dynamic-side__side` as the second child element of `fd-dynamic-side`.'
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

positionBottom.storyName = 'Below';
positionBottom.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To display side content below the main content area, keep `fd-dynamic-side__side` as the last child element and add the `fd-dynamic-side--below` modifier class.'
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
            'The equal split mode provides users with a 50:50 view of the main content and side content, which enables users to show more data i.e. for comparison purposes. To enable equal split mode, add the `fd-dynamic-side--equal-split` modifier class to the container.'
    }
};

export const responsiveness = () => `
    <h3>On extra large screen the main part occupies 75% wide</h3>
    <div class="fd-dynamic-side fd-dynamic-side--xl">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
    <h3>On middle screen the main part occupies 66.66% wide</h3>
    <div class="fd-dynamic-side fd-dynamic-side--md" style="max-width: 920px">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
    <h3>On small screen the main part occupies 100% wide and the side content gets hidden</h3>
    <div class="fd-dynamic-side fd-dynamic-side--sm" style="max-width: 420px">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
`;

responsiveness.storyName = 'Responsiveness';
responsiveness.parameters = {
    docs: {
        iframeHeight: 160,
        storyDescription:
            'To get the component rendered for the specific screen size use `fd-dynamic-side--xl` / `fd-dynamic-side--md` / `fd-dynamic-side--sm` modifier classes respectively.'
    }
};
