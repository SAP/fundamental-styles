import filteringExampleHtml from "./filtering.example.html?raw";
import mobileModeExampleHtml from "./mobile-mode.example.html?raw";
import semanticExampleHtml from "./semantic.example.html?raw";
import multiInputModesExampleHtml from "./multi-input-modes.example.html?raw";
import matchPopoverBodySizeExampleHtml from "./match-popover-body-size.example.html?raw";
import groupingExampleHtml from "./grouping.example.html?raw";
import asFormItemExampleHtml from "./as-form-item.example.html?raw";
import '../../../src/input.scss';
import '../../../src/form-label.scss';
import '../../../src/form-item.scss';
import '../../../src/form-message.scss';
import '../../../src/popover.scss';
import '../../../src/radio.scss';
import '../../../src/title.scss';
import '../../../src/token.scss';
import '../../../src/tokenizer.scss';
import '../../../src/input-group.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/link.scss';
import '../../../src/menu.scss';
export default {
  title: 'Patterns/Multi Input',
  parameters: {
    description: `
Multi Input allows users to enter multiple values which are displayed as a tokens. It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
If the entries are not validated by the application, users can also enter custom values.

##Usage

**Use the multi input if:**

- You want the user to select multiple ranges.
- The dataset to choose from is expected to increase over time.
- You need to provide the value help option to help users select or search multiple business objects.
- You want to enable users to add custom values.

`,
    tags: ['f3', 'a11y', 'theme'],
    components: ['input', 'form-label', 'form-item', 'form-message', 'popover', 'radio', 'title', 'token', 'tokenizer', 'input-group', 'checkbox', 'list', 'button', 'icon', 'bar', 'dialog', 'link', 'menu']
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

This class has been added to all the \`Multi Input\` examples above.
In the example you can see how the \`Multi Input\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
  }
};
export const MultiInputModes = () => multiInputModesExampleHtml;
MultiInputModes.parameters = {
  docs: {
    description: {
      story: `
To disable a \`Multi Input\` component, the \`disabled\` attribute needs to be added to the \`fd-popover__control\` and the \`fd-input-group\` elements.
The disabled state can also be achieved by adding the \`.is-disabled\` class or the \`aria-disabled="true"\` attribute.

To make the \`Multi Input\` component read-only, the \`readonly\` attribute needs to be added to the \`fd-input-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute. Also, the \`fd-tokenizer--readonly\` class needs to be added to the \`fd-tokenizer\` element and the \`fd-token--readonly\` class to each \`fd-token\` element.

To make the \`Multi Input\` component display-only, the \`display\` attribute needs to be added to the \`fd-input-group\` element.
This can also be done by using the \`.is-display\` class. Also, the \`fd-tokenizer--display\` class needs to be added to the \`fd-tokenizer\` element and the \`fd-token--display\` class to each \`fd-token\` element.
In order to have the label and the \`Multi Input\` component in one line, the \`fd-form-item\` and \`fd-form-item--horizontal\` classes need to be added to the parent container.
`
    }
  }
};
export const Semantic = () => semanticExampleHtml;
Semantic.parameters = {
  docs: {
    description: {
      story: `
For a complete list of states supported by the \`Multi Input\` component, please see the documentation for the form or select components.

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
For mobile devices, or tablets, multi input component should be displayed in fullscreen mode.
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