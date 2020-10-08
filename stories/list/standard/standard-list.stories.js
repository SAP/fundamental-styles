export default {
    title: 'Components/List/Standard',
    parameters: {
        description: `
In SAP Fiori, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have
rather basic data, whereas the data in tables tends to be more complex. Lists are mostly used in the master list for a
master-detail scenario using the flexible column layout, as well as in popovers or dialogs.
`,
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: ['list', 'icon', 'checkbox']
    }
};

export const standard = () => `
<h4>Standard Size</h4>
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

<h4>Compact Size</h4>
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

standard.storyName = 'Standard';

standard.parameters = {
    docs: {
        iframeHeight: 445
    }
};

export const navigation = () => `
<ul class="fd-list fd-list--navigation" role="list">
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

navigation.storyName = 'Navigation';

navigation.parameters = {
    docs: {
        iframeHeight: 165,
        storyDescription: `
For a standard list with navigation links add the fd-list--navigation modifier class to the list and the
\`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
    }
};

export const navigationIndicator = () => `
<ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
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

navigationIndicator.storyName = 'Navigation indicator';

navigationIndicator.parameters = {
    docs: {
        iframeHeight: 252,
        storyDescription: `
If only a subset of the list items are navigable you should indicate those by displaying a navigation arrow. This is
achieved by applying the \`fd-list--navigation-indication\` modifier class to the ul element. Do not show arrows if all
items are navigable. In this case use a Standard List with Navigation.
`
    }
};

export const actionList = () => `
<h4>Standard Size</h4>
<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Forward</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Save</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">More Options</button>
  </li>
</ul>

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact" role="list">
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Forward</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">Save</button>
  </li>
  <li role="listitem" class="fd-list__item fd-list__item--action">
      <button class="fd-list__title">More Options</button>
  </li>
</ul>

<h4>Action List Item With Other List Items </h4>
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
      <button class="fd-list__title">More Options</button>
  </li>
</ul>
`;

actionList.storyName = 'Action list item';

actionList.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: 'Use `fd-list--action` on `li` element to create action list item.'
    }
};

export const secondaryData = () => `
<ul class="fd-list" role="list">
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

secondaryData.storyName = 'Secondary Data';

secondaryData.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: 'To display additional data inside list element create an element with `fd-list__secondary` class.'
    }
};

export const icons = () => `
<ul class="fd-list" role="list">
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

icons.storyName = 'Icons';

icons.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: 'To display an icon inside list element create an icon element with `fd-list__icon` class.'
    }
};

export const groups = () => `
<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__group-header">
    Group Header 1
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
    Group Header 2
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

groups.storyName = 'Groups';

groups.parameters = {
    docs: {
        iframeHeight: 385,
        storyDescription: 'To create list group headers use `fd-list__group-header` class.'
    }
};

export const footer = () => `
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
<span class="fd-list__footer">
  Footer text
</span>
`;

footer.storyName = 'Footer';

footer.parameters = {
    docs: {
        iframeHeight: 240,
        storyDescription: 'To create list footer, add a span element with `fd-list__footer` class, after the unordered list element'
    }
};

export const borderless = () => `
<ul class="fd-list fd-list--no-border" role="list">
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

borderless.storyName = 'Borderless';

borderless.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: 'To create borderless list use `fd-list--no-border` modifier.'
    }
};

export const selection = () => `
<h4 id="XezW11">Standard Size</h4>
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

<h4 id="XezW12">Compact Size</h4>
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

selection.storyName = 'Selection';

selection.parameters = {
    docs: {
        iframeHeight: 370,
        storyDescription: `
To create selection list:

* Create a standard list with \`fd-list--selection\` modifier.
* Inside list element create checkbox form item with \`fd-list__form-item\` class.
`
    }
};


export const rtl = () => `
<div dir="rtl">
    <ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
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
    
    <br/><br/>
    
    <ul class="fd-list fd-list--selection" role="listbox" aria-label="Selection list">
      <li role="option" tabindex="0" class="fd-list__item">
          <div class="fd-form-item fd-list__form-item">
              <input type="checkbox" class="fd-checkbox" id="AiEez2" aria-labelledby="6243111688">
              <label tabindex="-1" class="fd-checkbox__label" for="AiEez2"></label>
          </div>
          <span class="fd-list__title" id="6243111688">List item 1</span>
      </li>
      <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
          <div class="fd-form-item fd-list__form-item">
              <input type="checkbox" class="fd-checkbox" id="A99ez2" checked aria-labelledby="1387543035">
              <label tabindex="-1" class="fd-checkbox__label" for="A99ez2"></label>
          </div>
          <span class="fd-list__title" id="1387543035">List item 2</span>
      </li>
      <li role="option" tabindex="0" class="fd-list__item">
          <div class="fd-form-item fd-list__form-item">
              <input type="checkbox" class="fd-checkbox" id="9737425735" aria-labelledby="8784804916">
              <label tabindex="-1" class="fd-checkbox__label" for="9737425735"></label>
          </div>
          <span class="fd-list__title" id="8784804916">List item 3</span>
      </li>
    </ul>
</div>
`;

rtl.storyName = 'Rtl';

rtl.parameters = {
    docs: {
        iframeHeight: 420,
        storyDescription: 'List in Rtl mode'
    }
};
