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
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: ['list', 'icon', 'checkbox']
    }
};

export const standard = () => `
<h4>Standard Size</h4>
<ul class="fd-list fd-list--byline" role="list">
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
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<h4>Compact Size</h4>
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
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>
`;

standard.parameters = {
    docs: {
        iframeHeight: 785,
        storyDescription: `The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the \`fd-list--compact\` modifier class to the main element.
      `
    }
};

export const navigation = () => `
<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
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
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link" href="#"> 
        <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
    style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item With Two-Column Byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
                <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
            </div>
        </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link" href="#"> 
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a> 
  </li>
</ul>
`;

navigation.parameters = {
    docs: {
        iframeHeight: 355,
        storyDescription: `
      Byline list items can contain navigation links. To add navigation, add the \`fd-list--navigation\` modifier class to the list and the \`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
    }
};

export const navigationIndicator = () => `
<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
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
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
    style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item With Two-Column Byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
                <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
            </div>
        </div>
  </li>
</ul>
`;

navigationIndicator.storyName = 'Navigation indicators';

navigationIndicator.parameters = {
    docs: {
        iframeHeight: 275,
        storyDescription: `
      If only a subset of the list items is navigable you should indicate them with an arrow icon. To display navigation indicators, add the \`fd-list--navigation-indication\` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a byline list with navigation (in the example above).
`
    }
};

export const borderless = () => `
<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
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
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in Byline - Semantic Positive</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--world"></i></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in Byline - Semantic Informative</div>
        </div>
    </div>
  </li>
</ul>
`;

borderless.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: `To display a borderless byline list, add the \`fd-list--no-border\` modifier class to the main element.
      `
    }
};

export const selection = () => `
<h4 id="O09lk9">Standard Size</h4>
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
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title" id="O09lk2">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6113C" aria-labelledby="O09lk3">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113C"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title" id="O09lk3">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<h4 id="O09lk8">Compact Size</h4>
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
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title" id="O09lk5">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6117N" aria-labelledby="O09lk6">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6117N"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title" id="O09lk6">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>
`;

selection.parameters = {
    docs: {
        iframeHeight: 625,
        storyDescription: `
Byline list items can display checkboxes that users can select from. To display byline list items with selection, add the \`fd-list--selection\` modifier class to the main element. To create checkbox form items, add the \`fd-list__form-item\` class within each list element.
      `
    }
};
export const selectionAndNavigation = () => `
<h4 id="Ki81L1">Standard Size</h4>
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
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title" id="Ki81L3">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
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
        <div class="fd-list__title" id="Ki81L4">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>

<h4 id="Ki81L5">Compact Size</h4>
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
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('http://lorempixel.com/400/400/nature/5/');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title" id="Ki81L7">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
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
        <div class="fd-list__title" id="Ki81L8">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>
`;

selectionAndNavigation.storyName = 'Selection with navigation';

selectionAndNavigation.parameters = {
    docs: {
        iframeHeight: 625,
        storyDescription: `To display byline list items with selection and navigation, add these following modifier classes to the main element:
- \`fd-list--byline\`
- \`fd-list--selection\`
- \`fd-list--navigation\`
- \`fd-list--navigation-indicator\`
      `
    }
};
