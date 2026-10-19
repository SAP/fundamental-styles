/* empty css                   *//* empty css             *//* empty css                *//* empty css             *//* empty css               *//* empty css              *//* empty css                    *//* empty css                      */const r=`<div
    class="fd-navigation fd-navigation--vertical"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Customer Management"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="true"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--account"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Customer Management</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Contacts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Contacts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Sales"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                                    aria-label="has children indicator, collapsed"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Leads"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Leads</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Opportunities"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Quotes"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Quotes</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Orders</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Invoices"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Quick Create"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span class="fd-navigation__icon sap-icon--add" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Quick Create</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,d=`<div
    class="fd-navigation fd-navigation--vertical fd-navigation--snapped"
    role="navigation"
    aria-roledescription="Side Navigation Snapped Mode"
    style="width: 18rem; height: 35rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul
            class="fd-navigation__list"
            role="menubar"
            aria-orientation="vertical"
            aria-roledescription="Navigation List Tree"
            tabindex="-1"
        >
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    role="menuitemradio"
                    title="Home"
                    aria-roledescription="Navigation List Menu Item"
                    aria-selected="false"
                    aria-expanded="false"
                    aria-checked="false"
                    aria-haspopup="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text"
                            >Home
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
                                <span class="fd-object-status__text">Beta</span>
                                <span class="fd-object-status__sr-only">Object Status</span>
                                <span class="fd-object-status__sr-only">Indication Color 8</span>
                            </span>
                        </span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                </div>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    role="menuitemradio"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Menu Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                    aria-checked="false"
                    aria-hidden="true"
                    aria-haspopup="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="menubar"
                    aria-orientation="vertical"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            role="menuitemradio"
                            title="Favorites"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Favorites
                                    <span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-4"
                                    >
                                        <span class="fd-object-status__text">Alpha</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 4</span>
                                    </span>
                                </span>
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

                    <li class="fd-navigation__list-item fd-popover" aria-hidden="true">
                        <div
                            class="fd-navigation__item fd-popover__control"
                            role="menuitemradio"
                            title="Customer Management"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-expanded="true"
                            aria-selected="true"
                            aria-haspopup="tree"
                            aria-checked="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="0"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--account"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Customer Management
                                    <span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-2"
                                    >
                                        <span class="fd-object-status__text">New</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 2</span>
                                    </span>
                                </span>
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
                        <ul
                            class="fd-navigation__list-container fd-popover__body fd-popover__body--after fd-popover__body--no-arrow"
                            role="tree"
                            aria-roledescription="Navigation List Tree"
                            aria-hidden="false"
                        >
                            <li class="fd-navigation__list-wrapper fd-popover__wrapper" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-navigation__item--title"
                                    aria-level="1"
                                    role="treeitem"
                                    aria-expanded="true"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span
                                            class="fd-navigation__icon sap-icon--account"
                                            role="presentation"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="fd-navigation__text">Customer Management</span>
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
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="2"
                                            role="treeitem"
                                            title="Contacts"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">
                                                    Contacts
                                                    <span
                                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-8b"
                                                    >
                                                        <span class="fd-object-status__text">Beta</span>
                                                        <span class="fd-object-status__sr-only">Object Status</span>
                                                        <span class="fd-object-status__sr-only"
                                                            >Indication Color 8b</span
                                                        >
                                                    </span>
                                                </span>
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
                                            aria-level="2"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false"
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text"
                                                    >Companies (selected)
                                                    <span
                                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-8"
                                                    >
                                                        <span class="fd-object-status__text">Sunset</span>
                                                        <span class="fd-object-status__sr-only">Object Status</span>
                                                        <span class="fd-object-status__sr-only"
                                                            >Indication Color 8</span
                                                        >
                                                    </span>
                                                </span>
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
                                            aria-level="2"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Partners</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            role="menuitemradio"
                            title="Sales"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                            class="fd-navigation__item"
                            role="menuitemradio"
                            title="Products"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
                                <span
                                    class="fd-navigation__selection-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="selection indicator"
                                ></span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    role="menuitemradio"
                    title="Additional Items"
                    aria-roledescription="Navigation List Menu Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                    aria-checked="false"
                    aria-hidden="true"
                    aria-haspopup="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="menubar"
                    aria-orientation="vertical"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            role="menuitemradio"
                            title="Marketing"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
                                <span
                                    class="fd-navigation__selection-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="selection indicator"
                                ></span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item fd-navigation__list-item--overflow" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-roledescription="Navigation List Menu Item"
                    aria-haspopup="menu"
                    role="menuitem"
                    aria-expanded="true"
                    tabindex="-1"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0">
                        <span
                            class="fd-navigation__icon sap-icon--overflow"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">More Items</span>
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
                                            class="fd-navigation__icon sap-icon--official-service"
                                            role="presentation"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="fd-navigation__text" id="txt-1">Manufactring</span>
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
                                    aria-selected="false"
                                >
                                    <a
                                        class="fd-navigation__link"
                                        role="button"
                                        tabindex="0"
                                        aria-controls="navPopover3"
                                    >
                                        <span
                                            class="fd-navigation__icon sap-icon--manager-insight"
                                            role="presentation"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="fd-navigation__text" id="txt-2">Reports </span>
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
                                    class="fd-navigation__list-container fd-navigation__list-container--submenu fd-menu__sublist"
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
                                                    class="fd-navigation__item fd-navigation__item--child"
                                                    aria-labelledby="txt-child-1"
                                                    role="menuitem"
                                                    aria-posinset="1"
                                                    aria-setsize="3"
                                                    aria-disabled="false"
                                                    aria-selected="false"
                                                >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__text" id="txt-child-1"
                                                            >Sales Reports</span
                                                        >
                                                        <span class="fd-navigation__selection-indicator"></span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                <div
                                                    class="fd-navigation__item fd-navigation__item--child"
                                                    aria-labelledby="txt-child-2"
                                                    role="menuitem"
                                                    aria-posinset="2"
                                                    aria-setsize="3"
                                                    aria-disabled="false"
                                                    aria-selected="false"
                                                >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__text" id="txt-child-2"
                                                            >Customer Reports</span
                                                        >
                                                        <span class="fd-navigation__selection-indicator"></span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                <div
                                                    class="fd-navigation__item fd-navigation__item--child"
                                                    aria-labelledby="txt-child-3"
                                                    role="menuitem"
                                                    aria-posinset="3"
                                                    aria-setsize="3"
                                                    aria-disabled="false"
                                                    aria-selected="false"
                                                >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__text" id="txt-child-3"
                                                            >Marketing Reports</span
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
                                            class="fd-navigation__icon sap-icon--sys-help"
                                            role="presentation"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="fd-navigation__text" id="txt-3">Help</span>
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

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Legal"
                    aria-roledescription="Navigation List Menu Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,o=`<div
    class="fd-navigation fd-navigation--vertical fd-navigation--popup"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Customer Management"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="true"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--account"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Customer Management</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Contacts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Contacts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Sales"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                                    aria-label="has children indicator, collapsed"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Leads"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Leads</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Opportunities"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Quotes"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Quotes</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Orders</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Invoices"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,c=`<div
    class="fd-navigation fd-navigation--vertical"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item fd-navigation__item--with-expander"
                            aria-level="2"
                            role="treeitem"
                            title="Customer Management"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="true"
                        >
                            <a class="fd-navigation__link" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--account"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Customer Management</span>
                                <span
                                    class="fd-navigation__selection-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="selection indicator"
                                ></span>
                            </a>
                            <span
                                class="fd-navigation__has-children-indicator"
                                role="button"
                                aria-label="expand/collapse children"
                            ></span>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Contacts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Contacts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
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
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,_=`<div
    class="fd-navigation fd-navigation--vertical"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="true"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text"
                            >Home
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
                                <span class="fd-object-status__text">Beta</span>
                                <span class="fd-object-status__sr-only">Object Status</span>
                                <span class="fd-object-status__sr-only">Indication Color 8</span>
                            </span>
                        </span>
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
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Resource Planning and Business Management Solutions"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--bbyd-dashboard"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">
                            Resource Planning and Business Management Solutions
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6b">
                                <span class="fd-object-status__text">Beta</span>
                                <span class="fd-object-status__sr-only">Object Status</span>
                                <span class="fd-object-status__sr-only">Indication Color 6b</span>
                            </span>
                        </span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                </div>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Favorites<span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-9"
                                    >
                                        <span class="fd-object-status__text">New</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 9</span>
                                    </span>
                                </span>

                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text"
                                                    >My Accounts
                                                    <span
                                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-10b"
                                                    >
                                                        <span class="fd-object-status__text"
                                                            >Beta Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit</span
                                                        >
                                                        <span class="fd-object-status__sr-only">Object Status</span>
                                                        <span class="fd-object-status__sr-only"
                                                            >Indication Color 10b</span
                                                        >
                                                    </span>
                                                </span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--document"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Reports
                                    <span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-7"
                                    >
                                        <span class="fd-object-status__text">Alpha</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 7</span>
                                    </span>
                                </span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text"
                                                    >Partners (external link)
                                                    <span
                                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-7b"
                                                    >
                                                        <span class="fd-object-status__text">New</span>
                                                        <span class="fd-object-status__sr-only">Object Status</span>
                                                        <span class="fd-object-status__sr-only"
                                                            >Indication Color 7b</span
                                                        >
                                                    </span>
                                                </span>

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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Sales"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                                    aria-label="has children indicator, collapsed"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Leads"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Leads</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Opportunities"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Quotes"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Quotes</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Orders</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Invoices"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--with-expander"
                    aria-level="2"
                    role="treeitem"
                    title="Customer Management"
                    aria-roledescription="Navigation List Tree Item - Parent"
                    aria-expanded="true"
                    aria-selected="false"
                >
                    <a class="fd-navigation__link" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--account"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text"
                            >Customer Management
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-9b">
                                <span class="fd-object-status__text">Preview</span>
                                <span class="fd-object-status__sr-only">Object Status</span>
                                <span class="fd-object-status__sr-only">Indication Color 9b</span>
                            </span>
                        </span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                    <span
                        class="fd-navigation__has-children-indicator"
                        role="button"
                        aria-label="expand/collapse children"
                    ></span>
                </div>
                <div class="fd-navigation__list-container" aria-hidden="true">
                    <div class="fd-navigation__list-wrapper" aria-hidden="true">
                        <ul
                            class="fd-navigation__list fd-navigation__list--child-items"
                            role="tree"
                            aria-roledescription="Navigation List Tree - Child Items"
                            tabindex="-1"
                        >
                            <li class="fd-navigation__list-item" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-navigation__item--child"
                                    aria-level="3"
                                    role="treeitem"
                                    title="Contacts"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Contacts</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Companies"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Companies</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Partners"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Partners (external link)</span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,v=`<div
    class="fd-navigation fd-navigation--vertical"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item fd-navigation__list-item--sticky">
                <div class="fd-input-group">
                    <input
                        class="fd-input fd-input-group__input"
                        type="text"
                        id="side-nav-search"
                        name="two-icon-actions"
                        placeholder="Search"
                        autocomplete="off"
                        aria-label="Search"
                    />
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent"
                            type="button"
                            aria-label="Search value"
                        >
                            <i class="sap-icon--search" aria-hidden="true" role="presentation"></i>
                        </button>
                    </span>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
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

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Resource Planning and Business Management Solutions"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--bbyd-dashboard"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text"> Resource Planning and Business Management Solutions </span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                </div>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Favorites<span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-9"
                                    >
                                        <span class="fd-object-status__text">New</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 9</span>
                                    </span>
                                </span>

                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--document"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>

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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Sales"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                                    aria-label="has children indicator, collapsed"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Leads"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Leads</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Opportunities"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Quotes"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Quotes</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Orders</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Invoices"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--with-expander"
                    aria-level="2"
                    role="treeitem"
                    title="Customer Management"
                    aria-roledescription="Navigation List Tree Item - Parent"
                    aria-expanded="true"
                    aria-selected="false"
                >
                    <a class="fd-navigation__link" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--account"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Customer Management</span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                    <span
                        class="fd-navigation__has-children-indicator"
                        role="button"
                        aria-label="expand/collapse children"
                    ></span>
                </div>
                <div class="fd-navigation__list-container" aria-hidden="true">
                    <div class="fd-navigation__list-wrapper" aria-hidden="true">
                        <ul
                            class="fd-navigation__list fd-navigation__list--child-items"
                            role="tree"
                            aria-roledescription="Navigation List Tree - Child Items"
                            tabindex="-1"
                        >
                            <li class="fd-navigation__list-item" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-navigation__item--child"
                                    aria-level="3"
                                    role="treeitem"
                                    title="Contacts"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Contacts</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Companies"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Companies</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Partners"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Partners (external link)</span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,p=`<div
    class="fd-navigation fd-navigation--vertical"
    role="navigation"
    aria-roledescription="Side Navigation"
    style="width: 18rem; height: 60rem"
>
    <div class="fd-navigation__container fd-navigation__container--top fd-navigation__container--sticky">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" role="presentation">
                <div class="fd-input-group">
                    <input
                        class="fd-input fd-input-group__input"
                        type="text"
                        id="side-nav-search-sticky"
                        name="two-icon-actions"
                        placeholder="Search"
                        autocomplete="off"
                        aria-label="Search"
                    />
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent"
                            type="button"
                            aria-label="Search value"
                        >
                            <i class="sap-icon--search" aria-hidden="true" role="presentation"></i>
                        </button>
                    </span>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
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

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Resource Planning and Business Management Solutions"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--bbyd-dashboard"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text"> Resource Planning and Business Management Solutions </span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--top">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Main Items Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Main Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--unfavorite"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text"
                                    >Favorites<span
                                        class="fd-object-status fd-object-status--inverted fd-object-status--indication-9"
                                    >
                                        <span class="fd-object-status__text">New</span>
                                        <span class="fd-object-status__sr-only">Object Status</span>
                                        <span class="fd-object-status__sr-only">Indication Color 9</span>
                                    </span>
                                </span>

                                <span
                                    class="fd-navigation__has-children-indicator"
                                    role="presentation"
                                    aria-hidden="true"
                                    aria-label="has children indicator, expanded"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Accounts"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="My Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--document"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Companies"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Companies</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Partners"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>

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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Sales"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--crm-sales"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Sales</span>
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
                                    aria-label="has children indicator, collapsed"
                                ></span>
                            </a>
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Leads"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Leads</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Opportunities"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Quotes"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Quotes</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Orders</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Invoices"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--with-expander"
                    aria-level="2"
                    role="treeitem"
                    title="Customer Management"
                    aria-roledescription="Navigation List Tree Item - Parent"
                    aria-expanded="true"
                    aria-selected="false"
                >
                    <a class="fd-navigation__link" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--account"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Customer Management</span>
                        <span
                            class="fd-navigation__selection-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="selection indicator"
                        ></span>
                    </a>
                    <span
                        class="fd-navigation__has-children-indicator"
                        role="button"
                        aria-label="expand/collapse children"
                    ></span>
                </div>
                <div class="fd-navigation__list-container" aria-hidden="true">
                    <div class="fd-navigation__list-wrapper" aria-hidden="true">
                        <ul
                            class="fd-navigation__list fd-navigation__list--child-items"
                            role="tree"
                            aria-roledescription="Navigation List Tree - Child Items"
                            tabindex="-1"
                        >
                            <li class="fd-navigation__list-item" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-navigation__item--child"
                                    aria-level="3"
                                    role="treeitem"
                                    title="Contacts"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Contacts</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Companies"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Companies</span>
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
                                    aria-level="3"
                                    role="treeitem"
                                    title="Partners"
                                    aria-roledescription="Navigation List Tree Item - Child"
                                    aria-expanded="false"
                                    aria-selected="false"
                                >
                                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                        <span class="fd-navigation__text">Partners (external link)</span>
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

            <li
                class="fd-navigation__list-item fd-navigation__list-item--separator"
                role="presentation"
                aria-hidden="true"
            ></li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--group"
                    aria-level="1"
                    role="treeitem"
                    title="Additional Items"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Additional Items</span>
                        <span
                            class="fd-navigation__has-children-indicator"
                            role="presentation"
                            aria-hidden="true"
                            aria-label="has children indicator, expanded"
                        ></span>
                    </a>
                </div>

                <ul
                    class="fd-navigation__list fd-navigation__list--parent-items"
                    role="tree"
                    aria-roledescription="Navigation List Tree - Parent Items"
                    tabindex="-1"
                >
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Products"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                <span
                                    class="fd-navigation__icon sap-icon--customer-view"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Products</span>
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
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Marketing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--marketing-campaign"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Marketing</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Campaigns"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="E-Mail Marketing"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Automation"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-level="2"
                            role="treeitem"
                            title="Reports"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true"
                            aria-selected="false"
                        >
                            <a
                                class="fd-navigation__link"
                                role="button"
                                tabindex="-1"
                                onclick="toggleNavigationSubmenu(event)"
                            >
                                <span
                                    class="fd-navigation__icon sap-icon--manager-insight"
                                    role="presentation"
                                    aria-hidden="true"
                                ></span>
                                <span class="fd-navigation__text">Reports</span>
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
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul
                                    class="fd-navigation__list fd-navigation__list--child-items"
                                    role="tree"
                                    aria-roledescription="Navigation List Tree - Child Items"
                                    tabindex="-1"
                                >
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item fd-navigation__item--child"
                                            aria-level="3"
                                            role="treeitem"
                                            title="Sales Report"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Customer Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
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
                                            aria-level="3"
                                            role="treeitem"
                                            title="Marketing Reports"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false"
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                ></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li
                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                role="presentation"
                aria-hidden="true"
            ></li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul class="fd-navigation__list" role="tree" aria-roledescription="Navigation List Tree" tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item fd-navigation__item--create"
                    aria-level="1"
                    role="treeitem"
                    title="Create Ticket"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <button class="fd-navigation__link">
                        <span
                            class="fd-navigation__icon sap-icon--write-new"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Create Ticket</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </button>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-level="1"
                    role="treeitem"
                    title="Product Settings"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--settings"
                            role="presentation"
                            aria-hidden="true"
                        ></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,N={title:"BTP/Side Navigation",parameters:{description:`The side navigation component provides a vertical menu that lets users open applications or modules in your product. It can be implemented as an embedded panel or as an overlay. In embedded mode, the navigation can be expanded or collapsed using the side navigation button. In overlay mode, the button opens the navigation as an overlay. For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.

## Embedded Mode
The side navigation is embedded into the page and can expand or collapse. The button toggles between expanded and collapsed states. On screens wider than 600px, the navigation stays embedded. On smaller screens (600px or less) and phones, it becomes a full-screen overlay instead.

## Overlay Mode
The side navigation opens as a popover and closes when you select an item. On web and tablets, it appears as a responsive popover. On phones, it always appears as a full-screen dialog.

## Usage
### Recommended
- As the main navigation paradigm across the application, to navigate to multiple targets.

### Not Recommended
- For structuring the application layout or implementing application-specific logic.
- If your product has only a single navigation target.
- In a combination of embedded and overlay modes. Use either of them.
`}},n=()=>r;n.storyName="Embedded Mode - Expanded";n.parameters={docs:{description:{story:`
`}}};const a=()=>c;a.storyName="Parent Navigation as Link";a.parameters={docs:{description:{story:`By default, parent items act as navigation groups with an arrow icon showing their expanded/collapsed state. When collapsed, clicking a parent item opens a popover with its child items.<br>Alternatively (not recommended), parent items can both navigate and expand/collapse: clicking the arrow toggles child items, while clicking the item navigates.
`}}};const i=()=>d;i.storyName="Embedded Mode - Collapsed (Snapped)";i.parameters={docs:{description:{story:`When collapsed, child items appear in a popover. Navigation elements move to an overflow area when space is limited. Items with children display as cascaded menus in the overflow. Selecting an overflow item brings its parent into view above the overflow button.
      `}}};const e=()=>o;e.storyName="Overlay Mode (Popup)";e.parameters={docs:{description:{story:`In overlay mode, the side navigation button opens and closes the popover. The navigation items are displayed within the popover, allowing access to all levels of the navigation hierarchy without occupying permanent screen space.
`}}};const t=()=>_;t.storyName="Indication Tags";t.parameters={docs:{description:{story:`Navigation items can display indication tags (e.g., "New", "Beta", "Deprecated") using the Object Status component.

**Guidelines:**
- One tag per navigation item (parent or child items only)
- Avoid semantic colors 1-4 (may be confused with error/success/warning states)
- Limit tag width to 64px (4rem) — use abbreviations if needed (e.g., "Experimental" → "Exp")
- Tags are visual indicators only (non-interactive, no tooltips or actions)
`}}};const s=()=>p;s.storyName="Sticky Area";s.parameters={docs:{description:{story:`Fixed header area that is separated by a separator similar to the footer area. Top-aligned and fixed/sticky (always visible). Contains the optional search field. Add <code>.fd-navigation__container--sticky</code> together with <code>.fd-navigation__container--top</code> modifier class to the <code>.fd-navigation__container</code> base class to make the top area sticky.<br><br>
Guideline: Recommended not to contain more than 4 items.<br><br>For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.`}}};const l=()=>v;l.storyName="Search";l.parameters={docs:{description:{story:`Search Only: for a sticky search field, the sticky header area with separator is not needed. The search field can be sticky by applying <code>.fd-navigation__list-item--sticky</code> modifier class to the parent navigation list item.
<br><br><strong>Note:</strong> The <code>.fd-navigation__list-item--home</code> class is still supported for backward compatibility and functions identically to <code>.fd-navigation__list-item--sticky</code>. It was originally intended specifically for Home navigation link, but <code>.fd-navigation__list-item--sticky</code> is now the recommended approach as it can be applied to any list item that needs to be sticky at the top.<br> <br>For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.`}}};const I=["Navigation","NavigationLegacy","NavigationSnapped","NavigationPopup","NavigationTags","NavigationStickyArea","NavigationSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => navigationExampleHtml",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => navigationLegacyExampleHtml",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => navigationSnappedExampleHtml",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => navigationPopupExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => navigationTagsHtml",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => navigationStickyAreaHtml",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => navigationSearchHtml",...l.parameters?.docs?.source}}};export{n as Navigation,a as NavigationLegacy,e as NavigationPopup,l as NavigationSearch,i as NavigationSnapped,s as NavigationStickyArea,t as NavigationTags,I as __namedExportsOrder,N as default};
