import '../../../src/radio.scss';
import '../../../src/title.scss';
import '../../../src/form-label.scss';
import '../../../src/popover.scss';
import '../../../src/icon.scss';
import '../../../src/input-group.scss';
import '../../../src/input.scss';
import '../../../src/list.scss';
import '../../../src/button.scss';
import '../../../src/dialog.scss';
import '../../../src/bar.scss';
import '../../../src/form-item.scss';
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
        tags: ['f3', 'a11y', 'theme']
    }
};

export const CozyAndCompact = () => `<div style="display:flex;justify-content:space-around;height:700px">
    <div style="display:flex;flex-direction:column">
        <label for="cozyCombobox" class="fd-form-label">Combobox Cozy Mode</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="true" aria-haspopup="true"
                id="msac9uc"
                onclick="
                    toggleElAttrs('F4GcX348', ['aria-hidden']);
                    toggleElAttrs('amodjsaidn', ['aria-expanded']);
                    toggleElAttrs('msac9uc', ['aria-expanded']);
                ">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="cozyCombobox" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            id="amodjsaidn"
                            aria-label="show/hide fruit options"
                            aria-controls="F4GcX348"
                            aria-expanded="true" aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348">
                <div class="fd-popover__wrapper docs-max-height">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
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
                            <span class="fd-list__title">Honeydew</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div style="display:flex;flex-direction:column">
        <label for="compactCombobox" class="fd-form-label">Combobox Compact Mode</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX34" aria-expanded="true" aria-haspopup="true"
                id="emi2qudh"
                onclick="
                    toggleElAttrs('F4GcX34', ['aria-hidden']);
                    toggleElAttrs('nda8sd7abd', ['aria-expanded']);
                    toggleElAttrs('emi2qudh', ['aria-expanded']);
                ">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="compactCombobox" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button
                            id="nda8sd7abd"
                            aria-label="show/hide fruit options"
                            aria-controls="F4GcX34"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-select__button">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX34">
                <div class="fd-popover__wrapper">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
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

CozyAndCompact.parameters = {
    docs: {
        iframeHeight: 700
    }
};

export const AsFormItem = () => `<div style="height:700px">
    <div class="fd-form-item">
        <label for="comboboxAsFormItem" class="fd-form-label">Combobox as a form item</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="amsfiaufuaskhjd" aria-expanded="true" aria-haspopup="true"
                id="ansioda7dh">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="comboboxAsFormItem" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            id="ansid87arfgj"
                            aria-label="show/hide fruit options"
                            aria-controls="amsfiaufuaskhjd"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-down-arrow"></i></button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="amsfiaufuaskhjd">
                <div class="fd-popover__wrapper docs-max-height">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
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
                            <span class="fd-list__title">Honeydew</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

AsFormItem.parameters = {
    docs: {
        iframeHeight: 700,
        description: {
            story: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
        }
    }
};

export const TwoItemsAndItemsGrouping = () => `<div style="display:flex;justify-content:space-around;height:500px">
    <div style="display:flex;flex-direction:column">
        <label for="twoItems" class="fd-form-label">Product prices</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GRTGLK6" aria-expanded="true" aria-haspopup="true"
                id="124qqdf34"
                onclick="
                    toggleElAttrs('F4GRTGLK6', ['aria-hidden']);
                    toggleElAttrs('124qqdf34', ['aria-expanded']);
                    toggleElAttrs('f32rafsef', ['aria-expanded']);
                ">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="twoItems" placeholder="Select Product">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            id="f32rafsef"
                            aria-label="show/hide fruit options"
                            aria-controls="F4GRTGLK6"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GRTGLK6">
                <div class="fd-popover__wrapper">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
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
    </div>
    <div style="display:flex;flex-direction:column">
        <label for="groupedItems" class="fd-form-label">Fruits and Vegetables</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcXLK6" aria-expanded="true" aria-haspopup="true"
                id="mad09sudka"
                onclick="
                    toggleElAttrs('F4GcXLK6', ['aria-hidden']);
                    toggleElAttrs('mad09sudka', ['aria-expanded']);
                    toggleElAttrs('masioda8sdh', ['aria-expanded']);
                ">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="groupedItems" placeholder="Select Ingredient">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            id="masioda8sdh"
                            aria-label="show/hide fruit options"
                            aria-controls="F4GcXLK6"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcXLK6">
                <div class="fd-popover__wrapper">
                    <label id="fruitListHeader" class="fd-list__group-header">
                        <span class="fd-list__title">Fruits</span>
                    </label>
                    <ul aria-labelledby="fruitListHeader" class="fd-list fd-list--dropdown" role="listbox">
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
                    <label id="vegListHeader" class="fd-list__group-header">
                        <span class="fd-list__title">Vegetables</span>
                    </label>
                    <ul aria-labelledby="vegListHeader" class="fd-list fd-list--dropdown" role="listbox">
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

TwoItemsAndItemsGrouping.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
The \`ComboBox\` component can be customized by adding additional information in additional columns as seen below.

In cases where the list items need to be categorized into groups, it is possible to add headers for each category.`
        }
    }
};

export const MatchPopoverBodySize = () => `<div style="display:flex;height:250px">
    <div style="display:flex;flex-direction:column">
        <label for="matchPopoverBodySize" class="fd-form-label">Match Popover Body Size</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4HTFDLK6" aria-expanded="true" aria-haspopup="true"
                id="anmsdic0a8dh"
                onclick="
                    toggleElAttrs('F4HTFDLK6', ['aria-hidden']);
                    toggleElAttrs('anmsdic0a8dh', ['aria-expanded']);
                    toggleElAttrs('samdoia8fhg', ['aria-expanded']);
                ">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input-group__input" id="matchPopoverBodySize" placeholder="Select Ingredient">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            id="samdoia8fhg"
                            aria-label="show/hide fruit options"
                            aria-controls="F4HTFDLK6"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HTFDLK6">
                <div class="fd-popover__wrapper">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
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
</div>
`;

MatchPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: `
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.
This class has been added to all the \`Combobox\` examples above.
In the example you can see how the \`Combobox\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
        }
    }
};

export const DisabledAndReadOnly = () => `<div style="display:flex;justify-content:space-around">
    <div style="display:flex;flex-direction:column">
        <label for="disabledCombobox" class="fd-form-label">Disabled</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
                <div class="fd-input-group fd-input-group--control" aria-disabled="true" disabled>
                    <input id="disabledCombobox" type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button aria-label="show/hide options button" class="fd-input-group__button fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div style="display:flex;flex-direction:column">
        <label for="readonlyCombobox" class="fd-form-label">Readonly</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
                <input type="text" class="fd-input fd-input-group__input" id="readonlyCombobox" value="Orange" aria-readonly="true" readonly>
            </div>
        </div>
    </div>
</div>
`;

DisabledAndReadOnly.parameters = {
    docs: {
        description: {
            story: `
To disable a \`Combobox\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disable\` class or the \`aria-disabled="true"\` attribute.

To make the \`Combobox\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.`
        }
    }
};

export const Semantic = () => `<div style="height:200px">
    <label for="semanticCombobox" class="fd-form-label">Semantic Combobox</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcEX34" aria-expanded="true" aria-haspopup="true"
            id="mfa98agh4ih3"
            onclick="
                toggleElAttrs('F4GcEX34', ['aria-hidden']);
                toggleElAttrs('mfa98agh4ih3', ['aria-expanded']);
                toggleElAttrs('mpzjf2q09ugd', ['aria-expanded']);
            ">
            <div class="fd-input-group fd-input-group--control is-success">
                <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="semanticCombobox" placeholder="Select Fruit">
                <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                    <button id="mpzjf2q09ugd" aria-label="show/hide fruit options"
                        class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-select__button"
                    aria-controls="F4GcEX34" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcEX34">
            <div class="fd-popover__wrapper">
                <span class="fd-list__message fd-list__message--success">Success message</span>
                <ul aria-label="fruit options" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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

Semantic.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: `
For a complete list of states supported by the \`combobox\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into fd-input-group element.
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.
`
        }
    }
};

export const Mobile = () => `<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active"
id="select-dialog-example" style="height:600px">
    <section role="dialog" aria-labelledby="mobileDialogHeader" class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 id="mobileDialogHeader" class="fd-title fd-title--h5">
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
                     <input aria-labelledby="mobileDialogHeader"
                        type="text" class="fd-input fd-input-group__input" value="Apple" id="mobileCombobox" placeholder="Select Ingredient">
                     <span class="fd-input-group__addon fd-input-group__addon--button">
                         <button aria-label="hide/show options" class="fd-input-group__button fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                     </span>
                 </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <label id="fruitsMobileHeader" class="fd-list__group-header">
                <span class="fd-list__title">Fruits</span>
            </label>
            <ul aria-labelledby="fruitsMobileHeader" class="fd-list fd-list--dropdown fd-list--mobile" role="listbox">
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
            <label id="vegMobileHeader" class="fd-list__group-header">
                <span class="fd-list__title">Vegetables</span>
            </label>
            <ul aria-labelledby="vegMobileHeader" class="fd-list fd-list--dropdown fd-list--mobile" role="listbox">
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
    </section>
</div>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 600,
        description: {
            story: `
For mobile devices, or tablets, combobox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.
`
        }
    }
};
