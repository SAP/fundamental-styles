/* empty css                    *//* empty css               *//* empty css             *//* empty css             *//* empty css                *//* empty css                     *//* empty css               *//* empty css                   *//* empty css                    *//* empty css             *//* empty css              */const e=`<div style="height: 200px;">
    <div class="fd-horizontal-navigation" style="max-width: 500px;">
        <div class="fd-tool-header fd-tool-header--sm" style="max-width: 500px;">
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                </div>
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="more items">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="img" aria-label="John Doe"></span>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm" style="max-width: 500px;">
            <ul role="tablist" class="fd-icon-tab-bar__header" style="overflow: visible;">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home"></i>
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab11" tabindex="0">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--family-care"></i>
                            <span class="fd-icon-tab-bar__tag">Section 2</span>
                        </div>
                    </a>
                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <div class="fd-icon-tab-bar__button-container">
                                <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');" aria-label="open menu button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA4">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--monitor-payments"></i>
                            <span class="fd-icon-tab-bar__tag">Section 3</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 26rem;">
                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <button class="fd-icon-tab-bar__overflow" aria-controls="popoverA5" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA5');" aria-label="open menu button">
                            <span class="fd-icon-tab-bar__overflow-text">More</span>
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA5">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <i class="sap-icon--batch-payments" role="presentation"></i>
                                        <span class="fd-list__title">Section 4</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <i class="sap-icon--credit-card" role="presentation"></i>
                                        <span class="fd-list__title">Section 5</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
`,o=`<div style="height: 200px;">
    <div class="fd-horizontal-navigation">
        <div class="fd-tool-header">
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                </div>
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
                <div class="fd-tool-header__element">
                    <label class="fd-form-label fd-tool-header__label" for="input-1">Second Title</label>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="search">
                        <i class="sap-icon--search"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="task">
                        <i class="sap-icon--circle-task"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="notification">
                        <i class="sap-icon--bell"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="user menu control">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header" style="overflow: visible;">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home"></i>
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab8" aria-controls="popoverA3" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA3');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <i class="sap-icon--internet-browser" role="presentation"></i>
                                <span class="fd-icon-tab-bar__tag">Section 2</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                            </div>
                            </a>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA3">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home-share"></i>
                            <span class="fd-icon-tab-bar__tag">Section 3</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
`,s=`<div style="height: 200px;">
    <div class="fd-horizontal-navigation" style="max-width: 500px;">
        <div class="fd-tool-header fd-tool-header--sm" style="max-width: 500px;">
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                         srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                         alt="SAP">
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-button--menu fd-tool-header__button"
                            aria-label="mega menu">
                        <i class="sap-icon--megamenu"></i>
                    </button>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="more items">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                          style="background-image: url('/assets/images/avatars/1.svg')" role="img"
                          aria-label="John Doe"></span>
                </div>
            </div>
        </div>
        <div
            class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm"
            style="max-width: 500px;">
            <ul role="tablist" class="fd-icon-tab-bar__header" style="overflow: visible;">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                        <span class="fd-icon-tab-bar__tag">Section 1</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                        <span class="fd-icon-tab-bar__tag">Section 2</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                        <span class="fd-icon-tab-bar__tag">Section 3</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow"
                    style="left: 26rem;">
                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <button class="fd-icon-tab-bar__overflow" aria-controls="popoverA2" aria-expanded="false"
                                    aria-haspopup="true" onclick="onPopoverClick('popoverA2');"
                                    aria-label="open menu button">
                                <span class="fd-icon-tab-bar__overflow-text">More</span>
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </button>
                        </div>
                        <div
                            class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"
                            aria-hidden="false" id="popoverA2">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list"
                                role="list">
                                <li tabindex="-1" role="listitem" aria-level="1"
                                    class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Section 4</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1"
                                    class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Section 5</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
`,l=`<div style="height: 200px;">
    <div class="fd-horizontal-navigation">
        <div class="fd-tool-header">
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                </div>
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
                <div class="fd-tool-header__element">
                    <label class="fd-form-label fd-tool-header__label" for="input-1">Second Title</label>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="search">
                        <i class="sap-icon--search"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="task">
                        <i class="sap-icon--circle-task"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="notification">
                        <i class="sap-icon--bell"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="user menu control">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header" style="overflow: visible;">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                    </a>

                    <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA1');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link">
                            <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link">
                            <span class="fd-list__title">Subsection 2</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
`;const g={title:"Patterns/Horizontal Navigation",parameters:{description:`
The Horizontal Navigation is an optional layout to the Vertical Navigation. One application should use the Horizontal Tabs Navigation alternatively to the Side Navigation, depending on its requirements, mainly related to the complexity of navigable items.
Preferably the Horizontal Navigation is suitable for a maximum of seven to nine primary items.

It displays the navigation items respectively in horizontal mode. The Tabs are displayed underneath the Tool Header, enabling the navigation into another page and context within the same Application while the Tool Header and the Tabs remain static.

The Horizontal Navigation Tabs are built with the IconTabBar component with two additional modifier classes \`.fd-icon-tab-bar--navigation\` and \`.fd-icon-tab-bar--navigation-horizontal\`.

The Horizontal Navigation is always integrated with the Tool Header. It should not be displayed standalone.

Both components, Tool Header and IconTabBar, are wrapped in an element with \`.fd-horizontal-navigation \` class.

Differently than the Side Navigation, the Horizontal Navigation does not embed a separate Utility Section (bottom aligned in the Side Navigation). Those items, mainly legal information and useful links, are recommended to be placed in the User Menu within the Tool Header.

Another aspect differentiating the Horizontal Navigation layout is that it has only one display mode. It has no condensed or off-canvas mode, which remain specific states of the Side Navigation.

        `,tags:["btp","theme","development"]}},t=()=>l;t.storyName="Horizontal Navigation Text Only";const i=()=>s;i.storyName="Horizontal Navigation Text Only Phone View";const a=()=>o;a.storyName="Horizontal Navigation Text And Icon";a.parameters={docs:{description:{story:"Icon Tab Bars with Single Click Areas"}}};const n=()=>e;n.storyName="Horizontal Navigation Text And Icon Phone View";n.parameters={docs:{description:{story:"Icon Tab Bars with Two Click Areas"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => textOnlyExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => textOnlyPhoneExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => textAndIconExampleHtml",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => textAndIconPhoneExampleHtml",...n.parameters?.docs?.source}}};const x=["TextOnly","TextOnlyPhone","TextAndIcon","TextAndIconPhone"];export{a as TextAndIcon,n as TextAndIconPhone,t as TextOnly,i as TextOnlyPhone,x as __namedExportsOrder,g as default};
