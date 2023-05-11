import responsivePaddingExampleHtml from "./responsive-padding.example.html?raw";
import noPaddingExampleHtml from "./no-padding.example.html?raw";
import doubleSidedPaddingExampleHtml from "./double-sided-padding.example.html?raw";
import allRoundPaddingExampleHtml from "./all-round-padding.example.html?raw";
import '../../../src/paddings.scss';
export default {
  title: 'Layouts/Paddings',
  parameters: {
    description: `The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
        With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element.
        We now provide a number of predefined padding clases which add predefined padding values.`,
    tags: ['f3', 'theme']
  }
};
export const AllRoundPadding = () => allRoundPaddingExampleHtml;
AllRoundPadding.storyName = 'All-Round Padding';
AllRoundPadding.parameters = {
  docs: {
    description: {
      story: `All-round padding appears on all sides of the container they are applied to. Use \`fd-padding\`
        class to apply a padding of 1rem.`
    }
  }
};
export const DoubleSidedPadding = () => doubleSidedPaddingExampleHtml;
DoubleSidedPadding.storyName = 'Double-Sided Padding';
DoubleSidedPadding.parameters = {
  docs: {
    description: {
      story: `Double sided paddings appear on two opposite sides of the element. Use \`fd-padding-begin-end\`
        class with any of the following modifiers:

| Element | Modifier class |
| ----------------: | :------------ |
| Tiny | \`fd-padding-begin-end--tiny\` |
| Small | \`fd-padding-begin-end--sm\` |
| Medium | \`fd-padding-begin-end--md\` |
| Large | \`fd-padding-begin-end--lg\` |
`
    }
  }
};
export const NoPadding = () => noPaddingExampleHtml;
NoPadding.parameters = {
  docs: {
    description: {
      story: `No padding classes remove existing container paddings. Use \`fd-padding--none\`
        modifier to remove existing padding. Place the no padding classes last to make sure they will be applied.`
    }
  }
};
export const ResponsivePadding = () => responsivePaddingExampleHtml;
ResponsivePadding.parameters = {
  docs: {
    description: {
      story: `The responsive padding class adds a double sided padding inside a container based on its width. Use \`fd-padding-responsive\`
        class with any of the following modifiers:

| Element | Modifier class |
| ----------------: | :------------ |
| Small | \`fd-padding-responsive--sm\` |
| Medium | \`fd-padding-responsive--md\` |
| Large | \`fd-padding-responsive--lg\` |
| Extra-large | \`fd-padding-responsive--xl\` |
`
    }
  }
};