import '../../dist/list.css';
import '../../dist/icon.css';
import '../../dist/object-list.css';

export default {
    title: 'Components/Object List',
    parameters: {
        description: `
Object list is one of the variant for list items.
It provides a structure for extending standard list with additional content.

##Usage
**Use the object List if:**

- You want to display a brief details to user.

**Do not use the object List if:**

- You want to display a detailed information to user.

**The object List comprises:**
 
- Introduction text
- Avatar
- Object Identfier
- Object Number
- Object Attribute
- Object Marker
- Object Status

## Structure
**Object List consists of the following elements along with standard list:**

  - <code class="docs-code">fd-object-list</code> ul element
   - <code class="docs-code">fd-object-list\\_\\_item</code> li element
     - <code class="docs-code">fd-object-list\\_\\_container</code> container to hold child elements
       - <code class="docs-code">fd-object-list\\_\\_intro</code> introduction text div
       - <code class="docs-code">fd-object-list\\_\\_header</code> container to hold header elements
         - <code class="docs-code">fd-object-list\\_\\_header-left</code> container to hold header left elements
           - <code class="docs-code">fd-object-list\\_\\_object-identifier</code> object identifier element
         - <code class="docs-code">fd-object-list\\_\\_header-right</code> container to hold header right elements
           - <code class="docs-code">fd-object-list\\_\\_object-number</code> object number element
       - <code class="docs-code">fd-object-list\\_\\_content</code> container to hold rows of attributes and status elements
        - <code class="docs-code">fd-object-list\\_\\_row</code> container to hold attributes and status elements
         - <code class="docs-code">fd-object-list\\_\\_row-right</code> container to hold right elements of row
           - <code class="docs-code">fd-object-status</code>, <code class="docs-code">fd-object-marker</code> object status and object status elements
         - <code class="docs-code">fd-object-list\\_\\_row-left</code> container to hold left elements of row
           - <code class="docs-code">fd-object-list\\_\\_object-attribute</code> object attribute element
        
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

export const object = () => `
<h4 id="objectListItemHeader">Object List Item</h4>
<ul class="fd-list fd-object-list" role="listbox" aria-labelledby="objectListItemHeader">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical very very very long</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Warning</span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
                <span class="fd-object-marker__text">Draft</span>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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
        iframeHeight: 785,
        storyDescription: ` 
        Object number, Object status, Object identifier elements classes can be used to show there respective behaviours for examples
        we can add these modifier classes to the Object number and object status elements to get the semantic status:
      
| Status | Object Number |   Object Status |
| ----------------: | :------------: | :------------ |
| Positive | \`fd-object-number--positive\` | \`fd-object-status--positive\` |
| Negative | \`fd-object-number--negative\` | \`fd-object-status--negative\` |
| Critical | \`fd-object-number--critical\` | \`fd-object-status--critical\` |
| Informative | \`fd-object-number--informative\` | \`fd-object-status--informative\` |

`
    }
};

export const navigation = () => `

<h4 id="objectListItemNavigation">Object List Item With Navigation</h4>

<div style="max-width: 450px">
<ul class="fd-list fd-object-list fd-list--navigation-object fd-list--navigation" role="listbox" aria-labelledby="objectListItemNavigation">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s fd-avatar--circle"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical very very very long</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
    </a>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s fd-avatar--circle"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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
        storyDescription: ' For a object list with navigation links add the `fd-list--navigation`,`fd-list--navigation-object` modifier class to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.'
    }
};


export const selection = () => `
<h4 id="objectListItemRowSelection">Object List Item With Row Selection</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-object-list fd-list--selection fd-list--selection-row" role="listbox" aria-labelledby="objectListItemRowSelection">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item is-selected">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text</span>
      </div>
      <div class="fd-object-list__header">
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Avaliable</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text</span>
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">666.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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
        storyDescription: 'To create row selection list: Create a object list with `fd-list--selection` `fd-list--selection-row` modifiers.'
    }
};

export const selectionWithSelectionAndNavigation = () => `
<h4 id="objectListItemRowSelectionAndNavigation">Object List Item With Row Selection And Navigation</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-object-list fd-list--navigation-object fd-list--navigation fd-list--selection" role="listbox" aria-labelledby="objectListItemRowSelectionAndNavigation">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link is-selected">
  <a tabindex="0" class="fd-list__link"> 
  <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text</span>
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Avaliable</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
    </a>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
      Optional inline text</span>
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">666.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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

selectionWithSelectionAndNavigation.storyName = 'selectionWithSelectionAndNavigation';

selectionWithSelectionAndNavigation.parameters = {
    docs: {
        iframeHeight: 305,
        storyDescription: ' To create row selection list with navigation add `fd-list--selection` `fd-list--navigation` `fd-list--navigation-object` modifier classes to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.'
    }
};

export const borderless = () => `
<h4 id="objectListItemBorderless">Borderless Object List Item</h4>
<div style="max-width: 450px">
<ul class="fd-list fd-object-list fd-list--no-border" role="listbox" aria-labelledby="objectListItemBorderless">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
      Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical very very very long</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
      Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
      Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">warning</span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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
        storyDescription: 'To create borderless list use `fd-list--no-border` modifier to list.'
    }
};

export const rtl = () => `

<h4 id="objectListItemRTL">Object list item in RTL mode</h4>

<div dir="rtl" style="width: 100%">
<ul class="fd-list fd-object-list" role="listbox" aria-labelledby="objectListItemRTL">
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--flag"
               aria-label="icon for flag"></i>
            </div>
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical very very very long</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--negative">
          <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
          <span class="fd-object-status__text">Negative</span>
         </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">956.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
          <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Warning</span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <span class="fd-object-status fd-object-status--critical">
              <span class="fd-object-status__text">Critical</span>
            </span>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
            </div>
        </div>
      </div>
    </div>
    </div>
  </li>
  <li role="option" tabindex="0" class="fd-list__item fd-object-list__item">
    <div class="fd-object-list__container">
      <div class="fd-object-list__intro">
       Optional inline text very very very long
      </div>
      <div class="fd-object-list__header">
        <span class="fd-avatar fd-avatar--s"
         style="background-image: url('http://lorempixel.com/400/400/nature/4/')">
        </span>
        <div class="fd-object-list__header-left">
         <div class="fd-object-identifier fd-object-list__object-identifier">
          <p class="fd-object-identifier__title">
           Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
          </p>
         </div>
        </div>
        <div class="fd-object-list__header-right">
          <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
            <span class="fd-object-number__text">457.00</span>
            <span class="fd-object-number__unit">Euro</span>
          </span>
        </div>
      </div>
      <div class="fd-object-list__content">
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              
              First Attribute
            </div>
          </div>
          <div class="fd-object-list__row-right">
            <div class="fd-object-marker">
              <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
                <span class="fd-object-marker__text">Draft</span>
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Second Attribute
            </div>
          </div>
        </div>
        <div class="fd-object-list__row">
          <div class="fd-object-list__row-left">
            <div class="fd-object-list__object-attribute">
              Third Attribute
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
