import groupHeaderInFormGridExampleHtml from "./group-header-in-form-grid.example.html?raw";
import groupHeaderExampleHtml from "./group-header.example.html?raw";
import requiredExampleHtml from "./required.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-layout-grid.scss';
import '../../../../src/form-group.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
  title: 'Components/Forms/Form Group',
  parameters: {
    description: `
Form groups are used to assemble form elements with labels, messages, and help containers.

These components can be used alone. For example, the \`fd-form__item\` element with the label and control could be used without the full form group since not every form field will need error messages.

        `,
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';

export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `
To indicate to the user that it's required to fill out an input field, add the \`fd-form-label--required\` modifier class to the \`fd-form-label\` element.
`
    }
  }
};
export const GroupHeader = () => groupHeaderExampleHtml;
GroupHeader.storyName = 'Group header';
GroupHeader.parameters = {
  docs: {
    description: {
      story: `
Form groups can be grouped together under a header with the \`fd-form-group__header\` class. To remove the border on the bottom use <code>fd-form-group__header--no-border</code> modifier class. For a header with no inline padding use <code>fd-form-group__header--no-padding</code> modifier class with <code>fd-form-group__header</code> base class. Both modifiers can be used together for a header with no inline padding and no border. 
`
    }
  }
};
export const GroupHeaderInFormGrid = () => groupHeaderInFormGridExampleHtml;
GroupHeaderInFormGrid.storyName = 'Group header (form grid)';
GroupHeaderInFormGrid.parameters = {
  docs: {
    description: {
      story: `
When group headers are displayed in a **Form Grid**, paddings are added to the groups.
        `
    }
  }
};