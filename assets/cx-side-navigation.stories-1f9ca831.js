/* empty css               *//* empty css             *//* empty css                *//* empty css              *//* empty css                    */const os=`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <div class="fd-input-group fdx-side-nav__input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Filter">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search">
                        <i class="sap-icon--search"></i>
                    </button>
                </span>
        </div>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,rs=`<div style="height: 300px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list fdx-nested-list--compact level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`,fs=`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,xs=`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ps=`<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fdx-side-nav__popover-body--dynamic-width fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`,vs=`<h3>Level 1 Header</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h3>Level 1 Navigation</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <a class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`,ms=`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ks=`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,us=`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,hs=`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,Ls=`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <div class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <a class="fdx-nested-list__link-container" href="#">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </a>
                            <button class="fdx-nested-list__button">
                                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                            </button>
                        </div>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,Is=`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,bs=`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 3 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ys=`<div class="fdx-side-nav fdx-side-nav--dynamic-width" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Overview</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ws=`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Main Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,gs=`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;const Ss={title:"Components/Cx Side Navigation",parameters:{description:`The Side Navigation can display structures of up to three levels.
<br><br>In the <code>Wide</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)

<br>
In the <code>Narrow</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- If first-level items have children, and they are clicked, the popover displays the First-level item in bold letters, then the second level items in regular.
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)`,tags:["cx","theme"]}},a=()=>gs;a.storyName="Cosy Wide With Icon, 1 Level";const s=()=>ws;s.storyName="Cosy Wide Text Only, 1 Level";s.parameters={docs:{description:{story:"<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant."}}};const d=()=>ys;d.parameters={docs:{description:{story:`Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav--dynamic-width</code> for Side Navigation with dynamic width.
        `}}};const n=()=>bs;n.storyName="Cosy Wide Text Only, 3 Levels";n.parameters={docs:{description:{story:`<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.
        `}}};const c=()=>Is;c.storyName="Cosy Wide With Icons, 3 Levels, Collapse Only";const _=()=>Ls;_.storyName="Cosy Wide With Icons, 3 Levels, Navigation and Collapse";const e=()=>hs;e.storyName="Compact Wide With Icons, Level 2 Collapsed";e.parameters={docs:{description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const i=()=>us;i.storyName="Compact Wide With Icons, Level 2 Collapsed, Navigation and Collapse";i.parameters={docs:{description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const l=()=>ks;l.storyName="Cosy Narrow, Levels 2 and 3 in Popover Hidden";l.parameters={docs:{description:{story:`For <code>Narrow</code> variant of Side Navigation apply <code>.fdx-side-nav--narrow</code> modifier class to <code>.fdx-side-nav</code> base class.
        `}}};const o=()=>ms;o.storyName="Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const p=()=>vs,t=()=>ps;t.storyName="Cosy Narrow Popover with Dynamic Width";t.parameters={docs:{description:{story:`Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fdx-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.
        `}}};const r=()=>xs;r.parameters={docs:{description:{story:`For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fdx-side-nav--narrow</code> and <code>.fdx-side-nav--compact</code> modifier classed to <code>.fdx-side-nav</code> base class.
`}}};const f=()=>fs;f.storyName="Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const v=()=>rs,x=()=>os;x.storyName="Cosy Wide With Icon and Filter Integration, 1 Level";var m,k,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"() => cozyWideIconsExampleHtml",...(u=(k=a.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var h,L,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"() => cozyWideTextOnlyExampleHtml",...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var b,y,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"() => dynamicWidthExampleHtml",...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var g,N,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"() => cosyWideTextOnlyLevelsExampleHtml",...(C=(N=n.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var E,W,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"() => cosyWideIconsLevelsExampleHtml",...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var S,H,O;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:"() => cosyWideIconsLevelsMultiClickExampleHtml",...(O=(H=_.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,P,T;e.parameters={...e.parameters,docs:{...(U=e.parameters)==null?void 0:U.docs,source:{originalSource:"() => compactWideIconsExampleHtml",...(T=(P=e.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,z,D;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:"() => compactWideIconsNavCollapseExampleHtml",...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,X,B;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"() => cosyNarrowExampleHtml",...(B=(X=l.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var V,Q,j;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:"() => cosyNarrowOverflowExampleHtml",...(j=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};var A,G,J;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"() => cosyNarrowPopoverExampleHtml",...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,R,Y;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:"() => cosyNarrowPopoverDynamicWidthExampleHtml",...(Y=(R=t.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var Z,$,ss;r.parameters={...r.parameters,docs:{...(Z=r.parameters)==null?void 0:Z.docs,source:{originalSource:"() => compactNarrowExampleHtml",...(ss=($=r.parameters)==null?void 0:$.docs)==null?void 0:ss.source}}};var ns,es,is;f.parameters={...f.parameters,docs:{...(ns=f.parameters)==null?void 0:ns.docs,source:{originalSource:"() => compactNarrowOverflowExampleHtml",...(is=(es=f.parameters)==null?void 0:es.docs)==null?void 0:is.source}}};var ls,ts,as;v.parameters={...v.parameters,docs:{...(ls=v.parameters)==null?void 0:ls.docs,source:{originalSource:"() => compactNarrowPopoverExampleHtml",...(as=(ts=v.parameters)==null?void 0:ts.docs)==null?void 0:as.source}}};var ds,cs,_s;x.parameters={...x.parameters,docs:{...(ds=x.parameters)==null?void 0:ds.docs,source:{originalSource:"() => cozyWideIconsSearchExampleHtml",...(_s=(cs=x.parameters)==null?void 0:cs.docs)==null?void 0:_s.source}}};const Hs=["CozyWideIcons","CozyWideTextOnly","DynamicWidth","CosyWideTextOnlyLevels","CosyWideIconsLevels","CosyWideIconsLevelsMultiClick","CompactWideIcons","CompactWideIconsNavCollapse","CosyNarrow","CosyNarrowOverflow","CosyNarrowPopover","CosyNarrowPopoverDynamicWidth","CompactNarrow","CompactNarrowOverflow","CompactNarrowPopover","CozyWideIconsSearch"];export{r as CompactNarrow,f as CompactNarrowOverflow,v as CompactNarrowPopover,e as CompactWideIcons,i as CompactWideIconsNavCollapse,l as CosyNarrow,o as CosyNarrowOverflow,p as CosyNarrowPopover,t as CosyNarrowPopoverDynamicWidth,c as CosyWideIconsLevels,_ as CosyWideIconsLevelsMultiClick,n as CosyWideTextOnlyLevels,a as CozyWideIcons,x as CozyWideIconsSearch,s as CozyWideTextOnly,d as DynamicWidth,Hs as __namedExportsOrder,Ss as default};
//# sourceMappingURL=cx-side-navigation.stories-1f9ca831.js.map
