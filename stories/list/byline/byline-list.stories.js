import '../../../dist/list.css';
import '../../../dist/icon.css';
import '../../../dist/checkbox.css';

export default {
    title: 'Components/List/Byline',
    parameters: {
        description: `
Byline list provides a structure for extending standard list items with additional content.

To create a byline list add the \`fd-list--byline\` modifier class to standard list. For a two-column byline you need
to add the \`fd-list__byline--2-col\` modifier class to the element. The first text item (\`fd-list__byline-left\`) is a
standard text (description) and takes 60% of the available space. The second text item (\`fd-list__byline-right\`) could
be a standard text or semantic (status) and takes the remaining 40% of the available space. For semantic (status) use a
modifier class (\`fd-list__byline-right--*\`) to represent \`neutral\`, \`positive\`, \`critical\`, \`negative\`
and \`informative\` status.
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

export const standard = () => `
<h4>Standard Size</h4>
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
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
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
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

standard.storyName = 'Standard';

standard.parameters = {
    docs: {
        iframeHeight: 785
    }
};

export const navigation = () => `
<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link" href="#"> 
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
    <a tabindex="0" class="fd-list__link" href="#"> 
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link" href="#"> 
        <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
    style="background-image: url('https://placeimg.com/400/400/nature');"></span>
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

navigation.storyName = 'Navigation';

navigation.parameters = {
    docs: {
        iframeHeight: 355,
        storyDescription: `
For a byline list with navigation links add the \`fd-list--navigation\` modifier class to the list and the
\`fd-list__item--link\` modifier class to the list elements that contain links. All items should be navigable.
`
    }
};

export const navigationIndicator = () => `
<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#"> 
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#"> 
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
    </a> 
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
    style="background-image: url('https://placeimg.com/400/400/nature');"></span>
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

navigationIndicator.storyName = 'Navigation indicator';

navigationIndicator.parameters = {
    docs: {
        iframeHeight: 275,
        storyDescription: `
If only a subset of the list items are navigable you should indicate those by displaying a navigation arrow. This is
achieved by applying the \`fd-list--navigation-indication\` modifier class to the \`ul\` element. Do not show arrows if
all items are navigable. In this case use a byline list with navigation.
`
    }
};

export const borderless = () => `
<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in Byline - Semantic Positive</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="sap-icon--world fd-list__thumbnail"></span>
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

borderless.storyName = 'Borderless';

borderless.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: 'To create borderless list use `fd-list--no-border` modifier.'
    }
};

export const selection = () => `
<h4>Standard Size</h4>
<ul class="fd-list fd-list--selection fd-list--byline" role="listbox">
  <li role="listitem" tabindex="0" class="fd-list__item is-selected">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6111Z" checked>
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111Z"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6112X">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112X"></label>
      </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6113C">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113C"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact fd-list--selection fd-list--byline" role="listbox">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6115V">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6115V"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6116B">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6116B"></label>
      </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6117N">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6117N"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>
`;

selection.storyName = 'Selection';

selection.parameters = {
    docs: {
        iframeHeight: 625,
        storyDescription: `
To create selection list:

* Create a standard list with \`fd-list--selection modifier\`.
* Inside list element create checkbox form item with \`fd-list__form-item\` class.
        `
    }
};
export const selectionAndNavigation = () => `
<h4>Standard Size</h4>
<ul class="fd-list fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox">
  <li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez6118N">
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118N"></label>
    </div>
    <span class="sap-icon--activate fd-list__thumbnail"></span>
    <div class="fd-list__content">
    <span class="fd-list__title">Title</span>
    <span class="fd-list__byline">Byline (description)</span>
    </div>
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez6119N" checked>
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119N"></label>
    </div>
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
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
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox" id="Ai4ez61110N">
        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110N"></label>
    </div>
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox">
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6118CON">
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6118CON"></label>
    </div>
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item is-selected">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6119CON" checked>
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6119CON"></label>
    </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
    <div class="fd-form-item fd-list__form-item">
        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez61110CON">
        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez61110CON"></label>
    </div>
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>
`;

selectionAndNavigation.storyName = 'Selection with navigation';

selectionAndNavigation.parameters = {
    docs: {
        iframeHeight: 625
    }
};
