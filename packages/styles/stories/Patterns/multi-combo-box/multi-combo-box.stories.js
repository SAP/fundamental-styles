import twoColumnComboBoxExampleHtml from "./two-column-combo-box.example.html?raw";
import filteringExampleHtml from "./filtering.example.html?raw";
import mobileModeExampleHtml from "./mobile-mode.example.html?raw";
import semanticExampleHtml from "./semantic.example.html?raw";
import readOnlyAndDisabledExampleHtml from "./read-only-and-disabled.example.html?raw";
import matchPopoverBodySizeExampleHtml from "./match-popover-body-size.example.html?raw";
import groupingExampleHtml from "./grouping.example.html?raw";
import asFormItemExampleHtml from "./as-form-item.example.html?raw";
import '../../../src/form-label.scss';
import '../../../src/popover.scss';
import '../../../src/radio.scss';
import '../../../src/title.scss';
import '../../../src/token.scss';
import '../../../src/input-group.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/tokenizer.scss';
import '../../../src/dialog.scss';
import '../../../src/bar.scss';
import '../../../src/input.scss';
import '../../../src/layout-grid.scss';
import '../../../src/link.scss';
export default {
  title: 'Patterns/Multi ComboBox',
  parameters: {
    description: `
Multi ComboBox allows users to enter multiple values which are displayed as tokens. It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
Users can also enter custom values if the entries are not validated by the application. Multi-selection is permitted.


##Usage
**Use the multi-combo box if:**
- The user needs to select one or more options from a long list of options.
- The values of the option list contain secondary information that does not need to be displayed right away.

**Do not use multi-combo box if**
- The user needs to choose between two options, such as ON or OFF and YES or NO.
- You need to display more than one attribute.
- You want to enable users to add custom values.
- Your use case requires all available options to be displayed right away, without any user interaction
- The user needs to search on multiple attributes.
- Your use case requires more options to choose from.

`,
    tags: ['f3', 'a11y', 'theme'],
    components: ['form-label', 'popover', 'radio', 'title', 'token', 'input-group', 'checkbox', 'list', 'button', 'icon', 'tokenizer', 'dialog', 'bar', 'input', 'layout-grid', 'link']
  }
};
export const AsFormItem = () => asFormItemExampleHtml;
AsFormItem.parameters = {
  docs: {
    description: {
      story: `

Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
  }
};
export const Grouping = () => groupingExampleHtml;
Grouping.parameters = {
  docs: {
    description: {
      story: 'In cases where the list items need to be categorized into groups, it is possible to add headers for each category as seen below.'
    }
  }
};
export const MatchPopoverBodySize = () => matchPopoverBodySizeExampleHtml;
MatchPopoverBodySize.parameters = {
  docs: {
    description: {
      story: `
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.

This class has been added to all the \`Multi ComboBox\` examples above.
In the example you can see how the \`Multi ComboBox\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
  }
};
export const ReadOnlyAndDisabled = () => readOnlyAndDisabledExampleHtml;
ReadOnlyAndDisabled.parameters = {
  docs: {
    description: {
      story: `
To make the \`Multi ComboBox\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.

To disable a \`Multi ComboBox\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disabled\` class or the \`aria-disabled="true"\` attribute.
`
    }
  }
};
export const Semantic = () => semanticExampleHtml;
Semantic.parameters = {
  docs: {
    description: {
      story: `
For a complete list of states supported by the \`Multi ComboBox\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into \`fd-input-group\` element.
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.`
    }
  }
};
export const MobileMode = () => mobileModeExampleHtml;
MobileMode.parameters = {
  docs: {
    description: {
      story: `
For mobile devices, or tablets, Multi ComboBox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.`
    }
  }
};
export const Filtering = () => filteringExampleHtml;
Filtering.parameters = {
  docs: {
    description: {
      story: `
The user can filter selectable options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
    }
  }
};
export const TwoColumnComboBox = () => twoColumnComboBoxExampleHtml;
TwoColumnComboBox.parameters = {
  docs: {
    description: {
      story: `
The user can filter selectable having 2 options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
    }
  }
};