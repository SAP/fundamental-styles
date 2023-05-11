import mobileExampleHtml from "./mobile.example.html?raw";
import semanticExampleHtml from "./semantic.example.html?raw";
import disabledAndReadOnlyExampleHtml from "./disabled-and-read-only.example.html?raw";
import matchPopoverBodySizeExampleHtml from "./match-popover-body-size.example.html?raw";
import twoItemsAndItemsGroupingExampleHtml from "./two-items-and-items-grouping.example.html?raw";
import asFormItemExampleHtml from "./as-form-item.example.html?raw";
import cozyAndCompactExampleHtml from "./cozy-and-compact.example.html?raw";
import '../../../src/radio.scss';
import '../../../src/title.scss';
import '../../../src/form-label.scss';
import '../../../src/popover.scss';
import '../../../src/icon.scss';
import '../../../src/input-group.scss';
import '../../../src/input.scss';
import '../../../src/list.scss';
import '../../../src/button.scss';
import '../../../src/dialog.scss';
import '../../../src/bar.scss';
import '../../../src/form-item.scss';
export default {
  title: 'Patterns/Combobox Input',
  parameters: {
    description: `
The Combobox Input component is an opinionated composition of the input group, popover and list components.
The popover and \`dropdown list\` is shared between the multi-input and select components.
Please see the \`select\` documentation for the complete list of modifiers that are also  supported by the combobox component.

\`Combobox\` allows users to select an item from a predefined list.
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
If the entries are not validated by the application, users can also enter custom values.
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const CozyAndCompact = () => cozyAndCompactExampleHtml;
CozyAndCompact.parameters = {
  docs: {
    iframeHeight: 700
  }
};
export const AsFormItem = () => asFormItemExampleHtml;
AsFormItem.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
  }
};
export const TwoItemsAndItemsGrouping = () => twoItemsAndItemsGroupingExampleHtml;
TwoItemsAndItemsGrouping.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
The \`ComboBox\` component can be customized by adding additional information in additional columns as seen below.

In cases where the list items need to be categorized into groups, it is possible to add headers for each category.`
    }
  }
};
export const MatchPopoverBodySize = () => matchPopoverBodySizeExampleHtml;
MatchPopoverBodySize.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: `
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.
This class has been added to all the \`Combobox\` examples above.
In the example you can see how the \`Combobox\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
  }
};
export const DisabledAndReadOnly = () => disabledAndReadOnlyExampleHtml;
DisabledAndReadOnly.parameters = {
  docs: {
    description: {
      story: `
To disable a \`Combobox\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disable\` class or the \`aria-disabled="true"\` attribute.

To make the \`Combobox\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.`
    }
  }
};
export const Semantic = () => semanticExampleHtml;
Semantic.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: `
For a complete list of states supported by the \`combobox\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into fd-input-group element.
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.
`
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    story: {
      iframeHeight: 600
    },
    description: {
      story: `
For mobile devices, or tablets, combobox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.
`
    }
  }
};