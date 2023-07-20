import responsivenessExampleHtml from "./responsiveness.example.html?raw";
import equalSplitExampleHtml from "./equal-split.example.html?raw";
import positionBottomExampleHtml from "./position-bottom.example.html?raw";
import positionRightExampleHtml from "./position-right.example.html?raw";
import positionLeftExampleHtml from "./position-left.example.html?raw";
import '../../../src/dynamic-side-content.scss';
export default {
  title: 'Layouts/Dynamic Side Content',
  parameters: {
    description: `
Dynamic side content is a layout control that displays supplemental content in a separate area to support the users' understanding of the main content displayed.

**The dynamic side content consists of two elements:**

*  \`.fd-dynamic-side__side\`: Side content section.
*  \`.fd-dynamic-side__main\`: Main content section.


## Usage
### Use dynamic side content if:
*  You want to display information that:
  *  Will enrich the main content and will help the user better perform his/her tasks;
  *  Only makes sense when displayed next to the main container (side-by-side);
  *  Influences the main content (for example, a filter for list; settings for chart, details for map).
*  Users should have access to all of the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.


## Sizes
The screen width ratio between the side and main content area will vary depending on the available screen space or window size. The default style displays side content on the left or right side of the main content area but if the space is limited, it can display at the bottom.

| Screen size &nbsp;&nbsp; | Main content width ratio &nbsp;&nbsp; | Side content width ratio &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- | :--- | :--- |
| >= 1400px &nbsp;&nbsp; | 75% | 25% | \`fd-dynamic-side--xl\` |
| < 1400px & > 720px &nbsp;&nbsp; | 66.66% | 33.33% | \`fd-dynamic-side--md\` |
| < 720px &nbsp;&nbsp; | 100% | Disappears | \`fd-dynamic-side--sm\` |
| Equal split mode (> 720px) &nbsp;&nbsp; | 50% | 50% |

Note: For all screens < 720px, the side content disappears entirely.
`,
    tags: ['f3', 'development']
  }
};
export const PositionLeft = () => positionLeftExampleHtml;
PositionLeft.storyName = 'Left';
PositionLeft.parameters = {
  docs: {
    description: {
      story: 'To display side content from the left, put `fd-dynamic-side__side` as the first child element of `fd-dynamic-side`.'
    }
  }
};
export const PositionRight = () => positionRightExampleHtml;
PositionRight.storyName = 'Right';
PositionRight.parameters = {
  docs: {
    description: {
      story: 'To display side content from the right, put `fd-dynamic-side__side` as the second child element of `fd-dynamic-side`.'
    }
  }
};
export const PositionBottom = () => positionBottomExampleHtml;
PositionBottom.storyName = 'Below';
PositionBottom.parameters = {
  docs: {
    description: {
      story: 'To display side content below the main content area, keep `fd-dynamic-side__side` as the last child element and add the `fd-dynamic-side--below` modifier class.'
    }
  }
};
export const EqualSplit = () => equalSplitExampleHtml;
EqualSplit.storyName = 'Equal split';
EqualSplit.parameters = {
  docs: {
    description: {
      story: 'The equal split mode provides users with a 50:50 view of the main content and side content, which enables users to show more data i.e. for comparison purposes. To enable equal split mode, add the `fd-dynamic-side--equal-split` modifier class to the container.'
    }
  }
};
export const Responsiveness = () => responsivenessExampleHtml;
Responsiveness.parameters = {
  docs: {
    description: {
      story: `
To display the dynamic side content for specific screen sizes, use the respective modifier classes:

| Size &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- |
| Small &nbsp;&nbsp; | \`fd-dynamic-side--sm\` |
| Medium & Large &nbsp;&nbsp; | \`fd-dynamic-side--md\` |
| Extra Large &nbsp;&nbsp; | \`fd-dynamic-side--xl\` |
`
    }
  }
};