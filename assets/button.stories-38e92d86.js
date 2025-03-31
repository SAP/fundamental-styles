/* empty css                *//* empty css                         *//* empty css             *//* empty css             *//* empty css               *//* empty css                     */const i=`
    <div class="fddocs-button-container">
        <button aria-disabled="true" aria-describedby="fd-ONXuqucVcF" class="fd-button is-disabled" type="button">Disabled Focusable</button>
        <p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
    </div>
`,u=`
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
`,b=`
    <div class="fddocs-button-container">
        <button class="fd-button fd-button--emphasized">
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button class="fd-button">
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button class="fd-button fd-button--transparent">
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button class="fd-button fd-button--ghost">
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button class="fd-button fd-button--positive">
            <span class="fd-button__text">Approve</span>
        </button>
        <button class="fd-button fd-button--negative">
            <span class="fd-button__text">Reject</span>
        </button>
        <button class="fd-button fd-button--attention">
            <span class="fd-button__text">Attention</span>
        </button>
        <br><br>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
            <i class="sap-icon--cart"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button">
            <i class="sap-icon--cart"></i>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent">
            <i class="sap-icon--cart"></i>
        </button>
        <button aria-label="Filter" class="fd-button fd-button--ghost">
            <i class="sap-icon--filter"></i>
        </button>
        <button aria-label="Accept" class="fd-button fd-button--positive">
            <i class="sap-icon--accept"></i>
        </button>
        <button aria-label="Decline" class="fd-button fd-button--negative">
            <i class="sap-icon--decline"></i>
        </button>
        <button aria-label="Decline" class="fd-button fd-button--attention">
            <i class="sap-icon--decline"></i>
        </button>
        <br><br>
        <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
            <i class="sap-icon--cart"></i>
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button aria-label="Add to cart" class="fd-button">
            <i class="sap-icon--cart"></i>
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button aria-label="Add to cart" class="fd-button fd-button--transparent">
            <i class="sap-icon--cart"></i>
            <span class="fd-button__text">Add to Cart</span>
        </button>
        <button aria-label="Filter" class="fd-button fd-button--ghost">
            <i class="sap-icon--filter"></i>
            <span class="fd-button__text">Filter</span>
        </button>
        <button aria-label="Accept" class="fd-button fd-button--positive">
            <i class="sap-icon--accept"></i>
            <span class="fd-button__text">Accept</span>
        </button>
        <button aria-label="Decline" class="fd-button fd-button--negative">
            <i class="sap-icon--decline"></i>
            <span class="fd-button__text">Decline</span>
        </button>
        <button aria-label="Decline" class="fd-button fd-button--attention">
            <i class="sap-icon--decline"></i>
            <span class="fd-button__text">Decline</span>
        </button>
    </div>
`,r=`<div class="fddocs-button-container">
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
</div>
`,l=`<div class="fddocs-button-container">
    <h4>Counter Badge</h4>
    <button class="fd-button">
        <span class="fd-button__text">Badge Button</span>
        <span class="fd-button__badge">3984</span>
    </button>
    <button class="fd-button" aria-label="Add to cart">
        <i class="sap-icon--cart" role="presentation"></i>
        <span class="fd-button__badge">3</span>
    </button>
</div>

<div class="fddocs-button-container">
    <h4>Attention Badge</h4>
    <button class="fd-button">
        <span class="fd-button__text">Badge Button</span>
        <span class="fd-button__badge fd-button__badge--attention"></span>
    </button>
    <button class="fd-button" aria-label="Add to cart">
        <i class="sap-icon--cart" role="presentation"></i>
        <span class="fd-button__badge fd-button__badge--attention"></span>
    </button>
</div>`,c=`<h4>Inactive state of toggle button</h4>
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
</div>`,f=`<div class="fddocs-container fddocs-button-container">
    <button class="fd-button">
        <span class="fd-button__text">Default Button</span>
    </button>
    <button class="fd-button fd-button--emphasized">
        <span class="fd-button__text">Emphasized Button</span>
    </button>
    <button class="fd-button fd-button--ghost">
        <span class="fd-button__text">Ghost Button</span>
    </button>
    <button class="fd-button fd-button--positive">
        <span class="fd-button__text">Positive Button</span>
    </button>
    <button class="fd-button fd-button--negative">
        <span class="fd-button__text">Negative Button</span>
    </button>
    <button class="fd-button fd-button--attention">
        <span class="fd-button__text">Attention Button</span>
    </button>
    <button class="fd-button fd-button--transparent">
        <span class="fd-button__text">Transparent Button</span>
    </button>
</div>`,y={title:"Components/Buttons/Button",parameters:{description:`The button component is used to trigger an action. All buttons are characterized by the \`fd-button\` class and an additional modifier classes to specify each button type.

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
`,tags:["f3","a11y","theme"]}},t=()=>f;t.storyName="Button styles";t.parameters={docs:{description:{story:`
- **Default button** is used for neutral or informative (secondary) actions.
- **Emphasized button** is used to indicate the primary action on the screen.
- **Ghost button** is used to trigger secondary actions. If a page already has a primary action, but you also need to highlight the most important action in a content toolbar, use the ghost style.
- **Positive button** is used to trigger positive semantic actions, such as _Accept_ and should always be accompanied by text.
- **Negative button** is used to trigger negative semantic actions, such as _Reject_ and should always be accompanied by text.
- **Attention button** is used to trigger a semantic action that needs attention and should always be accompanied by text.
- **Transparent button** is used to trigger a negative path action within a header or footer bar, and secondary actions in toolbars.
`}}};const n=()=>c;n.storyName="Toggle button";n.parameters={docs:{description:{story:'A toggle button switches between two states. First is the active state, second is inactive. Use the toggle button for secondary actions.\nActive (toggled) button should have `aria-pressed="true"` and `fd-button--toggled` class and inactive buttons should have `aria-pressed="false"`\n'}}};const e=()=>l;e.storyName="Button With Badge";e.parameters={docs:{description:{story:`Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.
Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge.

**Counter Badges cannot contain more than 4 characters**.

For **Attention Badge** use the <code>fd-button__badge--attention</code> modifier class with <code>fd-button__badge</code> base class. `}}};const a=()=>r;a.storyName="Menu button";a.parameters={docs:{description:{story:`The menu button displays a dropdown menu upon click and is considered the default menu button.
There are two different type of menu buttons: the default menu button and split menu button.

**Maximum width is 12rem**.
            `}}};const s=()=>b;s.storyName="Icon or text";s.parameters={docs:{description:{story:`
These buttons contain either icons **or** text, as it is highly recommended not to combine the two.

**Use icon buttons for basic actions such as:**

- _Edit_
- _Back to previous screen_
- _Remove from list_ etc.


Make sure the default accessibility text for the icon is appropriate for your use case. If the text is not ideal, define an app-specific accessibility text.


All button styles can be paired with an icon. You can use the \`sap-icon--{icon-name}\` class to attach an icon to the button.
The full list of all the available icons can be found on the <a href="icon.html">Icon</a> page.
`}}};const o=()=>u;o.storyName="Button states";o.parameters={docs:{description:{story:"\nThese button types indicate different states: normal, selected, disabled and focusable disabled.\n\n- **Normal**: The button’s default state. It can be selected to perform a corresponding action.\n- **Disabled**: It cannot be selected. This state can be displayed by using the `disabled` attribute.\n- **Focusable disabled**: It cannot be selected, but it is tabbable and focusable. When the button is selected, a focus ring appears. This state can be displayed by using the `is-disabled` class and the `aria-disabled=”true”` attribute for accessibility without using the `disabled` property. By adding the hidden `_instructions` element, the user will be notified for further instructions on how to enable the button. They will also be notified when the button is enabled when using the `aria-live` property.\n"}}};const d=()=>i;d.storyName="Focusable disabled";d.parameters={docs:{description:{story:"\nThe disabled button can be focusable by adding the `aria-disabled` attribute. To enable the focus ring in a focusable disabled button, ensure that `is-disabled` class is present while `disabled` attribute is not.\n\n####Accessibility\n\nWhen the state of the button has changed, add `aria-live=”assertive”` to prompt the screen reader to read the helper text out loud.\n\nNote: For the text to be read out loud by screen readers, a helper text has been added with `aria-describedby` matching the `id` of the paragraph element with the `_instructions` element. The element uses the `screen-reader-only` styling so that it is not visible.\n\n"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => stylesExampleHtml",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => toggleExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => badgeOnButtonExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => menuButtonExampleHtml",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => iconAndTextExampleHtml",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => buttonStatesExampleHtml",...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => focusableDisabledExampleHtml",...d.parameters?.docs?.source}}};const w=["Styles","Toggle","BadgeOnButton","MenuButton","IconAndText","ButtonStates","FocusableDisabled"];export{e as BadgeOnButton,o as ButtonStates,d as FocusableDisabled,s as IconAndText,a as MenuButton,t as Styles,n as Toggle,w as __namedExportsOrder,y as default};
