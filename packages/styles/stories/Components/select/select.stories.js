import '../../../src/icon.scss';
import '../../../src/popover.scss';
import '../../../src/list.scss';
import '../../../src/form-label.scss';
import '../../../src/form-message.scss';
import '../../../src/select.scss';
import '../../../src/dialog.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/layout-grid.scss';
import '../../../src/form-item.scss';
export default {
    title: 'Components/Select',
    parameters: {
        description: `The select component is commonly used to enable users to select an item from a predefined list. It should be used when there are less than 12 items to choose from.

##Usage

**Use select if:**

- Users need to select one item exclusively from a short list of options (for example, fewer than 12 items).
- The values of the option list are of secondary importance and do not need to be displayed right away.

**Do not use select if:**

- Users need to choose between two options, such as _On_ or _Off_ and _Yes_ or _No_. In this case, consider using a **Switch** instead.
- Users need to pick one item from a very large set of options. In this case, consider using the **Combobox Input** instead.
- Your use case requires all available options to be displayed right away, without any user interaction. In this case, consider using **radio buttons or a radio button group** instead.

`
    }
};

export const Cozy = () => `<div style="height: 250px">
    <label class="fd-form-label" id="cozySelectLabel">Choose an option</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-select">
                <button
                    aria-expanded="true"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel cozySelectValue"
                    class="fd-select__control"
                    id="cozySelectCombobox"
                    onclick="
                        toggleElAttrs('h0C6A325', ['aria-hidden']);
                        toggleElAttrs('cozySelectCombobox', ['aria-expanded']);
                    "
                    value="List Item 1"
                    tabindex="0">
                    <span is="cozySelectValue" class="fd-select__text-content">List Item 1</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="h0C6A325">
            <ul
                aria-activedescendant="cozySelectCombobox-currentlyFocusedItem"
                aria-labelledby="cozySelectLabel"
                class="fd-list fd-list--dropdown"
                role="listbox">
                <li
                    id="cozySelectCombobox-currentlyFocusedItem"
                    class="fd-list__item"
                    role="option"
                    tabindex="0">
                <span class="fd-list__title">Select</span>
                </li>
                <li aria-selected="true"
                    class="fd-list__item is-selected"
                    role="option"
                    tabindex="0">
                <span class="fd-list__title">List item 1</span>
                </li>
                <li class="fd-list__item"
                    role="option"
                    tabindex="0">
                <span class="fd-list__title">List item 2</span>
            </li>
                <li class="fd-list__item"
                    role="option"
                    tabindex="0">
                <span class="fd-list__title">List item 3</span>
                </li>
                <li class="fd-list__item"
                    role="option"
                    tabindex="0">
                <span class="fd-list__title">List item 4</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

Cozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Select displays a predefined option and a button that triggers a dropdown menu to view more options (list items). By default, it is displayed in cozy mode.
        ` }
    }
};

export const Compact = () => `<div style="height: 200px">
    <label class="fd-form-label" id="compactSelectLabel">Choose an option</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-select fd-select--compact">
                <button
                    id="compactSelectCombobox"
                    onclick="
                        toggleElAttrs('h0C6A326', ['aria-hidden']);
                        toggleElAttrs('compactSelectCombobox', ['aria-expanded']);
                    "
                    class="fd-select__control"
                    tabindex="0"
                    aria-labelledby="compactSelectLabel compactSelectValue"
                    aria-expanded="true"
                    aria-haspopup="listbox">
                    <span id="compactSelectValue" class="fd-select__text-content">Select</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            aria-hidden="false" id="h0C6A326">
            <ul
                aria-activedescendant="compactSelectCombobox-currentlyFocusedItem"
                aria-labelledby="compactSelectLabel"
                class="fd-list fd-list--dropdown fd-list--compact"
                role="listbox">
                <li id="compactSelectCombobox-currentlyFocusedItem"
                    class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <span class="fd-list__title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 2</span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 3</span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 4</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

Compact.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
When in compact mode, select displays a dropdown menu that can contain long list items with text that wraps to the next line. The maximum width should be 37.5rem (600px) to avoid readability issues, unless the list contains more than 2 columns. If the list has 3 or more columns, the dropdown menu should not be limited to a max width. To display select in compact mode, add \`fd-select--compact\` to the main element.
        ` }
    }
};

export const MobileMode = () => `<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 id="mobileHeader" class="fd-dialog__title">
                        <span class="fd-select__text-content">Select Ingredient</span>
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Choose one item</div>
            <ul aria-labelledby="mobileHeader" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact fd-list--mobile" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
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
`;

MobileMode.storyName = 'Mobile';

MobileMode.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
Select is displayed in a full-screen dialog when viewed on mobile (and some tablet screens). The dialog displays a list where the first list item is pre-selected. To display select in mobile mode, wrap the select component in **Dialog** and **Bar** components.
`
        }
    }
};

export const SemanticStates = () => `<div style="height: 200px">
<div class="fd-container">
    <div class="fd-row">
        <div class="fd-col fd-col--3">
            <label class="fd-form-label" id="a4546C40">
                Choose an option
            </label><br>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select">
                        <button
                            aria-labelledby="a4546C40 a4546C40Value"
                            class="fd-select__control is-success"
                            tabindex="0"
                            id="semanticStatesSuccessSelectCombobox"
                            onclick="
                                toggleElAttrs('h07jjhYH', ['aria-hidden']);
                                toggleElAttrs('semanticStatesSuccessSelectCombobox', ['aria-expanded']);
                                toggleElAttrs('successFormMessage', ['aria-hidden']);
                            "
                            aria-expanded="true"
                            aria-haspopup="listbox">
                            <span id="a4546C40Value" class="fd-select__text-content">Success</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                    aria-hidden="false"
                    id="h07jjhYH">
                    <div aria-live="assertive" class="fd-list__message fd-list__message--success" role="alert">Success message</div>
                    <ul
                        aria-activedescendant="semanticStatesSuccessSelectCombobox-currentlyFocusedItem"
                        aria-labelledby="a4546C40"
                        class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact"
                        role="listbox">
                        <li
                            id="semanticStatesSuccessSelectCombobox-currentlyFocusedItem"
                            class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                            <span class="fd-list__title">
                                List Item 1
                            </span>
                            <span class="fd-list__secondary">A1</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                            <span class="fd-list__secondary">A2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                            <span class="fd-list__secondary">A3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                            <span class="fd-list__secondary">A4</span>
                        </li>
                    </ul>
                </div>
                <div id="successFormMessage" class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true">
                    <span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--3">
            <label class="fd-form-label" id="b4546C40">
                Choose an option
            </label>
            <br>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select">
                        <button
                            aria-labelledby="b4546C40 b4546C40Value"
                            class="fd-select__control is-error"
                            tabindex="0"
                            id="semanticStatesErrorSelectCombobox"
                            onclick="
                                toggleElAttrs('semanticStatesErrorSelectCombobox', ['aria-expanded']);
                                toggleElAttrs('h07j9978H', ['aria-hidden']);
                                toggleElAttrs('errorFormMessage', ['aria-hidden']);
                            "
                            aria-expanded="false"
                            aria-haspopup="listbox">
                            <span id="b4546C40Value" class="fd-select__text-content">Error</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                    aria-hidden="true"
                    id="h07j9978H">
                    <div aria-live="assertive" class="fd-list__message fd-list__message--error" role="alert">Error message</div>
                    <ul
                        aria-activedescendant="semanticStatesErrorSelectCombobox-currentlyFocusedItem"
                        tabIndex="-1"
                        aria-labelledby="b4546C40"
                        class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact"
                        role="listbox">
                        <li
                            id="semanticStatesErrorSelectCombobox-currentlyFocusedItem"
                            class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">
                                List Item 1
                            </span>
                            <span class="fd-list__secondary">A1</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                            <span class="fd-list__secondary">A2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                            <span class="fd-list__secondary">A3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                            <span class="fd-list__secondary">A4</span>
                        </li>
                    </ul>
                </div>
                <div id="errorFormMessage" class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
                    <span class="fd-form-message fd-form-message--static fd-form-message--error">Error message</span>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--3">
            <label class="fd-form-label" id="b45336C4">
                Choose an option
            </label>
            <br />
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select">
                        <button
                            aria-labelledby="b45336C4 b45336C4Value"
                            class="fd-select__control is-warning"
                            tabindex="0"
                            id="semanticStatesWarningSelectCombobox"
                            onclick="
                                toggleElAttrs('semanticStatesWarningSelectCombobox', ['aria-expanded']);
                                toggleElAttrs('h07j998hhH', ['aria-hidden']);
                                toggleElAttrs('warningFormMessage', ['aria-hidden']);
                            "
                            aria-expanded="true"
                            aria-haspopup="listbox">
                            <span is="b45336C4Value" class="fd-select__text-content">Warning</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                    aria-hidden="false"
                    id="h07j998hhH">
                    <div aria-live="assertive" class="fd-list__message fd-list__message--warning" role="alert">Warning message</div>
                    <ul
                        aria-activedescendant="semanticStatesWarningSelectCombobox-currentlyFocusedItem"
                        aria-labelledby="b45336C4"
                        class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact"
                        role="listbox">
                        <li
                            id="semanticStatesWarningSelectCombobox-currentlyFocusedItem"
                            class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                            <span class="fd-list__title">
                                List Item 1
                            </span>
                            <span class="fd-list__secondary">A1</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                            <span class="fd-list__secondary">A2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                            <span class="fd-list__secondary">A3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                            <span class="fd-list__secondary">A4</span>
                        </li>
                    </ul>
                </div>
                <div id="warningFormMessage" class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true">
                    <span class="fd-form-message fd-form-message--static fd-form-message--warning">Warning message</span>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--3">
            <label class="fd-form-label" id="h45336C4">
                Choose an option
            </label>
            <br />
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select">
                        <button
                            aria-labelledby="h45336C4 h45336C4Value"
                            class="fd-select__control is-information"
                            tabindex="0"
                            id="semanticStatesInformationSelectCombobox"
                            onclick="
                                toggleElAttrs('semanticStatesInformationSelectCombobox', ['aria-expanded']);
                                toggleElAttrs('hkhh998hhH', ['aria-hidden']);
                                toggleElAttrs('informationFormMessage', ['aria-hidden']);
                            "
                            aria-expanded="false"
                            aria-haspopup="listbox">
                            <span id="h45336C4Value" class="fd-select__text-content">Information</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                        </button>
                    </div>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                    aria-hidden="true"
                    id="hkhh998hhH">
                    <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Information message</div>
                    <ul
                        aria-activedescendant="semanticStatesInformationSelectCombobox-currentlyFocusedItem"
                        aria-labelledby="h45336C4"
                        class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact"
                        role="listbox">
                        <li
                            id="semanticStatesInformationSelectCombobox-currentlyFocusedItem"
                            class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">
                                List Item 1
                            </span>
                            <span class="fd-list__secondary">A1</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                            <span class="fd-list__secondary">A2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                            <span class="fd-list__secondary">A3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                            <span class="fd-list__secondary">A4</span>
                        </li>
                    </ul>
                </div>
                <div id="informationFormMessage" class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
                    <span class="fd-form-message fd-form-message--static fd-form-message--information">Information message</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;

SemanticStates.storyName = 'States';

SemanticStates.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Select can be displayed in semantic states to communicate *Success*, *Error*, *Warning* or *Information* to the users. They can be displayed as either messages within the dropdown list, or by itself as a static message. To display select in various semantic states, add the class (shown below) to the \`fd-select__control\` element.

Semantic state | Class
:------------------- | :-------
Success | \`is-success\`
Error | \`is-error\`
Warning | \`is-warning\`
Information | \`is-information\`


**Note:** To add text in the body of the component, include the text within the \`fd-list__message\` above the \`ul\` element.
        `
        }
    }
};

export const AsFormItem = () => `<div style="height:310px">
    <div class="fd-form-item">
    <label class="fd-form-label" id="formSelectLabel">Choose an option</label>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div class="fd-select">
                    <button
                        aria-labelledby="formSelectLabel formSelectValue"
                        aria-expanded="true"
                        aria-haspopup="listbox"
                        class="fd-select__control"
                        id="asFormItemSelectCombobox"
                        onclick="
                            toggleElAttrs('h0C6B625', ['aria-hidden']);
                            toggleElAttrs('asFormItemSelectCombobox', ['aria-expanded']);
                        "
                        tabindex="0">
                        <span is="formSelectValue" class="fd-select__text-content">Select</span>
                        <span class="fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </span>
                    </button>
                </div>
            </div>
            <div
                aria-hidden="false"
                class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                id="h0C6B625">
                <ul
                    aria-activedescendant="asFormItemSelectCombobox-currentlyFocusedItem"
                    aria-labelledby="formSelectLabel"
                    class="fd-list fd-list--dropdown"
                    role="listbox">
                    <li
                        id="asFormItemSelectCombobox-currentlyFocusedItem"
                        aria-selected="true"
                        class="fd-list__item is-selected"
                        role="option"
                        tabindex="0">
                    <span class="fd-list__title">
                        List item 1 List item 1 List item 1 List item 1 List item 1 List item 1
                        List item 1 List item 1 List item 1 List item 1 List item 1 List item 1
                        List item 1 List item 1 List item 1 List item 1
                    </span>
                    </li>
                    <li class="fd-list__item"
                        role="option"
                        tabindex="-1">
                    <span class="fd-list__title">List item 2</span>
                </li>
                    <li class="fd-list__item"
                        role="option"
                        tabindex="-1">
                    <span class="fd-list__title">List item 3</span>
                    </li>
                    <li class="fd-list__item"
                        role="option"
                        tabindex="-1">
                    <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

AsFormItem.storyName = 'Form item';

AsFormItem.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `
When displaying select within a form, you can apply the \`fd-form-item\` wrapper to ensure proper styling for the items. However, you are free to override this in your custom styles if necessary.
`
        }
    }
};

export const TwoColumn = () => `<div style="height: 200px">
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
    <label class="fd-form-label" id="twoColumn1Label">Choose an option</label><br />
      <div class="fd-popover">
        <div class="fd-popover__control">
          <div class="fd-select">
            <button
                aria-labelledby="twoColumn1Label twoColumn1Value"
                class="fd-select__control"
                tabindex="0"
                id="twoColumnSelectCombobox"
                onclick="
                    toggleElAttrs('h0C62325', ['aria-hidden']);
                    toggleElAttrs('twoColumnSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
              <span is="twoColumn1Value" class="fd-select__text-content">Select Product</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
          </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h0C62325">
          <ul
            aria-activedescendant="twoColumnSelectCombobox-currentlyFocusedItem"
            aria-labelledby="twoColumn1Label"
            class="fd-list fd-list--dropdown"
            role="listbox">
                <li
                    id="twoColumnSelectCombobox-currentlyFocusedItem"
                    class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                    <span class="fd-list__title">Product 1</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                    <span class="fd-list__title">Product 2</span>
                    <span class="fd-list__secondary">750 EUR</span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                    <span class="fd-list__title">Product 3</span>
                    <span class="fd-list__secondary">780 EUR</span>
                </li>
                <li class="fd-list__item" role="option" tabindex="-1">
                    <span class="fd-list__title">Product 4</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fd-col fd-col--6">
    <label class="fd-form-label" id="twoColumn2Label">Choose an option</label><br />
      <div class="fd-popover">
        <div class="fd-popover__control">
          <div class="fd-select fd-select--compact">
            <button
                aria-labelledby="twoColumn2Label twoColumn2Value"
                class="fd-select__control"
                tabindex="0"
                id="twoColumnSelectCombobox2"
                onclick="
                    toggleElAttrs('h07jj326', ['aria-hidden']);
                    toggleElAttrs('twoColumnSelectCombobox2', ['aria-expanded']);
                "
                aria-expanded="true" aria-haspopup="listbox">
                <span id="twoColumn2Value" class="fd-select__text-content">Select Product</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
          </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h07jj326">
          <ul
            aria-activedescendant="twoColumnSelectCombobox2-currentlyFocusedItem"
            aria-labelledby="twoColumn2Label"
            class="fd-list fd-list--dropdown fd-list--compact"
            role="listbox">
            <li
                id="twoColumnSelectCombobox2-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">Product 1</span>
              <span class="fd-list__secondary">1000 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">Product 2</span>
              <span class="fd-list__secondary">750 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">Product 3</span>
              <span class="fd-list__secondary">780 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">Product 4</span>
              <span class="fd-list__secondary">40 EUR</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

TwoColumn.storyName = '2-column';

TwoColumn.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Select can be displayed with two columns in the dropdown list view. The column width should be adjusted depending on the use case, but always with a default ration of 60% (first column) to 40% (second column). To display a second column, add the \`fd-list__secondary\` class to the list items under the title element.
        ` }
    }
};

export const TwoColumnsAndIcons = () => `<div style="height: 200px">
    <label class="fd-form-label" id="twoColumnsAndIconsLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <button
                class="fd-select__control"
                aria-labelledby="twoColumnsAndIconsLabel twoColumnsAndIconsValue"
                tabindex="0"
                id="twoColumnsAndIconSelectCombobox"
                onclick="
                    toggleElAttrs('h090G325', ['aria-hidden']);
                    toggleElAttrs('twoColumnsAndIconSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span is="twoColumnsAndIconsValue"class="fd-select__text-content">Select Product</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h090G325">
        <ul
            aria-activedescendant="twoColumnsAndIconSelectCombobox-currentlyFocusedItem"
            aria-labelledby="twoColumnsAndIconsLabel"
            class="fd-list fd-list--dropdown"
            role="listbox">
            <li
                id="twoColumnsAndIconSelectCombobox-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                <span class="fd-list__title">Marketing</span>
                <span class="fd-list__secondary">1000 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <i role="presentation" class="fd-list__icon sap-icon--save"></i>
                <span class="fd-list__title">Backups</span>
                <span class="fd-list__secondary">500 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <i role="presentation" class="fd-list__icon sap-icon--shipping-status"></i>
                <span class="fd-list__title">Shipping</span>
                <span class="fd-list__secondary">125 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <i role="presentation" class="fd-list__icon sap-icon--headset"></i>
                <span class="fd-list__title">Consulting</span>
                <span class="fd-list__secondary">200 EUR</span>
            </li>
        </ul>
    </div>
    </div>
</div>
`;

TwoColumnsAndIcons.storyName = '2-column with icons';

TwoColumnsAndIcons.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Not only can select be displayed with two columns, but also with icons. To display icons, add the \`fd-list__icon sap-icon--*\` to the list items before the title element. Find icons on the **Icon** page.
` }
    }
};

export const ItemGrouping = () => `<div style="height: 450px">
<label class="fd-form-label" id="itemGroupingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <button
                aria-labelledby="itemGroupingLabel itemGroupingValue"
                class="fd-select__control"
                tabindex="0"
                id="itemGroupingSelectCombobox"
                onclick="
                    toggleElAttrs('f34HLM5G', ['aria-hidden']);
                    toggleElAttrs('itemGroupingSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span id="itemGroupingValue" class="fd-select__text-content">Select Ingredient</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div
        id="f34HLM5G"
        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill"
        aria-hidden="false">
            <label class="fd-list__group-header" id="fruitsHeader">
                <span class="fd-list__title">Fruits</span>
            </label>
            <ul
                aria-activedescendant="itemGroupingSelectCombobox-currentlyFocusedItem"
                aria-labelledby="itemGroupingLabel fruitsHeader" class="fd-list fd-list--dropdown" role="listbox">
                <li
                    id="itemGroupingSelectCombobox-currentlyFocusedItem"
                    role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <span class="fd-list__title">Apple</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Orange</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Banana</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Kiwi</span>
                </li>
            </ul>
            <label class="fd-list__group-header" id="vegHeader">
                <span class="fd-list__title">Vegetables</span>
            </label>
            <ul aria-labelledby="itemGroupingLabel vegHeader" class="fd-list fd-list--dropdown" role="listbox">
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Tomato</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Onion</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Spinach</span>
                </li>
                <li role="option" tabindex="-1" class="fd-list__item">
                    <span class="fd-list__title">Potato</span>
                </li>
            </ul>
    </div>
    </div>
</div>
`;

ItemGrouping.storyName = 'Grouping';

ItemGrouping.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
Select can be displayed with headers that group the list items in the dropdown menu. To display group headers, add the \`fd-list__group-header\` label within the body element.
`
        }
    }
};

export const TextWrapping = () => `<div style="height: 300px">
    <label class="fd-form-label" id="textWrappingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <button
                aria-labelledby="textWrappingLabel textWrappingValue"
                class="fd-select__control"
                tabindex="0"
                id="textWrappingSelectCombobox"
                onclick="
                    toggleElAttrs('h0GFF2325', ['aria-hidden']);
                    toggleElAttrs('textWrappingSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span is="textWrappingValue" class="fd-select__text-content">Select</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h0GFF2325">
        <ul
            aria-activedescendant="textWrappingSelectCombobox-currentlyFocusedItem"
            aria-labelledby="textWrappingLabel"
            class="fd-list fd-list--dropdown"
            role="listbox">
            <li
                id="textWrappingSelectCombobox-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <span class="fd-list__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </span>
                <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 2</span>
                <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 3</span>
                <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 4</span>
                <span class="fd-list__secondary">A4</span>
            </li>
        </ul>
    </div>
    </div>
</div>
`;

TextWrapping.storyName = 'Text wrapping';

TextWrapping.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
The select component wraps text by default, and there is virtually no limit to the text length. However, it is recommended to keep the length to a minimum for readability. The second column will always remain center-aligned, despite the length of the list item.
        `
        }
    }
};

export const NoWrapping = () => `<div style="height: 200px">
    <label class="fd-form-label" id="noWrappingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select fd-select--compact">
            <button
                aria-labelledby="noWrappingLabel noWrappingValue"
                class="fd-select__control"
                tabindex="0"
                id="noWrappingSelectCombobox"
                onclick="
                    toggleElAttrs('h0GZH2325', ['aria-hidden']);
                    toggleElAttrs('noWrappingSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span id="noWrappingValue" class="fd-select__text-content">Select</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h0GZH2325">
        <ul
            aria-activedescendant="noWrappingSelectCombobox-currentlyFocusedItem"
            aria-labelledby="noWrappingLabel"
            class="fd-list fd-list--dropdown fd-list--compact"
            role="listbox">
            <li
                id="noWrappingSelectCombobox-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <span class="fd-list__title fd-list__title--no-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 2</span>
                <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 3</span>
                <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 4</span>
                <span class="fd-list__secondary">A4</span>
            </li>
        </ul>
    </div>
    </div>
</div>
`;

NoWrapping.storyName = 'No wrapping';

NoWrapping.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Although select wraps text by default, it is possible to prevent wrapping. To achieve this, add the \`--no-wrap\` modifier class to the \`fd-list__title\` and/or \`fd-list__secondary\` elements.
        `
        }
    }
};

export const MatchSelectPopoverBodySize = () => `<div style="height: 250px">
    <label class="fd-form-label" id="matchSelectPopoverBodySizeLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <button
                aria-labelledby="matchSelectPopoverBodySizeLabel matchSelectPopoverBodySizeValue"
                class="fd-select__control"
                tabindex="0"
                id="matchSelectPopoverBodySizeSelectCombobox"
                onclick="
                    toggleElAttrs('h0GTKE325', ['aria-hidden']);
                    toggleElAttrs('matchSelectPopoverBodySizeSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span id="matchSelectPopoverBodySizeValue" class="fd-select__text-content">Much Longer than Usual</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div
        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill"
        aria-hidden="false"
        id="h0GTKE325">
        <ul
            aria-activedescendant="matchSelectPopoverBodySizeSelectCombobox-currentlyFocusedItem"
            aria-labelledby="matchSelectPopoverBodySizeLabel"
            class="fd-list fd-list--dropdown"
            role="listbox">
            <li
                id="matchSelectPopoverBodySizeSelectCombobox-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <span class="fd-list__title">List item 1</span>
                <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 2</span>
                <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 3</span>
                <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 4</span>
                <span class="fd-list__secondary">A4</span>
            </li>
        </ul>
    </div>
    </div>
</div>
`;

MatchSelectPopoverBodySize.storyName = 'Popover style';

MatchSelectPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Select can be displayed as a popover, using all of its specifications. The default size for the popover body is often longer than the text length. The body can be adjusted to match the text length by adding the \`fd-popover__body—dropdown-fill\` class to \`fd-popover__body\`. See **Popover** for more details.
        `
        }
    }
};

export const LargerSelect = () => `<div style="height: 250px">
    <label class="fd-form-label" id="largeSelectPopoverSizeLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <button
                aria-labelledby="largeSelectPopoverSizeLabel"
                class="fd-select__control"
                tabindex="0"
                id="largeSelectPopoverBodySizeLabelCombobx"
                onclick="
                    toggleElAttrs('h0GTKE325', ['aria-hidden']);
                    toggleElAttrs('matchSelectPopoverBodySizeSelectCombobox', ['aria-expanded']);
                "
                aria-expanded="true"
                aria-haspopup="listbox">
                <span id="largeSelectPopoverSizeValue" class="fd-select__text-content">Larger Option Than Usual</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
    <div
        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
        aria-hidden="false"
        id="h0GGFE325">
        <ul
            aria-activedescendant="largeSelectPopoverBodySizeSelectCombobox-currentlyFocusedItem"
            aria-labelledby="largeSelectPopoverSizeLabel"
            class="fd-list fd-list--dropdown fd-list--large-dropdown"
            role="listbox">
            <li
                id="largeSelectPopoverBodySizeSelectCombobox-currentlyFocusedItem"
                class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                <span class="fd-list__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
                <span class="fd-list__title">List item 4</span>
            </li>
        </ul>
    </div>
    </div>
</div>
`;

LargerSelect.storyName = 'Large Select';

LargerSelect.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
There is a way to make larger select select body, To achieve it, add \`fd-list--large-dropdown\` to \`fd-list\` element.
        `
        }
    }
};

export const Disabled = () => `<label class="fd-form-label" id="disabledLabel">Choose an option</label><br />
<div class="fd-popover">
    <div class="fd-popover__control" aria-disabled="true">
        <div class="fd-select">
            <button
                aria-labelledby="disabledLabel disabledValue"
                class="fd-select__control"
                aria-disabled="true">
                <span id="disabledValue" class="fd-select__text-content">Mango</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </button>
        </div>
    </div>
</div>
`;

Disabled.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Select can be disabled to communicate to the user that the control cannot be selected. To disable select, add the \`aria-disabled="true"\` attribute to the \`fd-popover__control\` and the \`fd-select__control\` elements.
        `
        }
    }
};

export const Readonly = () => `<label class="fd-form-label" id="readonlyLabel">Chosen option</label><br />
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <span
                class="fd-select__control is-readonly"
                aria-labelledby="readonlyLabel readonlyValue"
                readonly
                aria-expanded="false"
                aria-haspopup="false"
                tabindex="0">
              <span id="readonlyValue" class="fd-select__text-content">Selected Item 2</span>
            </span>
        </div>
    </div>
</div>
`;

Readonly.storyName = 'Read-only';

Readonly.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Select can be displayed as read-only, meaning the value in the input field cannot be changed via typing. To display select as read-only, add the \`.is-readonly\` class to the \`fd-select__control\` element.
        `
        }
    }
};

export const Blank = () => `<div style="height: 250px">
<div class="fd-container">
  <div class="fd-row">
        <div class="fd-col fd-col--6">
            <label class="fd-form-label" id="h45336F3">
                Choose an option
            </label>
            <br>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select">
                        <button
                            id="acqw4q3r3d"
                            onclick="
                                toggleElAttrs('d2qrdad2', ['aria-hidden']);
                                toggleElAttrs('acqw4q3r3d', ['aria-expanded']);
                            "
                            class="fd-select__control"
                            tabindex="0"
                            aria-labelledby="h45336F3 h45336F3Value"
                            aria-expanded="true"
                            aria-haspopup="listbox">
                            <span id="h45336F3Value" class="fd-select__text-content"></span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                    aria-hidden="false"
                    id="d2qrdad2">
                    <ul
                        aria-activedescendant="blankSelectCombobox-currentlyFocusedItem"
                        aria-labelledby="h45336F3" class="fd-list fd-list--dropdown" role="listbox">
                        <li
                            id="blankSelectCombobox-currentlyFocusedItem"
                            class="fd-list__item is-selected" aria-label="None selected" aria-selected="true" role="option" tabIndex="0">
                            <span class="fd-list__title" />
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--6">
            <label class="fd-form-label" id="h45336F4">
                Choose an option
            </label>
            <br>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div class="fd-select fd-select--compact">
                        <button
                            id="oj89qyeuawbd"
                            onclick="
                                toggleElAttrs('oj89qyeuawbd', ['aria-expanded']);
                                toggleElAttrs('m8ae7ahrb', ['aria-hidden']);
                            "
                            class="fd-select__control"
                            tabindex="0"
                            aria-labelledby="h45336F4 h45336F4Value"
                            aria-expanded="true"
                            aria-haspopup="listbox">
                            <span id="h45336F4Value" class="fd-select__text-content"></span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="m8ae7ahrb">
                    <ul
                        aria-activedescendant="blankSelectComboboxComp-currentlyFocusedItem"
                        aria-labelledby="h45336F4" class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
                        <li
                            id="blankSelectComboboxComp-currentlyFocusedItem"
                            class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0" aria-label="item">
                            <span class="fd-list__title"/>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;

Blank.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
The select component can display a blank list item instead of a pre-selected list item, prompting the user to select the dropdown button to see more. To display a blank list item, simply enter a few spaces in the title of the list item.
        `
        }
    }
};
