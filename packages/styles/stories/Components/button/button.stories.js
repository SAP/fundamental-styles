import focusableDisabledExampleHtml from "./focusable-disabled.example.html?raw";
import buttonStatesExampleHtml from "./button-states.example.html?raw";
import iconAndTextExampleHtml from "./icon-and-text.example.html?raw";
import menuButtonExampleHtml from "./menu-button.example.html?raw";
import badgeOnButtonExampleHtml from "./badge-on-button.example.html?raw";
import toggleExampleHtml from "./toggle.example.html?raw";
import stylesExampleHtml from "./styles.example.html?raw";

import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/menu.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/button-split.scss';
export default {
  title: 'Components/Buttons/Button',
  parameters: {
    description: `The button component is used to trigger an action. All buttons are characterized by the \`fd-button\` class and an additional modifier classes to specify each button type.

##Usage

**Use the button types as follows:**

- Use simple buttons for specific actions.
- If you want the user to select one option from a small group, use a segmented button.
- If you want to have a button that can be in active\\active\\toggled state, use a toggle button.
- If you want the button to be a menu trigger use a menu button.
- If you want the button to have a main action and the option to trigger a menu, use a split menu button.

**Do not use buttons if:**

- You want to link to a different page or object. Instead, use the **Link** component.

## Structure

**Button consists of the following elements:** (sublevels mean nesting of elements)
* \`fd-segmented-button\` container for the button if you want to use a segmented button
* \`fd-button-split\` container for the button if you want to use a split button
    * \`fd-button\` the main element
    * \`fd-button--full-width\` modifier class to make the button full width
    * \`fd-button--toggled\` modifier class to indicate that the button is toggled
    * \`fd-button--menu\` modifier class to indicate that the button is a menu button
    * \`fd-button--menu-fixed-width\` modifier class to indicate that the button is a menu button with a fixed width
    * \`fd-button--text-alignment-left \` modifier class to indicate that the button text is aligned to the left
    * \`fd-button--text-alignment-right \` modifier class to indicate that the button text is aligned to the right
        * \`fd-button__text\` the text of the button
        * \`fd-button__badge\` the badge of the button
        * \`fd-button__instructions\` the instructions for the button usage, not visible, only being read by screen readers
`,
tags: ['f3', 'a11y', 'theme']
  }
};
export const Styles = () => stylesExampleHtml;
Styles.storyName = 'Button styles';
Styles.parameters = {
  docs: {
    description: {
      story: `
- **Default button** is used for neutral or informative (secondary) actions.
- **Emphasized button** is used to indicate the primary action on the screen.
- **Ghost button** is used to trigger secondary actions. If a page already has a primary action, but you also need to highlight the most important action in a content toolbar, use the ghost style.
- **Positive button** is used to trigger positive semantic actions, such as _Accept_ and should always be accompanied by text.
- **Negative button** is used to trigger negative semantic actions, such as _Reject_ and should always be accompanied by text.
- **Attention button** is used to trigger a semantic action that needs attention and should always be accompanied by text.
- **Transparent button** is used to trigger a negative path action within a header or footer bar, and secondary actions in toolbars.
`
    }
  }
};
export const Toggle = () => toggleExampleHtml;
Toggle.storyName = 'Toggle button';
Toggle.parameters = {
  docs: {
    description: {
      story: `A toggle button switches between two states. First is the active state, second is inactive. Use the toggle button for secondary actions.
Active (toggled) button should have \`aria-pressed="true"\` and \`fd-button--toggled\` class and inactive buttons should have \`aria-pressed="false"\`
`
    }
  }
};
export const BadgeOnButton = () => badgeOnButtonExampleHtml;
BadgeOnButton.storyName = 'Button With Badge';
BadgeOnButton.parameters = {
  docs: {
    description: {
      story: `Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.
Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge.
\n**Counter Badges cannot contain more than 4 characters**.
\nFor **Attention Badge** use the <code>fd-button__badge--attention</code> modifier class with <code>fd-button__badge</code> base class. `
    }
  }
};
export const MenuButton = () => menuButtonExampleHtml;
MenuButton.storyName = 'Menu button';
MenuButton.parameters = {
  docs: {
    description: {
      story: `The menu button displays a dropdown menu upon click and is considered the default menu button.
There are two different type of menu buttons: the default menu button and split menu button.
\n**Maximum width is 12rem**.
            `
    }
  }
};
export const IconAndText = () => iconAndTextExampleHtml;
IconAndText.storyName = 'Icon or text';
IconAndText.parameters = {
  docs: {
    description: {
      story: `
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
  }
};
export const ButtonStates = () => buttonStatesExampleHtml;
ButtonStates.storyName = 'Button states';
ButtonStates.parameters = {
  docs: {
    description: {
      story: `
These button types indicate different states: normal, selected, disabled and focusable disabled.

- **Normal**: The button’s default state. It can be selected to perform a corresponding action.
- **Disabled**: It cannot be selected. This state can be displayed by using the \`disabled\` attribute.
- **Focusable disabled**: It cannot be selected, but it is tabbable and focusable. When the button is selected, a focus ring appears. This state can be displayed by using the \`is-disabled\` class and the \`aria-disabled=”true”\` attribute for accessibility without using the \`disabled\` property. By adding the hidden \`_instructions\` element, the user will be notified for further instructions on how to enable the button. They will also be notified when the button is enabled when using the \`aria-live\` property.
`
    }
  }
};
export const FocusableDisabled = () => focusableDisabledExampleHtml;
FocusableDisabled.storyName = 'Focusable disabled';
FocusableDisabled.parameters = {
  docs: {
    description: {
      story: `
The disabled button can be focusable by adding the \`aria-disabled\` attribute. To enable the focus ring in a focusable disabled button, ensure that \`is-disabled\` class is present while \`disabled\` attribute is not.

####Accessibility

When the state of the button has changed, add \`aria-live=”assertive”\` to prompt the screen reader to read the helper text out loud.

Note: For the text to be read out loud by screen readers, a helper text has been added with \`aria-describedby\` matching the \`id\` of the paragraph element with the \`_instructions\` element. The element uses the \`screen-reader-only\` styling so that it is not visible.

`
    }
  }
};
