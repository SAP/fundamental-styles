import blankExampleHtml from "./blank.example.html?raw";
import readonlyExampleHtml from "./readonly.example.html?raw";
import disabledExampleHtml from "./disabled.example.html?raw";
import largerSelectExampleHtml from "./larger-select.example.html?raw";
import matchSelectPopoverBodySizeExampleHtml from "./match-select-popover-body-size.example.html?raw";
import noWrappingExampleHtml from "./no-wrapping.example.html?raw";
import textWrappingExampleHtml from "./text-wrapping.example.html?raw";
import itemGroupingExampleHtml from "./item-grouping.example.html?raw";
import twoColumnsAndIconsExampleHtml from "./two-columns-and-icons.example.html?raw";
import twoColumnExampleHtml from "./two-column.example.html?raw";
import asFormItemExampleHtml from "./as-form-item.example.html?raw";
import semanticStatesExampleHtml from "./semantic-states.example.html?raw";
import mobileModeExampleHtml from "./mobile-mode.example.html?raw";
import cozyExampleHtml from "./cozy.example.html?raw";
import '../../../src/icon.scss';
import '../../../src/popover.scss';
import '../../../src/list.scss';
import '../../../src/form-label.scss';
import '../../../src/form-message.scss';
import '../../../src/select.scss';
import '../../../src/dialog.scss';
import '../../../src/toolbar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/layout-grid.scss';
import '../../../src/form-item.scss';
export default {
  title: 'Components/Select',
  parameters: {
    description: `The select component is commonly used to enable users to select an item from a predefined list. It should be used when there are less than 12 items to choose from.

##Usage

**Use select if:**

- Users need to select one item exclusively from a short list of options (for example, fewer than 12 items).
- The values of the option list are of secondary importance and do not need to be displayed right away.

**Do not use select if:**

- Users need to choose between two options, such as _On_ or _Off_ and _Yes_ or _No_. In this case, consider using a **Switch** instead.
- Users need to pick one item from a very large set of options. In this case, consider using the **Combobox Input** instead.
- Your use case requires all available options to be displayed right away, without any user interaction. In this case, consider using **radio buttons or a radio button group** instead.

`
  }
};
export const Default = () => cozyExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: `
Select displays a predefined option and a button that triggers a dropdown menu to view more options (list items). By default, it is displayed in cozy mode.
        `
    }
  }
};
export const MobileMode = () => mobileModeExampleHtml;
MobileMode.storyName = 'Mobile';
MobileMode.parameters = {
  docs: {
    description: {
      story: `
Select is displayed in a full-screen dialog when viewed on mobile (and some tablet screens). The dialog displays a list where the first list item is pre-selected. To display select in mobile mode, wrap the select component in **Dialog** and **Bar** components.
`
    }
  }
};
export const SemanticStates = () => semanticStatesExampleHtml;
SemanticStates.storyName = 'States';
SemanticStates.parameters = {
  docs: {
    description: {
      story: `
Select can be displayed in semantic states to communicate *Success*, *Error*, *Warning* or *Information* to the users. They can be displayed as either messages within the dropdown list, or by itself as a static message. To display select in various semantic states, add the class (shown below) to the \`fd-select__control\` element.

| Semantic state | Class
:------------------- | :-------
Success | \`is-success\`
Error | \`is-error\`
Warning | \`is-warning\`
Information | \`is-information\`


**Note:** To add text in the body of the component, include the text within the \`fd-list__message\` above the \`ul\` element.
        `
    }
  }
};
export const AsFormItem = () => asFormItemExampleHtml;
AsFormItem.storyName = 'Form item';
AsFormItem.parameters = {
  docs: {
    description: {
      story: `
When displaying select within a form, you can apply the \`fd-form-item\` wrapper to ensure proper styling for the items. However, you are free to override this in your custom styles if necessary.
`
    }
  }
};
export const TwoColumn = () => twoColumnExampleHtml;
TwoColumn.storyName = '2-column';
TwoColumn.parameters = {
  docs: {
    description: {
      story: `
Select can be displayed with two columns in the dropdown list view. The column width should be adjusted depending on the use case, but always with a default ration of 60% (first column) to 40% (second column). To display a second column, add the \`fd-list__secondary\` class to the list items under the title element.
        `
    }
  }
};
export const TwoColumnsAndIcons = () => twoColumnsAndIconsExampleHtml;
TwoColumnsAndIcons.storyName = '2-column with icons';
TwoColumnsAndIcons.parameters = {
  docs: {
    description: {
      story: `
Not only can select be displayed with two columns, but also with icons. To display icons, add the \`fd-list__icon sap-icon--*\` to the list items before the title element. Find icons on the **Icon** page.
`
    }
  }
};
export const ItemGrouping = () => itemGroupingExampleHtml;
ItemGrouping.storyName = 'Grouping';
ItemGrouping.parameters = {
  docs: {
    description: {
      story: `
Select can be displayed with headers that group the list items in the dropdown menu. To display group headers, add the \`fd-list__group-header\` label within the body element.
`
    }
  }
};
export const TextWrapping = () => textWrappingExampleHtml;
TextWrapping.storyName = 'Text wrapping';
TextWrapping.parameters = {
  docs: {
    description: {
      story: `
The select component wraps text by default, and there is virtually no limit to the text length. However, it is recommended to keep the length to a minimum for readability. The second column will always remain center-aligned, despite the length of the list item.
        `
    }
  }
};
export const NoWrapping = () => noWrappingExampleHtml;
NoWrapping.storyName = 'No wrapping';
NoWrapping.parameters = {
  docs: {
    description: {
      story: `
Although select wraps text by default, it is possible to prevent wrapping. To achieve this, add the \`--no-wrap\` modifier class to the \`fd-list__title\` and/or \`fd-list__secondary\` elements.
        `
    }
  }
};
export const MatchSelectPopoverBodySize = () => matchSelectPopoverBodySizeExampleHtml;
MatchSelectPopoverBodySize.storyName = 'Popover style';
MatchSelectPopoverBodySize.parameters = {
  docs: {
    description: {
      story: `
Select can be displayed as a popover, using all of its specifications. The default size for the popover body is often longer than the text length. The body can be adjusted to match the text length by adding the \`fd-popover__body—dropdown-fill\` class to \`fd-popover__body\`. See **Popover** for more details.
        `
    }
  }
};
export const LargerSelect = () => largerSelectExampleHtml;
LargerSelect.storyName = 'Large Select';
LargerSelect.parameters = {
  docs: {
    description: {
      story: `
There is a way to make larger select select body, To achieve it, add \`fd-list--large-dropdown\` to \`fd-list\` element.
        `
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    description: {
      story: `
Select can be disabled to communicate to the user that the control cannot be selected. To disable select, add the \`aria-disabled="true"\` attribute to the \`fd-popover__control\` and the \`fd-select__control\` elements.
        `
    }
  }
};
export const Readonly = () => readonlyExampleHtml;
Readonly.storyName = 'Read-only';
Readonly.parameters = {
  docs: {
    description: {
      story: `
Select can be displayed as read-only, meaning the value in the input field cannot be changed via typing. To display select as read-only, add the \`.is-readonly\` class to the \`fd-select__control\` element.
        `
    }
  }
};
export const Blank = () => blankExampleHtml;
Blank.parameters = {
  docs: {
    description: {
      story: `
The select component can display a blank list item instead of a pre-selected list item, prompting the user to select the dropdown button to see more. To display a blank list item, simply enter a few spaces in the title of the list item.
        `
    }
  }
};