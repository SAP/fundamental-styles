var re=Object.defineProperty,ce=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var y=(t,s,a)=>s in t?re(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,e=(t,s)=>{for(var a in s||(s={}))be.call(s,a)&&y(t,a,s[a]);if(h)for(var a of h(s))fe.call(s,a)&&y(t,a,s[a]);return t},n=(t,s)=>ce(t,pe(s));/* empty css             *//* empty css                *//* empty css             *//* empty css                   *//* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                    *//* empty css                  */const _e=`<div style="height: 250px">
<div class="fd-container">
  <div class="fd-row">
        <div class="fd-col fd-col--6">
            <label class="fd-form-label" id="h45336F3">
                Choose an option
            </label>
            <br>
            <div class="fd-popover">
                <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
                <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                    <div class="fd-select">
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
                        aria-labelledby="h45336F4" class="fd-list fd-list--dropdown" role="listbox">
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
`,ue=`<label class="fd-form-label" id="readonlyLabel">Chosen option</label><br />
<div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,me=`<label class="fd-form-label" id="disabledLabel">Choose an option</label><br />
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
`,ve=`<div style="height: 300px">
    <label class="fd-form-label" id="largeSelectPopoverSizeLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,xe=`<div style="height: 250px">
    <label class="fd-form-label" id="matchSelectPopoverBodySizeLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,he=`<div style="height: 200px">
    <label class="fd-form-label" id="noWrappingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
        <div class="fd-select">
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
            class="fd-list fd-list--dropdown"
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
`,ye=`<div style="height: 240px">
    <label class="fd-form-label" id="textWrappingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,ge=`<div style="height: 450px">
<label class="fd-form-label" id="itemGroupingLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,Se=`<div style="height: 200px">
    <label class="fd-form-label" id="twoColumnsAndIconsLabel">Choose an option</label><br />
    <div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,we=`<div style="height: 220px">
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
    <label class="fd-form-label" id="twoColumn1Label">Choose an option</label><br />
      <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
          <div class="fd-select">
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
            class="fd-list fd-list--dropdown"
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
`,Le=`<div style="height:220px">
    <div class="fd-form-item">
    <label class="fd-form-label" id="formSelectLabel">Choose an option</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
`,Ce=`<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabel">
                    Succes, Normal State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="successLabel"
                                class="fd-select__control is-success"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabel">
                    Error, Normal State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="errorLabel"
                                class="fd-select__control is-error"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabel">
                    Warning, Normal State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="warningLabel"
                                class="fd-select__control is-warning"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabel">
                    Information, Normal State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="infoLabel"
                                class="fd-select__control is-information"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabelH">
                    Succes, Input Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="successLabelH"
                                class="fd-select__control is-success is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelH">
                    Error, Input Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="errorLabelH"
                                class="fd-select__control is-error is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelH">
                    Warning, Input Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="warningLabelH"
                                class="fd-select__control is-warning is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelH">
                    Information, Input Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="infoLabelH"
                                class="fd-select__control is-information is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabelBH">
                    Succes, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="successLabelBH"
                                class="fd-select__control is-success is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelBH">
                    Error, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="errorLabelBH"
                                class="fd-select__control is-error is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelBH">
                    Warning, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="warningLabelBH"
                                class="fd-select__control is-warning is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelBH">
                    Information, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="infoLabelBH"
                                class="fd-select__control is-information is-hover"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabelF">
                    Succes, Focus State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="successLabelF"
                                class="fd-select__control is-success is-focus"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelF">
                    Error, Focus State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="errorLabelF"
                                class="fd-select__control is-error is-focus"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelF">
                    Warning, Focus State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="warningLabelF"
                                class="fd-select__control is-warning is-focus"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelF">
                    Information, Focus State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="infoLabelF"
                                class="fd-select__control is-information is-focus"
                                tabindex="0"
                                aria-expanded="false"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabelA">
                    Succes, Expanded State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="successLabelA"
                                class="fd-select__control is-success"
                                tabindex="0"
                                aria-expanded="true"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelA">
                    Error, Expanded State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="errorLabelA"
                                class="fd-select__control is-error"
                                tabindex="0"
                                aria-expanded="true"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelA">
                    Warning, Expanded State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="warningLabelA"
                                class="fd-select__control is-warning"
                                tabindex="0"
                                aria-expanded="true"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelA">
                    Information, Expanded State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <button
                                aria-labelledby="infoLabelA"
                                class="fd-select__control is-information"
                                tabindex="0"
                                aria-expanded="true"
                                aria-selected="false"
                                aria-haspopup="listbox">
                                <span class="fd-select__text-content">Required Selection</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 250px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="a4546C40">
                    Choose an option
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
                                aria-selected="false"
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
                            class="fd-list fd-list--has-message fd-list--dropdown"
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
                    <div id="successFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--success">Success message</span>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="b4546C40">
                    Choose an option
                </label>
                <br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
                                aria-selected="false"
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
                            class="fd-list fd-list--has-message fd-list--dropdown"
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
                    <div id="errorFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false">
                        <span class="fd-form-message fd-form-message--error">Error message</span>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="b45336C4">
                    Choose an option
                </label>
                <br />
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
                                aria-selected="false"
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
                            class="fd-list fd-list--has-message fd-list--dropdown"
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
                    <div id="warningFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--warning">Warning message</span>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="h45336C4">
                    Choose an option
                </label>
                <br />
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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
                                aria-selected="false"
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
                            class="fd-list fd-list--has-message fd-list--dropdown"
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
                    <div id="informationFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false">
                        <span class="fd-form-message fd-form-message--information">Information message</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`,Ee=`<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-toolbar fd-toolbar--clear">
            <span class="fd-select__text-content">Select Ingredient</span>
            <span class="fd-toolbar__spacer"></span>
            <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="close">
                <i class="sap-icon--decline"></i>
            </button>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Choose one item</div>
            <ul aria-labelledby="mobileHeader" class="fd-list fd-list--has-message fd-list--dropdown fd-list--mobile" role="listbox">
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
`,Ie=`<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Regular, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Hover on Input Field, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-hover"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Hover on Button, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-hover"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button is-hover">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Focus, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-focus"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Expanded, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-expanded"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">In disabled state placeholder should not be visible</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-disabled"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">In read-only state placeholder should not be visible</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="false"
                    aria-selected="false"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-readonly"
                    value="Select an option"
                    tabindex="0">
                    <span id="cozySelectValue" class="fd-select__text-content">Select an option</span>
                    <span class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>



<div style="height: 300px">
    <label class="fd-form-label" id="cozySelectLabel">Active, Selected Item</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
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

<div style="height: 300px">
    <label class="fd-form-label" id="cozySelectLabel">Active and Focus, Selected Item</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <button
                    aria-expanded="true"
                    aria-haspopup="listbox"
                    aria-labelledby="cozySelectLabel cozySelectValue"
                    class="fd-select__control is-focus"
                    id="defaultSelectCombobox"
                    onclick="
                        toggleElAttrs('h0C6A325b', ['aria-hidden']);
                        toggleElAttrs('defaultSelectCombobox', ['aria-expanded']);
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
            id="h0C6A325b">
            <ul
                aria-activedescendant="defaultSelectCombobox-currentlyFocusedItem"
                aria-labelledby="cozySelectLabel"
                class="fd-list fd-list--dropdown"
                role="listbox">
                <li
                    id="defaultSelectCombobox-currentlyFocusedItem"
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


`,Ge={title:"Components/Select",parameters:{description:`The select component is commonly used to enable users to select an item from a predefined list. It should be used when there are less than 12 items to choose from.

##Usage

**Use select if:**

- Users need to select one item exclusively from a short list of options (for example, fewer than 12 items).
- The values of the option list are of secondary importance and do not need to be displayed right away.

**Do not use select if:**

- Users need to choose between two options, such as _On_ or _Off_ and _Yes_ or _No_. In this case, consider using a **Switch** instead.
- Users need to pick one item from a very large set of options. In this case, consider using the **Combobox Input** instead.
- Your use case requires all available options to be displayed right away, without any user interaction. In this case, consider using **radio buttons or a radio button group** instead.

`}},m=()=>Ie;m.parameters={docs:{description:{story:`
Select displays a predefined option and a button that triggers a dropdown menu to view more options (list items). By default, it is displayed in cozy mode.
        `}}};const l=()=>Ee;l.storyName="Mobile";l.parameters={docs:{description:{story:`
Select is displayed in a full-screen dialog when viewed on mobile (and some tablet screens). The dialog displays a list where the first list item is pre-selected. To display select in mobile mode, wrap the select component in **Dialog** and **Bar** components.
`}}};const o=()=>Ce;o.storyName="States";o.parameters={docs:{description:{story:"\nSelect can be displayed in semantic states to communicate *Success*, *Error*, *Warning* or *Information* to the users. They can be displayed as either messages within the dropdown list, or by itself as a static message. To display select in various semantic states, add the class (shown below) to the `fd-select__control` element.\n\nSemantic state | Class\n:------------------- | :-------\nSuccess | `is-success`\nError | `is-error`\nWarning | `is-warning`\nInformation | `is-information`\n\n\n**Note:** To add text in the body of the component, include the text within the `fd-list__message` above the `ul` element.\n        "}}};const i=()=>Le;i.storyName="Form item";i.parameters={docs:{description:{story:"\nWhen displaying select within a form, you can apply the `fd-form-item` wrapper to ensure proper styling for the items. However, you are free to override this in your custom styles if necessary.\n"}}};const d=()=>we;d.storyName="2-column";d.parameters={docs:{description:{story:"\nSelect can be displayed with two columns in the dropdown list view. The column width should be adjusted depending on the use case, but always with a default ration of 60% (first column) to 40% (second column). To display a second column, add the `fd-list__secondary` class to the list items under the title element.\n        "}}};const r=()=>Se;r.storyName="2-column with icons";r.parameters={docs:{description:{story:"\nNot only can select be displayed with two columns, but also with icons. To display icons, add the `fd-list__icon sap-icon--*` to the list items before the title element. Find icons on the **Icon** page.\n"}}};const c=()=>ge;c.storyName="Grouping";c.parameters={docs:{description:{story:"\nSelect can be displayed with headers that group the list items in the dropdown menu. To display group headers, add the `fd-list__group-header` label within the body element.\n"}}};const p=()=>ye;p.storyName="Text wrapping";p.parameters={docs:{description:{story:`
The select component wraps text by default, and there is virtually no limit to the text length. However, it is recommended to keep the length to a minimum for readability. The second column will always remain center-aligned, despite the length of the list item.
        `}}};const b=()=>he;b.storyName="No wrapping";b.parameters={docs:{description:{story:"\nAlthough select wraps text by default, it is possible to prevent wrapping. To achieve this, add the `--no-wrap` modifier class to the `fd-list__title` and/or `fd-list__secondary` elements.\n        "}}};const f=()=>xe;f.storyName="Popover style";f.parameters={docs:{description:{story:"\nSelect can be displayed as a popover, using all of its specifications. The default size for the popover body is often longer than the text length. The body can be adjusted to match the text length by adding the `fd-popover__body—dropdown-fill` class to `fd-popover__body`. See **Popover** for more details.\n        "}}};const _=()=>ve;_.storyName="Large Select";_.parameters={docs:{description:{story:"\nThere is a way to make larger select select body, To achieve it, add `fd-list--large-dropdown` to `fd-list` element.\n        "}}};const v=()=>me;v.parameters={docs:{description:{story:'\nSelect can be disabled to communicate to the user that the control cannot be selected. To disable select, add the `aria-disabled="true"` attribute to the `fd-popover__control` and the `fd-select__control` elements.\n        '}}};const u=()=>ue;u.storyName="Read-only";u.parameters={docs:{description:{story:"\nSelect can be displayed as read-only, meaning the value in the input field cannot be changed via typing. To display select as read-only, add the `.is-readonly` class to the `fd-select__control` element.\n        "}}};const x=()=>_e;x.parameters={docs:{description:{story:`
The select component can display a blank list item instead of a pre-selected list item, prompting the user to select the dropdown button to see more. To display a blank list item, simply enter a few spaces in the title of the list item.
        `}}};var g,S,w;m.parameters=n(e({},m.parameters),{docs:n(e({},(g=m.parameters)==null?void 0:g.docs),{source:e({originalSource:"() => cozyExampleHtml"},(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source)})});var L,C,E;l.parameters=n(e({},l.parameters),{docs:n(e({},(L=l.parameters)==null?void 0:L.docs),{source:e({originalSource:"() => mobileModeExampleHtml"},(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});var I,A,F;o.parameters=n(e({},o.parameters),{docs:n(e({},(I=o.parameters)==null?void 0:I.docs),{source:e({originalSource:"() => semanticStatesExampleHtml"},(F=(A=o.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var H,P,z;i.parameters=n(e({},i.parameters),{docs:n(e({},(H=i.parameters)==null?void 0:H.docs),{source:e({originalSource:"() => asFormItemExampleHtml"},(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source)})});var V,q,W;d.parameters=n(e({},d.parameters),{docs:n(e({},(V=d.parameters)==null?void 0:V.docs),{source:e({originalSource:"() => twoColumnExampleHtml"},(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source)})});var B,R,k;r.parameters=n(e({},r.parameters),{docs:n(e({},(B=r.parameters)==null?void 0:B.docs),{source:e({originalSource:"() => twoColumnsAndIconsExampleHtml"},(k=(R=r.parameters)==null?void 0:R.docs)==null?void 0:k.source)})});var T,G,M;c.parameters=n(e({},c.parameters),{docs:n(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:"() => itemGroupingExampleHtml"},(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var N,U,j;p.parameters=n(e({},p.parameters),{docs:n(e({},(N=p.parameters)==null?void 0:N.docs),{source:e({originalSource:"() => textWrappingExampleHtml"},(j=(U=p.parameters)==null?void 0:U.docs)==null?void 0:j.source)})});var O,D,K;b.parameters=n(e({},b.parameters),{docs:n(e({},(O=b.parameters)==null?void 0:O.docs),{source:e({originalSource:"() => noWrappingExampleHtml"},(K=(D=b.parameters)==null?void 0:D.docs)==null?void 0:K.source)})});var Y,Z,J;f.parameters=n(e({},f.parameters),{docs:n(e({},(Y=f.parameters)==null?void 0:Y.docs),{source:e({originalSource:"() => matchSelectPopoverBodySizeExampleHtml"},(J=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:J.source)})});var Q,X,$;_.parameters=n(e({},_.parameters),{docs:n(e({},(Q=_.parameters)==null?void 0:Q.docs),{source:e({originalSource:"() => largerSelectExampleHtml"},($=(X=_.parameters)==null?void 0:X.docs)==null?void 0:$.source)})});var ee,ne,se;v.parameters=n(e({},v.parameters),{docs:n(e({},(ee=v.parameters)==null?void 0:ee.docs),{source:e({originalSource:"() => disabledExampleHtml"},(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source)})});var ae,te,le;u.parameters=n(e({},u.parameters),{docs:n(e({},(ae=u.parameters)==null?void 0:ae.docs),{source:e({originalSource:"() => readonlyExampleHtml"},(le=(te=u.parameters)==null?void 0:te.docs)==null?void 0:le.source)})});var oe,ie,de;x.parameters=n(e({},x.parameters),{docs:n(e({},(oe=x.parameters)==null?void 0:oe.docs),{source:e({originalSource:"() => blankExampleHtml"},(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source)})});const Me=["Default","MobileMode","SemanticStates","AsFormItem","TwoColumn","TwoColumnsAndIcons","ItemGrouping","TextWrapping","NoWrapping","MatchSelectPopoverBodySize","LargerSelect","Disabled","Readonly","Blank"];export{i as AsFormItem,x as Blank,m as Default,v as Disabled,c as ItemGrouping,_ as LargerSelect,f as MatchSelectPopoverBodySize,l as MobileMode,b as NoWrapping,u as Readonly,o as SemanticStates,p as TextWrapping,d as TwoColumn,r as TwoColumnsAndIcons,Me as __namedExportsOrder,Ge as default};
