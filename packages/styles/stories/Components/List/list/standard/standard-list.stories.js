import scrollExampleHtml from "./scroll.example.html?raw";
import inactiveExampleHtml from "./inactive.example.html?raw";
import selectionExampleHtml from "./selection.example.html?raw";
import singleSelectionExampleHtml from "./single-selection.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import longTextExampleHtml from "./long-text.example.html?raw";
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
import '../../../../../src/radio.scss';
import '../../../../../src/link.scss';
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
In SAP, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, while the data in tables tend to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in **Popovers** or **Dialogs**.

##Usage
**Use the standard list if:**

- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple datasets.
- You need to display a single-level hierarchy rather than using a complex tree table to support this simple use case.


**Do not use the standard list if:**

- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
- You work with complex hierarchies. In this case, use a **Tree**.

## Accessibility

Every \`<ul role="list">\` must carry an accessible name so assistive-technology users know what the list contains. Supply one of:
- \`aria-label="…"\` — for lists that have no visible heading, or
- \`aria-labelledby="headingId"\` — when a visible heading already identifies the list.

**Focus model:** The examples use a *roving tabindex* pattern. The first interactive item has \`tabindex="0"\`; all other items have \`tabindex="-1"\`. Keyboard users Tab into the list, then move between items with the Arrow keys (arrow-key JS is the consumer's responsibility).

**Role model:** The container uses \`role="list"\` and each item uses \`role="listitem"\`. Do **not** use \`role="listbox"\`/\`role="option"\` for standard or selection lists — those roles are reserved for combobox-popup patterns.

`,
    tags: []
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

**Accessibility:** Navigation links (\`<a class="fd-list__link">\`) must have a real \`href\` attribute so they are operable as links and announced correctly by screen readers. The \`::after\` arrow glyph is decorative. \`is-selected\` is a visual-only class (no \`aria-selected\`). \`is-navigated\` marks the last-visited item and is also visual only.
`
    }
  }
};
export const Buttons = () => buttonsExampleHtml;
Buttons.parameters = {
  docs: {
    description: {
      story: `
List items can contain action buttons. Icon-only buttons **must** have an \`aria-label\` and a \`title\` attribute that describes the action, and the icon element must carry \`aria-hidden="true"\` so screen readers do not announce the raw icon name.

\`\`\`html
<button class="fd-button fd-button--transparent fd-list__button" aria-label="Edit" title="Edit">
  <i class="sap-icon--edit" aria-hidden="true"></i>
</button>
\`\`\`
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

**Accessibility (growing / "More"):** The growing item's trigger must have a descriptive accessible name (e.g. \`aria-label="More — load additional items"\`). The consumer toggles \`aria-busy\` on the button — \`"true"\` while items are loading, \`"false"\` otherwise — and the busy indicator stays \`aria-hidden="true"\`. Newly loaded rows should be announced to screen readers via an \`aria-live="polite"\` status region owned by the consuming application.
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

**Accessibility:** Group headers are flat \`listitem\` siblings inside the same \`role="list"\`. They are **not** interactive and are excluded from the roving-tabindex sequence (no \`tabindex\` on the group-header \`<li>\`). Heading semantics are added to the title span:
\`\`\`html
<span class="fd-list__title" role="heading" aria-level="2" aria-roledescription="Group Header">Group header 1</span>
\`\`\`
Choose \`aria-level\` to reflect the heading depth on the surrounding page. This lets screen-reader users navigate between groups using heading shortcuts without DOM nesting.
        `
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    description: {
      story: `The standard list can display a footer by placing a \`<span class="fd-list__footer">\` element directly after the closing \`</ul>\` tag.

**Accessibility:** The footer is a non-item region kept **outside** the \`<ul>\`. The footer carries no list-item semantics or interaction, so keeping it out of \`role="list"\` avoids announcing a non-item as a \`listitem\`.
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

When items contain wrapping text (via \`fd-list__item--wrap\` or \`fd-list__title--wrap\`), the checkbox is **centered by default**. To top-align the checkbox instead, add \`fd-list__item--wrap-top-aligned\` to the \`<li>\` element.

**Accessibility:** Selection lists use \`role="list"\` / \`role="listitem"\` (not \`listbox\`/\`option\`). Selection state is carried entirely by the native \`<input type="checkbox">\` (or \`<input type="radio">\` for single-select). Each checkbox must be labelled via \`aria-labelledby\` pointing to the item title's \`id\` — this gives AT users a complete announcement ("checkbox, checked, List item title"). Do **not** add \`aria-selected\` to list items; it is an invalid attribute on \`listitem\` role.

**Focus model:** The list item (\`<li role="listitem">\`) is the single roving focus target; the nested \`<input>\` carries \`tabindex="-1"\` so it is not a competing tab/arrow stop. Per the Keyboard Interaction spec, Arrow keys move between items and \`Space\`/\`Enter\` toggles selection on the focused item (consumer JS). See the **Single Selection** story for the radio-based single-select pattern.
`
    }
  }
};
export const SingleSelection = () => singleSelectionExampleHtml;
SingleSelection.storyName = 'Single selection';
SingleSelection.parameters = {
  docs: {
    description: {
      story: `Single-selection lists let the user pick exactly one item. Use native \`<input type="radio">\` controls that share the same \`name\` attribute (the browser enforces the single-select constraint), instead of checkboxes.

The accessibility model matches the multi-select \`Selection\` story: container \`role="list"\`, items \`role="listitem"\`, each radio labelled via \`aria-labelledby\` pointing to the item title's \`id\`, and \`tabindex="-1"\` on the radio so the \`<li>\` is the sole roving focus target. Do **not** add \`aria-selected\` to the list items.
`
    }
  }
};
export const Inactive = () => inactiveExampleHtml;
Inactive.parameters = {
  docs: {
    description: {
      story: `Some list item can be made inactive, to make it non-clickable.

**Accessibility:** An inactive item must be removed from the keyboard tab order — its link carries \`tabindex="-1"\` and \`aria-disabled="true"\`, and it is never the roving entry point. The \`tabindex="0"\` entry stop is placed on the first **active** item instead.
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
SearchResults.parameters = {
  docs: {
    description: {
      story: `To be used in a popover containing sophisticated search results.`
    }
  }
};

export const LongText = () => longTextExampleHtml;
LongText.storyName = 'List with long Title and Secondary Text';
LongText.parameters = {
  docs: {
    description: {
      story: `By default, long title and secondary text is truncated with an ellipsis. Wrapping can be enabled at three levels:

**List level** — add \`fd-list--wrap\` to the root element to wrap all items:
\`\`\`html
<ul class="fd-list fd-list--wrap">
\`\`\`

**Item level** — add \`fd-list__item--wrap\` to a single list item:
\`\`\`html
<li class="fd-list__item fd-list__item--wrap">
\`\`\`

**Element level** — add modifier classes to individual elements:
- \`fd-list__title--wrap\`
- \`fd-list__secondary--wrap\``
    }
  }
};