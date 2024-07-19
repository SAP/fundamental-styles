var G=Object.defineProperty,U=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var p=(t,i,e)=>i in t?G(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,n=(t,i)=>{for(var e in i||(i={}))A.call(i,e)&&p(t,e,i[e]);if(v)for(var e of v(i))B.call(i,e)&&p(t,e,i[e]);return t},a=(t,i)=>U(t,z(i));/* empty css                   *//* empty css             *//* empty css                *//* empty css             *//* empty css               */const E=`<div 
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
                            title="Time"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

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
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Sharing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                                            title="Folders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Folders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Documents"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Documents</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Files"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Files</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Photos"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Photos</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Audio"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Audio</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="-1" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Settings"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true" 
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="-1"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                                            title="User Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">User Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Profile Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Profile Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Password Change"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Password Change</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Theming"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">Theming</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="IT Center"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                                                <span class="fd-navigation__text">IT Center (external link)</span>
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
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Legal"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" tabindex="-1"  href="#">
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,V=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--snapped" 
    role="navigation" 
    aria-roledescription="Side Navigation Snapped Mode" 
    style="width: 18rem; height: 60rem;">

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
                            title="Time"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item fd-popover" aria-hidden="true">
                        <div 
                            class="fd-navigation__item fd-popover__control"
                            role="menuitemradio" 
                            title="Basket"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-expanded="true" 
                            aria-selected="true"
                            aria-haspopup="tree"
                            aria-checked="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                            </a>
                        </div>
                        <ul 
                            class="fd-navigation__list-container fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" 
                            role="tree"
                            aria-roledescription="Navigation List Tree"
                            aria-hidden="false">
                            <li class="fd-navigation__list-wrapper fd-popover__wrapper" aria-hidden="true">
                                <div class="fd-navigation__item fd-navigation__item--title" aria-level="1" role="treeitem" aria-expanded="true" aria-selected="false" >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
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
                            title="Sharing"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Menu Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                    aria-checked="false"
                    aria-hidden="true"
                    aria-haspopup="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item"
                            role="menuitemradio" 
                            title="Settings"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                                    aria-selected="true"
                                >
                                    <a class="fd-navigation__link" role="button" tabindex="0" aria-controls="navPopover3">
                                        <span class="fd-navigation__icon sap-icon--horizontal-bar-chart" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text" id="txt-2">Parent Item</span>
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
                                                        <span class="fd-navigation__text" id="txt-child-1">Child Item</span>
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
                                                        <span class="fd-navigation__text" id="txt-child-2">Child Item</span>
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

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Menu Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
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
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,D=`<div 
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
                            title="Time"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

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
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Sharing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                                            title="Folders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Folders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Documents"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Documents</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Files"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Files</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Photos"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Photos</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Audio"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Audio</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Settings"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true" 
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                                            title="User Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">User Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Profile Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Profile Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Password Change"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Password Change</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Theming"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Theming</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="IT Center"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">IT Center (external link)</span>
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
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Legal"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,R=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--popup fd-navigation--tablet" 
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
                            title="Time"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

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
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Sharing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                                            title="Folders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Folders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Documents"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Documents</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Files"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Files</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Photos"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Photos</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Audio"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Audio</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Settings"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true" 
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                                            title="User Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">User Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Profile Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Profile Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Password Change"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Password Change</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Theming"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Theming</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="IT Center"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">IT Center (external link)</span>
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
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Legal"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,j=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--snapped fd-navigation--tablet" 
    role="navigation" 
    aria-roledescription="Side Navigation Snapped Mode" 
    style="width: 18rem; height: 60rem;">

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
                            title="Time"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="true"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item fd-popover" aria-hidden="true">
                        <div 
                            class="fd-navigation__item fd-popover__control"
                            role="menuitemradio" 
                            title="Basket"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-expanded="true" 
                            aria-selected="false"
                            aria-haspopup="tree"
                            aria-checked="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                            </a>
                        </div>
                        <ul 
                            class="fd-navigation__list-container fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" 
                            role="tree"
                            aria-roledescription="Navigation List Tree"
                            aria-hidden="false">
                            <li class="fd-navigation__list-wrapper fd-popover__wrapper" aria-hidden="true">
                                <div class="fd-navigation__item fd-navigation__item--title" aria-level="1" role="treeitem" aria-expanded="true" aria-selected="false" >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="2" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Menu Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
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
                            title="Sharing"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Menu Item - Group"
                    aria-selected="false"
                    aria-expanded="true"
                    aria-checked="false"
                    aria-hidden="true"
                    aria-haspopup="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item"
                            role="menuitemradio" 
                            title="Settings"
                            aria-roledescription="Navigation List Menu Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                            aria-checked="false"
                            aria-haspopup="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                    tabindex="0">
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
                                                        <span class="fd-navigation__text" id="txt-child-1">Child Item</span>
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
                                                        <span class="fd-navigation__text" id="txt-child-2">Child Item</span>
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

    <div class="fd-navigation__container fd-navigation__container--bottom">
        <ul 
            class="fd-navigation__list" 
            role="tree" 
            aria-roledescription="Navigation List Tree" 
            tabindex="-1">
            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Menu Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
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
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,q=`<div 
    class="fd-navigation fd-navigation--vertical fd-navigation--popup fd-navigation--phone" 
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
                            title="Time"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

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
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="true"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
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

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Sharing"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="false"
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--action" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Sharing</span>
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
                                            title="Folders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Folders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Documents"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Documents</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Files"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Files</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Photos"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Photos</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Audio"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Audio</span>
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
                    title="Favourites Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Settings"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true" 
                            aria-selected="false"
                        >
                            <a class="fd-navigation__link" role="button" tabindex="0"  onclick="toggleNavigationSubmenu(event)">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
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
                                            title="User Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">User Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Profile Settings"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Profile Settings</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Password Change"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Password Change</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Theming"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Theming</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="IT Center"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">IT Center (external link)</span>
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
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Legal"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,J=`<div 
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
                            title="Time"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Time</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>

                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item fd-navigation__item--with-expander" 
                            aria-level="2" 
                            role="treeitem" 
                            title="Basket"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-expanded="true" 
                            aria-selected="true"
                        >
                            <a class="fd-navigation__link" href="#">
                                <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Basket</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                            <button class="fd-button fd-button--nested fd-navigation__expander" aria-label="Expand/Collapse">
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </button>
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
                                            title="Future Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Future Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Current Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Current Orders (selected)</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Past Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Past Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Lost Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__text">Lost Orders</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                        <div 
                                            class="fd-navigation__item fd-navigation__item--child" 
                                            aria-level="3" 
                                            role="treeitem" 
                                            title="Forgotten Orders"
                                            aria-roledescription="Navigation List Tree Item - Child"
                                            aria-expanded="false" 
                                            aria-selected="false"
                                        >
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
                </ul>
            </li>

            <li class="fd-navigation__list-item fd-navigation__list-item--separator" role="presentation" aria-hidden="true">
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item fd-navigation__item--group" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Favourites Group"
                    aria-roledescription="Navigation List Tree Item - Group"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="button" tabindex="0" onclick="toggleNavigationSubmenu(event)">
                        <span class="fd-navigation__text">Favourites</span>
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
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Shield</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </div>
                    </li>
                    <li class="fd-navigation__list-item" aria-hidden="true">
                        <div 
                            class="fd-navigation__item" 
                            aria-level="2" 
                            role="treeitem"
                            title="Shield"
                            aria-roledescription="Navigation List Tree Item - Parent"
                            aria-selected="false"
                            aria-expanded="false"
                        >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--settings" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Settings</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
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
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Help"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--sys-help" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Help</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>

            <li class="fd-navigation__list-item" aria-hidden="true">
                <div 
                    class="fd-navigation__item" 
                    aria-level="1" 
                    role="treeitem" 
                    title="Legal"
                    aria-roledescription="Navigation List Tree Item"
                    aria-selected="false"
                    aria-expanded="false"
                >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--compare" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Legal</span>
                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
`,$={title:"BTP/Navigation/Vertical Navigation",parameters:{description:`The navigation is one of the signature design elements of BTP Tools. 
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

`,tags:["btp","development","horizon-only"]}},s=()=>E;s.storyName="Vertical Navigation - Expanded";s.parameters={docs:{description:{story:`Vertical navigation is the most common and preferred way of navigating BTP tools. It comprises many elements that work together to provide a logical information hierarchy and inform users of their current position.
`}}};const l=()=>J;l.storyName="Vertical Navigation - Parent Navigation as Link";l.parameters={docs:{description:{story:`By default, the Parent Navigation Item functions as a Navigation Group. A small arrow icon shows the item's expanded/collapsed state in this scenario. In the snapped variant, clicking on such a navigation item will open a popover that displays the title and Child Items.
      Although not recommended, the Navigation Item can function for navigation and expansion/collapse. In this case, clicking on the arrow will show/hide Child Items, and clicking on the item will perform the navigation.
`}}};const r=()=>V;r.storyName="Vertical Navigation - Snapped";r.parameters={docs:{description:{story:`The snapped vertical navigation variant reduces the navigation width to free horizontal space.
      `}}};const o=()=>D;o.storyName="Vertical Navigation - Popup";o.parameters={docs:{description:{story:`An alternative to the expanded/snapped variant, which places the navigation items in a popup.
`}}};const d=()=>R;d.storyName="Vertical Navigation - Popup, Tablet";d.parameters={docs:{description:{story:"There are no changes to the popup variant behavior on tablets."}}};const c=()=>j;c.storyName="Vertical Navigation - Snapped, Tablet";c.parameters={docs:{description:{story:`The expanded variant automatically snaps to free space for the content on tablets. The snapped variant is unchanged.
      `}}};const _=()=>q;_.storyName="Vertical Navigation - Popup, Phone";_.parameters={docs:{description:{story:"On phones, the navigation uses only the popup variant. Additionally, the structure and behavior of the content adapt depending on the variant type used on desktops and tablets."}}};var f,g,m;s.parameters=a(n({},s.parameters),{docs:a(n({},(f=s.parameters)==null?void 0:f.docs),{source:n({originalSource:"() => navigationExampleHtml"},(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source)})});var h,u,x;l.parameters=a(n({},l.parameters),{docs:a(n({},(h=l.parameters)==null?void 0:h.docs),{source:n({originalSource:"() => navigationLegacyExampleHtml"},(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});var b,k,N;r.parameters=a(n({},r.parameters),{docs:a(n({},(b=r.parameters)==null?void 0:b.docs),{source:n({originalSource:"() => navigationSnappedExampleHtml"},(N=(k=r.parameters)==null?void 0:k.docs)==null?void 0:N.source)})});var L,I,T;o.parameters=a(n({},o.parameters),{docs:a(n({},(L=o.parameters)==null?void 0:L.docs),{source:n({originalSource:"() => navigationPopupExampleHtml"},(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});var C,P,S;d.parameters=a(n({},d.parameters),{docs:a(n({},(C=d.parameters)==null?void 0:C.docs),{source:n({originalSource:"() => navigationPopupTabletExampleHtml"},(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source)})});var w,y,O;c.parameters=a(n({},c.parameters),{docs:a(n({},(w=c.parameters)==null?void 0:w.docs),{source:n({originalSource:"() => navigationSnappedTabletExampleHtml"},(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source)})});var F,M,H;_.parameters=a(n({},_.parameters),{docs:a(n({},(F=_.parameters)==null?void 0:F.docs),{source:n({originalSource:"() => navigationPopupPhoneExampleHtml"},(H=(M=_.parameters)==null?void 0:M.docs)==null?void 0:H.source)})});const nn=["Navigation","NavigationLegacy","NavigationSnapped","NavigationPopup","NavigationPopupTablet","NavigationSnappedTablet","NavigationPopupPhone"];export{s as Navigation,l as NavigationLegacy,o as NavigationPopup,_ as NavigationPopupPhone,d as NavigationPopupTablet,r as NavigationSnapped,c as NavigationSnappedTablet,nn as __namedExportsOrder,$ as default};
