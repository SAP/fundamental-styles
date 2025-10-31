import scrollExampleHtml from "./scroll.example.html?raw";
import inactiveExampleHtml from "./inactive.example.html?raw";
import selectionExampleHtml from "./selection.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import groupsExampleHtml from "./groups.example.html?raw";
import iconsExampleHtml from "./icons.example.html?raw";
import itemCounterExampleHtml from "./item-counter.example.html?raw";
import secondaryDataExampleHtml from "./secondary-data.example.html?raw";
import actionListExampleHtml from "./action-list.example.html?raw";
import navigationIndicatorExampleHtml from "./navigation-indicator.example.html?raw";
import buttonsExampleHtml from "./buttons.example.html?raw";
import navigationExampleHtml from "./navigation.example.html?raw";
import interactiveExampleHtml from "./interactive.example.html?raw";
import unreadExampleHtml from "./unread.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import searchResultsExampleHtml from "./search-results.example.html?raw";
import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/button.scss';
import '../../../../../src/busy-indicator.scss';
import '../../../../../src/avatar.scss';
import '../../../../../src/popover.scss';
import '../../../../../src/text.scss';
import '../../../../../src/bar.scss';
import '../../../../../src/title.scss';
export default {
  title: 'Components/List/Standard',
  parameters: {
    description: `
In SAP Fiori, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, while the data in tables tend to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in **Popovers** or **Dialogs**.

##Usage
**Use the standard list if:**

- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple datasets.
- You need to display a single-level hierarchy rather than using a complex tree table to support this simple use case.


**Do not use the standard list if:**

- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
- You work with complex hierarchies. In this case, use a **Tree**.

`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Default';
Standard.parameters = {
  docs: {
    description: {
      story: `The default standard list displays list items in the standard size, which is ideal for mobile. To display the standard list in compact mode (for desktop), add the \`is-compact\` modifier class to the main element.
        `
    }
  }
};
export const Unread = () => unreadExampleHtml;
Unread.parameters = {
  docs: {
    description: {
      story: `The \`fd-list__item--unread\` modifier will change the font weight to bold for easier legibility.
        `
    }
  }
};
export const Interactive = () => interactiveExampleHtml;
Interactive.parameters = {
  docs: {
    description: {
      story: `
The \`fd-list__item--interractive\` will force list item to handle hover and active states.
Usage of this modifier is not needed on \`Selection\`, \`Navigation\` and \`Action\` modes.
        `
    }
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.parameters = {
  docs: {
    description: {
      story: `
Standard list items can contain navigation links. To add navigation, add the \`fd-list—navigation\` modifier class to the list and the \`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
    }
  }
};
export const Buttons = () => buttonsExampleHtml;
Buttons.parameters = {
  docs: {
    description: {
      story: `
`
    }
  }
};
export const NavigationIndicator = () => navigationIndicatorExampleHtml;
NavigationIndicator.storyName = 'Navigation indicators';
NavigationIndicator.parameters = {
  docs: {
    description: {
      story: `
If only a subset of the list items is navigable you should indicate them with an arrow icon. To display navigation indicators, add the \`fd-list--navigation-indication\` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a standard list with navigation (in the example above).
`
    }
  }
};
export const ActionList = () => actionListExampleHtml;
ActionList.storyName = 'Action';
ActionList.parameters = {
  docs: {
    description: {
      story: `
Standard list items can display actions that users can choose from. To display actions, add the \`fd-list__item--action\` modifier class to the list elements.
`
    }
  }
};
export const SecondaryData = () => secondaryDataExampleHtml;
SecondaryData.storyName = 'Secondary data';
SecondaryData.parameters = {
  docs: {
    description: {
      story: `To display secondary data in standard list items, add a span element with \`fd-list__secondary\` class within the list elements. The secondary data can also be a status message by adding the appropriate modifiers. 

| **Status** | **Modifier class** |
| :--------- | :---------- | 
| Neutral | \`fd-list__secondary\` |
| Positive | \`fd-list__secondary fd-list__secondary--positive\` |
| Critical | \`fd-list__secondary fd-list__secondary--critical\` |
| Negative | \`fd-list__secondary fd-list__secondary--negative\` |
| Informative | \`fd-list__secondary fd-list__secondary--informative\` |

        `
    }
  }
};
export const ItemCounter = () => itemCounterExampleHtml;
ItemCounter.parameters = {
  docs: {
    description: {
      story: `The item counter is vertically aligned within the list item, to the right. The maximum number of digits is 5. In case of more digits, the formatting and the transformation is left to the applications. It's recommended to avoid combining item counter to other list variations and status texts.
        `
    }
  }
};
export const Icons = () => iconsExampleHtml;
Icons.storyName = 'Icon';
Icons.parameters = {
  docs: {
    description: {
      story: `To display an icon inside standard list items, add the \`fd-list__icon\` class along with the icon within the list elements. For example, \`fd-list__icon sap-icon—lightbulb\`.
        `
    }
  }
};
export const Groups = () => groupsExampleHtml;
Groups.storyName = 'Group';
Groups.parameters = {
  docs: {
    description: {
      story: `Standard list items can be displayed with headers, separating the items into groups. To add group headers, add the \`fd-list__group-header\` class to the list elements.
        `
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    description: {
      story: `The standard list can display a footer by adding a span element with an \`fd-list__footer\` class after the unordered list element.
        `
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: `To display a borderless standard list, add the \`fd-list--no-border\` modifier class to the main element.
        `
    }
  }
};
export const Selection = () => selectionExampleHtml;
Selection.parameters = {
  docs: {
    description: {
      story: `Standard list items can display checkboxes that users can select from. To display standard list items with selection, add the \`fd-list--selection\` modifier class to the main element. To create checkbox form items, add the \`fd-list__form-item\` class within each list element.
`
    }
  }
};
export const Inactive = () => inactiveExampleHtml;
Inactive.parameters = {
  docs: {
    description: {
      story: `Some list item can be made inactive, to make it non-clickable.
`
    }
  }
};
export const Scroll = () => scrollExampleHtml;
Scroll.storyName = 'Infinite scroll';
Scroll.parameters = {
  docs: {
    description: {
      story: `If height for list is fixed and there are more list otem to show, then we should be able to scroll to next list items.
`
    }
  }
};
export const SearchResults = () => searchResultsExampleHtml;
SearchResults.storyName = 'Search Results';
SearchResults.parameters = {
  docs: {
    description: {
      story: `To be used in a popover containing sophisticated search results.`
    }
  }
};