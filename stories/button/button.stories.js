import '../../dist/button.css';
import '../../dist/button-split.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/popover.css';
import '../../dist/segmented-button.css';

export default {
    title: 'Components/Button',
    parameters: {
        description: `The button component is used to trigger an action. All buttons are characterized by the <code class="docs-code">fd-button</code> class and an additional modifier class to specify each button type.

##Usage

**Use the button types as follows:**

- Use simple buttons for specific actions, such as:
    - _Create_, _Edit_, _Save_
    - _Approve_, _Reject_
    - _Accept_, _Decline_
    - _OK_, _Cancel_
- If you want the user to select one option from a small group, use a segmented button. For example: _Small_, _Medium_, _Large_
- Use the menu button if you need a menu that provides more than one option.

**Do not use buttons if:**

- You want to link to a different page or object. Instead, use the **Link** component.
- You want to let users upload content. Instead, use the **Upload Collection** component.
`
    }
};

export const primary = () => `
    <button class="fd-button">Create</button>
    <button class="fd-button sap-icon--cart"></button>
    <button class="fd-button fd-button--emphasized ">Save</button>
`;
export const types = () => `
    <div class="fddocs-container"> 
        <button class="fd-button">Default Button</button>
        <button class="fd-button fd-button--emphasized">Emphasized Button</button>
        <button class="fd-button fd-button--ghost">Ghost Button</button>
        <button class="fd-button fd-button--positive">Positive Button</button>
        <button class="fd-button fd-button--negative">Negative Button</button>
        <button class="fd-button fd-button--attention">Attention Button</button>
        <button class="fd-button fd-button--transparent">Transparent Button</button>
    </div>
`;

types.storyName = 'Button styles';
types.parameters = {
    docs: {
        storyDescription: `    
- **Default button** is used for neutral or informative (secondary) actions.
- **Emphasized button** is used to indicate the primary action on the screen.
- **Ghost button** is used to trigger secondary actions. If a page already has a primary action, but you also need to highlight the most important action in a content toolbar, use the ghost style.
- **Positive button** is used to trigger positive semantic actions, such as _Accept_ and should always be accompanied by text.
- **Negative button** is used to trigger negative semantic actions, such as _Reject_ and should always be accompanied by text.
- **Attention button** is used to trigger a semantic action that needs attention and should always be accompanied by text.
- **Transparent button** is used to trigger a negative path action within a header or footer bar, and secondary actions in toolbars.
        
`
    }
};

export const segmentedButton = () => `
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button sap-icon--survey"></button>
        <button class="fd-button sap-icon--pie-chart is-selected" aria-pressed="true"></button>
        <button class="fd-button sap-icon--pool"></button>
    </div>

    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact is-selected" aria-pressed="true">Left</button>
        <button class="fd-button fd-button--compact">Middle</button>
        <button class="fd-button fd-button--compact">Right</button>
    </div>
`;

segmentedButton.storyName = 'Segmented button';
segmentedButton.parameters = {
    docs: {
        storyDescription: `The segmented button displays a group of options. Only one option can be active at a time by selecting it, while the others remain or become inactive when the initial option is selected. This button type was previously known as "button group" and is comparable to a radio button group.
        <br><br>It can be displayed by using the <code class=”docs-code”>fd-segmented-button</code> class with <code class=”docs-code”>role=”group”</code> and the <code class=”docs-code”>aria-label=”Group label”</code> attribute.`
    }
};

export const menuButton = () => `
<button class="fd-button fd-button--menu">Action Button</button>
<button class="fd-button fd-button--ghost fd-button--menu">Ghost Button</button>
<button class="fd-button fd-button--positive fd-button--menu">Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu">Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu">Attention Button</button>
<br><br>
<button class="fd-button fd-button--menu" aria-disabled="true" disabled>Action Button</button>
<button class="fd-button fd-button--ghost fd-button--menu" aria-disabled="true" disabled>Ghost Button</button>
<button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true" disabled>Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true" disabled>Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu" aria-disabled="true" disabled>Attention Button</button>
<br><br>
<button class="fd-button fd-button--emphasized fd-button--menu">Add to Cart</button>
<button class="fd-button fd-button--menu">Add to Cart</button>
<button class="fd-button fd-button--transparent fd-button--menu">Add to Cart</button>
<button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive">Approve</button>
<button class="fd-button fd-button--negative fd-button--menu">Reject</button>
<button class="fd-button fd-button--attention fd-button--menu">Attention</button>
<br><br>
<button class="fd-button fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button--transparent fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button fd-button--menu sap-icon--filter"></button>
<button class="fd-button fd-button--menu fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--menu fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--menu fd-button--attention sap-icon--warning"></button>
<br><br>
<button class="fd-button fd-button--menu">Default</button>
<button class="fd-button fd-button--compact fd-button--menu">Compact</button>
`;

menuButton.storyName = 'Menu button';
menuButton.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'The menu button displays a dropdown menu upon selection and is considered the default menu button. There are two different type of menu buttons: the default menu button and split menu button, and both of them can contain items with submenus.'
    }
};

export const splitMenuButton = () => `
<div class="fd-button-split fd-has-margin-right-small" role="group" aria-label="button-split">
  <button class="fd-button" aria-label="button">Button with text</button>
  <button class="fd-button sap-icon--slim-arrow-down" aria-controls="t4c0o273" aria-haspopup="true" 
  aria-expanded="false" aria-label="More"></button>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"  aria-hidden="true" 
  id="t4c0o273">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow">
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Add to list</span>
              </a>
          </li>
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Save for later</span>
              </a>
          </li>
        </ul>
    </nav>
  </div>
</div>

<div class="fd-button-split" role="group" aria-label="button-split">
  <button class="fd-button fd-button--emphasized" aria-label="button">Button with text</button>
  <button class="fd-button fd-button--emphasized sap-icon--slim-arrow-down" aria-controls="t4c0o2732" 
  aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"  aria-hidden="true" 
    id="t4c0o2732">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow">
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Add to list</span>
              </a>
          </li>
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Save for later</span>
              </a>
          </li>
        </ul>
    </nav>
  </div>
</div>

<div class="fd-button-split" role="group" aria-label="button-split">
  <button class="fd-button fd-button--transparent" aria-label="button">Button with text</button>
  <button class="fd-button fd-button--transparent sap-icon--slim-arrow-down" aria-controls="t4c0o27322"
  aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"  aria-hidden="true" 
    id="t4c0o27322">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow">
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Add to list</span>
              </a>
          </li>
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Save for later</span>
              </a>
          </li>
        </ul>
    </nav>
  </div>
</div>

`;

splitMenuButton.storyName = 'Split menu button';
splitMenuButton.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `The split menu button has two separate areas: the text label and the icon. The separator between them indicates that each area results in a different action, giving the user two choices: select the text label to trigger the action or select the arrow to open the menu. This button has a fixed size and the text truncates if the menu items exceed the maximum width available. 
        <br><br> Note: If the default action is displayed as an icon only, all the menu items must contain icons.

**The split menu button can behave in two different ways:**

1.	The button triggers the default action set by the developer. If no default action is defined, the first item in the menu list will become the default.
2.	The button triggers the last action chosen by the user. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.

The split menu button can be displayed by using <code class="docs-code>fd-button-split fd-has-margin-right-small</code> class, together with 
`
    }
};

export const sizes = () => `
<button class="fd-button">Save</button>
<button class="fd-button fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--ghost sap-icon--cart"></button>
<button class="fd-button fd-button--emphasized sap-icon--cart"></button>
<button class="fd-button fd-button--transparent sap-icon--cart"></button>
<button class="fd-button fd-button--positive">Approve</button>
<button class="fd-button fd-button--negative">Reject</button>
<button class="fd-button fd-button--attention">Attention</button>
<br><br>
<button class="fd-button fd-button--compact">Edit</button>
<button class="fd-button fd-button--compact fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--ghost fd-button--compact">Edit</button>
<button class="fd-button fd-button--emphasized fd-button--compact sap-icon--cart"></button>
<button class="fd-button fd-button--transparent fd-button--compact sap-icon--cart"></button>
<button class="fd-button fd-button--positive fd-button--compact ">Approve</button>
<button class="fd-button fd-button--negative fd-button--compact">Reject</button>
<button class="fd-button fd-button--attention fd-button--compact">Attention</button>
`;

sizes.storyName = 'Button sizes';
sizes.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `
The buttons in the first row are displayed in cozy size, which is the default sizing and does not require a modifier. The compact buttons shown in the second row, however, can be displayed by adding the <code class="docs-code">–compact</code> modifier class to the element.
`
    }
};

export const iconAndText = () => `
<button class="fd-button fd-button--emphasized">Add to Cart</button>
<button class="fd-button">Add to Cart</button>
<button class="fd-button fd-button--transparent">Add to Cart</button>
<button class="fd-button fd-button--ghost">Add to Cart</button>
<button class="fd-button fd-button--positive">Approve</button>
<button class="fd-button fd-button--negative">Reject</button>
<button class="fd-button fd-button--attention">Attention</button>
<br><br>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--transparent sap-icon--cart"></button>
<button class="fd-button sap-icon--filter"></button>
<button class="fd-button fd-button--ghost sap-icon--filter"></button>
<button class="fd-button fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--attention sap-icon--decline"></button>
`;

iconAndText.storyName = 'Icon or text';
iconAndText.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `
These buttons contain either icons **or** text, as it is highly recommended not to combine the two. 

**Use icon buttons for basic actions such as:**

- _Edit_
- _Back to previous screen_
- _Remove from list_ etc. 


Make sure the default accessibility text for the icon is appropriate for your use case. If the text is not ideal, define an app-specific accessibility text.
        

All button styles can be paired with an icon. You can use the \`sap-icon--{icon-name}\` class to attach an icon to the button.
The full list of all the available icons can be found on the <a href="icon.html">Icon</a> page.
`
    }
};

export const buttonStates = () => `
<button class="fd-button fd-button--emphasized">Normal State</button>
<button class="fd-button fd-button--emphasized is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--emphasized" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF1" class="fd-button fd-button--emphasized is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF1">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button">Normal State</button>
<button class="fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF2" class="fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF2">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button--transparent">Normal State</button>
<button class="fd-button fd-button--transparent is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--transparent is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF3" class="fd-button fd-button--transparent is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF3">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button">Normal State</button>
<button class="fd-button fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF4" class="fd-button fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF4">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button--ghost">Normal State</button>
<button class="fd-button fd-button--ghost is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--ghost" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF5" class="fd-button fd-button--ghost is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF5">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button--positive">Normal State</button>
<button class="fd-button fd-button--positive is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--positive" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF6" class="fd-button fd-button--positive is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF6">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button--negative">Normal State</button>
<button class="fd-button fd-button--negative is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--negative" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF7" class="fd-button fd-button--negative is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF7">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<br><br>
<button class="fd-button fd-button--attention">Normal State</button>
<button class="fd-button fd-button--attention is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--attention is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF8" class="fd-button fd-button--attention is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF8">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
`;

buttonStates.storyName = 'Button states';
buttonStates.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `
These button types indicate different states: normal, selected, disabled and focusable disabled.

- **Normal**: The button’s default state. It can be selected to perform the corresponding action.
- **Selected**: The button is selected as opposed to other buttons. This state can be displayed by adding the <code>is-selected</code> class or the <code>aria-selected=”true”</code> attribute for accessibility.
- **Disabled**: It cannot be selected. This state can be displayed by using the <code>is-disabled</code> class and the <code>aria-disabled=”true”</code> attribute for accessibility.
- **Focusable disabled**: It cannot be selected, but it is tabbable and focusable. When the button is selected, a focus ring appears. This state can be displayed by using the <code>is-disabled</code> class and the <code>aria-disabled=”true”</code> attribute for accessibility without using the <code>disabled</code> property. By adding the hidden <code>_instructions</code> element, the user will be notified for further instructions on how to enable the button. They will also be notified when the button is enabled when using the <code>aria-live</code> property.
`
    }
};

export const focusableDisabled = () => `
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF" class="fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
`;

focusableDisabled.storyName = 'Focusable disabled';
focusableDisabled.parameters = {
    docs: {
        storyDescription: `
The disabled button can be focusable by adding the <code>aria-disabled</code> attribute. To enable the focus ring in a focusable disabled button, ensure that <code>is disabled</code> is present while <code>disabled</code> is not. 

####Accessibility 
When adding this attribute, make sure to not use the <code>disabled</code> property so that the button is both focusable and readable by screen readers.
        
When the state of the button has changed, add <code>aria-live=”assertive”</code> to prompt the screen reader to read the helper text out loud. 
        
Note: For the text to be read out loud by screen readers, a helper text has been added with <code>aria-describedby</code> matching the <code>id</code> of the paragraph element with the <code>_instructions</code> element. The element uses the <code>screen-reader-only</code> styling so that it is not visible.
        
`
    }
};

export const RTL = () => `
<div dir="RTL">
  <button class="fd-button fd-button--emphasized">Add to Cart</button>
  <button class="fd-button">Add to Cart</button>
  <button class="fd-button fd-button--transparent">Add to Cart</button>
  <button class="fd-button fd-button--ghost">Add to Cart</button>
  <button class="fd-button fd-button--positive">Approve</button>
  <button class="fd-button fd-button--negative">Reject</button>
  <button class="fd-button fd-button--attention">Attention</button>
  <br><br>
  <button class="fd-button fd-button--emphasized fd-button--menu">Add to Cart</button>
  <button class="fd-button fd-button--menu">Add to Cart</button>
  <button class="fd-button fd-button--transparent fd-button--menu">Add to Cart</button>
  <br><br>
  <button class="fd-button sap-icon--cart"></button>
  <button class="fd-button fd-button--emphasized sap-icon--cart"></button>
  <button class="fd-button fd-button--transparent sap-icon--cart"></button>
  <button class="fd-button fd-button--ghost sap-icon--filter"></button>
  <button class="fd-button fd-button--positive sap-icon--accept"></button>
  <button class="fd-button fd-button--negative sap-icon--decline"></button>
  <button class="fd-button fd-button--attention sap-icon--warning"></button>
  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button sap-icon--survey"></button>
    <button class="fd-button sap-icon--pie-chart" aria-pressed="true"></button>
    <button class="fd-button sap-icon--pool"></button>
  </div>

  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button fd-button--compact" aria-pressed="true">Left</button>
    <button class="fd-button fd-button--compact">Middle</button>
    <button class="fd-button fd-button--compact">Right</button>
  </div>
</div>
`;

RTL.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'These buttons display from right-to-left on the screen.'
    }
};
