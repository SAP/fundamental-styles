/* empty css               *//* empty css             *//* empty css                     *//* empty css                *//* empty css               *//* empty css                *//* empty css             *//* empty css                      *//* empty css            *//* empty css              *//* empty css             *//* empty css                      *//* empty css               */const a=`<div style="margin-bottom: 1300px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-label="Cart"
                aria-controls="popoverNotificationsGroup"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverNotificationsGroup');"
                role="button">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge">30</span>
            </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverNotificationsGroup">
            <div class="fd-popover__body-content">
                <div class="fd-notification-popover">
                    <div 
                        class="fd-toolbar fd-toolbar--title fd-toolbar--clear" 
                        role="toolbar" 
                        aria-label="Notifications Header">
                        <h2 class="fd-title fd-title--h4 fd-toolbar__title">Notifications</h2>
                        <span class="fd-toolbar__spacer" aria-hidden="true" role="presentation"></span>
                        <button class="fd-button fd-button--transparent" aria-label="Clear All">Clear All</button>
                        <button aria-label="Sort" title="Sort" class="fd-button fd-button--transparent">
                            <i class="sap-icon--sort"></i>
                        </button>
                        <button aria-label="Settings" title="Settings" class="fd-button fd-button--transparent">
                            <i class="sap-icon--action-settings"></i>
                        </button>
                    </div>
    
                    <div class="fd-notification-message-strip">
                        <div class="fd-message-strip fd-message-strip--error" role="note" aria-live="assertive" id="message-strip-5" aria-labelledby="message-strip-5">
                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                              <span class="sap-icon sap-icon--message-error" focusable="false" role="presentation" aria-hidden="true"></span>
                            </div>
                            <p class="fd-message-strip__text">
                              Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
                            </p>
                        </div>
                    </div>
    
                    <ul class="fd-notification-list" role="list" aria-label="Notifications">
                        <li 
                            class="fd-notification-group" 
                            tabindex="0" 
                            aria-level="1" 
                            aria-posinset="1"
                            aria-setsize="4"
                            aria-description="Notification group expanded" 
                            aria-labelledby="fd-notification-group-title-1">
                            <div class="fd-notification-group__wrapper">
                                <div 
                                    class="fd-notification-group__header" 
                                    tabindex="0" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="fd-notification-group-1" 
                                    title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--navigation-down-arrow" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span 
                                        class="fd-notification-group__header-title" 
                                        role="heading" 
                                        aria-level="2" 
                                        id="fd-notification-group-title-1">
                                        Today
                                    </span>
                                </div>
    
                                <ul 
                                    class="fd-notification-group__list" 
                                    role="list" 
                                    aria-labelledby="fd-notification-group-title-1" 
                                    id="fd-notification-group-1">
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="1"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-1t
                                            fd-notification-title-status-1t
                                            fd-notification-paragraph-1t
                                            fd-notification-footnotes-1t
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i 
                                                    role="presentation" 
                                                    aria-hidden="true" 
                                                    aria-label="Product placeholder" 
                                                    class="fd-avatar__icon sap-icon--product">
                                                </i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-1t" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-1t" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-1t" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-1t">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">11:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="2"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-2t
                                            fd-notification-title-status-2t
                                            fd-notification-paragraph-2t
                                            fd-notification-footnotes-2t
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--account"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-2t" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-2t" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-2t" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-2t">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">12:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="3"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-3t
                                            fd-notification-title-status-3t
                                            fd-notification-paragraph-3t
                                            fd-notification-footnotes-3t
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--task"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-3t" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-3t" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-3t" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-3t">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">13:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="4"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-4t
                                            fd-notification-title-status-4t
                                            fd-notification-paragraph-4t
                                            fd-notification-footnotes-4t
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--retail-store"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-4t" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-4t" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-4t" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-4t">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">14:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="5"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-5t
                                            fd-notification-title-status-5t
                                            fd-notification-paragraph-5t
                                            fd-notification-footnotes-5t
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--travel-expense"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-5t" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-5t" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-5t" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-5t">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">15:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
    
                                <div class="fd-notification-group__growing-item" role="button" tabindex="0" title="More" aria-label="More">
                                    <span class="fd-notification-group__growing-item-title">
                                        More
                                    </span>
                                </div>
                            </div>
                        </li>
    
                        <li 
                            class="fd-notification-group" 
                            tabindex="0" 
                            aria-level="1" 
                            aria-posinset="2"
                            aria-setsize="4"
                            aria-description="Notification group expanded" 
                            aria-labelledby="fd-notification-group-title-2">
                            <div class="fd-notification-group__wrapper">
                                <div 
                                    class="fd-notification-group__header" 
                                    tabindex="0" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="fd-notification-group-2" 
                                    title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--navigation-down-arrow" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span 
                                        class="fd-notification-group__header-title" 
                                        role="heading" 
                                        aria-level="2" id="fd-notification-group-title-2">
                                        Yesterday
                                    </span>
                                </div>
    
                                <ul 
                                    class="fd-notification-group__list" 
                                    role="list" 
                                    aria-labelledby="fd-notification-group-title-2" 
                                    id="fd-notification-group-2">
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="1"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-1y
                                            fd-notification-title-status-1y
                                            fd-notification-paragraph-1y
                                            fd-notification-footnotes-1y
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--opportunity"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-1y" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-1y" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-1y" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-1y">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">11:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="2"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-2y
                                            fd-notification-title-status-2y
                                            fd-notification-paragraph-2y
                                            fd-notification-footnotes-2y
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--inbox"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-2y" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-2y" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-2y" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-2y">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">12:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="3"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-3y
                                            fd-notification-title-status-3y
                                            fd-notification-paragraph-3y
                                            fd-notification-footnotes-3y
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--attachment"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-3y" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-3y" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-3y" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-3y">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">13:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="4"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-4y
                                            fd-notification-title-status-4y
                                            fd-notification-paragraph-4y
                                            fd-notification-footnotes-4y
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--payment-approval"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-4y" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-4y" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-4y" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-4y">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">14:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li 
                                        class="fd-notification" 
                                        aria-level="2"
                                        aria-posinset="5"
                                        aria-setsize="5"
                                        tabindex="0"
                                        aria-labelledby="
                                            fd-notification-title-5y
                                            fd-notification-title-status-5y
                                            fd-notification-paragraph-5y
                                            fd-notification-footnotes-5y
                                        ">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--image-viewer"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 
                                                        id="fd-notification-title-5y" 
                                                        class="fd-notification__title fd-notification__title--unread">
                                                        Notification Title
                                                    </h4>
                                                    <span 
                                                        id="fd-notification-title-status-5y" 
                                                        class="fd-notification__sr-only">
                                                        Unread
                                                    </span>
                                                </div>
                                                <p 
                                                    id="fd-notification-paragraph-5y" 
                                                    class="fd-notification__paragraph">
                                                    Description of notification topic
                                                </p>

                                                <div class="fd-notification__footer" id="fd-notification-footnotes-5y">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-notification__footer-content">15:00</span>
                                                </div>
                                            </div>

                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                                                    <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
    
                        <li 
                            class="fd-notification-group" 
                            tabindex="0" 
                            aria-level="1" 
                            aria-posinset="3"
                            aria-setsize="4"
                            aria-description="Notification group collapsed" 
                            aria-labelledby="fd-notification-group-title-3">
                            <div class="fd-notification-group__wrapper">
                                <div 
                                    class="fd-notification-group__header" 
                                    tabindex="0" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="fd-notification-group-3" 
                                    title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span 
                                        class="fd-notification-group__header-title" 
                                        role="heading" 
                                        aria-level="2" id="fd-notification-group-title-3">
                                        Last Week
                                    </span>
                                </div>
                            </div>
                        </li>
    
                        <li 
                            class="fd-notification-group" 
                            tabindex="0" 
                            aria-level="1" 
                            aria-posinset="4"
                            aria-setsize="4"
                            aria-description="Notification group collapsed" 
                            aria-labelledby="fd-notification-group-title-4">
                            <div class="fd-notification-group__wrapper">
                                <div 
                                    class="fd-notification-group__header" 
                                    tabindex="0" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="fd-notification-group-4" 
                                    title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span 
                                        class="fd-notification-group__header-title" 
                                        role="heading" 
                                        aria-level="2" 
                                        id="fd-notification-group-title-4">Last Month Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit velit consequatur itaque temporibus. Amet aspernatur quos suscipit numquam soluta blanditiis nostrum repellendus. Temporibus accusantium ullam aut aspernatur dolor reprehenderit.</span>
                                </div>
                            </div>
                        </li>
                    </ul>   
                </div>
            </div>
        </div>
    </div>
</div>
`,o=`<div 
    class="fd-notification" 
    tabindex="0"
    aria-labelledby="
        fd-object-status-1
        fd-notification-status-1
        fd-notification-title-1
        fd-notification-title-status-1
        fd-notification-paragraph-1
        fd-notification-footnotes-1
    ">
    
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span 
                    id="fd-notification-status-1"
                    class="sap-icon sap-icon--error sap-icon--color-negative" 
                    aria-label="Status Negative"
                    title="Status Icon Negative">
                </span>

                <h4 
                    id="fd-notification-title-1" 
                    class="fd-notification__title fd-notification__title--unread">
                    Notification Title
                </h4>
                
                <span 
                    id="fd-notification-title-status-1" 
                    class="fd-notification__sr-only">
                    Unread
                </span>
            </div>
            <p 
                id="fd-notification-paragraph-1" 
                class="fd-notification__paragraph">
                Description of notification topic
            </p>

            <div class="fd-notification__footer" id="fd-notification-footnotes-1">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">11:11</span>
                <a 
                    href="#" 
                    role="button" 
                    tabindex="0" 
                    aria-expanded="false" 
                    aria-disabled="false" 
                    class="fd-link fd-notification__link" 
                    aria-label="More button. Show the full texts."
                    title="More button. Show the full texts.">
                    <span class="fd-link__content">More</span>
                </a>
            </div>

            <span 
                id="fd-object-status-1"
                class="fd-object-status fd-object-status--inverted fd-object-status--indication-2b">
                <i class="fd-object-status__icon sap-icon--high-priority" role="presentation" aria-hidden="true"></i>
                <span class="fd-object-status__text">Important</span>
                <span class="fd-object-status__sr-only">Tag</span>
            </span>
        </div>

        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div 
    class="fd-notification" 
    tabindex="0"
    aria-labelledby="
        fd-notification-status-2
        fd-notification-title-2
        fd-notification-title-status-2
        fd-notification-paragraph-2
        fd-notification-footnotes-2
    ">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span 
                    id="fd-notification-status-2"
                    class="sap-icon sap-icon--sys-enter-2 sap-icon--color-positive" 
                    aria-label="Status Positive"
                    title="Status Icon Positive">
                </span>

                <h4 
                    id="fd-notification-title-2" 
                    class="fd-notification__title">
                    Notification Title lorem ipsum dolor sit amet, consectetur adipisicing elit. Et expedita quis adipisci libero culpa inventore sequi blanditiis nobis doloremque amet optio atque officia facilis reprehenderit ex nesciunt, dicta, beatae molestias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sequi corporis eius voluptatem praesentium, et sapiente enim facere. Ratione totam fuga laudantium quibusdam ducimus iste. Delectus eligendi debitis labore quam!
                </h4>
                
                <span 
                    id="fd-notification-title-status-2" 
                    class="fd-notification__sr-only">
                    Read
                </span>
            </div>
            <p 
                id="fd-notification-paragraph-2" 
                class="fd-notification__paragraph">
                Description of notification topic lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, impedit fuga sit eligendi cumque laborum quae id. Dolor nesciunt voluptatum, dolorem reprehenderit animi expedita harum fugit blanditiis quaerat vitae aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima libero suscipit quidem sequi dolores? Natus necessitatibus, reprehenderit, repudiandae incidunt ipsam, unde molestiae doloremque distinctio ad placeat dolorem labore quasi!
            </p>

            <div class="fd-notification__footer" id="fd-notification-footnotes-2">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">11:11</span>
                <a 
                    href="#" 
                    role="button" 
                    tabindex="0" 
                    aria-expanded="false" 
                    aria-disabled="false" 
                    class="fd-link fd-notification__link" 
                    aria-label="More button. Show the full texts."
                    title="More button. Show the full texts.">
                    <span class="fd-link__content">More</span>
                </a>
            </div>
        </div>

        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
            </button>
            <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div 
    class="fd-notification" 
    tabindex="0"
    aria-labelledby="
        fd-notification-status-3
        fd-notification-title-3
        fd-notification-title-status-3
        fd-notification-paragraph-3
        fd-notification-footnotes-3
    ">
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span 
                    id="fd-notification-status-3"
                    class="sap-icon sap-icon--information sap-icon--color-information" 
                    aria-label="Status Negative"
                    title="Status Icon Information">
                </span>

                <h4 
                    id="fd-notification-title-3" 
                    class="fd-notification__title">
                    Notification Title
                </h4>
                
                <span 
                    id="fd-notification-title-status-3" 
                    class="fd-notification__sr-only">
                    Read
                </span>
            </div>
            <p 
                id="fd-notification-paragraph-3" 
                class="fd-notification__paragraph">
                Description of notification
            </p>

            <div class="fd-notification__footer" id="fd-notification-footnotes-3">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">10:20</span>
            </div>
        </div>

        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="More Actions" title="More Actions" tabindex="0">
                <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
            </button>
            <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div 
    class="fd-notification" 
    tabindex="0"
    aria-labelledby="
        fd-notification-title-4
        fd-notification-title-status-4
        fd-notification-paragraph-4
        fd-notification-footnotes-4
    ">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar" aria-hidden="true">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
 
                <h4 
                    id="fd-notification-title-4" 
                    class="fd-notification__title fd-notification__title--unread">
                    Notification Title
                </h4>
                
                <span 
                    id="fd-notification-title-status-4" 
                    class="fd-notification__sr-only">
                    Unread
                </span>
            </div>
            <p 
                id="fd-notification-paragraph-4" 
                class="fd-notification__paragraph">
                Description of notification topic
            </p>

            <div class="fd-notification__footer" id="fd-notification-footnotes-4">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                <span class="fd-notification__footer-content">11:11</span>
            </div>
        </div>

        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>

`,e=`<div style="position: relative; width: 100%; min-height: 600px; border: 2px solid #a5a2a2">
    <div class="fd-notification-banner">
        <div 
            class="fd-notification" 
            role="alert"
            tabindex="0"
            aria-labelledby="
                fd-notification-title-1b
                fd-notification-title-status-1b
                fd-notification-paragraph-1b
                fd-notification-footnotes-1b
            ">
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
                    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
                </span>
                <div class="fd-notification__content">
                    <div class="fd-notification__header">
        
                        <h4 
                            id="fd-notification-title-1b" 
                            class="fd-notification__title fd-notification__title--unread">
                            Notification Title
                        </h4>
                        
                        <span 
                            id="fd-notification-title-status-1b" 
                            class="fd-notification__sr-only">
                            Unread
                        </span>
                    </div>
                    <p 
                        id="fd-notification-paragraph-1b" 
                        class="fd-notification__paragraph">
                        Description of notification topic
                    </p>

                    <div class="fd-notification__footer" id="fd-notification-footnotes-1b">
                        <span class="fd-notification__footer-content">Product Name</span>
                        <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                        <span class="fd-notification__footer-content">Feature Name</span>
                        <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                        <span class="fd-notification__footer-content">11:11</span>
                    </div>
                </div>

                <div class="fd-notification__actions">
                    <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>

        <div 
            class="fd-notification" 
            role="alert"
            tabindex="0"
            aria-labelledby="
                fd-notification-title-2b
                fd-notification-title-status-2b
                fd-notification-paragraph-2b
                fd-notification-footnotes-2b
            ">
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
                    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
                </span>
                <div class="fd-notification__content">
                    <div class="fd-notification__header">
        
                        <h4 
                            id="fd-notification-title-2b" 
                            class="fd-notification__title fd-notification__title--unread">
                            Notification Title
                        </h4>
                        
                        <span 
                            id="fd-notification-title-status-2b" 
                            class="fd-notification__sr-only">
                            Unread
                        </span>
                    </div>
                    <p 
                        id="fd-notification-paragraph-2b" 
                        class="fd-notification__paragraph">
                        Description of notification topic
                    </p>

                    <div class="fd-notification__footer" id="fd-notification-footnotes-2b">
                        <span class="fd-notification__footer-content">Product Name</span>
                        <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                        <span class="fd-notification__footer-content">Feature Name</span>
                        <span class="fd-notification__separator" role="presentation" aria-hidden="true"></span>
                        <span class="fd-notification__footer-content">11:11</span>
                    </div>
                </div>

                <div class="fd-notification__actions">
                    <button class="fd-button fd-button--transparent" aria-label="Close" title="Close" tabindex="0">
                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`,g={title:"Components/Notifications",parameters:{tags:["development"],description:`
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

##Usage
**Use notifications if:**

* You want to make users aware of situations that require attention.
* You intend to reduce the amount of information and actions to a minimum, but provide enough information to highlight the level of importance.
            `,components:["button","icon","notification","tabs","avatar","popover","menu","message-strip","dialog","bar","title"]}},n=()=>o;n.storyName="Notification Item";n.parameters={docs:{description:{story:`Notification items display a container with:
<ul>
  <li><b>Avatar</b> (optional): uses Avatar component, size XS</li>
  <li><b>Title</b> (required): the title wraps up to two lines and then truncates. For unread title (renders with bold font-weight) use <code>fd-notification__title--unread</code> modifier class.</li>
  <li><b>Description</b> (optional): the description wraps up to two lines and then truncates.</li>
  <li><b>Meta</b> (optional): items separated by a span element with class <code>fd-notification__separator</code>. Items truncate if there's not enough space. In case Title or Description truncates in an ellipsis, the meta is followed by the text <b>Expansion Trigger</b> ("More" / "Less"). </li>
  <li><b>Priority Indicator</b> (optional): the priority is displayed using Message and Status Icons.  </li>
  <li><b>Object Status</b> (optional): uses Inverted ObjectStatus / Tag (Horizon) - Inverted Object Status with icon, indication color: Second Color Set - Indication 2 - Red</li>
  <li><b>Actions</b> (optional): include a "Close" and "Overflow" button (Transparent Button) actions.</li>
</ul>
`}}};const i=()=>a;i.parameters={docs:{description:{story:`You can display a group of notifications in a list format, and the user can sort them from the header. A Message Strip can be places after the group header. To load more notifications, the list can have a Growing Item placed at the bottom of the group. 
    `}}};const t=()=>e;t.parameters={docs:{description:{story:"Notifications can be displayed as banners in the top right corner. Apply the modifier class `fd-notification--banner` for this option."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => notificationGroupExampleHtml",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => bannerExampleHtml",...t.parameters?.docs?.source}}};const y=["Primary","NotificationGroup","NotificationBanner"];export{t as NotificationBanner,i as NotificationGroup,n as Primary,y as __namedExportsOrder,g as default};
