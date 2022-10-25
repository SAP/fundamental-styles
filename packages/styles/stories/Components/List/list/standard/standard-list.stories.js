import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/button.scss';
import '../../../../../src/busy-indicator.scss';
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

export const Standard = () => `<h4>Standard Size</h4>
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>

<h4>Compact size</h4>
<ul class="fd-list fd-list--compact" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
`;

Standard.storyName = 'Default';

Standard.parameters = {
    docs: {
        iframeHeight: 445,
        description: {
            story: `The default standard list dislays list items in the standard size, which is ideal for mobile. To display the standard list in compact mode (for desktop), add the \`fd-list--compact\` modifier class to the main element.
        `
        }
    }
};

export const Unread = () => `<h4>Unread Options</h4>
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
      <span class="fd-list__title">List item 1 Unread</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
      <span class="fd-list__title">List item 2 Unread</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3 Read</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4 Read</span>
  </li>
</ul>
`;

Unread.parameters = {
    docs: {
        iframeHeight: 445,
        description: {
            story: `The \`fd-list__item--unread\` modifier will change the font weight to bold for easier legibility.
        `
        }
    }
};

export const Interactive = () => `<h4>Interactive Items</h4>
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
      <span class="fd-list__title">List item 5 - with .is-selected</span>
  </li>
</ul>
`;

Interactive.parameters = {
    docs: {
        iframeHeight: 445,
        description: {
            story: `
The \`fd-list__item--interractive\` will force list item to handle hover and active states.
Usage of this modifier is not needed on \`Selection\`, \`Navigation\` and \`Action\` modes.
        `
        }
    }
};

export const Navigation = () => `<ul class="fd-list fd-list--navigation" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <span class="fd-list__title">List item 1</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 2</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <span class="fd-list__title">List item 3</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
      </a>
  </li>
</ul>
`;

Navigation.parameters = {
    docs: {
        iframeHeight: 165,
        description: {
            story: `
Standard list items can contain navigation links. To add navigation, add the \`fd-list—navigation\` modifier class to the list and the \`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
        }
    }
};

export const Buttons = () => `<ul class="fd-list" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--edit"></i>
    </button>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--decline"></i>
    </button>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 2</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--edit"></i>
    </button>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--decline"></i>
    </button>
  </li>
</ul>
`;

Buttons.parameters = {
    docs: {
        iframeHeight: 165,
        description: {
            story: `
`
        }
    }
};

export const NavigationIndicator = () => `<ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
        <span class="fd-list__title">List item 1</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected" href="#">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 2</span>
      </a>
  </li>
  <li tabindex="0" role="listitem" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
        <span class="fd-list__title">List item 5</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
      </a>
  </li>
</ul>
`;

NavigationIndicator.storyName = 'Navigation indicators';

NavigationIndicator.parameters = {
    docs: {
        iframeHeight: 252,
        description: {
            story: `
If only a subset of the list items is navigable you should indicate them with an arrow icon. To display navigation indicators, add the \`fd-list--navigation-indication\` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a standard list with navigation (in the example above).
`
        }
    }
};

export const ActionList = () => `<h4>Standard Size</h4>
<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Forward</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Save</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Action</button>
  </li>
</ul>

<h4>Compact size</h4>
<ul class="fd-list fd-list--compact" role="list">
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Forward</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Save</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Action</button>
  </li>
</ul>

<h4>Action List item with other list items </h4>
<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 1</span>
  </li>
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 2</span>
  </li>
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 3</span>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Action</button>
  </li>
</ul>

<h4>Growing List item with Busy Indicator </h4>
<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 1</span>
  </li>
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 2</span>
  </li>
  <li role="listitem" class="fd-list__item">
      <span class="fd-list__title">List Item 3</span>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action fd-list__item--growing">
      <button class="fd-list__title">
        <div class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
            <div class="fd-busy-indicator--circle-0"></div>
            <div class="fd-busy-indicator--circle-1"></div>
            <div class="fd-busy-indicator--circle-2"></div>
        </div>
        <div class="fd-list__title-text">Show more</div>
    </button>
  </li>
</ul>
`;

ActionList.storyName = 'Action';

ActionList.parameters = {
    docs: {
        iframeHeight: 600,
        description: {
            story: `
Standard list items can display actions that users can choose from. To display actions, add the \`fd-list--action\` modifier class to the list elements.
`
        }
    }
};

export const SecondaryData = () => `<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary">A1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary">A2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary">A3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__secondary">A4</span>
  </li>
</ul>
`;

SecondaryData.storyName = 'Secondary data';

SecondaryData.parameters = {
    docs: {
        iframeHeight: 210,
        description: {
            story: `To display secondary data in standard list items, add the \`fd-list__secondary\` class within the list elements.
        `
        }
    }
};

export const ItemCounter = () => `<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
</ul>
`;

ItemCounter.parameters = {
    docs: {
        iframeHeight: 210,
        description: {
            story: `The item counter is vertically aligned within the list item, to the right. The maximum number of digits is 5. In case of more digits, the formatting and the transformation is left to the applications. It's recommended to avoid combining item counter to other list variations and status texts.
        `
        }
    }
};

export const Icons = () => `<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <i role="presentation" class="fd-list__icon sap-icon--history"></i>
  </li>
</ul>
`;

Icons.storyName = 'Icon';

Icons.parameters = {
    docs: {
        iframeHeight: 210,
        description: {
            story: `To display an icon inside standard list items, add the \`fd-list__icon\` class along with the icon within the list elements. For example, \`fd-list__icon sap-icon—lightbulb\`.
        `
        }
    }
};

export const Groups = () => `<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__group-header">
    <span class="fd-list__title">Group header 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" class="fd-list__group-header">
    <span class="fd-list__title">Group header 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 5</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 6</span>
  </li>
</ul>
`;

Groups.storyName = 'Group';

Groups.parameters = {
    docs: {
        iframeHeight: 385,
        description: {
            story: `Standard list items can be displayed with headers, separating the items into groups. To add group headers, add the \`fd-list__group-header\` class to the list elements.
        `
        }
    }
};

export const Footer = () => `<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
<span class="fd-list__footer">
  Footer text
</span>
`;

Footer.parameters = {
    docs: {
        iframeHeight: 240,
        description: {
            story: `The standard list can display a footer by adding a span element with an \`fd-list__footer\` class after the unordered list element.
        `
        }
    }
};

export const Borderless = () => `<ul class="fd-list fd-list--no-border" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
`;

Borderless.parameters = {
    docs: {
        iframeHeight: 210,
        description: {
            story: `To display a borderless standard list, add the \`fd-list--no-border\` modifier class to the main element.
        `
        }
    }
};

export const Selection = () => `<h4 id="XezW11">Standard Size</h4>
<ul class="fd-list fd-list--selection" role="listbox" aria-labelledby="XezW11">
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez1" aria-labelledby="Az0bg1">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez1"></label>
      </div>
      <span class="fd-list__title" id="Az0bg1">List item 1</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez2" checked aria-labelledby="Az0bg2">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez2"></label>
      </div>
      <span class="fd-list__title" id="Az0bg2">List item 2</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez3" aria-labelledby="Az0bg3">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez3"></label>
      </div>
      <span class="fd-list__title" id="Az0bg3">List item 3</span>
  </li>
</ul>

<h4 id="XezW12">Compact size</h4>
<ul class="fd-list fd-list--selection fd-list--compact fd-list--no-border" role="listbox" aria-labelledby="XezW12">
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez4" aria-labelledby="Az0bg4">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez4"></label>
      </div>
      <span class="fd-list__title" id="Az0bg4">List item 1</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez5" checked aria-labelledby="Az0bg5">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez5"></label>
      </div>
      <span class="fd-list__title" id="Az0bg5">List item 2</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6" aria-labelledby="Az0bg6">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6"></label>
      </div>
      <span class="fd-list__title" id="Az0bg6">List item 3</span>
  </li>
</ul>
`;

Selection.parameters = {
    docs: {
        iframeHeight: 370,
        description: {
            story: `Standard list items can display checkboxes that users can select from. To display standard list items with selection, add the \`fd-list--selection\` modifier class to the main element. To create checkbox form items, add the \`fd-list__form-item\` class within each list element.
`
        }
    }
};

export const Inactive = () => `<ul class="fd-list fd-list--navigation" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link fd-list__item--inactive">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 1 - Inactive</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 2</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 3</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 4</span>
    </a>
  </li>
</ul>
`;

Inactive.parameters = {
    docs: {
        iframeHeight: 370,
        description: {
            story: `Some list item can be made inactive, to make it non-clickable.
`
        }
    }
};

export const Scroll = () => `<ul class="fd-list fd-list__infinite-scroll fddocs-list-height" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 5</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 6</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 7</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 8</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 9</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 10</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 11</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 12</span>
  </li>
</ul>
`;

Scroll.storyName = 'Infinite scroll';

Scroll.parameters = {
    docs: {
        iframeHeight: 380,
        description: {
            story: `If height for list is fixed and there are more list otem to show, then we should be able to scroll to next list items.
`
        }
    }
};
