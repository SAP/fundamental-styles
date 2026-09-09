/* empty css             *//* empty css                *//* empty css             *//* empty css                   *//* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                    *//* empty css                  *//* empty css                     */const n=`<div style="height: 400px">
    <h4>normal</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
        <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <h4>hover</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-hover">
        <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <h4>focus</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">
        <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <h4>typed text</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input" value="Typing">
        <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested is-focus" aria-label="Search" aria-disabled="false">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>
</div>
`,u={title:"BTP/Search Field",parameters:{description:"The Search Field component is intended to be used in BTP Tool Header. ",tags:["btp"]}},e=()=>n;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => defaultExampleHtml",...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,u as default};
