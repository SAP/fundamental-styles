import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/menu.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/button-split.scss';
export default {
    title: 'Components/Button',
    parameters: {
        description: `The button component is used to trigger an action. All buttons are characterized by the \`fd-button\` class and an additional modifier class to specify each button type.

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
`
    }
};

export const Primary = () => `
    <button class="fd-button">Create</button>
    <button class="fd-button" aria-label="Add to cart"><i class="sap-icon--cart"></i></button>
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

export const Types = () => `<div class="fddocs-container fddocs-button-container">
        <button class="fd-button">Default Button</button>
        <button class="fd-button fd-button--emphasized">Emphasized Button</button>
        <button class="fd-button fd-button--ghost">Ghost Button</button>
        <button class="fd-button fd-button--positive">Positive Button</button>
        <button class="fd-button fd-button--negative">Negative Button</button>
        <button class="fd-button fd-button--attention">Attention Button</button>
        <button class="fd-button fd-button--transparent">Transparent Button</button>
</div>`;

Types.storyName = 'Button styles';
Types.parameters = {
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

export const Toggle = () => `<h4>Inactive state of toggle button</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button">Default Toggle</button>
    <button class="fd-button fd-button--emphasized">Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost">Ghost Toggle</button>
    <button class="fd-button fd-button--positive">Positive Toggle</button>
    <button class="fd-button fd-button--negative">Negative Toggle</button>
    <button class="fd-button fd-button--attention">Attention Toggle</button>
    <button class="fd-button fd-button--transparent">Transparent Toggle</button>
    <button class="fd-button fd-button--menu">
        <span class="fd-button__text">Action Button</span>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--attention">
        <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Accept" class="fd-button fd-button--positive"><i class="sap-icon--accept"></i></button>
</div>
<h4>Active (toggled) state of toggle button</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--toggled">Default Toggle</button>
    <button class="fd-button fd-button--emphasized fd-button--toggled">Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost fd-button--toggled">Ghost Toggle</button>
    <button class="fd-button fd-button--positive fd-button--toggled">Positive Toggle</button>
    <button class="fd-button fd-button--negative fd-button--toggled">Negative Toggle</button>
    <button class="fd-button fd-button--attention fd-button--toggled">Attention Toggle</button>
    <button class="fd-button fd-button--transparent fd-button--toggled">Transparent Toggle</button>
    <button class="fd-button fd-button--menu fd-button--toggled">
        <span class="fd-button__text">Action Button</span>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--attention fd-button--toggled">
        <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Accept" class="fd-button fd-button--positive fd-button--toggled"><i class="sap-icon--accept"></i></button>
</div>
<h4>Disabled Toggle button in active state</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--toggled" disabled>Default Toggle</button>
    <button class="fd-button fd-button--emphasized fd-button--toggled" disabled>Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost fd-button--toggled" disabled>Ghost Toggle</button>
    <button class="fd-button fd-button--positive fd-button--toggled" disabled>Positive Toggle</button>
    <button class="fd-button fd-button--negative fd-button--toggled" disabled>Negative Toggle</button>
    <button class="fd-button fd-button--attention fd-button--toggled" disabled>Attention Toggle</button>
    <button class="fd-button fd-button--transparent fd-button--toggled" disabled>Transparent Toggle</button>
    <button class="fd-button fd-button--menu fd-button--toggled" aria-disabled="true" disabled>
        <span class="fd-button__text">Action Button</span>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--attention fd-button--toggled" aria-disabled="true" disabled>
        <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
    </button>
    <button aria-label="Accept" class="fd-button fd-button--positive" disabled><i class="sap-icon--accept"></i></button>
</div>`;

Toggle.storyName = 'Toggle button';
Toggle.parameters = {
    docs: {
        description: {
            story: 'A toggle button switches between two actions. One of the actions is always active, one is inactive. Use the toggle button for secondary actions. Apply the `fd-button--toggled` modifier class to set the action to active.'
        }
    }
};


export const SegmentedButton = () => `
    <div class="fddocs-button-container">
        <div class="fd-segmented-button" role="group" aria-label="Group label">
            <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey"></i></button>
            <button aria-label="Chart" class="fd-button is-selected" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
            <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool"></i></button>
        </div>

        <div class="fd-segmented-button" role="group" aria-label="Group label">
            <button class="fd-button fd-button--compact is-selected" aria-pressed="true">Left</button>
            <button class="fd-button fd-button--compact">Middle</button>
            <button class="fd-button fd-button--compact">Right</button>
        </div>
    </div>
`;

SegmentedButton.storyName = 'Segmented button';
SegmentedButton.parameters = {
    docs: {
        description: {
            story: `The segmented button displays a group of options. Only one option can be active at a time by selecting it, while the others remain or become inactive when the initial option is selected. This button type was previously known as "button group" and is comparable to a radio button group.
        <br><br>It can be displayed by using the \`fd-segmented-button\` class with \`role="group"\` and the \`aria-label="Group label"\` attribute.`
        }
    }
};

export const BadgeOnButton = () => `
    <div class="fddocs-button-container">
        <button class="fd-button">
            <span class="fd-button__text">Cozy Badge Button</span>
            <span class="fd-button__badge">3984</span>
        </button>
        <button class="fd-button" aria-label="Add to cart">
            <i class="sap-icon--cart" role="presentation"></i>
            <span class="fd-button__badge">3</span>
        </button>
        <button class="fd-button fd-button--compact">
            <span class="fd-button__text">Compact Badge Button</span>
            <span class="fd-button__badge">654</span>
        </button>
        <button class="fd-button fd-button--compact" aria-label="Add to cart">
            <i class="sap-icon--cart" role="presentation"></i>
            <span class="fd-button__badge">12</span>
        </button>
    </div>
`;

BadgeOnButton.storyName = 'Button With Badge';
BadgeOnButton.parameters = {
    docs: {
        description: {
            story: `Button gets a badge in cases of collecting a number of items from various pages in order to
        trigger an action. <br/>
        Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge. <br/>
        <b>Badges cannot contain more characters than 4</b>.`
        }
    }
};

export const MenuButton = () => `
    <div class="fddocs-button-container">
        <button class="fd-button fd-button--menu">
            <span class="fd-button__text">Action Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--ghost fd-button--menu">
            <span class="fd-button__text">Ghost Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--positive fd-button--menu">
            <span class="fd-button__text">Positive Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--negative fd-button--menu">
            <span class="fd-button__text">Negative Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--attention fd-button--menu">
            <span class="fd-button__text">Attention Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button class="fd-button fd-button--menu" aria-disabled="true" disabled>
            <span class="fd-button__text">Action Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--ghost fd-button--menu" aria-disabled="true" disabled>
            <span class="fd-button__text">Ghost Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true" disabled>
            <span class="fd-button__text">Positive Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true" disabled>
            <span class="fd-button__text">Negative Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--attention fd-button--menu" aria-disabled="true" disabled>
            <span class="fd-button__text">Attention Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button class="fd-button fd-button--emphasized fd-button--menu">
            <span class="fd-button__text">Add to Cart</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--menu">
            <span class="fd-button__text">Add to Cart</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-button--menu">
            <span class="fd-button__text">Add to Cart</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive">
            <span class="fd-button__text">Approve Cart</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--negative fd-button--menu">
            <span class="fd-button__text">Reject</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--attention fd-button--menu">
            <span class="fd-button__text">Attention</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button aria-label="Add to cart" class="fd-button fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--transparent">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--positive">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--negative">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--attention">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button class="fd-button fd-button--menu">
            <span class="fd-button__text">Default</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--menu">
            <span class="fd-button__text">Compact</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
`;

MenuButton.storyName = 'Menu button';
MenuButton.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The menu button displays a dropdown menu upon selection and is considered the default menu button. There are two different type of menu buttons: the default menu button and split menu button, and both of them can contain items with submenus.'
        }
    }
};

export const SplitMenuButton = () => `
    <div class="fddocs-button-container">
        <div class="fd-button-split fd-button-split--emphasized fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--emphasized" aria-label="button">
            <span class="fd-button-split__text">Emphasized</span>
          </button>
          <button class="fd-button fd-button--emphasized" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button" aria-label="button">
            <span class="fd-button-split__text">Standard</span>
          </button>
          <button class="fd-button" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>

        <div class="fd-button-split fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--transparent" aria-label="button">
            <span class="fd-button-split__text">Transparent</span>
          </button>
          <button class="fd-button fd-button--transparent" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--ghost fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--ghost" aria-label="button">
            <span class="fd-button-split__text">Ghost</span>
          </button>
          <button class="fd-button fd-button--ghost" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--positive fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--positive" aria-label="button">
            <span class="fd-button-split__text">Positive</span>
          </button>
          <button class="fd-button fd-button--positive" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--negative fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--negative" aria-label="button">
            <span class="fd-button-split__text">Negative</span>
          </button>
          <button class="fd-button fd-button--negative" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--attention fd-has-margin-right-small" role="group" aria-label="button-split">
          <button class="fd-button fd-button--attention" aria-label="button">
            <span class="fd-button-split__text">Attention</span>
          </button>
          <button class="fd-button fd-button--attention" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
    </div>
`;

SplitMenuButton.storyName = 'Split menu button';
SplitMenuButton.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `The split menu button has two separate areas: the text label and the icon. The separator between them indicates that each area results in a different action, giving the user two choices: select the text label to trigger the action or select the arrow to open the menu. This button has a fixed size and the text truncates if the menu items exceed the maximum width available.
<br><br> Note: If the default action is displayed as an icon only, all the menu items must contain icons.

**The split menu button can behave in two different ways:**

1. The button triggers the default action set by the developer. If no default action is defined, the first item in the menu list will become the default.
2. The button triggers the last action chosen by the user. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.

The split menu button can be displayed by using \`fd-button-split fd-has-margin-right-small\` class with \`role=”group”\` and the \`aria-label=”button-split”\` attribute.
`
        }
    }
};

export const Sizes = () => `
    <div class="fddocs-button-container">
        <button class="fd-button">Save</button>
        <button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--ghost"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart"></i></button>
        <button class="fd-button fd-button--positive">Approve</button>
        <button class="fd-button fd-button--negative">Reject</button>
        <button class="fd-button fd-button--attention">Attention</button>
        <br><br>
        <button class="fd-button fd-button--compact">Edit</button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact"><i class="sap-icon--cart"></i></button>
        <button class="fd-button fd-button--ghost fd-button--compact">Edit</button>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized fd-button--compact"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent fd-button--compact"><i class="sap-icon--cart"></i></button>
        <button class="fd-button fd-button--positive fd-button--compact ">Approve</button>
        <button class="fd-button fd-button--negative fd-button--compact">Reject</button>
        <button class="fd-button fd-button--attention fd-button--compact">Attention</button>
    </div>
`;

Sizes.storyName = 'Button sizes';
Sizes.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
The buttons in the first row are displayed in cozy size, which is the default sizing and does not require a modifier. The compact buttons shown in the second row, however, can be displayed by adding the \`–compact\` modifier class to the element.
`
        }
    }
};

export const IconAndText = () => `
    <div class="fddocs-button-container">
        <button class="fd-button fd-button--emphasized">Add to Cart</button>
        <button class="fd-button">Add to Cart</button>
        <button class="fd-button fd-button--transparent">Add to Cart</button>
        <button class="fd-button fd-button--ghost">Add to Cart</button>
        <button class="fd-button fd-button--positive">Approve</button>
        <button class="fd-button fd-button--negative">Reject</button>
        <button class="fd-button fd-button--attention">Attention</button>
        <br><br>
        <button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart"></i></button>
        <button aria-label="Filter" class="fd-button fd-button--ghost"><i class="sap-icon--filter"></i></button>
        <button aria-label="Accept" class="fd-button fd-button--positive"><i class="sap-icon--accept"></i></button>
        <button aria-label="Decline" class="fd-button fd-button--negative"><i class="sap-icon--decline"></i></button>
        <button aria-label="Decline" class="fd-button fd-button--attention"><i class="sap-icon--decline"></i></button>
    </div>
`;

IconAndText.storyName = 'Icon or text';
IconAndText.parameters = {
    docs: {
        iframeHeight: 150,
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

export const ButtonStates = () => `
    <div class="fddocs-button-container">
        <button class="fd-button fd-button--emphasized">Normal State</button>
        <button class="fd-button fd-button--emphasized is-selected" >Selected State</button>
        <button class="fd-button fd-button--emphasized" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF1" class="fd-button fd-button--emphasized is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF1">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button">Normal State</button>
        <button class="fd-button is-selected" >Selected State</button>
        <button class="fd-button is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF2" class="fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF2">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--transparent">Normal State</button>
        <button class="fd-button fd-button--transparent is-selected" >Selected State</button>
        <button class="fd-button fd-button--transparent is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF3" class="fd-button fd-button--transparent is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF3">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button">Normal State</button>
        <button class="fd-button fd-button is-selected" >Selected State</button>
        <button class="fd-button fd-button" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF4" class="fd-button fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF4">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--ghost">Normal State</button>
        <button class="fd-button fd-button--ghost is-selected" >Selected State</button>
        <button class="fd-button fd-button--ghost" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF5" class="fd-button fd-button--ghost is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF5">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--positive">Normal State</button>
        <button class="fd-button fd-button--positive is-selected" >Selected State</button>
        <button class="fd-button fd-button--positive" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF6" class="fd-button fd-button--positive is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF6">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--negative">Normal State</button>
        <button class="fd-button fd-button--negative is-selected" >Selected State</button>
        <button class="fd-button fd-button--negative" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF7" class="fd-button fd-button--negative is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF7">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--attention">Normal State</button>
        <button class="fd-button fd-button--attention is-selected" >Selected State</button>
        <button class="fd-button fd-button--attention is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF8" class="fd-button fd-button--attention is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF8">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
    </div>
`;

ButtonStates.storyName = 'Button states';
ButtonStates.parameters = {
    docs: {
        iframeHeight: 450,
        description: {
            story: `
These button types indicate different states: normal, selected, disabled and focusable disabled.

- **Normal**: The button’s default state. It can be selected to perform a corresponding action.
- **Selected**: The button is selected as opposed to other buttons. This state can be displayed by adding the \`is-selected\` class or the \`aria-selected=”true”\` attribute for accessibility.
- **Disabled**: It cannot be selected. This state can be displayed by using the \`disabled\` attribute.
- **Focusable disabled**: It cannot be selected, but it is tabbable and focusable. When the button is selected, a focus ring appears. This state can be displayed by using the \`is-disabled\` class and the \`aria-disabled=”true”\` attribute for accessibility without using the \`disabled\` property. By adding the hidden \`_instructions\` element, the user will be notified for further instructions on how to enable the button. They will also be notified when the button is enabled when using the \`aria-live\` property.
`
        }
    }
};

export const FocusableDisabled = () => `
    <div class="fddocs-button-container">
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF" class="fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
    </div>
`;

FocusableDisabled.storyName = 'Focusable disabled';
FocusableDisabled.parameters = {
    docs: {
        description: {
            story: `
The disabled button can be focusable by adding the \`aria-disabled\` attribute. To enable the focus ring in a focusable disabled button, ensure that \`is-disabled\` is present while \`disabled\` is not.

####Accessibility
When adding this attribute, make sure to not use the \`disabled\` property so that the button is both focusable and readable by screen readers.

When the state of the button has changed, add \`aria-live=”assertive”\` to prompt the screen reader to read the helper text out loud.

Note: For the text to be read out loud by screen readers, a helper text has been added with \`aria-describedby\` matching the \`id\` of the paragraph element with the \`_instructions\` element. The element uses the \`screen-reader-only\` styling so that it is not visible.

`
        }
    }
};
