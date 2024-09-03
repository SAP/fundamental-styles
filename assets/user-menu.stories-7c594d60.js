var b=Object.defineProperty,x=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var d=(e,a,n)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))y.call(a,n)&&d(e,n,a[n]);if(l)for(var n of l(a))T.call(a,n)&&d(e,n,a[n]);return e},t=(e,a)=>x(e,k(a));/* empty css               *//* empty css               *//* empty css             *//* empty css                *//* empty css               *//* empty css                   *//* empty css                  */const P=`<div style="height: 40rem; display: flex; justify-content: flex-end;">
    <div class="is-cozy">
        <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    aria-controls="popoverA1TH"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Avatar"
                    style="background-image: url('assets/images/avatars/3.svg');"
                    onclick="onPopoverClick('popoverA1TH');"
                    role="button"
                    tabindex="0"></span>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA1TH">
                <div class="fd-user-menu__body fd-popover__wrapper">
                    <div class="fd-user-menu__header">
                        <span
                            class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                            aria-label="Avatar"
                            style="background-image: url('assets/images/avatars/3.svg');"></span>
                    </div>
                    <div class="fd-user-menu__subheader">
                        <div class="fd-user-menu__user-name">Kevin Miller</div>
                        <div class="fd-user-menu__user-role">Design Expert</div>
                    </div>
                    <div class="fd-user-menu__navigation-menu">
                        <div class="fd-navigation">
                            <ul class="fd-navigation__list" role="tree">
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="User Account"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">User Account</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                    
                                </li>
                                <li class="fd-navigation__list-item fd-popover" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu fd-popover__control"
                                        title="Settings"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="true"
                                        aria-haspopup="tree"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Settings</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                    <div class="fd-user-menu__navigation-submenu fd-popover__body fd-popover__body--before fd-popover__body--no-arrow" role="tree" aria-roledescription="User Menu Submenu">
                                        <div class="fd-popover__wrapper fd-user-menu__navigation-submenu-wrapper">
                                            <ul class="fd-navigation__list fd-navigation__list--child-items">
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Personalization"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Personalization</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Users and Permissions"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Users and Permissions</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Product Settings"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Product Settings</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="true"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Legal Information"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Legal Information</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fd-user-menu__footer">
                    <button class="fd-button fd-button--compact">Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</div>`,S=`<div style="height: 40rem; display: flex; justify-content: flex-end;">
    <div class="is-cozy">
        <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    aria-controls="popoverA2TH"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Avatar"
                    style="background-image: url('assets/images/avatars/3.svg');"
                    onclick="onPopoverClick('popoverA2TH');"
                    role="button"
                    tabindex="0"></span>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA2TH">
                <div class="fd-user-menu__body fd-popover__wrapper">
                    <div class="fd-user-menu__header">
                        <span
                            class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                            aria-label="Avatar"
                            style="background-image: url('assets/images/avatars/3.svg');"></span>
                    </div>
                    <div class="fd-user-menu__subheader">
                        <div class="fd-user-menu__user-name">Kevin Miller</div>
                        <div class="fd-user-menu__user-role">Design Expert</div>
                    </div>
                    <div class="fd-user-menu__navigation-menu">
                        <div class="fd-navigation fd-navigation--tablet">
                            <ul class="fd-navigation__list" role="tree">
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="User Account"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">User Account</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                    
                                </li>
                                <li class="fd-navigation__list-item fd-popover" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu fd-popover__control"
                                        title="Settings"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="true"
                                        aria-haspopup="tree"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Settings</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                    <div class="fd-user-menu__navigation-submenu fd-popover__body fd-popover__body--before fd-popover__body--no-arrow" role="tree" aria-roledescription="User Menu Submenu">
                                        <div class="fd-popover__wrapper fd-user-menu__navigation-submenu-wrapper">
                                            <ul class="fd-navigation__list fd-navigation__list--child-items">
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Personalization"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Personalization</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Users and Permissions"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Users and Permissions</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" role="treeitem">
                                                    <div 
                                                        class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                        title="Product Settings"
                                                        aria-roledescription="Navigation List Tree Item"
                                                        aria-selected="false"
                                                        aria-expanded="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Product Settings</span>
                                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="true"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Legal Information"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Legal Information</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fd-user-menu__footer">
                    <button class="fd-button">Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</div>`,I=`<div style="height: 40rem; display: flex; justify-content: flex-end;">
    <div class="is-cozy">
        <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    aria-controls="popoverA3TH"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Avatar"
                    style="background-image: url('assets/images/avatars/3.svg');"
                    onclick="onPopoverClick('popoverA3TH');"
                    role="button"
                    tabindex="0"></span>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA3TH">
                <div class="fd-user-menu__body fd-popover__wrapper">
                    <div class="fd-user-menu__header">
                        <span
                            class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                            aria-label="Avatar"
                            style="background-image: url('assets/images/avatars/3.svg');"></span>
                    </div>
                    <div class="fd-user-menu__subheader">
                        <div class="fd-user-menu__user-name">Kevin Miller</div>
                        <div class="fd-user-menu__user-role">Design Expert</div>
                    </div>
                    <div class="fd-user-menu__navigation-menu">
                        <div class="fd-navigation fd-navigation--phone">
                            <ul class="fd-navigation__list" role="tree">
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="User Account"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">User Account</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                    
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Settings"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="true"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Settings</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="true"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Product Specific"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Product Specific</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" role="treeitem">
                                    <div 
                                        class="fd-navigation__item fd-navigation__item--menu"
                                        title="Legal Information"
                                        aria-roledescription="Navigation List Tree Item"
                                        aria-selected="false"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Legal Information</span>
                                            <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fd-user-menu__footer">
                    <button class="fd-button fd-button--compact">Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div style="height: 40rem; display: flex; justify-content: flex-end;">
    <div class="is-cozy">
        <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    aria-controls="popoverA4TH"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Avatar"
                    style="background-image: url('assets/images/avatars/3.svg');"
                    onclick="onPopoverClick('popoverA4TH');"
                    role="button"
                    tabindex="0"></span>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA4TH">
                <div class="fd-user-menu__body fd-popover__wrapper">
                   <div class="fd-user-menu__navigation-menu">
                        <div class="fd-navigation fd-navigation--phone">
                            <ul class="fd-navigation__list" 
                            role="tree"
                            aria-roledescription="Navigation List Tree"
                            aria-hidden="false">
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--title" aria-level="1" role="treeitem" aria-expanded="true" aria-selected="false" >
                                        <a class="fd-navigation__link" role="button" tabindex="0">
                                            <span class="fd-navigation__icon sap-icon--navigation-left-arrow" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__back-indicator" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Settings</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                    <ul 
                                        class="fd-navigation__list fd-navigation__list--child-items" 
                                        role="group" 
                                        aria-roledescription="Navigation List Tree - Child Items" 
                                        tabindex="-1"
                                        aria-hidden="true"
                                    >
                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                            <div 
                                                class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu" 
                                                aria-level="2" 
                                                role="treeitem" 
                                                title="Personalization"
                                                aria-roledescription="Navigation List Menu Item - Child"
                                                aria-expanded="false" 
                                                aria-selected="false"
                                            >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__text">Personalization</span>
                                                    <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                            <div 
                                                class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu" 
                                                aria-level="2" 
                                                role="treeitem" 
                                                title="Users and Permissions"
                                                aria-roledescription="Navigation List Menu Item - Child"
                                                aria-expanded="false" 
                                                aria-selected="true"
                                            >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__text">Users and Permissions</span>
                                                    <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                            <div 
                                                class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu" 
                                                aria-level="2" 
                                                role="treeitem" 
                                                title="Product Settings"
                                                aria-roledescription="Navigation List Menu Item - Child"
                                                aria-expanded="false" 
                                                aria-selected="false"
                                            >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__text">Product Settings</span>
                                                    <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>`,z={title:"BTP/User Menu",parameters:{description:`The User Menu offers a range of options that are specific to the user and is accessible on all BTP tool screens. Users can access it by clicking on the avatar on the end side of the Tool Header. Apart from always available options, the User Menu can also contain tool-specific actions.

The BTP implementation extends the Visual Core implementation by adding the <code>.fd-user-menu--tool-header</code> modifier class to the <code>.fd-user-menu</code> base class.
`,tags:["btp"]}},s=()=>P;s.storyName="Desktop";s.parameters={docs:{story:{},description:{story:""}}};const o=()=>S;o.storyName="Tablet";o.parameters={docs:{story:{},description:{story:"The interaction behavior for desktop and tablet is identical. The only difference is in the sizes of the components used. "}}};const r=()=>I;r.storyName="Phone";r.parameters={docs:{story:{},description:{story:"For mobile phones, in addition to tablet deltas, the cascading of menus happens in place. In the sub-menus, a title with a back button appears. "}}};var c,_,p;s.parameters=t(i({},s.parameters),{docs:t(i({},(c=s.parameters)==null?void 0:c.docs),{source:i({originalSource:"() => userMenuExampleHtml"},(p=(_=s.parameters)==null?void 0:_.docs)==null?void 0:p.source)})});var v,f,g;o.parameters=t(i({},o.parameters),{docs:t(i({},(v=o.parameters)==null?void 0:v.docs),{source:i({originalSource:"() => userMenuTabletExampleHtml"},(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source)})});var u,m,h;r.parameters=t(i({},r.parameters),{docs:t(i({},(u=r.parameters)==null?void 0:u.docs),{source:i({originalSource:"() => userMenuPhoneExampleHtml"},(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source)})});const C=["UserMenuExample","UserMenuTabletExample","UserMenuPhoneExample"];export{s as UserMenuExample,r as UserMenuPhoneExample,o as UserMenuTabletExample,C as __namedExportsOrder,z as default};
