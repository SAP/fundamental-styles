import '../../dist/button.css';
import '../../dist/button-split.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/popover.css';
import '../../dist/segmented-button.css';

export default {
    title: 'Components/Button',
    parameters: {
        description: `Buttons allow users to perform actions.
        All the buttons require the fd-button base class and an additional modifier
        for each of the types.`
    }
};

export const primary = () => `
    <button class="fd-button">Create</button>
    <button class="fd-button" aria-label="Add to cart"><i class="sap-icon--cart fd-button__icon--left"></i></button>
    <button class="fd-button fd-button--emphasized ">Save</button>
`;

/**
 *
 * - **Default Button** or Standard Button for neutral or informative (secondary) actions
 * - **Emphasized Button** Used for primary action
 * - **Ghost Button**  Used for secondary actions or primary button in cases where there is already a primary button on the page
 * - **Positive Button** Used for positive (secondary) actions
 * - **Negative Button** Used for negative (secondary) actions
 * - **Attention Button**
 * - **Transparent Button** Used for secondary or negative path actions
 */

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

types.storyName = 'Design Types';
types.parameters = {
    docs: {
        storyDescription: `
- **Default Button** or Standard Button for neutral or informative (secondary) actions
- **Emphasized Button** Used for primary action
- **Ghost Button**  Used for secondary actions or primary button in cases where there is already a primary button on the page
- **Positive Button** Used for positive (secondary) actions
- **Negative Button** Used for negative (secondary) actions
- **Attention Button**
- **Transparent Button** Used for secondary or negative path action
`
    }
};

export const segmentedButton = () => `
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey fd-button__icon--left"></i></button>
        <button aria-label="Chart" class="fd-button is-selected" aria-pressed="true"><i class="sap-icon--pie-chart fd-button__icon--left"></i></button>
        <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool fd-button__icon--left"></i></button>
    </div>

    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact is-selected" aria-pressed="true">Left</button>
        <button class="fd-button fd-button--compact">Middle</button>
        <button class="fd-button fd-button--compact">Right</button>
    </div>
`;

segmentedButton.storyName = 'Segmented Button (previously known as Button Group)';
segmentedButton.parameters = {
    docs: {
        storyDescription: `
Group a series of buttons together on a single line with the segmented button.
Only one of the options can be active at a time, the others remain or become inactive.
The option can be activated by clicking on it. This type of button is comparable to a radio button group.
`
    }
};

export const menuButton = () => `
<button class="fd-button fd-button--menu">
    Action Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--ghost fd-button--menu">
    Ghost Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--positive fd-button--menu">
    Positive Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--negative fd-button--menu">
    Negative Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--attention fd-button--menu">
    Attention Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<br /><br />
<button class="fd-button fd-button--menu" aria-disabled="true" disabled>
    Action Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--ghost fd-button--menu" aria-disabled="true" disabled>
    Ghost Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true" disabled>
    Positive Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true" disabled>
    Negative Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--attention fd-button--menu" aria-disabled="true" disabled>
    Attention Button<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<br /><br />
<button class="fd-button fd-button--emphasized fd-button--menu">
    Add to Cart<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--menu">
    Add to Cart<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--transparent fd-button--menu">
    Add to Cart<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive">
    Approve<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--negative fd-button--menu">
    Reject<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--attention fd-button--menu">
    Attention<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<br /><br />
<button aria-label="Add to cart" class="fd-button fd-button--menu">
    <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--transparent">
    <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--positive">
    <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--negative">
    <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--attention">
    <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<br /><br />
<button class="fd-button fd-button--menu">
    Default<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
<button class="fd-button fd-button--compact fd-button--menu">
    Compact<i class="sap-icon--slim-arrow-down fd-button__icon--right"></i>
</button>
`;

menuButton.storyName = 'Menu Button';
menuButton.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
Menu Buttons allows for multiple actions.
There are two different types of menu buttons. Both can contain items with submenus.
When the user activates the button, the menu opens. This is the default type.
`
    }
};

export const splitMenuButton = () => `
<div class="fd-button-split fd-has-margin-right-small" role="group" aria-label="button-split">
  <button class="fd-button" aria-label="button">Button with text</button>
  <button class="fd-button" aria-controls="t4c0o273" aria-haspopup="true" aria-expanded="false" aria-label="More"><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i></button>
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
  <button class="fd-button fd-button--emphasized" aria-controls="t4c0o2732" 
  aria-haspopup="true" aria-expanded="false" aria-label="More"><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i></button>

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
  <button class="fd-button fd-button--transparent" aria-controls="t4c0o27322" aria-haspopup="true" aria-expanded="false" aria-label="More"><i class="sap-icon--slim-arrow-down fd-button__icon--right"></i></button>
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

splitMenuButton.storyName = 'Split Menu Button';
splitMenuButton.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `
The menu button can also be split into 2 areas: the text label and the icon. The separator between them signals that the two areas
result in different actions. The user has two choices: 1- activating the text label on the button triggers the action or 2- activating
the arrow opens the menu. The split button consolidates a variety of commands, especially when one of the commands is used more often.

In split mode, the text label depends on the default action. If the default action is displayed as an icon only, all the menu items must contain icons.

**Split Menu Button Behaviors**
The split menu button can have two different behaviors:

The button always triggers the default action set by the app developer. If no default action has been defined, the first item in the menu list becomes the default.
The button triggers the last action chosen by the user. Initially, it also triggers the default action. However, when the user selects a different action, this user action becomes the default, and the button text label changes accordingly. The button has a fixed size and the text truncates if the menu item exceeds the available width (as with the combo box).
`
    }
};

export const sizes = () => `
<button class="fd-button">Save</button>
<button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--ghost"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button class="fd-button fd-button--positive">Approve</button>
<button class="fd-button fd-button--negative">Reject</button>
<button class="fd-button fd-button--attention">Attention</button>
<br><br>
<button class="fd-button fd-button--compact">Edit</button>
<button aria-label="Add to cart" class="fd-button fd-button--compact"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button class="fd-button fd-button--ghost fd-button--compact">Edit</button>
<button aria-label="Add to cart" class="fd-button fd-button--emphasized fd-button--compact"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--transparent fd-button--compact"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button class="fd-button fd-button--positive fd-button--compact ">Approve</button>
<button class="fd-button fd-button--negative fd-button--compact">Reject</button>
<button class="fd-button fd-button--attention fd-button--compact">Attention</button>
`;

sizes.storyName = 'Sizes';
sizes.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `
All the buttons support the cozy (default) and compact sizes.
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
<button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart fd-button__icon--left"></i></button>
<button aria-label="Filter" class="fd-button fd-button--ghost"><i class="sap-icon--filter fd-button__icon--left"></i></button>
<button aria-label="Accept" class="fd-button fd-button--positive"><i class="sap-icon--accept fd-button__icon--left"></i></button>
<button aria-label="Decline" class="fd-button fd-button--negative"><i class="sap-icon--decline fd-button__icon--left"></i></button>
<button aria-label="Decline" class="fd-button fd-button--attention"><i class="sap-icon--decline fd-button__icon--left"></i></button>
`;

iconAndText.storyName = 'Icon and Text';
iconAndText.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: `
The buttons can contain **icons OR text**.
The recommendation is to use either one or the other, not both. Use icon for buttons that contain very basic standard icon metaphors
(e.g. _Back to previous screen, Create a new item, Remove from list, Edit, ..._)

All button styles can be used with an icon. You can use the \`sap-icon--{icon-name}\` class to attach an icon to the button.
The full list of all the available icons can be found on the <a href="icon.html">icons page</a>.
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

buttonStates.storyName = 'Button States';
buttonStates.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `
The button provides feedback for "normal", "hover", "selected", "focus" and "disabled" states:

- **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
- **Selected**: Used to signal that this button is selected among other buttons. This state can be rendered using
the \`is-selected\` class or the \`aria-selected="true"\` attribute for accessibility.
- **Disabled**: It cannot be clicked/tapped. This state can be rendered using the \`is-disabled\` class and the
\`aria-disabled="true"\` attribute for accessibility.
- **Focusable Disabled**: It cannot be clicked/tapped. The button is tabbable and focusable. A focus ring will appear when clicking or tabbing into the button.
 This state can be rendered using the \`is-disabled\` class and the
\`aria-disabled="true"\` attribute for accessibility without the use of the \`disabled\` property. With the addition of the hidden \`__instructions\` 
element, the user will be notified of further instructions to enable the button, and will be notified when the button is enabled
by use of the \`aria-live\` property.
`
    }
};

export const focusableDisabled = () => `
<button aria-disabled="true" aria-describedby="fd-ONXuqucVcF" class="fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
`;

focusableDisabled.storyName = 'Focusable Disabled';
focusableDisabled.parameters = {
    docs: {
        storyDescription: `
This disabled button is focusable by using only the \`aria-disabled\` prop without the use of the \`disabled\` prop.
When using \`aria-disabled\` do not use the \`disabled\` prop in order to make the button focusable and readable by
screen readers. In order for a focus ring to be enabled in a focusable disabled button, ensure that \`is-disabled\` is
present and \`disabled\` is not.
In order for helper text to be read out by the screen-reader a helper text has been added with \`aria-describedby\`
matching the \`id\` of the \`<p>\` element using \`__instructions\` element which uses \`screen-reader-only\` styling so it is not visible.
\`aria-live="assertive"\` is used to make the screen reader read out helper text when the state of the button has changed.
`
    }
};

export const rtl = () => `
<div dir="rtl">
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
  <button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart fd-button__icon--left"></i></button>
  <button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart fd-button__icon--left"></i></button>
  <button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart fd-button__icon--left"></i></button>
  <button aria-label="Filter" class="fd-button fd-button--ghost"><i class="sap-icon--filter fd-button__icon--left"></i></button>
  <button aria-label="Approve" class="fd-button fd-button--positive"><i class="sap-icon--accept fd-button__icon--left"></i></button>
  <button aria-label="Decline" class="fd-button fd-button--negative"><i class="sap-icon--decline fd-button__icon--left"></i></button>
  <button aria-label="Decline" class="fd-button fd-button--attention"><i class="sap-icon--decline fd-button__icon--left"></i></button>
  
  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey fd-button__icon--left"></i></button>
    <button aria-label="Chart" class="fd-button" aria-pressed="true"><i class="sap-icon--pie-chart fd-button__icon--left"></i></button>
    <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool fd-button__icon--left"></i></button>
  </div>

  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button fd-button--compact" aria-pressed="true">Left</button>
    <button class="fd-button fd-button--compact">Middle</button>
    <button class="fd-button fd-button--compact">Right</button>
  </div>
</div>
`;

rtl.parameters = {
    docs: {
        iframeHeight: 200
    }
};
