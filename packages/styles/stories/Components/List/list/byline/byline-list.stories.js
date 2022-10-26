import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/link.scss';
import '../../../../../src/button.scss';
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

export const Standard = () => `<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List Item Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List item with no byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List item with 2-column byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in byline (standard text)</div>
            <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-only list item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<h4>Compact size</h4>
<ul class="fd-list fd-list--compact fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List item with no byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List item with 2-column byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in byline (standard text)</div>
            <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-only list item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>
`;

Standard.storyName = 'Default';

Standard.parameters = {
    docs: {
        iframeHeight: 785,
        description: {
            story: `The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the \`fd-list--compact\` modifier class to the main element.
    `
        }
    }
};

export const Attachment = () => `<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-photo"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--pdf-attachment"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List item with no byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-text-file"></i></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List item with 2-column byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in byline (standard text)</div>
            <div class="fd-list__byline-right">Second text item in byline (standard text)</div>
        </div>
    </div>
  </li>
</ul>
`;

Attachment.parameters = {
    docs: {
        iframeHeight: 785,
        description: {
            story: `The Attachment List shares the same specification as the Standard List with Byline. The only difference is that if two text items are set within the Byline row, the text aligned to the right is always standard text (i.e. not semantic text)
    `
        }
    }
};

export const Navigation = () => `<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
  <a tabindex="0" class="fd-list__link" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
      <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
      <div class="fd-list__content">
          <div class="fd-list__title">List item with 2-column byline</div>
          <div class="fd-list__byline fd-list__byline--2-col">
              <div class="fd-list__byline-left">First text item in byline (standard text)</div>
              <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
          </div>
      </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
</ul>
`;

Navigation.parameters = {
    docs: {
        iframeHeight: 355,
        description: {
            story: `
Byline list items can contain navigation links. To add navigation, add the \`fd-list--navigation\` modifier class to the list and the \`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
        }
    }
};

export const Buttons = () => `
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title">List item 1</span>
        </div>
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

export const Interractive = () => `
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
          <div class="fd-list__title">Title</div>
          <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
          <div class="fd-list__title">Selected List</div>
          <div class="fd-list__byline">Byline</div>
        </div>
    </li>
</ul>
`;

Interractive.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `The \`fd-list__item--interractive\` will force list item to handle hover and active states.
            Usage of this modifier is not needed on \`Selection\`, \`Navigation\` and \`Action\` modes.`
        }
    }
};

export const NavigationIndicator = () => `<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item">
      <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
      <div class="fd-list__content">
          <div class="fd-list__title">List item with 2-column byline</div>
          <div class="fd-list__byline fd-list__byline--2-col">
              <div class="fd-list__byline-left">First text item in byline (standard text)</div>
              <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
          </div>
      </div>
</li>
</ul>
`;

NavigationIndicator.storyName = 'Navigation indicators';

NavigationIndicator.parameters = {
    docs: {
        iframeHeight: 275,
        description: {
            story: `
If only some of the list items are navigable, you should indicate them with an arrow icon. To display navigation indicators, add the \`fd-list--navigation-indication\` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a byline list with navigation (in the example above).
`
        }
    }
};

export const Borderless = () => `<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">list item with no byline</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in byline (positive)</div>
      </div>
  </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--world"></i></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline (with an additional semantic byline)</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in byline (information)</div>
      </div>
  </div>
</li>
</ul>
`;

Borderless.parameters = {
    docs: {
        iframeHeight: 305,
        description: {
            story: `To display a borderless byline list, add the \`fd-list--no-border\` modifier class to the main element.
    `
        }
    }
};

export const Selection = () => `<h4 id="O09lk9">Standard size</h4>
<ul class="fd-list fd-list--selection fd-list--byline" role="listbox" aria-labelledby="O09lk9">
<li role="option" tabindex="0" class="fd-list__item is-selected">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez6111Z" checked aria-labelledby="O09lk1">
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111Z"></label>
    </div>
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <span class="fd-list__title" id="O09lk1">Title</span>
      <span class="fd-list__byline">Byline (description)</span>
    </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez6112X" aria-labelledby="O09lk2">
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112X"></label>
    </div>
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title" id="O09lk2">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez6113C" aria-labelledby="O09lk3">
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113C"></label>
    </div>
    <div class="fd-list__content">
      <div class="fd-list__title" id="O09lk3">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
</ul>

<h4 id="O09lk8">Compact size</h4>
<ul class="fd-list fd-list--compact fd-list--selection fd-list--byline" role="listbox" aria-labelledby="O09lk8">
<li role="option" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6115V" aria-labelledby="O09lk4">
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6115V"></label>
    </div>
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <span class="fd-list__title" id="O09lk4">Title</span>
      <span class="fd-list__byline">Byline (description)</span>
    </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6116B" aria-labelledby="O09lk5">
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6116B"></label>
    </div>
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title" id="O09lk5">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6117N" aria-labelledby="O09lk6">
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6117N"></label>
    </div>
    <div class="fd-list__content">
      <div class="fd-list__title" id="O09lk6">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
</ul>
`;

Selection.parameters = {
    docs: {
        iframeHeight: 625,
        description: {
            story: `
Byline list items can display checkboxes that users can select from. To display byline list items with selection, add the \`fd-list--selection\` modifier class to the main element. To create checkbox form items, add the \`fd-list__form-item\` class within each list element.
    `
        }
    }
};
export const SelectionAndNavigation = () => `<h4 id="Ki81L1">Standard Size</h4>
<ul class="fd-list fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox" aria-labelledby="Ki81L1">
<li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox" id="Ai4ez6118N" aria-labelledby="Ki81L2">
      <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118N"></label>
  </div>
  <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
  <div class="fd-list__content">
  <span class="fd-list__title" id="Ki81L2">Title</span>
  <span class="fd-list__byline">Byline (description)</span>
  </div>
</li>
<li role="option" tabindex="-1" class="fd-list__item fd-list__item--link is-selected" aria-selected="true">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox" id="Ai4ez6119N" checked aria-labelledby="Ki81L3">
      <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119N"></label>
  </div>
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title" id="Ki81L3">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
  </a>
</li>
<li role="option" tabindex="-1" class="fd-list__item fd-list__item--link">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox" id="Ai4ez61110N" aria-labelledby="Ki81L4">
      <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110N"></label>
  </div>
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <div class="fd-list__content">
      <div class="fd-list__title" id="Ki81L4">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
</ul>

<h4 id="Ki81L5">Compact size</h4>
<ul class="fd-list fd-list--compact fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox" aria-labelledby="Ki81L5">
<li role="option" tabindex="-1" class="fd-list__item fd-list__item--link">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6118CON" aria-labelledby="Ki81L6">
      <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6118CON"></label>
  </div>
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <span class="fd-list__title" id="Ki81L6">Title</span>
      <span class="fd-list__byline">Byline (description)</span>
    </div>
  </a>
</li>
<li role="option" tabindex="0" class="fd-list__item is-selected">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6119CON" checked aria-labelledby="Ki81L7">
      <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6119CON"></label>
  </div>
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title" id="Ki81L7">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
</li>
<li role="option" tabindex="-1" class="fd-list__item fd-list__item--link">
  <div class="fd-form-item fd-list__form-item">
      <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez61110CON" aria-labelledby="Ki81L8">
      <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez61110CON"></label>
  </div>
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
    <div class="fd-list__content">
      <div class="fd-list__title" id="Ki81L8">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
</ul>
`;

SelectionAndNavigation.storyName = 'Selection with navigation';

SelectionAndNavigation.parameters = {
    docs: {
        iframeHeight: 625,
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

export const Counter = () => `
<ul class="fd-list fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List Item Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
    <span class="fd-list__item-counter">123</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
    <span class="fd-list__item-counter">456</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
  <span class="fd-list__item-counter">12345</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
    <span class="fd-list__item-counter">67890</span>
</li>
</ul>
`;

Counter.storyName = 'Byline List with Counter';

Standard.parameters = {
    docs: {
        iframeHeight: 785
    }
};

export const LongText = () => `
<ul class="fd-list fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List Item Title</div>
      <div class="fd-list__byline fd-list__byline--wrap">Very Long Byline (description), Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <a href="#" class="fd-link fd-list__link--more" tabindex="0"><span class="fd-link__content">More</span></a></div>
    </div>
    <span class="fd-list__item-counter">12345</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title fd-list__title--wrap">Very long list item with no byline, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title fd-list__title--wrap">List item with 2-column byline and also a very long title, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left fd-list__byline-left--wrap">First text item in byline (standard text), Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" class="fd-link fd-list__link--more" tabindex="0"><span class="fd-link__content">Less</span></a></div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
</ul>
`;

LongText.storyName = 'List with long Title and Byline';

LongText.parameters = {
    docs: {
        iframeHeight: 625,
        description: {
            story: `By default, To allow the title and byline text to wrap, add these following modifier classes to the the title and byline respectively:

- \`fd-list__title--wrap\`
- \`fd-list__byline--wrap\`

When more than 100 characters for small screens or 300 characters for medium to large screens are used, a clickable "MORE" link should be displayed to reveal the entire contents of the text.`
        }
    }
};
