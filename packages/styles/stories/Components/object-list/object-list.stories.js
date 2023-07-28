import borderlessExampleHtml from "./borderless.example.html?raw";
import selectionWithNavigationExampleHtml from "./selection-with-navigation.example.html?raw";
import selectionExampleHtml from "./selection.example.html?raw";
import navigationExampleHtml from "./navigation.example.html?raw";
import standartExampleHtml from "./standart.example.html?raw";
import '../../../src/list.scss';
import '../../../src/icon.scss';
import '../../../src/object-identifier.scss';
import '../../../src/avatar.scss';
import '../../../src/object-marker.scss';
import '../../../src/object-number.scss';
import '../../../src/object-status.scss';
import '../../../src/object-list.scss';
export default {
  title: 'Components/Object List',
  parameters: {
    description: `
An object list is a type of list that consists of object list items, where each item provides a quick
overview of an object. Object list items should only contain essential information for the user to identify
what objects to prioritize. Avoid long descriptive texts as the text space is limited and will truncate.

**Object list items can display the following elements:**

- Title of the object
- Avatar
- Object display components such as **Object Identifier**, **Object Number**, **Object Attribute**, **Object Marker** and **Object Status**
- Introductory text indicating the origin of the object, such as _Forwarded by..._ or _On Behalf of..._
- Icon that identifies the object
- The first status line can contain indicator icons for locked items, favorites, or items that have been
  flagged for follow-up

##Usage
**Use the object list if:**

- You want to display brief details to the user.

**Do not use the object list if:**

- You want to display detailed information to the user.
- You want to trigger more than one event, as each object list item should contain one link.

##Modifiers

The object list item can display several object display components with semantic statuses.
Below are examples of how to add semantic statuses to the components:

| **Status** | <span style="margin-left: 2rem;">**Object Number**</span> | <span style="margin-left: 2rem;">**Object Status**</span> |
| :---- | :-------------- | :-------------- |
| Positive| <code style="margin-left: 2rem;">fd-object-number--positive</code> | <code style="margin-left: 2rem;">fd-object-status--positive</code> |
| Negative| <code style="margin-left: 2rem;">fd-object-number--negative</code> | <code style="margin-left: 2rem;">fd-object-status--negative</code> |
| Critical| <code style="margin-left: 2rem;">fd-object-number--critical</code> | <code style="margin-left: 2rem;">fd-object-status--critical</code> |
| Informative| <code style="margin-left: 2rem;">fd-object-number--informative</code> | <code style="margin-left: 2rem;">fd-object-status--informative</code> |


## Structure
**Object list consists of the following elements:**

  - \`fd-object-list\` ul element
   - \`fd-object-list__item\` li element
     - \`fd-object-list__container\` container to hold child elements
       - \`fd-object-list__intro\` introduction text div
       - \`fd-object-list__header\` container to hold header elements
         - \`fd-object-list__header-left\` container to hold header left elements
           - \`fd-object-list__object-identifier\` object identifier element
         - \`fd-object-list__header-right\` container to hold header right elements
           - \`fd-object-list__object-number\` object number element
       - \`fd-object-list__content\` container to hold rows of attributes and status elements
        - \`fd-object-list__row\` container to hold attributes and status elements
         - \`fd-object-list__row-right\` container to hold right elements of row
           - \`fd-object-status\`, \`fd-object-marker\` object status and object status elements
         - \`fd-object-list__row-left\` container to hold left elements of row
           - \`fd-object-list__object-attribute\` object attribute element

`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Standart = () => standartExampleHtml;
Standart.parameters = {
  docs: {
    description: {
      story: 'The standard object list item displays a title, introductory text, an avatar and object display components. It is recommended to display avatar in size S, therefore add the `fd-avatar--s` modifier class to the `fd-avatar` element.'
    }
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.parameters = {
  docs: {
    description: {
      story: 'An object list can display links that the users can navigate to. To display a navigation object list, add the `fd-list--navigation-object` modifier class together with `fd-list--navigation` and the `fd-list__item--link` modifier class to the list elements that contain a link. All items should be navigable.'
    }
  }
};
export const Selection = () => selectionExampleHtml;
Selection.parameters = {
  docs: {
    description: {
      story: 'Object list items can be selectable by adding the `fd-list--selection` and `fd-list--selection-row` modifier classes to the main element.'
    }
  }
};
export const SelectionWithNavigation = () => selectionWithNavigationExampleHtml;
SelectionWithNavigation.parameters = {
  docs: {
    description: {
      story: 'This object list is both selectable and navigable. To display selectable object list items with navigation, add the `fd-list--selection`, `fd-list--navigation` and `fd-list--navigation-object` modifier classes to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.'
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: 'Object list items can be displayed without borders. To display a borderless list, add the `fd-list--no-border` modifier class to the list element.'
    }
  }
};