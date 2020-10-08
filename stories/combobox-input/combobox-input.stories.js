export default {
    title: 'Patterns/Combobox Input',
    parameters: {
        description: `
The Combobox Input component is an opinionated composition of the input group, popover and list components. 
The popover and \`dropdown list\` is shared between the multi-input and select components.
Please see the \`select\` documentation for the complete list of modifiers that are also  supported by the combobox component.

\`Combobox\` allows users to select an item from a predefined list. 
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options. 
If the entries are not validated by the application, users can also enter custom values.
`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['radio', 'title', 'form-label', 'popover', 'icon', 'input-group', 'input', 'list']
    }
};

export const cozyAndCompact = () => `
<div style="display:flex;justify-content:space-around;height:700px">
    <div style="display:flex;flex-direction:column">
        <label class="fd-form-label">Combobox Cozy Mode</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348" aria-expanded="true" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348">
                <div class="fd-popover__wrapper docs-max-height">
                    <ul class="fd-list fd-list--dropdown" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">
                                <span class="fd-list__bold">App</span>le
                            </span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Nectarine</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Apricots</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Peache</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Plum</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Mango</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Strawberry</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Blueberry</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Watermelon</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Rockmelon</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Honeydew</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Apple</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div style="display:flex;flex-direction:column">
        <label class="fd-form-label">Combobox Compact Mode</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-select__button" aria-controls="F4GcX34" aria-expanded="true" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX34">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">
                                <span class="fd-list__bold">App</span>le
                            </span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

cozyAndCompact.parameters = {
    docs: {
        iframeHeight: 700
    }
};

export const asFormItem = () =>`
<div style="height:700px">
    <div class="fd-form-item">
        <label class="fd-form-label">Combobox as a form item</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            aria-controls="F4GcX348"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow"
                        ></button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348">
                <div class="fd-popover__wrapper docs-max-height">
                    <ul class="fd-list fd-list--dropdown" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">
                                <span class="fd-list__bold">App</span>le
                            </span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Nectarine</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Apricots</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Peache</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Plum</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Mango</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Strawberry</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Blueberry</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Watermelon</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Rockmelon</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Honeydew</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Apple</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

asFormItem.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
};

export const twoItemsAndItemsGrouping = () => `
<div style="height:500px">
    <div style="display:flex;justify-content:space-around">
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GRTGLK6" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Product">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-select__button" aria-controls="F4GRTGLK6" aria-expanded="true" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GRTGLK6">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--dropdown" role="listbox">
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <span class="fd-list__title">Product 1</span>
                        <span class="fd-list__secondary">1000 EUR</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                        <span class="fd-list__title">Product 2</span>
                        <span class="fd-list__secondary">750 EUR</span>
                    </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                        <span class="fd-list__title">Product 3</span>
                        <span class="fd-list__secondary">780 EUR</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                        <span class="fd-list__title">Product 4</span>
                        <span class="fd-list__secondary">40 EUR</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcXLK6" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcXLK6" aria-expanded="true" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcXLK6">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--dropdown" role="listbox">
                        <li class="fd-list__group-header">
                            Fruits
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">Apple</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                        <li class="fd-list__group-header">
                            Vegetables
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Tomato</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Onion</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Spinach</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Potato</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

twoItemsAndItemsGrouping.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The \`ComboBox\` component can be customized by adding additional information in additional columns as seen below.

In cases where the list items need to be categorized into groups, it is possible to add headers for each category.`
    }
};

export const matchPopoverBodySize = () => `
<div style="height:250px">
    <div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4HTFDLK6" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4HTFDLK6" aria-expanded="true" aria-haspopup="true">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HTFDLK6">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--dropdown" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected">
                    <span class="fd-list__title">Apple</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Banana</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Kiwi</span>
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
`;

matchPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: `
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`. 
This class has been added to all the \`Combobox\` examples above.
In the example you can see how the \`Combobox\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
};

export const disabledAndReadOnly = () => `
<div style="display:flex;justify-content:space-around">
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
            <div class="fd-input-group fd-input-group--control" aria-disabled="true" disabled>
                <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
            <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" aria-readonly="true" readonly>
        </div>
    </div>
</div>
`;

disabledAndReadOnly.parameters = {
    docs: {
        storyDescription: `
To disable a \`Combobox\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disable\` class or the \`aria-disabled="true"\` attribute.

To make the \`Combobox\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.`
    }
};

export const semantic = () => `
<div style="height:200px">
    <div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control is-success">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-select__button" 
                        aria-controls="F4GcEX34" aria-expanded="true" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcEX34">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
                <li class="fd-list__message fd-list__message--success">Success message</li>
                <li role="option" tabindex="0" class="fd-list__item is-selected">
                    <span class="fd-list__title">
                        <span class="fd-list__bold">App</span>le
                    </span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Banana</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Kiwi</span>
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
`;

semantic.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: `
For a complete list of states supported by the \`combobox\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of 
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into fd-input-group element. 
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.
`
    }
};

export const mobile = () => `
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example" style="height:600px">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Ingredients
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--cozy fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-input-group fd-input-group--control">
                     <input type="text" class="fd-input fd-input-group__input" value="Apple" id="" placeholder="Select Ingredient">
                     <span class="fd-input-group__addon fd-input-group__addon--button">
                         <button class="fd-input-group__button fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                     </span>
                 </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
              <ul class="fd-list fd-list--dropdown" role="listbox">
                 <li class="fd-list__group-header">
                     Fruits
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item is-selected">
                     <span class="fd-list__title">Apple</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Orange</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Banana</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Kiwi</span>
                 </li>
                 <li class="fd-list__group-header">
                     Vegetables
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Tomato</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Onion</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Spinach</span>
                 </li>
                 <li role="option" tabindex="0" class="fd-list__item">
                     <span class="fd-list__title">Potato</span>
                 </li>
             </ul>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-dialog__decisive-button">OK</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

mobile.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: `
For mobile devices, or tablets, combobox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.
`
    }
};
