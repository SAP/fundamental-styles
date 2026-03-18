/* empty css             *//* empty css                *//* empty css             *//* empty css                   *//* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                    *//* empty css                  */const _=`<div style="height:350px">
    <label class="fd-form-label" id="blankSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-labelledby="blankSelectLabel"
                    class="fd-select__control"
                    value=""
                    tabindex="0"
                    id="blankSelectCombobox"
                    onclick="
                        toggleElAttrs('blankSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('blankSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content"></span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="blankSelectPopoverBody">
            <ul
                id="blankList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="blankSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="blankListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title"></span>
                    <span class="fd-list__secondary"></span>
                </li>
                <li
                    id="blankListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="blankListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="blankListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="blankListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,m=`<div style="height:200px">
    <label class="fd-form-label" id="readonlySelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-readonly="true"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="readonlySelectLabel"
                    class="fd-select__control is-readonly"
                    value="Notebook Basic 2"
                    tabindex="0"
                    id="readonlySelectCombobox">
                    <span class="fd-select__text-content">Notebook Basic 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="true"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="readonlySelectPopoverBody">
            <ul
                id="readonlyList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="readonlySelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="readonlyListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 1</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li
                    id="readonlyListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="readonlyListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="readonlyListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="readonlyListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,v=`<div style="height:200px">
    <label class="fd-form-label" id="disabledSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-disabled="true"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="disabledSelectLabel"
                    class="fd-select__control is-disabled"
                    value="Notebook Basic 2"
                    tabindex="0"
                    id="disabledSelectCombobox"
                    onclick="
                        toggleElAttrs('disabledSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('disabledSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="true"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="disabledSelectPopoverBody">
            <ul
                id="disabledList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="disabledSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="disabledListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 1</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li
                    id="disabledListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="disabledListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="disabledListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="disabledListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,u=`<div style="height:350px">
    <label class="fd-form-label" id="largeSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="largeSelectLabel"
                    class="fd-select__control"
                    value="Notebook Basic Model A2"
                    tabindex="0"
                    id="largeSelectCombobox"
                    onclick="
                        toggleElAttrs('largeSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('largeSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic Model A2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="largeSelectPopoverBody">
            <ul
                id="largeList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="largeSelectLabel"
                class="fd-list fd-list--dropdown fd-list--large-dropdown"
                >
                <li
                    id="largeListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi minima excepturi dolores quidem quisquam, tenetur dicta illo cupiditate, pariatur autem ipsam perferendis reiciendis ut perspiciatis consectetur est ullam accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas veritatis repellendus doloremque odio, minus ut ducimus? Odio dolor reprehenderit architecto, praesentium at nam sit consectetur sint ut eum ab inventore.</span>
                </li>
                <li
                    id="largeListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A2</span>
                </li>
                <li
                    id="largeListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A3</span>
                </li>
                <li
                    id="largeListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A4</span>
                </li>
                <li
                    id="largeListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A5</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,x=`<div style="height:220px">
    <label class="fd-form-label" id="popSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="popSelectLabel"
                    class="fd-select__control"
                    value="Notebook Basic Model A2"
                    tabindex="0"
                    id="popSelectCombobox"
                    onclick="
                        toggleElAttrs('popSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('popSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic Model A2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown  fd-popover__body--dropdown-fill"
            id="popSelectPopoverBody">
            <ul
                id="popList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="popSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="popListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A1</span>
                </li>
                <li
                    id="popListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A2</span>
                </li>
                <li
                    id="popListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A3</span>
                </li>
                <li
                    id="popListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A4</span>
                </li>
                <li
                    id="popListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic Model A5</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,h=`<div style="height:320px">
    <label class="fd-form-label" id="noWrapSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="noWrapSelectLabel"
                    class="fd-select__control"
                    value="Notebook Basic 2"
                    tabindex="0"
                    id="noWrapSelectCombobox"
                    onclick="
                        toggleElAttrs('noWrapSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('noWrapSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="noWrapSelectPopoverBody">
            <ul
                id="noWrapList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="noWrapSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="noWrapListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title fd-list__title--no-wrap">Notebook Basic 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li
                    id="noWrapListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="noWrapListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="noWrapListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="noWrapListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,y=`<div style="height:320px">
    <label class="fd-form-label" id="wrapSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="wrapSelectLabel"
                    class="fd-select__control"
                    value="Notebook Basic 2"
                    tabindex="0"
                    id="wrapSelectCombobox"
                    onclick="
                        toggleElAttrs('wrapSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('wrapSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="wrapSelectPopoverBody">
            <ul
                id="wrapList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="wrapSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="wrapListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li
                    id="wrapListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="wrapListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="wrapListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="wrapListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
  `,g=`<div style="height: 550px">
<label class="fd-form-label" id="groupingLabel">Choose an option</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant=""
                    aria-labelledby="groupingLabel"
                    class="fd-select__control"
                    value="Orange"
                    tabindex="0"
                    id="groupSelectCombobox"
                    onclick="
                        toggleElAttrs('groupPopoverBody', ['aria-hidden']);
                        toggleElAttrs('groupSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Orange</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            id="groupPopoverBody"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            aria-hidden="false">
            <div role="listbox" tabindex="0" aria-labelledby="groupingLabel" aria-activedescendant="group1ListItem2">
                <ul id="group1List" role="group" aria-labelledby="fruitsHeader" class="fd-list fd-list--dropdown">
                    <li role="presentation" class="fd-list__group-header" id="fruitsHeader">
                        <span class="fd-list__title">Fruits</span>
                    </li>
                    <li id="group1ListItem1" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="1" class="fd-list__item">
                        <span class="fd-list__title">Apple</span>
                    </li>
                    <li id="group1ListItem2" role="option" tabindex="0" aria-selected="true" aria-setsize="10" aria-posinset="2" class="fd-list__item is-focus">
                        <span class="fd-list__title">Orange</span>
                    </li>
                    <li id="group1ListItem3" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="3" class="fd-list__item">
                        <span class="fd-list__title">Banana</span>
                    </li>
                    <li id="group1ListItem4" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="4" class="fd-list__item">
                        <span class="fd-list__title">Kiwi</span>
                    </li>
                    <li id="group1ListItem5" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="5" class="fd-list__item">
                        <span class="fd-list__title">Strawberry</span>
                    </li>
                </ul>
            
                <ul id="group2List" role="group" aria-labelledby="vegHeader" class="fd-list fd-list--dropdown">
                    <li role="presentation" class="fd-list__group-header" id="vegHeader">
                        <span class="fd-list__title">Vegetables</span>
                    </li>
                    <li id="group2ListItem1" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="6" class="fd-list__item">
                        <span class="fd-list__title">Pepper</span>
                    </li>
                    <li id="group2ListItem2" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="7" class="fd-list__item">
                        <span class="fd-list__title">Eggplant</span>
                    </li>
                    <li id="group2ListItem3" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="8" class="fd-list__item">
                        <span class="fd-list__title">Broccoli</span>
                    </li>
                    <li id="group2ListItem4" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="9" class="fd-list__item">
                        <span class="fd-list__title">Carrot</span>
                    </li>
                    <li id="group2ListItem5" role="option" tabindex="0" aria-selected="false" aria-setsize="10" aria-posinset="10" class="fd-list__item">
                        <span class="fd-list__title">Potato</span>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</div>
`,w=`<div style="height:220px">
    <label class="fd-form-label" id="twoColSelectLabel">Choose an option</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="formList"
                    aria-activedescendant="formListItem2"
                    aria-labelledby="twoColSelectLabel"
                    class="fd-select__control"
                    value="Notebook Basic 2"
                    tabindex="0"
                    id="twoColSelectCombobox"
                    onclick="
                        toggleElAttrs('twoColSelectPopoverBody', ['aria-hidden']);
                        toggleElAttrs('twoColSelectCombobox', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">Notebook Basic 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="twoColSelectPopoverBody">
            <ul
                id="twoColList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="twoColSelectLabel"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="twoColListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <i role="presentation" aria-hidden="true" class="fd-list__icon sap-icon--laptop"></i>
                    <span class="fd-list__title">Notebook Basic 1</span>
                    <span class="fd-list__secondary">1000 EUR</span>
                </li>
                <li
                    id="twoColListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <i role="presentation" aria-hidden="true" class="fd-list__icon sap-icon--save"></i>
                    <span class="fd-list__title">Notebook Basic 2</span>
                    <span class="fd-list__secondary">1400 EUR</span>
                </li>
                <li
                    id="twoColListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <i role="presentation" aria-hidden="true" class="fd-list__icon sap-icon--desktop-mobile"></i>
                    <span class="fd-list__title">Notebook Basic 3</span>
                    <span class="fd-list__secondary">700 EUR</span>
                </li>
                <li
                    id="twoColListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <i role="presentation" aria-hidden="true" class="fd-list__icon sap-icon--touch"></i>
                    <span class="fd-list__title">Notebook Basic 4</span>
                    <span class="fd-list__secondary">12000 EUR</span>
                </li>
                <li
                    id="twoColListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <i role="presentation" aria-hidden="true" class="fd-list__icon sap-icon--sap-box"></i>
                    <span class="fd-list__title">Notebook Basic 5</span>
                    <span class="fd-list__secondary">40 EUR</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`,S=`<div style="height:350px">
  <label class="fd-form-label" id="twoColSelectLabel">Choose an option</label>
  <div class="fd-popover">
      <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
          <div class="fd-select">
              <div
                  role="combobox"
                  aria-roledescription="Contains item list for selection"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-controls="formList"
                  aria-activedescendant="formListItem2"
                  aria-labelledby="twoColSelectLabel"
                  class="fd-select__control"
                  value="Notebook Basic 2"
                  tabindex="0"
                  id="twoColSelectCombobox"
                  onclick="
                      toggleElAttrs('twoColSelectPopoverBody', ['aria-hidden']);
                      toggleElAttrs('twoColSelectCombobox', ['aria-expanded']);
                  ">
                  <span class="fd-select__text-content">Notebook Basic 2</span>
                  
                  <span 
                      role="button"
                      tabindex="-1"
                      aria-label="Selection options"
                      title="Selection options"
                      class="fd-button fd-button--transparent fd-select__button">
                      <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                  </span>
              </div>
          </div>
      </div>
      <div
          aria-hidden="false"
          class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
          id="twoColSelectPopoverBody">
          <ul
              id="twoColList"
              role="listbox"
              aria-roledescription="Contains all available items"
              aria-labelledby="twoColSelectLabel"
              class="fd-list fd-list--dropdown"
              >
              <li
                  id="twoColListItem1"
                  role="option"
                  tabindex="0"
                  aria-selected="false"
                  aria-setsize="5"
                  aria-posinset="1"
                  class="fd-list__item">
                  <span class="fd-list__title">Notebook Basic 1</span>
                  <span class="fd-list__secondary">1000 EUR</span>
              </li>
              <li
                  id="twoColListItem2"
                  role="option"
                  tabindex="0"
                  aria-selected="true"
                  aria-setsize="5"
                  aria-posinset="2"
                  class="fd-list__item">
                  <span class="fd-list__title">Notebook Basic 2</span>
                  <span class="fd-list__secondary">1400 EUR</span>
              </li>
              <li
                  id="twoColListItem3"
                  role="option"
                  tabindex="0"
                  aria-selected="false"
                  aria-setsize="5"
                  aria-posinset="3"
                  class="fd-list__item">
                  <span class="fd-list__title">Notebook Basic 3</span>
                  <span class="fd-list__secondary">700 EUR</span>
              </li>
              <li
                  id="twoColListItem4"
                  role="option"
                  tabindex="0"
                  aria-selected="false"
                  aria-setsize="5"
                  aria-posinset="4"
                  class="fd-list__item">
                  <span class="fd-list__title">Notebook Basic 4</span>
                  <span class="fd-list__secondary">12000 EUR</span>
              </li>
              <li
                  id="twoColListItem5"
                  role="option"
                  tabindex="0"
                  aria-selected="false"
                  aria-setsize="5"
                  aria-posinset="5"
                  class="fd-list__item">
                  <span class="fd-list__title">Notebook Basic 5</span>
                  <span class="fd-list__secondary">40 EUR</span>
              </li>
          </ul>
      </div>
  </div>
</div>
`,L=`<div style="height:220px">
    <div class="fd-form-item">
    <label class="fd-form-label" id="formSelectLabel">Choose an option</label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                <div class="fd-select">
                    <div
                        role="combobox"
                        aria-roledescription="Contains item list for selection"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-controls="formList"
                        aria-activedescendant="formListItem2"
                        aria-labelledby="formSelectLabel"
                        class="fd-select__control"
                        value="Notebook Basic 2"
                        tabindex="0"
                        id="formSelectCombobox"
                        onclick="
                            toggleElAttrs('formSelectPopoverBody', ['aria-hidden']);
                            toggleElAttrs('formSelectCombobox', ['aria-expanded']);
                        ">
                        <span class="fd-select__text-content">Notebook Basic 2</span>
                        
                        <span 
                            role="button"
                            tabindex="-1"
                            aria-label="Selection options"
                            title="Selection options"
                            class="fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="false"
                class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                id="formSelectPopoverBody">
                <ul
                    id="formList"
                    role="listbox"
                    aria-roledescription="Contains all available items"
                    aria-labelledby="formSelectLabel"
                    class="fd-list fd-list--dropdown"
                    >
                    <li
                        id="formListItem1"
                        role="option"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="5"
                        aria-posinset="1"
                        class="fd-list__item">
                        <span class="fd-list__title">Notebook Basic 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolorum aspernatur. Nisi necessitatibus distinctio quidem quos numquam ipsum.</span>
                    </li>
                    <li
                        id="formListItem2"
                        role="option"
                        tabindex="0"
                        aria-selected="true"
                        aria-setsize="5"
                        aria-posinset="2"
                        class="fd-list__item">
                        <span class="fd-list__title">Notebook Basic 2</span>
                    </li>
                    <li
                        id="formListItem3"
                        role="option"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="5"
                        aria-posinset="3"
                        class="fd-list__item">
                        <span class="fd-list__title">Notebook Basic 3</span>
                    </li>
                    <li
                        id="formListItem4"
                        role="option"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="5"
                        aria-posinset="4"
                        class="fd-list__item">
                        <span class="fd-list__title">Notebook Basic 4</span>
                    </li>
                    <li
                        id="formListItem5"
                        role="option"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="5"
                        aria-posinset="5"
                        class="fd-list__item">
                        <span class="fd-list__title">Notebook Basic 5</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,C=`<div style="height: 150px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabel">
                    Succes, Normal State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="successLabel"
                                class="fd-select__control is-success is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="errorLabel"
                                class="fd-select__control is-error is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="warningLabel"
                                class="fd-select__control is-warning is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="infoLabel"
                                class="fd-select__control is-information is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                    Succes, Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="successLabelH"
                                class="fd-select__control is-success is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelH">
                    Error, Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="errorLabelH"
                                class="fd-select__control is-error is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelH">
                    Warning, Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="warningLabelH"
                                class="fd-select__control is-warning is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelH">
                    Information, Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="infoLabelH"
                                class="fd-select__control is-information is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                <label class="fd-form-label" id="successLabelHB">
                    Succes, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="successLabelHB"
                                class="fd-select__control is-success is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelHB">
                    Error, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="errorLabelHB"
                                class="fd-select__control is-error is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelHB">
                    Warning, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="warningLabelHB"
                                class="fd-select__control is-warning is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="infoLabelHB">
                    Information, Button Hover State, Placeholder
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="infoLabelHB"
                                class="fd-select__control is-information is-hover is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button is-hover">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="successLabelF"
                                class="fd-select__control is-success is-focus is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="errorLabelF"
                                class="fd-select__control is-error is-focus is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="warningLabelF"
                                class="fd-select__control is-warning is-focus is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
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
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="infoLabelF"
                                class="fd-select__control is-information is-focus is-placeholder"
                                value="Select an option"
                                tabindex="0">
                                <span class="fd-select__text-content">Select an option</span>
                                
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 350px">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="successLabelDropdown">
                    Select an option
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="true"
                                aria-controls="successList"
                                aria-activedescendant="successListItem2"
                                aria-labelledby="successLabelDropdown"
                                class="fd-select__control is-success"
                                tabindex="0"
                                id="successSelectCombobox"
                                onclick="
                                    toggleElAttrs('successPopoverDropdown', ['aria-hidden']);
                                    toggleElAttrs('successSelectCombobox', ['aria-expanded']);
                                    toggleElAttrs('successFormMessage', ['aria-hidden']);
                                ">
                                <span class="fd-select__text-content">Notebook Basic 2</span>
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        aria-hidden="false"
                        id="successPopoverDropdown">
                        <div class="fd-list__message fd-list__message--success" id="successNote">success message</div>
                        <ul
                            id="successList"
                            role="listbox"
                            aria-roledescription="Contains all available items"
                            aria-labelledby="successLabelDropdown successNote"
                            class="fd-list fd-list--has-message fd-list--dropdown"
                            >
                            <li
                                id="successListItem1"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="1"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 1</span>
                            </li>
                            <li
                                id="successListItem2"
                                role="option"
                                tabindex="0"
                                aria-selected="true"
                                aria-setsize="5"
                                aria-posinset="2"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 2</span>
                            </li>
                            <li
                                id="successListItem3"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="3"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 3</span>
                            </li>
                            <li
                                id="successListItem4"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="4"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 4</span>
                            </li>
                            <li
                                id="successListItem5"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="5"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 5</span>
                            </li>
                        </ul>
                    </div>
                    <div id="successFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--success">success message</span>
                    </div>
                </div>
            </div>

            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="errorLabelDropdown">
                    Select an option
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="true"
                                aria-controls="errorList"
                                aria-activedescendant="errorListItem2"
                                aria-labelledby="errorLabelDropdown"
                                class="fd-select__control is-error"
                                tabindex="0"
                                id="errorSelectCombobox"
                                onclick="
                                    toggleElAttrs('errorPopoverDropdown', ['aria-hidden']);
                                    toggleElAttrs('errorSelectCombobox', ['aria-expanded']);
                                    toggleElAttrs('errorFormMessage', ['aria-hidden']);
                                ">
                                <span class="fd-select__text-content">Notebook Basic 2</span>
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        aria-hidden="false"
                        id="errorPopoverDropdown">
                        <div class="fd-list__message fd-list__message--error" id="errorNote">error message</div>
                        <ul
                            id="errorList"
                            role="listbox"
                            aria-roledescription="Contains all available items"
                            aria-labelledby="errorLabelDropdown errorNote"
                            class="fd-list fd-list--has-message fd-list--dropdown"
                            >
                            <li
                                id="errorListItem1"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="1"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 1</span>
                            </li>
                            <li
                                id="errorListItem2"
                                role="option"
                                tabindex="0"
                                aria-selected="true"
                                aria-setsize="5"
                                aria-posinset="2"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 2</span>
                            </li>
                            <li
                                id="errorListItem3"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="3"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 3</span>
                            </li>
                            <li
                                id="errorListItem4"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="4"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 4</span>
                            </li>
                            <li
                                id="errorListItem5"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="5"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 5</span>
                            </li>
                        </ul>
                    </div>
                    <div id="errorFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--error">error message</span>
                    </div>
                </div>
            </div>

            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="warningLabelDropdown">
                    Select an option
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="true"
                                aria-controls="warningList"
                                aria-activedescendant="warningListItem2"
                                aria-labelledby="warningLabelDropdown"
                                class="fd-select__control is-warning"
                                tabindex="0"
                                id="warningSelectCombobox"
                                onclick="
                                    toggleElAttrs('warningPopoverDropdown', ['aria-hidden']);
                                    toggleElAttrs('warningSelectCombobox', ['aria-expanded']);
                                    toggleElAttrs('warningFormMessage', ['aria-hidden']);
                                ">
                                <span class="fd-select__text-content">Notebook Basic 2</span>
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        aria-hidden="false"
                        id="warningPopoverDropdown">
                        <div class="fd-list__message fd-list__message--warning" id="warningNote">warning message</div>
                        <ul
                            id="warningList"
                            role="listbox"
                            aria-roledescription="Contains all available items"
                            aria-labelledby="warningLabelDropdown warningNote"
                            class="fd-list fd-list--has-message fd-list--dropdown"
                            >
                            <li
                                id="warningListItem1"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="1"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 1</span>
                            </li>
                            <li
                                id="warningListItem2"
                                role="option"
                                tabindex="0"
                                aria-selected="true"
                                aria-setsize="5"
                                aria-posinset="2"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 2</span>
                            </li>
                            <li
                                id="warningListItem3"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="3"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 3</span>
                            </li>
                            <li
                                id="warningListItem4"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="4"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 4</span>
                            </li>
                            <li
                                id="warningListItem5"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="5"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 5</span>
                            </li>
                        </ul>
                    </div>
                    <div id="warningFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--warning">warning message</span>
                    </div>
                </div>
            </div>

            <div class="fd-col fd-col--3">
                <label class="fd-form-label" id="informationLabelDropdown">
                    Select an option
                </label><br>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <div
                                role="combobox"
                                aria-roledescription="Contains item list for selection"
                                aria-haspopup="listbox"
                                aria-expanded="true"
                                aria-controls="informationList"
                                aria-activedescendant="informationListItem2"
                                aria-labelledby="informationLabelDropdown"
                                class="fd-select__control is-information"
                                tabindex="0"
                                id="informationSelectCombobox"
                                onclick="
                                    toggleElAttrs('informationPopoverDropdown', ['aria-hidden']);
                                    toggleElAttrs('informationSelectCombobox', ['aria-expanded']);
                                    toggleElAttrs('informationFormMessage', ['aria-hidden']);
                                ">
                                <span class="fd-select__text-content">Notebook Basic 2</span>
                                <span 
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Selection options"
                                    title="Selection options"
                                    class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        aria-hidden="false"
                        id="informationPopoverDropdown">
                        <div class="fd-list__message fd-list__message--information" id="informationNote">information message</div>
                        <ul
                            id="informationList"
                            role="listbox"
                            aria-roledescription="Contains all available items"
                            aria-labelledby="informationLabelDropdown informationNote"
                            class="fd-list fd-list--has-message fd-list--dropdown"
                            >
                            <li
                                id="informationListItem1"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="1"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 1</span>
                            </li>
                            <li
                                id="informationListItem2"
                                role="option"
                                tabindex="0"
                                aria-selected="true"
                                aria-setsize="5"
                                aria-posinset="2"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 2</span>
                            </li>
                            <li
                                id="informationListItem3"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="3"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 3</span>
                            </li>
                            <li
                                id="informationListItem4"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="4"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 4</span>
                            </li>
                            <li
                                id="informationListItem5"
                                role="option"
                                tabindex="0"
                                aria-selected="false"
                                aria-setsize="5"
                                aria-posinset="5"
                                class="fd-list__item">
                                <span class="fd-list__title">Notebook Basic 5</span>
                            </li>
                        </ul>
                    </div>
                    <div id="informationFormMessage" class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true">
                        <span class="fd-form-message fd-form-message--information">information message</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

`,B=`<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example"  aria-labelledby="mobileHeader mobileNote">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-toolbar fd-toolbar--clear">
            <span class="fd-select__text-content" id="mobileHeader">Select Ingredient</span>
            <span class="fd-toolbar__spacer"></span>
            <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="close">
                <i class="sap-icon--decline"></i>
            </button>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-list__message fd-list__message--information" role="note" id="mobileNote">Choose one item</div>
            <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--mobile" role="listbox" aria-roledescription="Contains all available items">
                <li
                    id="twoColListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">Apple</span>
                </li>
                <li
                    id="twoColListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="8"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">Orange</span>
                </li>
                <li
                    id="twoColListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">Banana</span>
                </li>
                <li
                    id="twoColListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">Kiwi</span>
                </li>
                <li
                    id="twoColListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">Tomato</span>
                </li>
                <li
                    id="twoColListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="6"
                    class="fd-list__item">
                    <span class="fd-list__title">Onion</span>
                </li>
                <li
                    id="twoColListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="7"
                    class="fd-list__item">
                    <span class="fd-list__title">Spinach</span>
                </li>
                <li
                    id="twoColListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="8"
                    aria-posinset="8"
                    class="fd-list__item">
                    <span class="fd-list__title">Potato</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`,I=`<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabel">Regular, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-labelledby="cozySelectLabel"
                    class="fd-select__control is-placeholder"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelHover">Hover on Input Field, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-labelledby="cozySelectLabelHover"
                    class="fd-select__control is-placeholder is-hover"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelHoverBtn">Hover on Button, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-labelledby="cozySelectLabelHoverBtn"
                    class="fd-select__control is-placeholder is-hover"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button is-hover">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelFocus">Focus, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-labelledby="cozySelectLabelFocus"
                    class="fd-select__control is-placeholder is-focus"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelExpanded">Expanded, Placeholder text</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="cozySelectLabelExpanded"
                    class="fd-select__control is-placeholder is-expanded"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelDisabled">In disabled state placeholder should not be visible</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-disabled="true"
                    aria-labelledby="cozySelectLabelDisabled"
                    class="fd-select__control is-placeholder is-disabled"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 100px">
    <label class="fd-form-label" id="cozySelectLabelReadonly">In read-only state placeholder should not be visible</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-readonly="true"
                    aria-labelledby="cozySelectLabelReadonly"
                    class="fd-select__control is-placeholder is-readonly"
                    value="Select an option"
                    tabindex="0">
                    <span class="fd-select__text-content">Select an option</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 300px">
    <label class="fd-form-label" id="cozySelectLabelActiveSelected">Active, Selected Item</label><br />
    <div class="fd-popover">
        <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
            <div class="fd-select">
                <div
                    role="combobox"
                    aria-roledescription="Contains item list for selection"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-controls="cozyList"
                    aria-activedescendant="cozyListItem2"
                    aria-labelledby="cozySelectLabelActiveSelected"
                    class="fd-select__control"
                    value="List Item 1"
                    tabindex="0"
                    id="cozySelectActiveSelected"
                    onclick="
                        toggleElAttrs('h0C6A325', ['aria-hidden']);
                        toggleElAttrs('cozySelectActiveSelected', ['aria-expanded']);
                    ">
                    <span class="fd-select__text-content">List item 2</span>
                    
                    <span 
                        role="button"
                        tabindex="-1"
                        aria-label="Selection options"
                        title="Selection options"
                        class="fd-button fd-button--transparent fd-select__button">
                        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
            id="h0C6A325"
        >
            <ul
                id="cozyList"
                role="listbox"
                aria-roledescription="Contains all available items"
                aria-labelledby="cozySelectLabelActiveSelected"
                class="fd-list fd-list--dropdown"
                >
                <li
                    id="cozyListItem1"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="1"
                    class="fd-list__item">
                    <span class="fd-list__title">List item 1</span>
                </li>
                <li
                    id="cozyListItem2"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    aria-setsize="5"
                    aria-posinset="2"
                    class="fd-list__item">
                    <span class="fd-list__title">List item 2</span>
                </li>
                <li
                    id="cozyListItem3"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="3"
                    class="fd-list__item">
                    <span class="fd-list__title">List item 3</span>
                </li>
                <li
                    id="cozyListItem4"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="4"
                    class="fd-list__item">
                    <span class="fd-list__title">List item 4</span>
                </li>
                <li
                    id="cozyListItem5"
                    role="option"
                    tabindex="0"
                    aria-selected="false"
                    aria-setsize="5"
                    aria-posinset="5"
                    class="fd-list__item">
                    <span class="fd-list__title">List item 5</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`,T={title:"Components/Select",parameters:{description:`The select component is commonly used to enable users to select an item from a predefined list. It should be used when there are less than 12 items to choose from.

##Usage

**Use select if:**

- Users need to select one item exclusively from a short list of options (for example, fewer than 12 items).
- The values of the option list are of secondary importance and do not need to be displayed right away.

**Do not use select if:**

- Users need to choose between two options, such as _On_ or _Off_ and _Yes_ or _No_. In this case, consider using a **Switch** instead.
- Users need to pick one item from a very large set of options. In this case, consider using the **Combobox Input** instead.
- Your use case requires all available options to be displayed right away, without any user interaction. In this case, consider using **radio buttons or a radio button group** instead.

`}},p=()=>I;p.parameters={docs:{description:{story:`
Select displays a predefined option and a button that triggers a dropdown menu to view more options (list items). By default, it is displayed in cozy mode.
        `}}};const n=()=>B;n.storyName="Mobile";n.parameters={docs:{description:{story:`
Select is displayed in a full-screen dialog when viewed on mobile (and some tablet screens). The dialog displays a list where the first list item is pre-selected. To display select in mobile mode, wrap the select component in **Dialog** and **Bar** components.
`}}};const e=()=>C;e.storyName="States";e.parameters={docs:{description:{story:"\nSelect can be displayed in semantic states to communicate *Success*, *Error*, *Warning* or *Information* to the users. They can be displayed as either messages within the dropdown list, or by itself as a static message. To display select in various semantic states, add the class (shown below) to the `fd-select__control` element.\n\n| Semantic state | Class\n:------------------- | :-------\nSuccess | `is-success`\nError | `is-error`\nWarning | `is-warning`\nInformation | `is-information`\n\n\n**Note:** To add text in the body of the component, include the text within the `fd-list__message` above the `ul` element.\n        "}}};const a=()=>L;a.storyName="Form item";a.parameters={docs:{description:{story:"\nWhen displaying select within a form, you can apply the `fd-form-item` wrapper to ensure proper styling for the items. However, you are free to override this in your custom styles if necessary.\n"}}};const s=()=>S;s.storyName="2-column";s.parameters={docs:{description:{story:"\nSelect can be displayed with two columns in the dropdown list view. The column width should be adjusted depending on the use case, but always with a default ration of 60% (first column) to 40% (second column). To display a second column, add the `fd-list__secondary` class to the list items under the title element.\n        "}}};const i=()=>w;i.storyName="2-column with icons";i.parameters={docs:{description:{story:"\nNot only can select be displayed with two columns, but also with icons. To display icons, add the `fd-list__icon sap-icon--*` to the list items before the title element. Find icons on the **Icon** page.\n"}}};const t=()=>g;t.storyName="Grouping";t.parameters={docs:{description:{story:"\nSelect can be displayed with headers that group the list items in the dropdown menu. To display group headers, add the `fd-list__group-header` label within the body element.\n"}}};const o=()=>y;o.storyName="Text wrapping";o.parameters={docs:{description:{story:`
The select component wraps text by default, and there is virtually no limit to the text length. However, it is recommended to keep the length to a minimum for readability. The second column will always remain center-aligned, despite the length of the list item.
        `}}};const l=()=>h;l.storyName="No wrapping";l.parameters={docs:{description:{story:"\nAlthough select wraps text by default, it is possible to prevent wrapping. To achieve this, add the `--no-wrap` modifier class to the `fd-list__title` and/or `fd-list__secondary` elements.\n        "}}};const d=()=>x;d.storyName="Popover style";d.parameters={docs:{description:{story:"\nSelect can be displayed as a popover, using all of its specifications. The default size for the popover body is often longer than the text length. The body can be adjusted to match the text length by adding the `fd-popover__body—dropdown-fill` class to `fd-popover__body`. See **Popover** for more details.\n        "}}};const r=()=>u;r.storyName="Large Select";r.parameters={docs:{description:{story:"\nThere is a way to make larger select select body, To achieve it, add `fd-list--large-dropdown` to `fd-list` element.\n        "}}};const b=()=>v;b.parameters={docs:{description:{story:'\nSelect can be disabled to communicate to the user that the control cannot be selected. To disable select, add the `aria-disabled="true"` attribute to the `fd-popover__control` and the `fd-select__control` elements.\n        '}}};const c=()=>m;c.storyName="Read-only";c.parameters={docs:{description:{story:"\nSelect can be displayed as read-only, meaning the value in the input field cannot be changed via typing. To display select as read-only, add the `.is-readonly` class to the `fd-select__control` element.\n        "}}};const f=()=>_;f.parameters={docs:{description:{story:`
The select component can display a blank list item instead of a pre-selected list item, prompting the user to select the dropdown button to see more. To display a blank list item, simply enter a few spaces in the title of the list item.
        `}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => cozyExampleHtml",...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => mobileModeExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => semanticStatesExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => asFormItemExampleHtml",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => twoColumnExampleHtml",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => twoColumnsAndIconsExampleHtml",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => itemGroupingExampleHtml",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => textWrappingExampleHtml",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => noWrappingExampleHtml",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => matchSelectPopoverBodySizeExampleHtml",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => largerSelectExampleHtml",...r.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => readonlyExampleHtml",...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => blankExampleHtml",...f.parameters?.docs?.source}}};const D=["Default","MobileMode","SemanticStates","AsFormItem","TwoColumn","TwoColumnsAndIcons","ItemGrouping","TextWrapping","NoWrapping","MatchSelectPopoverBodySize","LargerSelect","Disabled","Readonly","Blank"];export{a as AsFormItem,f as Blank,p as Default,b as Disabled,t as ItemGrouping,r as LargerSelect,d as MatchSelectPopoverBodySize,n as MobileMode,l as NoWrapping,c as Readonly,e as SemanticStates,o as TextWrapping,s as TwoColumn,i as TwoColumnsAndIcons,D as __namedExportsOrder,T as default};
