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

These components can be used alone. For example, the \`form__item\` element with the label and control could be used without the full form group since not every form field will need error messages.

        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `
The default form group component displays an inline label and an input field that is highlighted in blue when selected.
`
    }
  }
};
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `
To indicate to the user that it’s required to fill out an input field, add the \`--required\` modifier class to the \`fd-form-label\` element.
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
Form groups can be grouped together under a header with the \`fd-form-group__header\` class.
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