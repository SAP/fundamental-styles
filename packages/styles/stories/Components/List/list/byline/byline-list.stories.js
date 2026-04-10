import unreadNotificationExampleHtml from "./unread-notification.example.html?raw";
import longTextExampleHtml from "./long-text.example.html?raw";
import counterExampleHtml from "./counter.example.html?raw";
import selectionAndNavigationExampleHtml from "./selection-and-navigation.example.html?raw";
import selectionExampleHtml from "./selection.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import navigationIndicatorExampleHtml from "./navigation-indicator.example.html?raw";
import interractiveExampleHtml from "./interractive.example.html?raw";
import buttonsExampleHtml from "./buttons.example.html?raw";
import navigationExampleHtml from "./navigation.example.html?raw";
import attachmentExampleHtml from "./attachment.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import groupHeaderExampleHtml from "./group-header.example.html?raw";
import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/link.scss';
import '../../../../../src/button.scss';
import '../../../../../src/info-label.scss';
export default {
  title: 'Components/List/Byline',
  parameters: {
    description: `
Byline lists allow users to extend standard list items with additional content. To display a byline list, add the \`fd-list--byline\` modifier class to the \`fd-list\` element introduced in **Standard List**.

##Usage

**Use the byline list if:**

-	You want to include additional text in standard list items.
-	You want to present a semantic status in standard list items.

**Do not use the byline list if:**

-	You want to include objects in your list items. Instead, use the **Object List**.
-	You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
-	You work with complex hierarchies. In this case, use a **Tree**.

##Elements
The byline list consists of a few extra elements to add additional text and semantic colors to the list items.

Modifier/Class | Description
:---------------| :---------------
\`fd-list__byline--2-col\` | Displays a 2-column byline that consists of two sides: left and right.
\`fd-list__byline-left\` | The left side is best suited for standard text, and occupies 60% of the available space.
\`fd-list__byline-right\` | The right side is best suited for supplemental information (can be a semantic status), and occupies 40% of the available space.
\` fd-list__byline-right--*\` | To represent a semantic status, replace the * with either: _neutral_, _positive_, _negative_, _critical_ or _informative_.
`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Default';
Standard.parameters = {
  docs: {
    description: {
      story: `The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the \`is-compact\` modifier class to the main element.
    `
    }
  }
};
export const Attachment = () => attachmentExampleHtml;
Attachment.parameters = {
  docs: {
    description: {
      story: `The Attachment List shares the same specification as the Standard List with Byline. The only difference is that if two text items are set within the Byline row, the text aligned to the right is always standard text (i.e. not semantic text)
    `
    }
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.parameters = {
  docs: {
    description: {
      story: `
Byline list items can contain navigation links. To add navigation, add the \`fd-list--navigation\` modifier class to the list and the \`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
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
export const Interractive = () => interractiveExampleHtml;
Interractive.parameters = {
  docs: {
    description: {
      story: `The \`fd-list__item--interractive\` will force list item to handle hover and active states.
            Usage of this modifier is not needed on \`Selection\`, \`Navigation\` and \`Action\` modes.`
    }
  }
};
export const NavigationIndicator = () => navigationIndicatorExampleHtml;
NavigationIndicator.storyName = 'Navigation indicators';
NavigationIndicator.parameters = {
  docs: {
    description: {
      story: `
If only some of the list items are navigable, you should indicate them with an arrow icon. To display navigation indicators, add the \`fd-list--navigation-indication\` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a byline list with navigation (in the example above).
`
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: `To display a borderless byline list, add the \`fd-list--no-border\` modifier class to the main element.
    `
    }
  }
};
export const Selection = () => selectionExampleHtml;
Selection.parameters = {
  docs: {
    description: {
      story: `
Byline list items can display checkboxes that users can select from. To display byline list items with selection, add the \`fd-list--selection\` modifier class to the main element. To create checkbox form items, add the \`fd-list__form-item\` class within each list element.
    `
    }
  }
};
export const SelectionAndNavigation = () => selectionAndNavigationExampleHtml;
SelectionAndNavigation.storyName = 'Selection with navigation';
SelectionAndNavigation.parameters = {
  docs: {
    description: {
      story: `To display byline list items with selection and navigation, add these following modifier classes to the main element:

- \`fd-list--byline\`
- \`fd-list--selection\`
- \`fd-list--navigation\`
- \`fd-list--navigation-indicator\`
    `
    }
  }
};
export const Counter = () => counterExampleHtml;
Counter.storyName = 'Byline List with Counter';
Standard.parameters = {
  docs: {}
};
export const LongText = () => longTextExampleHtml;
LongText.storyName = 'List with long Title and Byline';
LongText.parameters = {
  docs: {
    description: {
      story: `By default, To allow the title and byline text to wrap, add these following modifier classes to the the title and byline respectively:

- \`fd-list__title--wrap\`
- \`fd-list__byline--wrap\`

When more than 100 characters for small screens or 300 characters for medium to large screens are used, a clickable "MORE" link should be displayed to reveal the entire contents of the text.`
    }
  }
};
export const GroupHeader = () => groupHeaderExampleHtml;
GroupHeader.storyName = 'With Group Header';

export const UnreadNotification = () => unreadNotificationExampleHtml;
UnreadNotification.parameters = {
  docs: {
    description: {
      story: `<span class="fd-info-label fd-info-label--accent-color-1"><span class="fd-info-label__text">non-fiori 3</span></span><br>
    `
    }
  }
};