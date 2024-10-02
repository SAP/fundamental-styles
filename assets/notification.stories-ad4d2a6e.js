var h=Object.defineProperty,q=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(n,i,a)=>i in n?h(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a,t=(n,i)=>{for(var a in i||(i={}))x.call(i,a)&&l(n,a,i[a]);if(c)for(var a of c(i))y.call(i,a)&&l(n,a,i[a]);return n},o=(n,i)=>q(n,N(i));/* empty css               *//* empty css             *//* empty css                     *//* empty css                *//* empty css               *//* empty css                *//* empty css             *//* empty css                      *//* empty css            *//* empty css              *//* empty css             *//* empty css                      *//* empty css               */const w=`<div style="margin-bottom: 1300px">
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
            </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverNotificationsGroup">
            <div class="fd-popover__body-content">
                <div class="fd-notification-popover">
                    <div class="fd-toolbar fd-toolbar--title fd-toolbar--clear" role="toolbar" aria-label="Title toolbar">
                        <h2 class="fd-title fd-title--h4 fd-toolbar__title">Notifications (30)</h2>
                        <span class="fd-toolbar__spacer"></span>
                        <button class="fd-button fd-button--transparent">Clear All</button>
                        <button aria-label="Add to cart" class="fd-button fd-button--transparent">
                            <i class="sap-icon--sort"></i>
                        </button>
                        <button aria-label="Add to cart" class="fd-button fd-button--transparent">
                            <i class="sap-icon--settings"></i>
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
                        <li class="fd-notification-group" tabindex="0" aria-level="1" aria-description="Notification group expanded" aria-labelledby="fd-notification-title-1">
                            <div class="fd-notification-group__wrapper">
                                <div class="fd-notification-group__header" tabindex="0" role="button" aria-expanded="false" aria-controls="fd-notification-group-1" title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--navigation-down-arrow" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span class="fd-notification-group__header-title" role="heading" aria-level="3" id="fd-notification-title-1">Today</span>
                                </div>
    
                                <ul class="fd-notification-group__list" role="list" aria-labelledby="fd-notification-title-1" id="fd-notification-group-1">
                                    <li class="fd-notification is-selected" aria-level="2" tabindex="-1">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 class="fd-notification__title fd-notification__title--unread">Notification Title (unread) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipiscisolutavolup? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae.</h4>
                                                </div>
                                                <p class="fd-notification__paragraph">Description of notification topic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipisci soluta odio voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae. Non?</p>
                                                <div class="fd-notification__footer">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">11:11</span>
                                                    <a href="#" class="fd-link fd-notification__link" tabindex="0"><span class="fd-link__content">More</span></a>
                                                </div>
                                                <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2b">
                                                    <i class="fd-object-status__icon sap-icon--high-priority" role="presentation"></i>
                                                    <span class="fd-object-status__text">Important</span>
                                                </span>
                                            </div>
                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More">
                                                    <i class="sap-icon--overflow"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent " aria-label="Close">
                                                    <i class="sap-icon--decline"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="fd-notification" aria-level="2" tabindex="-1">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--xs" role="img" aria-label="Avatar">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--wallet"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 class="fd-notification__title fd-notification__title--unread">Notification Title (unread) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipiscisolutavolup? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae.</h4>
                                                </div>
                                                <p class="fd-notification__paragraph">Description of notification topic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipisci soluta odio voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae. Non?</p>
                                                <div class="fd-notification__footer">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">14:20</span>
                                                    <a href="#" class="fd-link fd-notification__link" tabindex="0"><span class="fd-link__content">More</span></a>
                                                </div>
                                            </div>
                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More">
                                                    <i class="sap-icon--overflow"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent " aria-label="Close">
                                                    <i class="sap-icon--decline"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
    
                                <div class="fd-notification-group__growing-item" role="button" tabindex="0">
                                    <span class="fd-notification-group__growing-item-title">
                                        More
                                    </span>
                                </div>
                            </div>
                        </li>
    
                        <li class="fd-notification-group" tabindex="0" aria-level="1" aria-description="Notification group expanded" aria-labelledby="fd-notification-title-2">
                            <div class="fd-notification-group__wrapper">
                                <div class="fd-notification-group__header" tabindex="0" role="button" aria-expanded="false" aria-controls="fd-notification-group-2" title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--navigation-down-arrow" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span class="fd-notification-group__header-title" role="heading" aria-level="3" id="fd-notification-title-2">Yesterday</span>
                                </div>
    
                                <ul class="fd-notification-group__list" role="list" aria-labelledby="fd-notification-title-2" id="fd-notification-group-2">
                                    <li class="fd-notification" aria-level="2" tabindex="-1">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" role="img" aria-label="Avatar">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--cart-approval"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 class="fd-notification__title">Notification Title</h4>
                                                </div>
                                                <p class="fd-notification__paragraph">Description of notification topic</p>
                                                <div class="fd-notification__footer">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">10:30</span>
                                                </div>
                                            </div>
                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More">
                                                    <i class="sap-icon--overflow"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent " aria-label="Close">
                                                    <i class="sap-icon--decline"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="fd-notification" aria-level="2" tabindex="-1">
                                        <div class="fd-notification__body">
                                            <span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--xs" role="img" aria-label="Avatar">
                                                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--travel-expense"></i>
                                            </span>
                                            <div class="fd-notification__content">
                                                <div class="fd-notification__header">
                                                    <h4 class="fd-notification__title fd-notification__title--unread">Notification Title (unread)</h4>
                                                </div>
                                                <p class="fd-notification__paragraph">Description of notification topic lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, assumenda. Quo dolores aperiam, repellendus animi dolorem rerum.</p>
                                                <div class="fd-notification__footer">
                                                    <span class="fd-notification__footer-content">Product Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">Feature Name</span>
                                                    <span class="fd-notification__separator"></span>
                                                    <span class="fd-notification__footer-content">11:30</span>
                                                </div>
                                            </div>
                                            <div class="fd-notification__actions">
                                                <button class="fd-button fd-button--transparent" aria-label="More">
                                                    <i class="sap-icon--overflow"></i>
                                                </button>
                                                <button class="fd-button fd-button--transparent " aria-label="Close">
                                                    <i class="sap-icon--decline"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
    
                        <li class="fd-notification-group" tabindex="0" aria-level="1" aria-description="Notification group collapsed" aria-labelledby="fd-notification-title-3">
                            <div class="fd-notification-group__wrapper">
                                <div class="fd-notification-group__header" tabindex="0" role="button" aria-expanded="false" aria-controls="fd-notification-group-3" title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span class="fd-notification-group__header-title" role="heading" aria-level="3" id="fd-notification-title-3">Last Week</span>
                                </div>
                            </div>
                        </li>
    
                        <li class="fd-notification-group" tabindex="0" aria-level="1" aria-description="Notification group collapsed" aria-labelledby="fd-notification-title-4">
                            <div class="fd-notification-group__wrapper">
                                <div class="fd-notification-group__header" tabindex="0" role="button" aria-expanded="false" aria-controls="fd-notification-group-3" title="Expand/Collapse">
                                    <span class="fd-notification-group__header-arrow">
                                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                                    </span>
                                    <span class="fd-notification-group__header-title" role="heading" aria-level="3" id="fd-notification-title-4">Last Month Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit velit consequatur itaque temporibus. Amet aspernatur quos suscipit numquam soluta blanditiis nostrum repellendus. Temporibus accusantium ullam aut aspernatur dolor reprehenderit.</span>
                                </div>
                            </div>
                        </li>
                    </ul>   
                </div>
            </div>
        </div>
    </div>
</div>
`,L=`<div class="fd-notification" tabindex="0">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span class="sap-icon sap-icon--error sap-icon--color-negative"></span>
                <h4 class="fd-notification__title fd-notification__title--unread">Notification Title (unread) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt, assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipiscisolutavolup? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae.</h4>
            </div>
            <p class="fd-notification__paragraph">Description of notification topic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt, assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipisci soluta odio voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae. Non?</p>
            <div class="fd-notification__footer">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">11:11</span>
                <a href="#" class="fd-link fd-notification__link" tabindex="0"><span class="fd-link__content">More</span></a>
            </div>
            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2b">
                <i class="fd-object-status__icon sap-icon--high-priority" role="presentation"></i>
                <span class="fd-object-status__text">Important</span>
            </span>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div class="fd-notification" tabindex="0">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span class="sap-icon sap-icon--sys-enter-2 sap-icon--color-positive"></span>
                <h4 class="fd-notification__title">Notification Title Notification Title (unread) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt, assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipisci soluta odio voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae.</h4>
            </div>
            <p class="fd-notification__paragraph">Description of notification topic lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur quisquam suscipit odio. Nesciunt, assumenda. Quo dolores aperiam, repellendus animi dolorem rerum cumque fugiat corrupti pariatur, adipisci soluta odio voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto aut nobis facere, eius ea accusantium dolores quae, alias molestiae repudiandae doloremque repellat quisquam voluptatum fugiat id magnam, vitae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quas pariatur at eveniet inventore dolorum fugiat, cum animi ullam quisquam reiciendis aperiam quibusdam sapiente nobis atque omnis quae.</p>
            <div class="fd-notification__footer">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">11:11</span>
                <a href="#" class="fd-link fd-notification__link" tabindex="0"><span class="fd-link__content">More</span></a>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="More">
                <i class="sap-icon--overflow"></i>
            </button>
            <button class="fd-button fd-button--transparent " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div class="fd-notification" tabindex="0">
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <span class="sap-icon sap-icon--information sap-icon--color-information"></span>
                <h4 class="fd-notification__title">Notification Title</h4>
            </div>
            <p class="fd-notification__paragraph">Description of notification topic</p>
            <div class="fd-notification__footer">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">11:11</span>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="More">
                <i class="sap-icon--overflow"></i>
            </button>
            <button class="fd-button fd-button--transparent " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>

<br>

<div class="fd-notification" tabindex="0">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
            <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
        </span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <h4 class="fd-notification__title fd-notification__title--unread">Notification Title</h4>
            </div>
            <p class="fd-notification__paragraph">Description of notification topic</p>
            <div class="fd-notification__footer">
                <span class="fd-notification__footer-content">Product Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">Feature Name</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">11:11</span>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent" aria-label="More">
                <i class="sap-icon--overflow"></i>
            </button>
            <button class="fd-button fd-button--transparent " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>

`,M=`<div style="position: relative; width: 100%; min-height: 300px; border: 2px solid #a5a2a2">
    <div class="fd-notification fd-notification--banner" tabindex="0"  style="max-width: 500px;">
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xs" role="img" aria-label="Avatar">
                <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
            </span>
            <div class="fd-notification__content">
                <div class="fd-notification__header">
                    <span class="sap-icon sap-icon--error sap-icon--color-negative"></span>
                    <h4 class="fd-notification__title fd-notification__title--unread">Notification Title (unread)</h4>
                </div>
                <p class="fd-notification__paragraph">Description of notification topic lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div class="fd-notification__footer">
                    <span class="fd-notification__footer-content">Product Name</span>
                    <span class="fd-notification__separator"></span>
                    <span class="fd-notification__footer-content">Feature Name</span>
                    <span class="fd-notification__separator"></span>
                    <span class="fd-notification__footer-content">11:11</span>
                    <a href="#" class="fd-link fd-notification__link" tabindex="0"><span class="fd-link__content">More</span></a>
                </div>
            </div>
            <div class="fd-notification__actions">
                <button class="fd-button fd-button--transparent " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
    </div>
</div>`,H={title:"Components/Notifications",parameters:{tags:["development"],description:`
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

##Usage
**Use notifications if:**

* You want to make users aware of situations that require attention.
* You intend to reduce the amount of information and actions to a minimum, but provide enough information to highlight the level of importance.
            `,components:["button","icon","notification","tabs","avatar","popover","menu","message-strip","dialog","bar","title"]}},e=()=>L;e.storyName="Notification Item";e.parameters={docs:{description:{story:`Notification items display a container with:
      <ul>
        <li><b>Avatar</b> (optional): uses Avatar component, size XS</li>
        <li><b>Title</b> (required): the title wraps up to two lines and then truncates. For unread title (renders with bold font-weight) use <code>fd-notification__title--unread</code> modifier class.</li>
        <li><b>Description</b> (optional): the description wraps up to two lines and then truncates.</li>
        <li><b>Meta</b> (optional): items separated by a span element with class <code>fd-notification__separator</code>. Items truncate if there's not enough space. In case Title or Description truncates in an ellipsis, the meta is followed by the text <b>Expansion Trigger</b> ("More" / "Less"). </li>
        <li><b>Priority Indicator</b> (optional): the priority is displayed using Message and Status Icons.  </li>
        <li><b>Object Status</b> (optional): uses Inverted ObjectStatus / Tag (Horizon) - Inverted Object Status with icon, indication color: Second Color Set - Indication 2 - Red</li>
        <li><b>Actions</b> (optional): include a "Close" and "Overflow" button (Transparent Button) actions.</li>
      </ul>
`}}};const r=()=>w;r.parameters={docs:{description:{story:`You can display a group of notifications in a list format, and the user can sort them from the header. A Message Strip can be places after the group header. To load more notifications, the list can have a Growing Item placed at the bottom of the group. 
    `}}};const s=()=>M;s.storyName="Notification Banner";s.parameters={docs:{description:{story:"Notifications can be displayed as banners in the top right corner. Apply the modifier class `fd-notification--banner` for this option."}}};var d,p,u;e.parameters=o(t({},e.parameters),{docs:o(t({},(d=e.parameters)==null?void 0:d.docs),{source:t({originalSource:"() => primaryExampleHtml"},(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source)})});var f,m,_;r.parameters=o(t({},r.parameters),{docs:o(t({},(f=r.parameters)==null?void 0:f.docs),{source:t({originalSource:"() => notificationGroupExampleHtml"},(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source)})});var v,b,g;s.parameters=o(t({},s.parameters),{docs:o(t({},(v=s.parameters)==null?void 0:v.docs),{source:t({originalSource:"() => bannerExampleHtml"},(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source)})});const O=["Primary","NotificationGroup","NotificationBanner"];export{s as NotificationBanner,r as NotificationGroup,e as Primary,O as __namedExportsOrder,H as default};
