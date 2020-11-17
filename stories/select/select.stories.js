export default {
    title: 'Components/Select',
    parameters: {
        description: `The **Select** component is commonly used to enable users to select an item from a predefined list.
      It should be used when there are less than 12 items to choose from. 
      For lists that require more than 12 options, the Combobox Input should be used.`,
        components: ['icon', 'popover', 'list', 'form-label', 'form-message', 'select', 'dialog', 'bar', 'button', 'icon', 'layout-grid']
    }
};

export const cozy = () => `<div style="height: 250px">
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

cozy.parameters = {
    docs: { iframeHeight: 300 }
};

export const compact = () => `<div style="height: 200px">
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
                    Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
                    Very long text, Very long text, Very long text
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

compact.parameters = {
    docs: { iframeHeight: 300 }
};

export const asFormItem = () => `<div style="height:310px">
    <div class="fd-form-item">
    <label class="fd-form-label" id="formSelectLabel">Choose an option</label><br />
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

asFormItem.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
};

/** The **Select** component can be customized by adding additional information in additional columns. */

export const twoColumn = () => `<div style="height: 200px">
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

twoColumn.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const twoColumnsAndIcons = () => `<div style="height: 200px">
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

twoColumnsAndIcons.parameters = {
    docs: { iframeHeight: 300 }
};

/** In cases where the list items need to be categorized into groups, it is possible to add headers for each category. */

export const itemGrouping = () => `<div style="height: 450px">
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
                Fruits
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
                Vegetables
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

itemGrouping.parameters = {
    docs: {
        iframeHeight: 400
    }
};

/** In the **Select** component, the text is wrapped by default. In order to prevent the text from wrapping,
* the `--no-wrap` modifier can be added to the `fd-list__title`, or `fd-list__secondary` elements. */

export const textWrapping = () => `<div style="height: 300px">
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
                <span class="fd-list__title">Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text </span>
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

textWrapping.parameters = {
    docs: {
        iframeHeight: 400
    }
};

export const noWrapping = () => `<div style="height: 200px">
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
                    Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text 
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

noWrapping.parameters = {
    docs: { iframeHeight: 300 }
};

/** The default size for the popover body is often longer than the text length. The length can be adjusted to match the text
 * length by adding the `fd-popover__body--dropdown-fill` class to `fd-popover__body`. */

export const matchSelectPopoverBodySize = () => `<div style="height: 250px">
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


matchSelectPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 300
    }
};

/** To disable a **Select** component, the `aria-disabled="true"` attribute needs to be added to the
* `fd-popover__control` and the `fd-select__control` elements. */

export const disabled = () => `<label class="fd-form-label" id="disabledLabel">Choose an option</label><br />
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

/** To make the **Select** component read-only, the `.is-readonly` class needs to be added to the `fd-select__control` element.  */

export const readonly = () => `<label class="fd-form-label" id="readonlyLabel">Chosen option</label><br />
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

/**
 * The semantic mode can be used to modify the  select component by adding one of the
 * `is-error` | `is-success` | `is-warning` | `is-information` classes into the `fd-select__control` element.
 * To add text in the body of the component, simply include your text in the `fd-list__message`
 * above the `ul` element.
 */

export const semanticStates = () => `<div style="height: 200px">
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

semanticStates.parameters = {
    docs: {
        iframeHeight: 400
    }
};

/** For mobile devices, or tablets, select component should be displayed in fullscreen mode. It can be achieved by wrapping
select component in **Dialog** and **Bar** components.  */

export const mobileMode = () => `<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
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
            <ul aria-labelledby="mobileHeader" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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

mobileMode.parameters = {
    docs: {
        iframeHeight: 400
    }
};

export const blank = () => `<div style="height: 250px">
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
                            class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                            <span class="fd-list__title" />
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

blank.parameters = {
    docs: {
        iframeHeight: 400
    }
};
