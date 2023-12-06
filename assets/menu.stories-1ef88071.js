/* empty css            *//* empty css               *//* empty css               *//* empty css             *//* empty css             *//* empty css              *//* empty css              */const j=`<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
        <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <span
                class="fd-menu__link has-child is-expanded"
                aria-controls="EX100M2"
                aria-expanded="true"
                aria-haspopup="true"
                role="menuitem"
                onclick="onPopoverClick('EX100M2')">
                    <span class="fd-menu__title">Option 2 with submenu</span>
                    <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
            </span>
            <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="false" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-hover" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 2 - Hover</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-active" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 3 - Active</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-selected" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 4 - Selected</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 5 - Selected Hover</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-disabled" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 6 - Disabled with very very very very very very very very long text</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
<div style="min-height: 200px"></div>
`,z=`<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-focus" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 1</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 2</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-focus" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 3</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 4</span>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
        </li>
    </ul>
</nav>
`,Y=`<div style="width: 33%; display: inline-block">
    <nav aria-label="navbar" class="fd-menu">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 1- Regular</span>
                </a>
            </li>
             <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 2 - Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-active" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 3 - Active</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 4 - Selected</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 5 - Selected-Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-disabled" href="#" role="menuitem" tabindex="-1">
                    <span class="fd-menu__title">Option 6 - Disabled</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

<div style="width: 33%; display: inline-block">
    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                        <span class="fd-menu__title">Option 1 - Regular</span>
                        <span class="fd-menu__shortcut">Ctrl + A</span>
                        <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                    </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-hover" href="#" role="menuitem">
                        <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                        <span class="fd-menu__title">Option 2 - Hover</span>
                        <span class="fd-menu__shortcut">Ctrl + A</span>
                        <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                    </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-active" href="#" role="menuitem">
                        <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                        <span class="fd-menu__title">Option 3 - Active</span>
                        <span class="fd-menu__shortcut">Ctrl + A</span>
                        <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                    </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 3 - Selected</span>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 4 - Selected Hover</span>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-disabled" href="#" role="menuitem">
                        <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                        <span class="fd-menu__title">Option 4 - Disabled</span>
                        <span class="fd-menu__shortcut">Ctrl + A</span>
                        <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                    </a>
            </li>
        </ul>
    </nav>    
</div>

<div style="width: 33%; display: inline-block">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 1 - Regular</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 2 - Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-active" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 3 - Active</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 4 - Selected</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 5 - Selected Hover</span>
                </a>
            </li>
            <li class="fd-menu__item is-disabled" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 6 - Disabled</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,q=`<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link is-selected" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
    </ul>
</nav>
`,G=`<div style="width: 20rem; margin: 0 10rem; display: inline-block" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <section
        aria-labelledby="exampleSubMenuHeader"
        class="fd-dialog__content fd-dialog__content--mobile"
        role="dialog">
        <header aria-label="bar-header" class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3
                        id="exampleSubMenuHeader"
                        class="fd-title fd-title--h5">
                        Example Submenu
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav
                aria-label="example sub-menu options"
                class="fd-menu fd-menu--mobile fd-menu--icons"
                id="parent-menu"
                tabindex="-1">
                <ul class="fd-menu__list" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 1</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link is-active" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 2</span>
                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Option 3</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 4</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 4</span>
                            <span class="fd-menu__shortcut">Ctrl+Alt+L</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button
                        aria-label="close options dialog"
                        class="fd-button fd-button--light fd-dialog__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<div style="display: inline-block; width: auto;" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example-inner">
    <section
        aria-labelledby="subOptionHeader"
        class="fd-dialog__content fd-dialog__content--mobile"
        role="dialog">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                <button
                    aria-label="Show main menu options"
                    class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                    <h3
                        class="fd-title fd-title--h5"
                        id="subOptionHeader">
                        Option 2
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav
                aria-label="option 2 sub-options"
                class="fd-menu fd-menu--mobile">
                <ul class="fd-menu__sublist" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 4</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 5 with very very very very very very very very very very very very long text</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button
                        aria-label="close options dialog"
                        class="fd-button fd-button--light fd-dialog__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`,J=`<nav aria-label="navigation menu" class="fd-menu fd-menu--overflow" style="max-height: 150px">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
`,K=`<nav aria-label="navigation menu" class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>

`,Q=`<div style="display: flex; gap: 3rem; flex-wrap:wrap;">
    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item has-separator" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                    <span class="fd-menu__title">Sort</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before">
                        <span class="fd-menu__active-dot" role="presentation"></span>
                    </span>
                    <span class="fd-menu__title">View 1</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">View 2</span>
                </a>
            </li>
            <li class="fd-menu__item has-separator" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">View 3</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                    <span class="fd-menu__title">Settings</span>
                </a>
            </li>
        </ul>
    </nav>
</div>`,Z=`<div style="display: flex; gap: 3rem; flex-wrap:wrap;">
    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item has-separator" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Toggle Button (untoggled)</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                    <span class="fd-menu__title">View 1</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                    <span class="fd-menu__title">View 2</span>
                </a>
            </li>
        </ul>
    </nav>

    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item has-separator" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before">
                        <i class="sap-icon--accept fd-menu__checkmark" role="presentation"></i>
                    </span>
                    <span class="fd-menu__title">Toggle Button (toggled)</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                    <span class="fd-menu__title">View 1</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                    <span class="fd-menu__title">View 2</span>
                </a>
            </li>
        </ul>
    </nav>
</div>`,$=`<div style="display: flex; gap: 3rem; flex-wrap:wrap;">
    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <div class="fd-menu__link" role="presentation">
                    <input class="fd-input fd-menu__input" type="text" id="input-1" placeholder="Field placeholder text">
                </div>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--map" role="presentation"></i></span>
                    <span class="fd-menu__title">Add New Pin</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--image-viewer" role="presentation"></i></span>
                    <span class="fd-menu__title">View 360</span>
                </a>
            </li>
        </ul>
    </nav>
</div>`,ee=`<div style="display: flex; gap: 3rem; flex-wrap:wrap;">
    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <button class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Sort</span>
                </button>
            </li>
            <li class="fd-menu__item" role="presentation">
                <button class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Edit</span>
                </button>
            </li>
            <li class="fd-menu__item" role="presentation">
                <button class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Save</span>
                </button>
            </li>
            <li class="fd-menu__item" role="presentation">
                <button class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--message-error" role="presentation"></i></span>
                    <span class="fd-menu__title">Reject</span>
                </button>
            </li>
            <li class="fd-menu__item" role="presentation">
                <button class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--message-success" role="presentation"></i></span>
                    <span class="fd-menu__title">Accept</span>
                </button>
            </li>
        </ul>
    </nav>
</div>`,re={title:"Components/Menu",parameters:{tags:["f3","a11y","theme","development"],description:`
The menu component is the listing structure with optional headers to create menus.

Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.
`}},r=()=>K;r.parameters={docs:{description:{story:"The basic structure of a menu. Place the menu item title in a `<span>` tag using class `fd-menu__title` and wrap it in the `fd-menu__link` and `fd-menu__item` classes as shown.\n               <br><b>Note:</b>Use compact menus for the Desktop and use cozy for the Tablet mode."}}};const e=()=>J;e.storyName="Vertical overflow";e.parameters={docs:{description:{story:'The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element. You need to manually set the max-height of the element on the `fd-menu` level. For example: `style="max-height: 120px;"`. <br><b>Important: </b>this modifier class cannot be used in cases where the menu has a submenu.'}}};const m=()=>G;m.parameters={docs:{description:{story:"The basic structure of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level. Example shows the parent menu's item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device's back button takes one back to the parent menu fullscreen dialog."}}};const n=()=>q;n.storyName="List with separated items";n.parameters={docs:{description:{story:"Separators can be added between Menu Items by adding the `has-separator` class to the element with class `fd-menu__item`. The separator will appear under this item."}}};const s=()=>Y;s.storyName="List different states";s.parameters={docs:{description:{story:"\nSimulate different states to show state behaviour between the items.\n\n- For simulating hover state, use class `is-hover` on the menu item.\n- For simulating active state, use class `is-active` on the menu item.\n- For simulating selected state, use class `is-selected` on the menu item.\n- For simulating selected-hover state, use classes `is-selected is-hover` on the menu item.\n- For simulating disabled state, use class `is-disabled` on the menu item.\n\nTo remove default box shadow from menu containers use `fd-menu__list--no-shadow` or `fd-menu__sublist--no-shadow`."}}};const a=()=>z;a.storyName="List with Icon";a.parameters={docs:{description:{story:"\nTo create an addon before or after `fd-menu__title` element, use elements with folowing classes inside `fd-menu__link`:\n- `fd-menu__addon-before`   - styles addon befotre `fd-menu__title`\n- `fd-menu__addon-after`    - styles addon after `fd-menu__title`\n- `fd-menu__shortcut`       - styles shortcut placed after `fd-menu__title`\nAccording to Fiori3 design shortcuts should be on desktop devices."}}};const d=()=>j;d.parameters={docs:{description:{story:"\nMenu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.\n\nFor a submenu, do the following:\n- Specify `fd-menu__link` class normally like other items. Use `has-child` class to apply styles for parent containing the submenu.\n- Create an addon indicating submenu level using `fd-menu__addon-after--submenu` class and an icon.\n- After the end of the `fd-menu__link` container, use `fd-menu__sublist` class in its own `<ul>`\n- Follow the same template for submenu as you would for a normal menu. The same `fd-menu__item` and `fd-menu__link` works for the subitems too.\n"}}};const t=()=>Q;t.storyName="Extended Menu List Items (Segmented Button)";t.parameters={docs:{description:{story:`Each view of the segmented button gets its own menu item. The selected Button in the Segmented Button gets the Active Dot in front of the Menu List Item and is always separated with a separator.
      The ‘segmented button menu items’ cannot have an icon in front. Instead, the place is reserved for the Active Dot.
`}}};const l=()=>Z;l.storyName="Extended Menu List Items (Toggle Button)";l.parameters={docs:{description:{story:`The toggle button gets “transformed” into a menu item which can be toggled and untoggled. If the toggle button is toggled, then a checkmark appears in front of the text (on position of an icon).
      If it’s not toggled, then the space is empty.
      It is not possible to show an icon for the toggle button in the menu. This spot is reserved for the checkmark.
`}}};const i=()=>$;i.storyName="Extended Menu List Items (Input)";i.parameters={docs:{description:{story:`An Input field can be placed in a menu item.
      When an input is placed in a menu item, the text serves as a label. 
      When there is enough space on desktop-based devices, then the input field is positioned next to the text. If there’s not enough space, it moves to the next line. 
      The input field is always positioned below the label on mobile devices.
`}}};const o=()=>ee;o.storyName="Extended Menu List Items (Buttons as Menu Items)";o.parameters={docs:{description:{story:`The buttons are “transformed” into menu items. It is optional to add an icon and those could be replaced by product teams.
`}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"() => defaultExampleHtml",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var _,f,h;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:"() => overflowExampleHtml",...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,g;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:"() => mobileModeExampleHtml",...(g=(v=m.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,y,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:"() => seperatedItemsExampleHtml",...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,S,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"() => differentStatesExampleHtml",...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var E,H,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:"() => menuIconExampleHtml",...(I=(H=a.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var M,T,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"() => withSubmenuExampleHtml",...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,C,D;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:"() => segmentedButtonExampleHtml",...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,N,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"() => toggleButtonExampleHtml",...(L=(N=l.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var V,R,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:"() => inputExampleHtml",...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var P,U,X;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:"() => buttonsExampleHtml",...(X=(U=o.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const me=["Default","Overflow","MobileMode","SeperatedItems","DifferentStates","MenuIcon","WithSubmenu","SegmentedButton","ToggleButton","Input","Buttons"];export{o as Buttons,r as Default,s as DifferentStates,i as Input,a as MenuIcon,m as MobileMode,e as Overflow,t as SegmentedButton,n as SeperatedItems,l as ToggleButton,d as WithSubmenu,me as __namedExportsOrder,re as default};
//# sourceMappingURL=menu.stories-1ef88071.js.map
