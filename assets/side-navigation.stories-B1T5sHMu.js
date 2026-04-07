/* empty css                        *//* empty css               *//* empty css             *//* empty css                */const s=`<div style="height: 50rem;">
    <div style="height: 35rem;">
        <nav class="fd-side-nav is-collapsed" aria-roledescription="Main Navigation" id="fd-side-nav">
            <div class="fd-side-nav__container fd-side-nav__container--top">
                <ul class="fd-navigation-list level-1" role="menubar" aria-roledescription="Navigation List Tree">
                    <li class="fd-navigation-list__item" role="none">
                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Home" aria-checked="false" tabindex="0">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--home" role="presentation"></i>
                                </span>
                                <span class="fd-navigation-list__text">Home</span>
                            </div>
                        </a>
                    </li>
    
                    <li class="fd-navigation-list__item" role="none">
                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Favorites" aria-checked="false" tabindex="0">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--unfavorite" role="presentation"></i>
                                </span>
                                <span class="fd-navigation-list__text">Favorites</span>
                            </div>
                        </a>
                    </li>
    
                    <li class="fd-navigation-list__item" role="none">
                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Customer Management" aria-checked="false" tabindex="0">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--account" role="presentation"></i>
                                </span>
                                <span class="fd-navigation-list__text">Customer Management</span>
                            </div>
                        </a>
                    </li>
    
                    <li class="fd-navigation-list__item fd-navigation-list__item--group" role="none">
                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0" aria-expanded="false">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__text">Navigation Group</span>
                            </div>
                            <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </div>
                        </a>
                        <ul class="fd-navigation-list level-1" role="group">
                            <li class="fd-navigation-list__item fd-popover" role="none">
                                <a class="fd-navigation-list__content fd-popover__control" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0" aria-expanded="true" aria-controls="sideNavPopover1" aria-haspopup="menu" onclick="onPopoverClick('sideNavPopover1');">
                                    <div class="fd-navigation-list__content-container">
                                        <span class="fd-navigation-list__icon">
                                            <i class=" sap-icon--crm-sales" role="presentation"></i>
                                        </span>
                                        <span class="fd-navigation-list__text">Sales</span>
                                    </div>
                                    <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                    </div>
                                </a>
                                <div id="sideNavPopover1" class="fd-navigation-list__popover-body fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" role="dialog">
                                   <div class="fd-popover__wrapper">
                                        <div class="fd-navigation-list__item">
                                        <a class="fd-navigation-list__content" role="heading" id="side-nav-item-1" tabindex="0">
                                            <div class="fd-navigation-list__content-container">
                                                <span class="fd-navigation-list__icon">
                                                    <i class=" sap-icon--crm-sales" role="presentation"></i>
                                                </span>
                                                <span class="fd-navigation-list__text">Sales</span>
                                            </div>
                                        </a>
    
                                        <ul class="fd-navigation-list level-2" role="menu" aria-labelledby="side-nav-item-1">
                                            <li class="fd-navigation-list__item" role="none">
                                                <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                                    <div class="fd-navigation-list__content-container">
                                                        <span class="fd-navigation-list__text">Leads</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="fd-navigation-list__item" role="none">
                                                <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                                    <div class="fd-navigation-list__content-container">
                                                        <span class="fd-navigation-list__text">Opportunities</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        </div>
                                   </div>
                                </div>
                            </li>
                            <li class="fd-navigation-list__item" role="none">
                                <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                    <div class="fd-navigation-list__content-container">
                                        <span class="fd-navigation-list__icon">
                                            <i class=" sap-icon--customer-view" role="presentation"></i>
                                        </span>
                                        <span class="fd-navigation-list__text">Products</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-navigation-list__item" role="none">
                                <a class="fd-navigation-list__content" role="menuitemradio" aria-label=Marketing" aria-checked="false" tabindex="0">
                                    <div class="fd-navigation-list__content-container">
                                        <span class="fd-navigation-list__icon">
                                            <i class=" sap-icon--marketing-campaign" role="presentation"></i>
                                        </span>
                                        <span class="fd-navigation-list__text">Marketing</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-navigation-list__item" role="none">
                                <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Reports" aria-checked="false" tabindex="0" aria-expanded="false">
                                    <div class="fd-navigation-list__content-container">
                                        <span class="fd-navigation-list__icon">
                                            <i class=" sap-icon--manager-insight" role="presentation"></i>
                                        </span>
                                        <span class="fd-navigation-list__text">Reports</span>
                                    </div>
                                    <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                    </div>
                                </a>
                                <ul class="fd-navigation-list level-2" role="group" style="display: none;">
                                    <li class="fd-navigation-list__item" role="none">
                                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                            <div class="fd-navigation-list__content-container">
                                                <span class="fd-navigation-list__text">Sales Reports</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="fd-navigation-list__item" role="none">
                                        <a class="fd-navigation-list__content is-selected" role="menuitemradio" aria-label="Nav Item" aria-checked="true" tabindex="0">
                                            <div class="fd-navigation-list__content-container">
                                                <span class="fd-navigation-list__text">Customer Reports</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="fd-navigation-list__item" role="none">
                                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                            <div class="fd-navigation-list__content-container">
                                                <span class="fd-navigation-list__text">Marketing Reports</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    
                    <li class="fd-navigation-list__item fd-popover" role="none">
                        <a class="fd-navigation-list__content is-selected fd-popover__control" role="menuitemradio" aria-label="Nav Item" aria-checked="true" tabindex="0" aria-expanded="true" aria-controls="sideNavPopover2" aria-haspopup="menu" onclick="onPopoverClick('sideNavPopover2');">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--overflow" role="presentation"></i>
                                </span>
                            </div>
                        </a>
                        <div id="sideNavPopover2" class="fd-navigation-list__popover-body fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" role="dialog">
                           <ul class="fd-popover__wrapper fd-navigation-list level-1" role="menu">
                                <li class="fd-navigation-list__item">
                                    <a class="fd-navigation-list__content" role="menuitemradio" id="side-nav-item-4" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__icon">
                                                <i class=" sap-icon--shield" role="presentation"></i>
                                            </span>
                                            <span class="fd-navigation-list__text">Sales and Procurement</span>
                                        </div>
                                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                        </div>
                                    </a>

                                    <ul class="fd-navigation-list level-2" role="menu" aria-labelledby="side-nav-item-4">
                                        <li class="fd-navigation-list__item" role="none">
                                            <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Nav Item" aria-checked="false" tabindex="0">
                                                <div class="fd-navigation-list__content-container">
                                                    <span class="fd-navigation-list__text">Royalty Reporting</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="fd-navigation-list__item" role="none">
                                            <a class="fd-navigation-list__content is-selected" role="menuitemradio" aria-label="Nav Item" aria-checked="true" tabindex="0">
                                                <div class="fd-navigation-list__content-container">
                                                    <span class="fd-navigation-list__text">Purchasing Retail</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Manufacturing" aria-checked="false" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__icon">
                                                <i class=" sap-icon--official-service" role="presentation"></i>
                                            </span>
                                            <span class="fd-navigation-list__text">Manufacturing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Help" aria-checked="false" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__icon">
                                                <i class=" sap-icon--sys-help" role="presentation"></i>
                                            </span>
                                            <span class="fd-navigation-list__text">Help</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Finance" aria-checked="false" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__icon">
                                                <i class=" sap-icon--customer-financial-fact-sheet" role="presentation"></i>
                                            </span>
                                            <span class="fd-navigation-list__text">Finance</span>
                                        </div>
                                    </a>
                                </li>
                           </ul>
                        </div>
                    </li>
                </ul>
            </div>
    
            <div class="fd-side-nav__separator" role="separator" aria-orientation="horizontal" aria-roledescription="Side Navigation Separator"></div>
    
            <div  class="fd-side-nav__container fd-side-nav__container--bottom">
                <ul class="fd-navigation-list level-1" role="menubar" aria-roledescription="Navigation List Tree" tabindex="-1">
                    <li class="fd-navigation-list__item fd-navigation-list__item--quick-create" role="none">
                        <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--add" role="presentation"></i>
                                </span>
                                <span class="fd-navigation-list__text">Quick Create</span>
                            </div>
                        </a>
                    </li>
        
                    <li class="fd-navigation-list__item" role="none">
                        <a class="fd-navigation-list__content" role="menuitemradio" aria-label="Product Settings" aria-checked="false" tabindex="0">
                            <div class="fd-navigation-list__content-container">
                                <span class="fd-navigation-list__icon">
                                    <i class=" sap-icon--settings" role="presentation"></i>
                                </span>
                                <span class="fd-navigation-list__text">Product Settings</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>



`,e=`<div style="height: 86rem;">
    <nav class="fd-side-nav" aria-roledescription="Main Navigation" id="fd-side-nav" style="width: 18rem;">
        <div class="fd-side-nav__container fd-side-nav__container--top">
            <ul class="fd-navigation-list level-1" role="tree" aria-roledescription="Navigation List Tree">
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content is-selected" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--home" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Home</span>
                        </div>
                    </a>
                </li>
                
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--unfavorite" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Favorites</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">My Accounts</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">My Orders</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--account" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Customer Management</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Contacts</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Companies</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Partners</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
               
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--crm-sales" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Sales</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Leads</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Opportunities</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Quotes</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Orders</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Invoices</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--customer-view" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Products</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Product Catalog</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Pricing</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Inventory Management</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--marketing-campaign" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Marketing</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Campaigns</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">E-Mail Marketing</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Marketing Automation</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class="sap-icon--manager-insight" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Reports</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-2" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Sales Reports</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Customer Reports</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__text">Marketing Reports</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </div>

        <div class="fd-side-nav__separator" role="separator" aria-orientation="horizontal" aria-roledescription="Side Navigation Separator"></div>

        <div  class="fd-side-nav__container fd-side-nav__container--bottom">
            <ul class="fd-navigation-list level-1" role="tree" tabindex="-1" aria-roledescription="Navigation List Tree">
                <li class="fd-navigation-list__item fd-navigation-list__item--quick-create" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--add" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Quick Create</span>
                        </div>
                    </a>
                </li>
    
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--settings" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Product Settings</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>



`,o=`<div style="height: 50rem;">
    <nav class="fd-side-nav" aria-roledescription="Main Navigation" id="fd-side-nav" style="width: 18rem;">
        <div class="fd-side-nav__container fd-side-nav__container--top">
            <ul class="fd-navigation-list level-1" role="tree" aria-roledescription="Navigation List Tree">
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--home" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Home</span>
                        </div>
                    </a>
                </li>
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--unfavorite" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Favorites</span>
                        </div>
                    </a>
                </li>

                <li class="fd-navigation-list__item fd-navigation-list__item--group" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__text">Cusomers</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-1" role="group">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--account" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Customer Management</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Contacts</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content is-selected" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Companies</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Partners</span>
                                        </div>
                                        <div class="fd-navigation-list__indication-arrow" role="presentation" aria-hidden="true">
                                            <i class="sap-icon--arrow-right" role="presentation"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                       
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--crm-sales" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Sales</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Leads</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Opportunities</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Quotes</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Orders</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Invoices</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--customer-view" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Products</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Product Catalog</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Pricing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Inventory Management</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="fd-navigation-list__item fd-navigation-list__item--two-click" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="false">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--customer-view" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Marketing</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group" style="display: none;">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Campaigns</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content is-selected" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">E-Mail Marketing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Marketing Automation</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--manager-insight" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Reports</span>
                                </div>
                                <div class="fd-navigation-list__indication-arrow" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--arrow-right" role="presentation"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="fd-navigation-list__item fd-navigation-list__item--group" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="false">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__text">Recents</span>
                        </div>
                        <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                            <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                        </div>
                    </a>
                    <ul class="fd-navigation-list level-1" role="group" style="display: none;">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--palette" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Nav Item</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Child Item</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content is-selected" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Child Item</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Child Item</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--sales-notification" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Nav Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--nurse" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Nav Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--travel-request" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Nav Item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>                  
            </ul>
        </div>

        <div class="fd-side-nav__separator" role="separator" aria-orientation="horizontal" aria-roledescription="Side Navigation Separator"></div>

        <div  class="fd-side-nav__container fd-side-nav__container--bottom">
            <ul class="fd-navigation-list level-1" role="tree" tabindex="-1" aria-roledescription="Navigation List Tree">
                <li class="fd-navigation-list__item fd-navigation-list__item--quick-create" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--add" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Quick Create</span>
                        </div>
                    </a>
                </li>
    
                <li class="fd-navigation-list__item" role="none">
                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                        <div class="fd-navigation-list__content-container">
                            <span class="fd-navigation-list__icon">
                                <i class=" sap-icon--settings" role="presentation"></i>
                            </span>
                            <span class="fd-navigation-list__text">Product Settings</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>



`,l=`<div style="height: 90rem;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-label="Cart"
                aria-controls="sideNavFloating"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('sideNavFloating');"
                role="button">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="sideNavFloating">
            <nav class="fd-side-nav" aria-roledescription="Main Navigation" id="fd-side-nav" style="width: 18rem;">
                <div class="fd-side-nav__container fd-side-nav__container--top">
                    <ul class="fd-navigation-list level-1" role="tree" aria-roledescription="Navigation List Tree">
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content is-selected" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--home" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Home</span>
                                </div>
                            </a>
                        </li>
                        
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--unfavorite" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Favorites</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">My Accounts</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">My Orders</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
        
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--account" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Customer Management</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Contacts</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Companies</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Partners</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                       
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--crm-sales" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Sales</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Leads</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Opportunities</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Quotes</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Orders</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Invoices</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
        
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--customer-view" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Products</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Product Catalog</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Pricing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Inventory Management</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
        
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--customer-view" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Marketing</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Campaigns</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">E-Mail Marketing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Marketing Automation</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
        
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0" aria-expanded="true">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class="sap-icon--manager-insight" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Reports</span>
                                </div>
                                <div class="fd-navigation-list__navigation-indicator" role="presentation" aria-hidden="true">
                                    <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                                </div>
                            </a>
                            <ul class="fd-navigation-list level-2" role="group">
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Campaigns</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">E-Mail Marketing</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="fd-navigation-list__item" role="none">
                                    <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                        <div class="fd-navigation-list__content-container">
                                            <span class="fd-navigation-list__text">Marketing Automation</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
        
                <div class="fd-side-nav__separator" role="separator" aria-orientation="horizontal" aria-roledescription="Side Navigation Separator"></div>
        
                <div  class="fd-side-nav__container fd-side-nav__container--bottom">
                    <ul class="fd-navigation-list level-1" role="tree" tabindex="-1" aria-roledescription="Navigation List Tree">
                        <li class="fd-navigation-list__item fd-navigation-list__item--quick-create" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--add" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Quick Create</span>
                                </div>
                            </a>
                        </li>
            
                        <li class="fd-navigation-list__item" role="none">
                            <a class="fd-navigation-list__content" role="treeitem" tabindex="0">
                                <div class="fd-navigation-list__content-container">
                                    <span class="fd-navigation-list__icon">
                                        <i class=" sap-icon--settings" role="presentation"></i>
                                    </span>
                                    <span class="fd-navigation-list__text">Product Settings</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>









    
</div>



`,v={title:"Components/Side Navigation",parameters:{description:`The Side Navigation is an additional option to add a navigation to an application. Same as the vertical navigation it offers the user easy access to multiple pages per space. Side Navigation is triggered by the Menu Icon in Shellbar and can be hidden, collapsed or expanded.

## Anatomy
The Side Navigation consists of the following elements: <br>
<ul>
  <li>**<code>.fd-side-nav</code>**: navigation container. **<code>.is-collapsed</code>** class is added for collapsed state.</li>
  <li>**<code>.fd-side-nav\\_\\_container</code>** with modifier classes **<code>.fd-side-nav\\_\\_container--top</code>** for the main navigation and **<code>.fd-side-nav\\_\\_container--bottom</code>** for the footer navigation.</li>
  <li>**<code>.fd-side-nav\\_\\_separator</code>** separator between the main and footer area. </li>
</ul>


The List structure is based on **Navigation List** 
<ul>
  <li>
    **<code>.fd-navigation-list</code>** with modifier classes **<code>.level-1</code>** and **<code>.level-2</code>** 
  </li>
  <li>
    **<code>.fd-navigation-list\\_\\_item</code>**
    <ul>
        <li>**<code>.fd-navigation-list\\_\\_item--group</code>**</li>
        <li>**<code>.fd-navigation-list\\_\\_item--quick-create</code>** </li>
        <li>**<code>.fd-navigation-list\\_\\_item--two-click</code>**</li>
    </ul>
  </li>
  <li>**<code>.fd-navigation-list\\_\\_content</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_content-container</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_icon</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_text</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_navigation-indicator</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_indication-arrow</code>**</li>
</ul>

        `,tags:[]}},n=()=>e;n.storyName="Expanded State, Defaut (fixed) Style";n.parameters={docs:{description:{story:""}}};const i=()=>o;i.storyName="Expanded State, Defaut (fixed) Style with Additional Features (Grouping, Two-click items, External Navigation)";i.parameters={docs:{description:{story:""}}};const a=()=>s;a.storyName="Collapsed State, Defaut (fixed) Style";a.parameters={docs:{description:{story:""}}};const t=()=>l;t.storyName="Floating (Overlay) Style, Always Expanded";t.parameters={docs:{description:{story:"Additional to the fixed default style a floating variant of the Side Navigation is possible. This is always expanded."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => expandedExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => expandedAddExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => collapsedExampleHtml",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => floatingExampleHtml",...t.parameters?.docs?.source}}};const g=["Expanded","ExpandedAdd","Collapsed","Floating"];export{a as Collapsed,n as Expanded,i as ExpandedAdd,t as Floating,g as __namedExportsOrder,v as default};
