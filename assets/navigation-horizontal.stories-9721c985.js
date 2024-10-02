var b=Object.defineProperty,x=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var d=(e,n,a)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,i=(e,n)=>{for(var a in n||(n={}))w.call(n,a)&&d(e,a,n[a]);if(o)for(var a of o(n))z.call(n,a)&&d(e,a,n[a]);return e},t=(e,n)=>x(e,k(n));/* empty css                   *//* empty css             *//* empty css                *//* empty css             *//* empty css               */const N=`<div style="height: 500px">
    <nav
        class="fd-navigation fd-navigation--horizontal"
        aria-label="Horizontal Navigation">
        <div class="fd-navigation__container">
            <ul
                class="fd-navigation__list"
                role="menubar"
                aria-label="Horizontal Navigation"
            >
                <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="page"
                        aria-selected="true"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Home</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--calendar" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Appointment</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--database" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Data</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--attachment" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Attachment</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Time</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                    <div
                        class="fd-navigation__item fd-popover__control"
                        aria-current="false"
                        aria-expanded="true"
                        aria-haspopup="tree"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Basket</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator"></span>
                        </a>
                    </div>
                    <div class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"  aria-hidden="false">
                        <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                            <ul class="fd-navigation__list fd-navigation__list--child-items" role="tree" aria-roledescription="Navigation List Tree - Child Items" tabindex="-1" aria-hidden="true">
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Future Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Future Orders</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Current Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="true">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Current Orders (selected)</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Past Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Past Orders</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Lost Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Lost Orders</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Forgotten Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Shield</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Cog</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                        </a>
                    </div>
                </li>

                <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--overflow" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="true"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span class="fd-navigation__icon sap-icon--overflow" role="presentation" aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu" aria-hidden="false" id="navMenuOverflow">
                        <div class="fd-navigation__list-wrapper">
                            <ul
                                class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                role="menu"
                                aria-roledescription="Navigation List Tree"
                                tabindex="-1">

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="1"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-1"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="2"
                                        aria-setsize="3"
                                        aria-haspopup="menu"
                                        aria-labelledby="txt-2"
                                        aria-expanded="true"
                                        aria-owns="children-menu"
                                    >
                                        <a class="fd-navigation__link" role="button" tabindex="0" aria-controls="navPopover3">
                                            <span class="fd-navigation__icon sap-icon--horizontal-bar-chart" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                        </a>
                                    </div>
                                    <div
                                        class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                        aria-hidden="false">
                                        <div class="fd-navigation__list-wrapper">
                                            <ul
                                                class="fd-navigation__list fd-navigation__list--child-items" id="children-menu"
                                                role="menu"
                                                aria-roledescription="Navigation List Tree - Children Items"
                                                tabindex="-1"
                                            >
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-1"
                                                        role="menuitem"
                                                        aria-posinset="1"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-1">Child Item</span>
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-2"
                                                        role="menuitem"
                                                        aria-posinset="2"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-2">Child Item</span>
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-3"
                                                        role="menuitem"
                                                        aria-posinset="3"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="true"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-3">Child Item</span>
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="3"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-3"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
`,y=`<div style="height: 500px">
    <nav class="fd-navigation fd-navigation--horizontal fd-navigation--tablet" aria-label="Horizontal Navigation">
        <div class="fd-navigation__container">
            <ul class="fd-navigation__list" role="menubar" aria-label="Horizontal Navigation">
                <li
                    role="none"
                    tabindex="-1"
                    class="fd-navigation__list-item fd-navigation__list-item--home"
                    aria-hidden="true"
                >
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-selected="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--home"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Home</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--calendar"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Appointment</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--database"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Data</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--attachment"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Attachment</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--create-entry-time"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Time</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                    <div
                        class="fd-navigation__item fd-popover__control"
                        aria-current="page"
                        aria-selected="true"
                        aria-expanded="true"
                        aria-haspopup="tree"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span
                                class="fd-navigation__icon sap-icon--basket"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Basket</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                            <span
                                class="fd-navigation__has-children-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="has children indicator"
                            ></span>
                        </a>
                    </div>
                    <div
                        class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"
                        aria-hidden="false"
                    >
                        <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                            <ul
                                class="fd-navigation__list fd-navigation__list--child-items"
                                role="tree"
                                aria-roledescription="Navigation List Tree - Child Items"
                                tabindex="-1"
                                aria-hidden="true"
                            >
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Future Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Future Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Current Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="true"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Current Orders (selected)</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Past Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Past Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Lost Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Lost Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Forgotten Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                            <span
                                                class="fd-navigation__external-link-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="external link indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--shield"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Shield</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--action-settings"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Cog</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                            <span
                                class="fd-navigation__has-children-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="has children indicator, expanded"
                            ></span>
                        </a>
                    </div>
                </li>

                <li
                    class="fd-navigation__list-item fd-navigation__list-item--spacer"
                    role="presentation"
                    aria-hidden="true"
                ></li>

                <li
                    role="none"
                    tabindex="-1"
                    class="fd-navigation__list-item fd-navigation__list-item--overflow"
                    aria-hidden="true"
                >
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="true" role="menuitem">
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span
                                class="fd-navigation__icon sap-icon--overflow"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </div>
                    <div
                        class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu"
                        aria-hidden="false"
                        id="navMenuOverflow"
                    >
                        <div class="fd-navigation__list-wrapper">
                            <ul
                                class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                role="menu"
                                aria-roledescription="Navigation List Tree"
                                tabindex="-1"
                            >
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="1"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-1"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span
                                                class="fd-navigation__icon sap-icon--notes"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="2"
                                        aria-setsize="3"
                                        aria-haspopup="menu"
                                        aria-labelledby="txt-2"
                                        aria-expanded="true"
                                        aria-owns="children-menu"
                                    >
                                        <a
                                            class="fd-navigation__link"
                                            role="button"
                                            tabindex="0"
                                            aria-controls="navPopover3"
                                        >
                                            <span
                                                class="fd-navigation__icon sap-icon--horizontal-bar-chart"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                            <span
                                                class="fd-navigation__has-children-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="has children indicator, expanded"
                                            ></span>
                                        </a>
                                    </div>
                                    <div
                                        class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                        aria-hidden="false"
                                    >
                                        <div class="fd-navigation__list-wrapper">
                                            <ul
                                                class="fd-navigation__list fd-navigation__list--child-items"
                                                id="children-menu"
                                                role="menu"
                                                aria-roledescription="Navigation List Tree - Children Items"
                                                tabindex="-1"
                                            >
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-1"
                                                        role="menuitem"
                                                        aria-posinset="1"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-1"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-2"
                                                        role="menuitem"
                                                        aria-posinset="2"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-2"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-3"
                                                        role="menuitem"
                                                        aria-posinset="3"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="true"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-3"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="3"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-3"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span
                                                class="fd-navigation__icon sap-icon--notes"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
`,C=`<div style="height: 500px">
    <nav class="fd-navigation fd-navigation--horizontal" aria-label="Horizontal Navigation">
        <div class="fd-navigation__container">
            <ul class="fd-navigation__list" role="menubar" aria-label="Horizontal Navigation">
                <li
                    role="none"
                    tabindex="-1"
                    class="fd-navigation__list-item fd-navigation__list-item--home"
                    aria-hidden="true"
                >
                    <div
                        class="fd-navigation__item"
                        aria-current="page"
                        aria-selected="false"
                        aria-expanded="false"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--home"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Home</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--calendar"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Appointment</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--database"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Data</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--attachment"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Attachment</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--create-entry-time"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Time</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                    <div
                        class="fd-navigation__item fd-navigation__item--with-expander fd-popover__control"
                        aria-current="false"
                        aria-expanded="true"
                        aria-haspopup="tree"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span
                                class="fd-navigation__icon sap-icon--basket"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Basket</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                        <button
                            class="fd-button fd-button--nested fd-navigation__expander"
                            aria-label="Expand/Collapse"
                        >
                            <span
                                class="fd-navigation__has-children-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="has children indicator"
                            ></span>
                        </button>
                    </div>
                    <div
                        class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"
                        aria-hidden="false"
                    >
                        <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                            <ul
                                class="fd-navigation__list fd-navigation__list--child-items"
                                role="tree"
                                aria-roledescription="Navigation List Tree - Child Items"
                                tabindex="-1"
                                aria-hidden="true"
                            >
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Future Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Future Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Current Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="true"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Current Orders (selected)</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Past Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Past Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Lost Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Lost Orders</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--child"
                                        aria-level="1"
                                        role="treeitem"
                                        title="Forgotten Orders"
                                        aria-roledescription="Navigation List Menu Item - Child"
                                        aria-expanded="false"
                                        aria-selected="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                            <span
                                                class="fd-navigation__external-link-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="external link indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--shield"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Shield</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item fd-navigation__item--with-expander"
                        aria-current="false"
                        aria-expanded="false"
                        aria-selected="true"
                        role="menuitem"
                    >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span
                                class="fd-navigation__icon sap-icon--action-settings"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Cog</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                            ></span>
                        </a>
                        <button
                            class="fd-button fd-button--nested fd-navigation__expander"
                            aria-label="Expand/Collapse"
                        >
                            <span
                                class="fd-navigation__has-children-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="has children indicator"
                            ></span>
                        </button>
                    </div>
                </li>

                <li
                    class="fd-navigation__list-item fd-navigation__list-item--spacer"
                    role="presentation"
                    aria-hidden="true"
                ></li>

                <li
                    role="none"
                    tabindex="-1"
                    class="fd-navigation__list-item fd-navigation__list-item--overflow"
                    aria-hidden="true"
                >
                    <div class="fd-navigation__item" aria-current="false" aria-expanded="true" role="menuitem">
                        <a class="fd-navigation__link" role="button" tabindex="0">
                            <span
                                class="fd-navigation__icon sap-icon--overflow"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </div>
                    <div
                        class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu"
                        aria-hidden="false"
                        id="navMenuOverflow"
                    >
                        <div class="fd-navigation__list-wrapper">
                            <ul
                                class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                role="menu"
                                aria-roledescription="Navigation List Tree"
                                tabindex="-1"
                            >
                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="1"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-1"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span
                                                class="fd-navigation__icon sap-icon--notes"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="2"
                                        aria-setsize="3"
                                        aria-haspopup="menu"
                                        aria-labelledby="txt-2"
                                        aria-expanded="true"
                                        aria-owns="children-menu"
                                    >
                                        <a
                                            class="fd-navigation__link"
                                            role="button"
                                            tabindex="0"
                                            aria-controls="navPopover3"
                                        >
                                            <span
                                                class="fd-navigation__icon sap-icon--horizontal-bar-chart"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                            <span
                                                class="fd-navigation__selection-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="selection indicator"
                                            ></span>
                                            <span
                                                class="fd-navigation__has-children-indicator"
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="has children indicator, expanded"
                                            ></span>
                                        </a>
                                    </div>
                                    <div
                                        class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                        aria-hidden="false"
                                    >
                                        <div class="fd-navigation__list-wrapper">
                                            <ul
                                                class="fd-navigation__list fd-navigation__list--child-items"
                                                id="children-menu"
                                                role="menu"
                                                aria-roledescription="Navigation List Tree - Children Items"
                                                tabindex="-1"
                                            >
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-1"
                                                        role="menuitem"
                                                        aria-posinset="1"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-1"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-2"
                                                        role="menuitem"
                                                        aria-posinset="2"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="false"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-2"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div
                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                        aria-labelledby="txt-child-3"
                                                        role="menuitem"
                                                        aria-posinset="3"
                                                        aria-setsize="3"
                                                        aria-disabled="false"
                                                        aria-selected="true"
                                                    >
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text" id="txt-child-3"
                                                                >Child Item</span
                                                            >
                                                            <span class="fd-navigation__selection-indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item fd-navigation__item--overflow"
                                        role="menuitem"
                                        aria-disabled="false"
                                        aria-posinset="3"
                                        aria-setsize="3"
                                        aria-haspopup="false"
                                        aria-labelledby="txt-3"
                                        aria-expanded="false"
                                    >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span
                                                class="fd-navigation__icon sap-icon--notes"
                                                role="presentation"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                            <span class="fd-navigation__selection-indicator"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
`,M={title:"BTP/Navigation/Horizontal Navigation",parameters:{description:`The navigation is one of the signature design elements of BTP Tools.
## Navigation Types:
- <b>Vertical Navigation - Expanded</b>. The default navigation visualization provides a logical grouping of navigation items and two levels of hierarchy.
- <b>Vertical Navigation - Snapped</b>. The snapped vertical navigation variant reduces the navigation width to free horizontal space.
- <b>Vertical Navigation - Popup</b>. An alternative to the expanded/snapped variant, which places the navigation items in a popup.
- <b>Horizontal Navigation</b>&nbsp;- The horizontal variant allows for infinite levels of navigation hierarchy through cascading menus.


## Usage
### Recommended
- Use the navigation to switch between different pages of your tool.
- Use expanded vertical navigation for unknown users.
- Use persistence and display the last state the vertical navigation was in for know users.
- Use the snapped variant when the content area displays multi-column content relationships.
- Use the popup variant to display between 3 and 7 navigation items without hierarchy.
- Use the horizontal navigation variant to display more than two levels of hierarchy.
- Use nouns for the titles of navigation items.

### Not Recommended
- Avoid using the navigation for switching between tools. Use the mega menu instead.
- Avoid using the navigation to switch contexts or views. Use tabs or segmented buttons instead.
- Avoid using verbs for the titles of navigation items. Use nouns instead.
- Avoid using the Navigation Items for both navigation and groups. Use only one of the options.
- Avoid having more than three levels of hierarchy in the horizontal variant.
- Avoid using icons in secondary navigation and navigation groups.
- Avoid using spacers to separate navigation content. Use separators instead.
- Avoid using dividers to separate groups. Use separators instead.
- Avoid using the bottom navigation area for service information. Use settings and user menu instead.

`,tags:["btp","development","horizon-only"]}},s=()=>N;s.storyName="Horizontal Navigation";s.parameters={docs:{description:{story:`Horizontal Navigation is an optional alternative to the Vertical Navigation variant.
`}}};const l=()=>y;l.storyName="Horizontal Navigation - Tablet";l.parameters={docs:{description:{story:`
`}}};const r=()=>C;r.storyName="Horizontal Navigation - Two-Click Area";r.parameters={docs:{description:{story:`
`}}};var c,_,v;s.parameters=t(i({},s.parameters),{docs:t(i({},(c=s.parameters)==null?void 0:c.docs),{source:i({originalSource:"() => navigationHorizontalExampleHtml"},(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source)})});var p,f,g;l.parameters=t(i({},l.parameters),{docs:t(i({},(p=l.parameters)==null?void 0:p.docs),{source:i({originalSource:"() => navigationHorizontalTabletExampleHtml"},(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source)})});var h,m,u;r.parameters=t(i({},r.parameters),{docs:t(i({},(h=r.parameters)==null?void 0:h.docs),{source:i({originalSource:"() => navigationHorizontalWithExpanderExampleHtml"},(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source)})});const A=["NavigationHorizontal","NavigationHorizontalTablet","NavigationHorizontalWithExpander"];export{s as NavigationHorizontal,l as NavigationHorizontalTablet,r as NavigationHorizontalWithExpander,A as __namedExportsOrder,M as default};
