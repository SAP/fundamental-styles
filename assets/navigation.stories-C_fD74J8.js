/* empty css                   *//* empty css             *//* empty css                *//* empty css             *//* empty css               */const t=`<div 
    class="fd-navigation fd-navigation--vertical" 
    role="navigation" 
    aria-roledescription="Side Navigation" 
    style="width: 18rem; height: 60rem;">

    <div class="fd-navigation__container fd-navigation__container--top">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1"
        >
            <li class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Home</span>
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--unfavorite" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--account" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Customer Management</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Contacts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--crm-sales" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sales</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, collapsed"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Leads</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Quotes</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                <span class="fd-navigation__icon sap-icon--customer-view" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Products</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--marketing-campaign" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Marketing</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--manager-insight" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Reports</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
            </li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">

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
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,s=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--snapped" 
    role="navigation" 
    aria-roledescription="Side Navigation Snapped Mode" 
    style="width: 18rem; height: 35rem;">

    <div class="fd-navigation__container fd-navigation__container--top">
        <ul 
            class="fd-navigation__list" 
            role="menubar" 
            aria-orientation="vertical"
            aria-roledescription="Navigation List Tree" 
            tabindex="-1"
        >
            <li class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
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
                        <span class="fd-navigation__text">Home</span>
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                <span class="fd-navigation__icon sap-icon--unfavorite" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--account" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Customer Management</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                            </a>
                        </div>
                        <ul 
                            class="fd-navigation__list-container fd-popover__body fd-popover__body--after fd-popover__body--no-arrow" 
                            role="tree"
                            aria-roledescription="Navigation List Tree"
                            aria-hidden="false">
                            <li class="fd-navigation__list-wrapper fd-popover__wrapper" aria-hidden="true">
                                <div class="fd-navigation__item fd-navigation__item--title" aria-level="1" role="treeitem" aria-expanded="true" aria-selected="false" >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span class="fd-navigation__icon sap-icon--account" role="presentation" aria-hidden="true"></span>
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
                                                <span class="fd-navigation__text">Contacts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                                <span class="fd-navigation__text">Companies (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                <span class="fd-navigation__icon sap-icon--crm-sales" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sales</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                <span class="fd-navigation__icon sap-icon--customer-view" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Products</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                <span class="fd-navigation__icon sap-icon--marketing-campaign" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Marketing</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--overflow" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-roledescription="Navigation List Menu Item"
                    aria-haspopup="menu" 
                    role="menuitem" 
                    aria-expanded="true"
                    tabindex="-1">
                    <a class="fd-navigation__link" role="button" tabindex="0">
                        <span class="fd-navigation__icon sap-icon--overflow" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">More Items</span>
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
                                        <span class="fd-navigation__icon sap-icon--official-service" role="presentation" aria-hidden="true"></span>
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
                                    <a class="fd-navigation__link" role="button" tabindex="0" aria-controls="navPopover3">
                                        <span class="fd-navigation__icon sap-icon--manager-insight" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text" id="txt-2">Reports</span>
                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                    </a>
                                </div>
                                <div 
                                    class="fd-navigation__list-container fd-navigation__list-container--submenu fd-menu__sublist" 
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
                                                    class="fd-navigation__item fd-navigation__item--child" 
                                                    aria-labelledby="txt-child-1"
                                                    role="menuitem" 
                                                    aria-posinset="1"
                                                    aria-setsize="3"
                                                    aria-disabled="false"
                                                    aria-selected="false"
                                                >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__text" id="txt-child-1">Sales Reports</span>
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
                                                        <span class="fd-navigation__text" id="txt-child-2">Customer Reports</span>
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
                                                        <span class="fd-navigation__text" id="txt-child-3">Marketing Reports</span>
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
                                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
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
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">
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
                    title="Legal"
                    aria-roledescription="Navigation List Menu Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,l=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--popup" 
    role="navigation" 
    aria-roledescription="Side Navigation" 
    style="width: 18rem; height: 60rem;">

    <div class="fd-navigation__container fd-navigation__container--top">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1"
        >
            <li class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Home"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Home</span>
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--unfavorite" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--account" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Customer Management</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Contacts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--crm-sales" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sales</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, collapsed"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Leads</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Opportunities</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Quotes</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Invoices</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                <span class="fd-navigation__icon sap-icon--customer-view" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Products</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--marketing-campaign" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Marketing</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--manager-insight" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Reports</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
            </li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">

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
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,r=`<div 
    class="fd-navigation fd-navigation--vertical" 
    role="navigation" 
    aria-roledescription="Side Navigation" 
    style="width: 18rem; height: 60rem;">

    <div class="fd-navigation__container fd-navigation__container--top">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1"
        >
            <li class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
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
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--unfavorite" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Favorites</span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Accounts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">My Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                <span class="fd-navigation__icon sap-icon--account" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Customer Management</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                            <span class="fd-navigation__has-children-indicator" role="button" aria-label="expand/collapse children"></span>
                            
                        </div>
                        <div class="fd-navigation__list-container" aria-hidden="true">
                            <div class="fd-navigation__list-wrapper" aria-hidden="true">
                                <ul 
                                    class="fd-navigation__list fd-navigation__list--child-items" 
                                    role="tree" 
                                    aria-roledescription="Navigation List Tree - Child Items" 
                                    tabindex="-1">
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Contacts</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Companies (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Partners (external link)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

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
                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                <span class="fd-navigation__icon sap-icon--customer-view" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Products</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--marketing-campaign" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Marketing</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Campaigns</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">E-Mail Marketing</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Automation</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--manager-insight" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Reports</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Sales Report</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Customer Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
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
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Marketing Reports</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
            </li>
        </ul>
    </div>

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">

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
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Product Settings</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,p={title:"BTP/Navigation/Vertical Navigation",parameters:{description:`The navigation is one of the signature design elements of BTP Tools. 
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

`,tags:["btp","development","horizon-only"]}},n=()=>t;n.storyName="Vertical Navigation - Expanded";n.parameters={docs:{description:{story:`Vertical navigation is the most common and preferred way of navigating BTP tools. It comprises many elements that work together to provide a logical information hierarchy and inform users of their current position.
`}}};const a=()=>r;a.storyName="Vertical Navigation - Parent Navigation as Link";a.parameters={docs:{description:{story:`By default, the Parent Navigation Item functions as a Navigation Group. A small arrow icon shows the item's expanded/collapsed state in this scenario. In the snapped variant, clicking on such a navigation item will open a popover that displays the title and Child Items.<br>Although not recommended, the Navigation Item can function for navigation and expansion/collapse. In this case, clicking on the arrow will show/hide Child Items, and clicking on the item will perform the navigation.
`}}};const i=()=>s;i.storyName="Vertical Navigation - Snapped";i.parameters={docs:{description:{story:`The snapped vertical navigation variant reduces the navigation width to free horizontal space.
      `}}};const e=()=>l;e.storyName="Vertical Navigation - Popup";e.parameters={docs:{description:{story:`An alternative to the expanded/snapped variant, which places the navigation items in a popup.
`}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => navigationExampleHtml",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => navigationLegacyExampleHtml",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => navigationSnappedExampleHtml",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => navigationPopupExampleHtml",...e.parameters?.docs?.source}}};const g=["Navigation","NavigationLegacy","NavigationSnapped","NavigationPopup"];export{n as Navigation,a as NavigationLegacy,e as NavigationPopup,i as NavigationSnapped,g as __namedExportsOrder,p as default};
