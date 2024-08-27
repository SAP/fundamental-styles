var h=Object.defineProperty,f=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(a,e,n)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,i=(a,e)=>{for(var n in e||(e={}))u.call(e,n)&&d(a,n,e[n]);if(r)for(var n of r(e))b.call(e,n)&&d(a,n,e[n]);return a},t=(a,e)=>f(a,p(e));/* empty css             *//* empty css                *//* empty css             *//* empty css                   *//* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                    *//* empty css                  *//* empty css                     */const _=`<div style="height: 400px">
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
`,B={title:"BTP/Search Field",parameters:{description:"The Search Field component is intended to be used in BTP Tool Header. ",tags:["btp"]}},s=()=>_;var l,c,o;s.parameters=t(i({},s.parameters),{docs:t(i({},(l=s.parameters)==null?void 0:l.docs),{source:i({originalSource:"() => defaultExampleHtml"},(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source)})});const D=["Default"];export{s as Default,D as __namedExportsOrder,B as default};
