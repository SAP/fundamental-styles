import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/menu.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/button-split.scss';
export default {
    title: 'Components/Button',
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
    * \`fd-button--compact\` modifier class to make the button compact
    * \`fd-button--full-width\` modifier class to make the button full width
    * \`fd-button--toggled\` modifier class to indicate that the button is toggled
    * \`fd-button--menu\` modifier class to indicate that the button is a menu button
    * \`fd-button--menu-fixed-width\` modifier class to indicate that the button is a menu button with a fixed width
    * \`fd-button--text-alignment-left \` modifier class to indicate that the button text is aligned to the left
    * \`fd-button--text-alignment-right \` modifier class to indicate that the button text is aligned to the right
        * \`fd-button__text\` the text of the button
        * \`fd-button__badge\` the badge of the button
        * \`fd-button__instructions\` the instructions for the button usage, not visible, only being read by screen readers
`
    }
};

export const Styles = () => `<div class="fddocs-container fddocs-button-container">
        <button class="fd-button">Default Button</button>
        <button class="fd-button fd-button--emphasized">Emphasized Button</button>
        <button class="fd-button fd-button--ghost">Ghost Button</button>
        <button class="fd-button fd-button--positive">Positive Button</button>
        <button class="fd-button fd-button--negative">Negative Button</button>
        <button class="fd-button fd-button--attention">Attention Button</button>
        <button class="fd-button fd-button--transparent">Transparent Button</button>
</div>`;

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

export const Toggle = () => `<h4>Inactive state of toggle button</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button" aria-pressed="false">Default Toggle</button>
    <button class="fd-button fd-button--emphasized" aria-pressed="false">Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost" aria-pressed="false">Ghost Toggle</button>
    <button class="fd-button fd-button--positive" aria-pressed="false">Positive Toggle</button>
    <button class="fd-button fd-button--negative" aria-pressed="false">Negative Toggle</button>
    <button class="fd-button fd-button--attention" aria-pressed="false">Attention Toggle</button>
    <button class="fd-button fd-button--transparent" aria-pressed="false">Transparent Toggle</button>
</div>
<h4>Active (toggled) state of toggle button</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--toggled" aria-pressed="true">Default Toggle</button>
    <button class="fd-button fd-button--emphasized fd-button--toggled" aria-pressed="true">Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost fd-button--toggled" aria-pressed="true">Ghost Toggle</button>
    <button class="fd-button fd-button--positive fd-button--toggled" aria-pressed="true">Positive Toggle</button>
    <button class="fd-button fd-button--negative fd-button--toggled" aria-pressed="true">Negative Toggle</button>
    <button class="fd-button fd-button--attention fd-button--toggled" aria-pressed="true">Attention Toggle</button>
    <button class="fd-button fd-button--transparent fd-button--toggled" aria-pressed="true">Transparent Toggle</button>
</div>
<h4>Disabled Toggle button in active state</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--toggled" aria-pressed="false" disabled>Default Toggle</button>
    <button class="fd-button fd-button--emphasized fd-button--toggled" aria-pressed="false" disabled>Emphasized Toggle</button>
    <button class="fd-button fd-button--ghost fd-button--toggled" aria-pressed="false" disabled>Ghost Toggle</button>
    <button class="fd-button fd-button--positive fd-button--toggled" aria-pressed="false" disabled>Positive Toggle</button>
    <button class="fd-button fd-button--negative fd-button--toggled" aria-pressed="false" disabled>Negative Toggle</button>
    <button class="fd-button fd-button--attention fd-button--toggled" aria-pressed="false" disabled>Attention Toggle</button>
    <button class="fd-button fd-button--transparent fd-button--toggled" aria-pressed="false" disabled>Transparent Toggle</button>
</div>`;

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


export const SegmentedButton = () => `
    <div class="fddocs-button-container">
        <h4>Cozy</h4>
        <div class="fd-segmented-button" role="group" aria-label="Group label">
            <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
            <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
            <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
        </div>

        <h4>Compact</h4>
        <div class="fd-segmented-button" role="group" aria-label="Group label">
            <button aria-label="Survey" class="fd-button fd-button--compact" aria-pressed="false"><i class="sap-icon--survey"></i></button>
            <button aria-label="Chart" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
            <button aria-label="Pool" class="fd-button fd-button--compact" aria-pressed="false"><i class="sap-icon--pool"></i></button>
        </div>
    </div>
`;

SegmentedButton.storyName = 'Segmented button';
SegmentedButton.parameters = {
    docs: {
        description: {
            story: `The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.
This button type was previously known as "button group" and is comparable to a radio button group.
It can be displayed by using the container with \`fd-segmented-button\` class with \`role="group"\` and the \`aria-label="Group label"\` attribute.
Active button should have \`aria-pressed="true"\` and \`fd-button--toggled\` class and inactive buttons should have \`aria-pressed="false"\`.
`
        }
    }
};

export const BadgeOnButton = () => `
    <div class="fddocs-button-container">
        <h4>Cozy</h4>
        <button class="fd-button">
            <span class="fd-button__text">Cozy Badge Button</span>
            <span class="fd-button__badge">3984</span>
        </button>
        <button class="fd-button" aria-label="Add to cart">
            <i class="sap-icon--cart" role="presentation"></i>
            <span class="fd-button__badge">3</span>
        </button>
        
        <h4>Compact</h4>
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
            story: `Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.
Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge.
\n**Badges cannot contain more than 4 characters**.`
        }
    }
};

export const MenuButton = () => `
    <div class="fddocs-button-container">
        <h4>Cozy</h4>
        <button class="fd-button fd-button--emphasized fd-button--menu">
            <span class="fd-button__text">Emphasized Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--menu">
            <span class="fd-button__text">Default Button</span>
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
        <button class="fd-button fd-button--transparent fd-button--menu">
            <span class="fd-button__text">Transparent Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button-ghost fd-button--menu">
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
        <button aria-label="Add to cart" class="fd-button fd-button--menu fd-button--transparent">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <h4>Compact</h4>
        <button class="fd-button fd-button--compact fd-button--emphasized fd-button--menu">
            <span class="fd-button__text">Emphasized Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--menu">
            <span class="fd-button__text">Default Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--ghost fd-button--menu">
            <span class="fd-button__text">Ghost Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--positive fd-button--menu">
            <span class="fd-button__text">Positive Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--negative fd-button--menu">
            <span class="fd-button__text">Negative Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--attention fd-button--menu">
            <span class="fd-button__text">Attention Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--transparent fd-button--menu">
            <span class="fd-button__text">Transparent Button</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <br /><br />
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--emphasized fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button-ghost fd-button--menu">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--menu fd-button--positive">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--menu fd-button--negative">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--menu fd-button--attention">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--compact fd-button--menu fd-button--transparent">
            <i class="sap-icon--cart"></i><i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
`;

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

export const SplitMenuButton = () => `
    <div class="fddocs-button-container">
        <h4>Cozy</h4>
        <div class="fd-button-split fd-button-split--emphasized" role="group" aria-label="button-split">
          <button class="fd-button fd-button--emphasized" aria-label="button">
            <span class="fd-button-split__text">Emphasized</span>
          </button>
          <button class="fd-button fd-button--emphasized" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split" role="group" aria-label="button-split">
          <button class="fd-button" aria-label="button">
            <span class="fd-button-split__text">Standard</span>
          </button>
          <button class="fd-button" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>

        <div class="fd-button-split fd-button-split--transparent" role="group" aria-label="button-split">
          <button class="fd-button fd-button--transparent" aria-label="button">
            <span class="fd-button-split__text">Transparent</span>
          </button>
          <button class="fd-button fd-button--transparent" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--ghost" role="group" aria-label="button-split">
          <button class="fd-button fd-button--ghost" aria-label="button">
            <span class="fd-button-split__text">Ghost</span>
          </button>
          <button class="fd-button fd-button--ghost" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--positive" role="group" aria-label="button-split">
          <button class="fd-button fd-button--positive" aria-label="button">
            <span class="fd-button-split__text">Positive</span>
          </button>
          <button class="fd-button fd-button--positive" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--negative" role="group" aria-label="button-split">
          <button class="fd-button fd-button--negative" aria-label="button">
            <span class="fd-button-split__text">Negative</span>
          </button>
          <button class="fd-button fd-button--negative" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--attention" role="group" aria-label="button-split">
          <button class="fd-button fd-button--attention" aria-label="button">
            <span class="fd-button-split__text">Attention</span>
          </button>
          <button class="fd-button fd-button--attention" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <h4>Compact</h4>
        <div class="fd-button-split fd-button-split--emphasized" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--emphasized" aria-label="button">
            <span class="fd-button-split__text">Emphasized</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--emphasized" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact " aria-label="button">
            <span class="fd-button-split__text">Standard</span>
          </button>
          <button class="fd-button fd-button--compact " aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>

        <div class="fd-button-split fd-button-split--transparent" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--transparent" aria-label="button">
            <span class="fd-button-split__text">Transparent</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--transparent" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--ghost" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--ghost" aria-label="button">
            <span class="fd-button-split__text">Ghost</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--ghost" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--positive" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--positive" aria-label="button">
            <span class="fd-button-split__text">Positive</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--positive" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--negative" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--negative" aria-label="button">
            <span class="fd-button-split__text">Negative</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--negative" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
        
        <div class="fd-button-split fd-button-split--attention" role="group" aria-label="button-split">
          <button class="fd-button fd-button--compact fd-button--attention" aria-label="button">
            <span class="fd-button-split__text">Attention</span>
          </button>
          <button class="fd-button fd-button--compact fd-button--attention" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
          </button>
        </div>
    </div>
`;

SplitMenuButton.storyName = 'Split menu button';
SplitMenuButton.parameters = {
    docs: {
        description: {
            story: `The split menu button has two separate areas: the text label and the arrow down icon.
The separator between them indicates that each area results in a different action, giving the user two choices: trigger the main action or open the menu.
\n**If the default action is displayed as an icon only, all the menu items must contain icons.**

The split menu button can behave in two different ways:

1. The main button triggers the default action set by the developer. If no default action is defined, the first item in the menu list should be the default.
2. The main button triggers the last action chosen by the user from the menu list. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.

The split menu button can be displayed by using container with \`fd-button-split\` class with \`role=”group”\` and the \`aria-label=”button-split”\` attribute.
`
        }
    }
};

export const Sizes = () => `
    <div class="fddocs-button-container">
        <h4>Cozy</h4>
        <button class="fd-button">Save</button>
        <button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--ghost"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent"><i class="sap-icon--cart"></i></button>
        <button class="fd-button fd-button--positive">Approve</button>
        <button class="fd-button fd-button--negative">Reject</button>
        <button class="fd-button fd-button--attention">Attention</button>
        <h4>Compact</h4>
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
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized"><i class="sap-icon--cart"></i></button>
        <button aria-label="Add to cart" class="fd-button"><i class="sap-icon--cart"></i></button>
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
        <button class="fd-button fd-button--emphasized" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF1" class="fd-button fd-button--emphasized is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF1">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button">Normal State</button>
        <button class="fd-button is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF2" class="fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF2">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--transparent">Normal State</button>
        <button class="fd-button fd-button--transparent is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF3" class="fd-button fd-button--transparent is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF3">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button">Normal State</button>
        <button class="fd-button fd-button" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF4" class="fd-button fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF4">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--ghost">Normal State</button>
        <button class="fd-button fd-button--ghost" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF5" class="fd-button fd-button--ghost is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF5">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--positive">Normal State</button>
        <button class="fd-button fd-button--positive" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF6" class="fd-button fd-button--positive is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF6">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--negative">Normal State</button>
        <button class="fd-button fd-button--negative" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF7" class="fd-button fd-button--negative is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF7">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
        <br><br>
        <button class="fd-button fd-button--attention">Normal State</button>
        <button class="fd-button fd-button--attention is-disabled" aria-disabled="true" disabled>Disabled State</button>
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF8" class="fd-button fd-button--attention is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF8">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
    </div>
`;

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
The disabled button can be focusable by adding the \`aria-disabled\` attribute. To enable the focus ring in a focusable disabled button, ensure that \`is-disabled\` class is present while \`disabled\` attribute is not.

####Accessibility

When the state of the button has changed, add \`aria-live=”assertive”\` to prompt the screen reader to read the helper text out loud.

Note: For the text to be read out loud by screen readers, a helper text has been added with \`aria-describedby\` matching the \`id\` of the paragraph element with the \`_instructions\` element. The element uses the \`screen-reader-only\` styling so that it is not visible.

`
        }
    }
};
