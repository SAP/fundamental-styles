import doubleSidedNegativeMarginBeginEndExampleHtml from "./double-sided-negative-margin-begin-end.example.html?raw";
import responsiveMarginExampleHtml from "./responsive-margin.example.html?raw";
import noMarginExampleHtml from "./no-margin.example.html?raw";
import doubleSidedMarginBeginEndExampleHtml from "./double-sided-margin-begin-end.example.html?raw";
import doubleSidedMarginTopBottomExampleHtml from "./double-sided-margin-top-bottom.example.html?raw";
import singleSidedMarginBeginExampleHtml from "./single-sided-margin-begin.example.html?raw";
import singleSidedMarginBottomExampleHtml from "./single-sided-margin-bottom.example.html?raw";
import singleSidedMarginEndExampleHtml from "./single-sided-margin-end.example.html?raw";
import singleSidedMarginTopExampleHtml from "./single-sided-margin-top.example.html?raw";
import allRoundMarginExampleHtml from "./all-round-margin.example.html?raw";
import '../../../src/margins.scss';
import '../../../src/panel.scss';
export default {
  title: 'Layouts/Margins',
  parameters: {
    description: `The CSS margin properties are used to create space around elements, outside of any defined borders.
        With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element.
        We now provide a number of predefined margin clases which add predefined margin values.`,
    tags: ['f3', 'theme']
  }
};
export const AllRoundMargin = () => allRoundMarginExampleHtml;
AllRoundMargin.storyName = 'All-Round Margin';
AllRoundMargin.parameters = {
  docs: {
    description: {
      story: `All-round margin appears on all sides of the container they are applied to. Use \`fd-margin\`
        class with any of the following modifiers:

| Element | Modifier class | Margin applied |
| ----------------: | :------------ | :------------ |
| Tiny | \`fd-margin--tiny\` | 0.5rem |
| Small | \`fd-margin--sm\` | 1rem |
| Medium | \`fd-margin--md\` | 2rem |
| Large | \`fd-margin--lg\` | 3rem |
`
    }
  }
};
export const SingleSidedMarginTop = () => singleSidedMarginTopExampleHtml;
SingleSidedMarginTop.storyName = 'Single-Sided Margin Top';
SingleSidedMarginTop.parameters = {
  docs: {
    description: {
      story: `Single sided margins appear on only one of the sides of the element:

- top - displayed on top of the element
- end - displayed on the right side and in right-to-left mode on the left side of the element
- bottom - displayed on the bottom of the element
- begin - displayed on the left side and in right-to-left mode on the right side of the element.

Use \`fd-margin-top\` or \`fd-margin-end\` or \`fd-margin-bottom\` or \`fd-margin-begin\`
class with any of the size modifiers as mentioned above.
`
    }
  }
};
export const SingleSidedMarginEnd = () => singleSidedMarginEndExampleHtml;
SingleSidedMarginEnd.storyName = 'Single-Sided Margin End';
export const SingleSidedMarginBottom = () => singleSidedMarginBottomExampleHtml;
SingleSidedMarginBottom.storyName = 'Single-Sided Margin Bottom';
export const SingleSidedMarginBegin = () => singleSidedMarginBeginExampleHtml;
SingleSidedMarginBegin.storyName = 'Single-Sided Margin Begin';
export const DoubleSidedMarginTopBottom = () => doubleSidedMarginTopBottomExampleHtml;
DoubleSidedMarginTopBottom.storyName = 'Double-Sided Margin Top-Bottom';
DoubleSidedMarginTopBottom.parameters = {
  docs: {
    description: {
      story: `Double sided margins appear on two opposite sides of the element.

- top-bottom - displayed on top and bottom of the element
- begin-end - displayed on left and right side of the element

Use \`fd-margin-top-bottom\` or \`fd-margin-begin-end\` class with any of the size modifiers as mentioned above.`
    }
  }
};
export const DoubleSidedMarginBeginEnd = () => doubleSidedMarginBeginEndExampleHtml;
DoubleSidedMarginBeginEnd.storyName = 'Double-Sided Margin Begin-End';
export const NoMargin = () => noMarginExampleHtml;
NoMargin.parameters = {
  docs: {
    description: {
      story: `No margin classes remove existing container margins. Use \`fd-margin--none\` or  \`fd-margin-top--none\`
        or \`fd-margin-end--none\` or \`fd-margin-bottom--none\` or \`fd-margin-begin--none\`
        modifier classes to remove existing margin. Place the no margin classes last to make sure they will be applied.
        In the case of \`fd-margin-begin--none\` and \`fd-margin-end--none\`, \`!important\` is not applied since we want
        the user-specified margins(if any) to be reapplied in the RTL mode. Please note that for RTL to work correctly,
        you must add \`[dir="rtl"]\` style on the class where these modifiers will be applied.`
    }
  }
};
export const ResponsiveMargin = () => responsiveMarginExampleHtml;
ResponsiveMargin.parameters = {
  docs: {
    description: {
      story: `The responsive margins class adds a margin around an element based on the width of the container the element is in. Use \`fd-margin-responsive\`
        class with any of the following modifiers:

| Element | Modifier class |
| ----------------: | :------------ |
| Small | \`fd-margin-responsive--sm\` |
| Medium | \`fd-margin-responsive--md\` |
| Large | \`fd-margin-responsive--lg\` |
| Extra-large | \`fd-margin-responsive--xl\` |
`
    }
  }
};
export const DoubleSidedNegativeMarginBeginEnd = () => doubleSidedNegativeMarginBeginEndExampleHtml;
DoubleSidedNegativeMarginBeginEnd.storyName = 'Double-Sided Negative Margin Begin-End';
DoubleSidedNegativeMarginBeginEnd.parameters = {
  docs: {
    description: {
      story: `The negative margin class adds a double sided negative margin to an element. This is useful when aligning elements with built-in paddings.
  Use \`fd-margin-negative-begin-end\` class with any of the size modifiers as mentioned above.`
    }
  }
};