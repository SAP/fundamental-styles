import '../../../dist/list.css';
import '../../../dist/icon.css';
import '../../../dist/checkbox.css';

export default {
    title: 'Components/List/Object',
    parameters: {
        description: `
        Object list provides a structure for Object list item content.

To create a object list add the \`fd-list--object\` modifier class to ul.
(\`fd-list__optional\`) and (\`fd-list__optional-text\`) modifier class will 
help to add optional text information.
(\`fd-list__object--top-row\`) and (\`fd-list__object--bottom-row\`) class will 
help to devide the list item into two parts.
(\`fd-list__object--top-right\`) and (\`fd-list__object--top-left\`) modifiers 
will help to divide the top row into 2 column with ratio of 60% and 40%.
Similary (\`fd-list__object--bottom-right\`) and (\`fd-list__object--bottom-left\`) modifiers
 will help to divide the bottom rows into 2 column with ratio of 50% and 50%.
and to represent semantics for respective element append 
element-- \`neutral\`, \`positive\`, \`critical\`, \`negative\`
and \`informative\` status.
`,
        tags: ['a11y', 'theme']
    }
};

export const object = () => `
<h4 id="objectListItemHeader">Object List Item</h4>
<ul class="fd-list fd-list--object" role="listbox" aria-labelledby="objectListItemHeader">
  <li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-list__content">
     <div class="fd-list__optional">
     <span class="fd-list__optional-text">Optional inline text</span>
     </div>
     <div class="fd-list__object fd-list__object--top-row">
     <span class="fd-avatar fd-avatar--s fd-list__object-avatar" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
     <div class="fd-list__object fd-list__object--top-left">
     <div class="fd-object-identifier fd-list__object-identifier">
       <p class="fd-object-identifier__title fd-list__object-identifier-title">
     Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
      </p>
      </div>
      </div>
     <div class="fd-list__object fd-list__object--top-right">
     <span class="fd-object-number fd-object-number--critical fd-list__object-number">
     <span class="fd-object-number__text fd-list__object-number-text">457.00</span>
     <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span>
     </span>
     </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom">
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
      <span class="fd-list__object-attribute-text">First Attribute</span>
      </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--flag" aria-label="icon for flag"></i>
    </div>
    <div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
    </div>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Second Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-object-status--critical fd-list__object-status">
    <span class="fd-object-status__text fd-list__object-status-text">Critical</span>
    </span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Third Attribute</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-list__content">
     <div class="fd-list__object fd-list__object--top-row">
     <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
     <div class="fd-list__object fd-list__object--top-left">
     <div class="fd-object-identifier fd-list__object-identifier">
       <p class="fd-object-identifier__title fd-list__object-identifier-title">
     Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
      </p>
      </div>
      </div>
     <div class="fd-list__object fd-list__object--top-right">
     <span class=" fd-object-number fd-list__object-number">
     <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
     <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span>
     </span>
     </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom">
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">First Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--negative">
    <i class="fd-object-status__icon fd-list__object-status-icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text fd-list__object-status-text">Negative</span>
   </span>
   </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Second Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Third Attribute</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-list__content">
     <div class="fd-list__object fd-list__object--top-row">
     <div class="fd-list__object fd-list__object--top-left">
     <div class="fd-object-identifier fd-list__object-identifier">
       <p class="fd-object-identifier__title fd-list__object-identifier-title">
     Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
      </p>
      </div>
      </div>
      <div class="fd-list__object fd-list__object--top-right">
      <span class="fd-object-number fd-object-number--critical fd-list__object-number">
      <span class="fd-object-number__text fd-list__object-number-text">457.00</span>
      <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span>
      </span>
      </div>
     </div>
    <div class="fd-list__object fd-list__object--bottom">
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">First Attribute</span>
    </div>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Second Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Third Attribute</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  </li><li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-list__content">
     <div class="fd-list__optional">
     <span class="fd-list__optional-text">Optional inline text</span>
     </div>
     <div class="fd-list__object fd-list__object--top-row">
     <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
     <div class="fd-list__object fd-list__object--top-left">
     <div class="fd-object-identifier fd-list__object-identifier">
       <p class="fd-object-identifier__title fd-list__object-identifier-title">
     Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
      </p>
      </div></div>
      <div class="fd-list__object fd-list__object--top-right">
      <span class="fd-object-number fd-object-number--critical fd-list__object-number">
      <span class="fd-object-number__text fd-list__object-number-text">757.00</span>
      <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span>
      </span>
      </div>
     </div>
    <div class="fd-list__object fd-list__object--bottom">
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--positive">
    <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Second Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Third Attribute</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  </li>
</ul>
`;

object.storyName = 'Object';

object.parameters = {
    docs: {
        iframeHeight: 785
    }
};

export const navigation = () => `

<h4 id="objectListItemNavigation">Object List Item With Navigation</h4>

<div style="max-width: 450px">
<ul class="fd-list fd-list--object fd-list--navigation" role="listbox" aria-labelledby="objectListItemNavigation">
  <li role="option" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link" href="#">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--critical">
   <span class="fd-object-status__text fd-list__object-status-text">status</span>
   </span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
     </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div> </div>
   </div>
   </div>
   </div>
    </a> 
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
     <div class="fd-list__object fd-list__object--top-right">
     <span class="fd-object-number fd-list__object-number fd-object-number--positive">
     <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
     <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
     </div>
    </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div>
    </a> 
  </li>
</ul>
</div>
`;

navigation.storyName = 'Navigation';

navigation.parameters = {
    docs: {
        iframeHeight: 355,
        storyDescription: `
        For a object list with navigation links add \`fd-list--navigation\` along with \`fd-list\` and \`fd-list--object\` in list and \`fd-list__link\`, \`fd-list--navigation\` modifier class to the link(anchor) and the
        \`fd-list__item--link\` modifier class to the list element. that contain links.This will help all items to be navigable.
        `
    }
};

export const navigationIndicator = () => `

<h4 id="objectListItemNavigationIndicator">Object List Item With Navigation Indicator</h4>

<div style="max-width: 450px">
<ul class="fd-list fd-list--object fd-list--navigation fd-list--navigation-indication" role="listbox" aria-labelledby="objectListItemNavigationIndicator">
  <li role="option" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>   </div>
   </div>
   </div>
   </div>
    </a> 
  </li>
  <li role="option" aria-selected="true" tabindex="0" class="fd-list__item fd-list__item--link is-selected">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div>
    </a> 
  </li>
</ul>
</div>
`;

navigationIndicator.storyName = 'Navigation Indicator';

navigationIndicator.parameters = {
    docs: {
        iframeHeight: 355,
        storyDescription: `
For a object list with navigation links and navigation indicator add \`fd-list--navigation\` \`fd-list--navigation-indication\` along with \`fd-list\` and \`fd-list--object\` in list and \`fd-list__link\`, \`fd-list__link--navigation-indicator\`, \`fd-list--navigation\` modifier class to the link(anchor) and the
\`fd-list__item--link\` modifier class to the list element. that contain links.This will help all items to be navigable with navigation indicator.
`
    }
};

export const selection = () => `
<h4 id="objectListItemRowSelection">Object List Item With Row Selection</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-list--object fd-list--selection fd-list__row-selection" role="listbox" aria-labelledby="objectListItemRowSelection">
  <li role="option" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div>
     </div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span>
    </span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span>
   </span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div> 
  </li>
  <li role="option" aria-selected="true" tabindex="0" class="fd-list__item is-selected">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div>
  </li>
</ul>
</div>
`;

selection.storyName = 'Selection';

selection.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: 'To create selection list use `fd-list--selection ` and `fd-list--row-selection` along with `fd-list and fd-list--object` modifier.'
    }
};

export const multiSelection = () => `
<h4 id="objectListItemMultiSelection">Object List Item With Multi Selection</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-list--object fd-list--selection" role="listbox" aria-labelledby="objectListItemMultiSelection" aria-multiselectable="true">
  <li role="option" aria-selected="true" tabindex="0" class="fd-list__item is-selected">
  <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6111Z" checked>
          <label tabindex="-1" aria-label="select/de-select option 1" class="fd-checkbox__label" for="Ai4ez6111Z"></label>
  </div>
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div> 
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6111K">
          <label aria-label="select/de-select option 2" tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111K"></label>
  </div>
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Seecond Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div>
  </li>
</ul>
</div>
`;

multiSelection.storyName = 'Multi Selection';

multiSelection.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: 'To create selection list use `fd-list--selection` along with `fd-list and fd-list--object` modifier.'
    }
};

export const borderless = () => `
<h4 id="objectListItemBorderless">Borderless Object List Item</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-list--object fd-list--no-border fd-list--navigation" role="listbox" aria-labelledby="objectListItemBorderless">
  <li role="option" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div> 
   </a>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
    <div class="fd-list__optional">
    <span class="fd-list__optional-text">Optional inline text</span>
    </div>
    <div class="fd-list__object fd-list__object--top-row">
    <span class="fd-avatar fd-list__object-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
    <div class="fd-list__object fd-list__object--top-left">
    <div class="fd-object-identifier fd-list__object-identifier">
      <p class="fd-object-identifier__title fd-list__object-identifier-title">
    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
     </p>
     </div></div>
    <div class="fd-list__object fd-list__object--top-right">
    <span class="fd-object-number fd-list__object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
    <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
    </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom">
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">First status</span></span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Second Attribute</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-right">
   <span class="fd-object-status fd-list__object-status fd-object-status--inverted fd-object-status--indication-1">Indication1</span>
   </div>
   </div>
   <div class="fd-list__object fd-list__object--bottom-row">
   <div class="fd-list__object fd-list__object--bottom-left">
   <div class="fd-list__object-attribute">
   <span class="fd-list__object-attribute-text">Third Attribute</span>
   </div>
   </div>
   </div>
   </div>
   </div>
  </li>
</ul>
</div>
`;

borderless.storyName = 'Borderless';

borderless.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: 'To create borderless list use `fd-list--no-border` along with `fd-list` and `fd-list--object` modifier.'
    }
};

export const rtl = () => `

<h4 id="objectListItemRTL">Object list item in RTL mode</h4>

<div dir="rtl" style="width: 100%">
<ul class="fd-list fd-list--object" role="listbox" aria-labelledby="objectListItemRTL">
<li role="option" tabindex="0" class="fd-list__item">
<div class="fd-list__content">
   <div class="fd-list__optional">
   <span class="fd-list__optional-text">Optional inline text</span>
   </div>
   <div class="fd-list__object fd-list__object--top-row">
   <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
   <div class="fd-list__object fd-list__object--top-left">
   <div class="fd-object-identifier fd-list__object-identifier">
     <p class="fd-object-identifier__title fd-list__object-identifier-title">
   Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
    </p>
    </div></div>
   <div class="fd-list__object fd-list__object--top-right">
   <span class="fd-object-number fd-list__object-number">
   <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
   <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
   </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom">
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">First Attribute</span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-right">
  <div class="fd-object-marker">
  <i class="fd-object-marker__icon sap-icon--flag" aria-label="icon for flag"></i>
  </div>
  <div class="fd-object-marker">
  <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
  </div>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">Second Attribute</span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-right">
  <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">Third Attribute</span>
  </div>
  </div>
  </div>
  </div>
  </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
<div class="fd-list__content">
   <div class="fd-list__optional">
   <span class="fd-list__optional-text">Optional inline text</span>
   </div>
   <div class="fd-list__object fd-list__object--top-row">
   <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
   <div class="fd-list__object fd-list__object--top-left">
   <div class="fd-object-identifier fd-list__object-identifier">
     <p class="fd-object-identifier__title fd-list__object-identifier-title">
   Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
    </p>
    </div></div>
   <div class="fd-list__object fd-list__object--top-right">
   <span class="fd-object-number fd-list__object-number">
   <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
   <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
   </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom">
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">First Attribute</span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-right">
  <span class="fd-object-status fd-list__object-status fd-object-status--negative">Negative</span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">Second Attribute</span>
  </div>  </div>
  <div class="fd-list__object fd-list__object--bottom-right">
  <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
  </div>
  </div>
  <div class="fd-list__object fd-list__object--bottom-row">
  <div class="fd-list__object fd-list__object--bottom-left">
  <div class="fd-list__object-attribute">
  <span class="fd-list__object-attribute-text">Third Attribute</span>
  </div>  </div>
  </div>
  </div>
  </div>
</li>
<li role="option" tabindex="0" class="fd-list__item">
  <div class="fd-list__content">
     <div class="fd-list__object fd-list__object--top-row">
     <span class="fd-avatar fd-list__object-avatar fd-avatar--s" style="background-image: url('http://lorempixel.com/400/400/nature/4/')"></span>
     <div class="fd-list__object fd-list__object--top-left">
     <div class="fd-object-identifier fd-list__object-identifier">
       <p class="fd-object-identifier__title fd-list__object-identifier-title">
     Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
      </p>
      </div>
      </div>
     <div class="fd-list__object fd-list__object--top-right">
     <span class="fd-object-number fd-list__object-number">
     <span class="fd-object-number__text fd-list__object-number-text">956.00</span>
     <span class="fd-object-number__unit fd-list__object-number-unit">Euro</span></span>
     </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom">
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">First Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--negative">
    <i class="fd-object-status__icon fd-list__object-status-icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text fd-list__object-status-text">Negative</span>
   </span>
   </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Second Attribute</span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-right">
    <span class="fd-object-status fd-list__object-status fd-object-status--positive">
   <span class="fd-object-status__text fd-list__object-status-text">Second status</span></span>
    </div>
    </div>
    <div class="fd-list__object fd-list__object--bottom-row">
    <div class="fd-list__object fd-list__object--bottom-left">
    <div class="fd-list__object-attribute">
    <span class="fd-list__object-attribute-text">Third Attribute</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  </li>
    </ul>
</div>
`;

rtl.storyName = 'Rtl';

rtl.parameters = {
    docs: {
        iframeHeight: 625,
        storyDescription: 'Object list item in Rtl mode'
    }
};
