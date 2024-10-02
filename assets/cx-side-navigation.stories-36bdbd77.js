var Is=Object.defineProperty,bs=Object.defineProperties;var ys=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var ws=Object.prototype.hasOwnProperty,gs=Object.prototype.propertyIsEnumerable;var y=(t,e,i)=>e in t?Is(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,s=(t,e)=>{for(var i in e||(e={}))ws.call(e,i)&&y(t,i,e[i]);if(b)for(var i of b(e))gs.call(e,i)&&y(t,i,e[i]);return t},n=(t,e)=>bs(t,ys(e));/* empty css               *//* empty css             *//* empty css                *//* empty css              *//* empty css                    *//* empty css                  */const Ns=`<div class="fdx-side-nav" style="max-height: 500px;">
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
`,Es=`<div style="height: 300px;">
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
`,Ws=`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
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
`,Cs=`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
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
`,Ms=`<div style="height: 500px;">
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
`,Ss=`<h3>Level 1 Header</h3>
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
`,Hs=`<div class="fdx-side-nav fdx-side-nav--narrow">
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
`,qs=`<script>
  const togglerButton = document.getElementById("navigation_toggler");

  togglerButton.addEventListener("click", () => {
    const navigation = document.getElementById("narrow_navigation");
    let shouldExpand = navigation.classList.contains("fdx-side-nav--narrow");

    if (shouldExpand) {
      navigation.classList.remove("fdx-side-nav--narrow");
    } else {
      navigation.classList.add("fdx-side-nav--narrow");
    }

    setTimeout(() => {
      if (shouldExpand) {
        navigation.classList.remove("fdx-side-nav--narrow-animated-items");
      } else {
        navigation.classList.add("fdx-side-nav--narrow-animated-items");
      }
    }, shouldExpand ? 200 : 0);
  });
<\/script>

<div style="padding-bottom: 2rem">
  <button class="fd-button" id="navigation_toggler">Toggle navigation narrow state</button>
</div>

<div class="fdx-side-nav fdx-side-nav--narrow fdx-side-nav--narrow-animated-items" id="narrow_navigation">
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
            <li class="fdx-nested-list__item fd-popover" style="display: block;">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item with some long text to display line wrapping</span>
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
`,Ts=`<div class="fdx-side-nav fdx-side-nav--compact">
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
`,Us=`<div class="fdx-side-nav fdx-side-nav--compact">
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
`,Os=`<div class="fdx-side-nav">
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
`,Ps=`<div class="fdx-side-nav">
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
`,zs=`<div class="fdx-side-nav">
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
`,Ds=`<div class="fdx-side-nav fdx-side-nav--dynamic-width" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation fd-scrollbar" aria-label="Main Menu">
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
`,Bs=`<div class="fdx-side-nav">
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
`,Fs=`<div class="fdx-side-nav" style="max-height: 500px;">
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
`,Xs=`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item fdx-nested-list__item--group">
              <span class="fdx-nested-list__title">Group Header</span>
            </li>
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
                        <span class="fdx-nested-list__title"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                        >
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
            <li class="fdx-nested-list__item fdx-nested-list__item--group">
              <span class="fdx-nested-list__title">Group Header</span>
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
`;const Rs={title:"Components/Cx Side Navigation",parameters:{description:`The Side Navigation can display structures of up to three levels.
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
- Third level items do not display an icon and are indented by 2 rem (32px)`,tags:["cx","theme"]}},r=()=>Fs;r.storyName="Cosy Wide With Icon, 1 Level";const l=()=>Bs;l.storyName="Cosy Wide Text Only, 1 Level";l.parameters={docs:{description:{story:"<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant."}}};const f=()=>Ds;f.parameters={docs:{description:{story:`Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav--dynamic-width</code> for Side Navigation with dynamic width.
        `}}};const a=()=>zs;a.storyName="Cosy Wide Text Only, 3 Levels";a.parameters={docs:{description:{story:`<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.
        `}}};const x=()=>Ps;x.storyName="Cosy Wide With Icons, 3 Levels, Collapse Only";const p=()=>Os;p.storyName="Cosy Wide With Icons, 3 Levels, Navigation and Collapse";const d=()=>Us;d.storyName="Compact Wide With Icons, Level 2 Collapsed";d.parameters={docs:{description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const c=()=>Ts;c.storyName="Compact Wide With Icons, Level 2 Collapsed, Navigation and Collapse";c.parameters={docs:{description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const _=()=>qs;_.storyName="Cosy Narrow, Levels 2 and 3 in Popover Hidden";_.parameters={docs:{description:{story:`For <code>Narrow</code> variant of Side Navigation apply <code>.fdx-side-nav--narrow</code> modifier class to <code>.fdx-side-nav</code> base class.
        `}}};const v=()=>Hs;v.storyName="Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const L=()=>Ss,o=()=>Ms;o.storyName="Cosy Narrow Popover with Dynamic Width";o.parameters={docs:{description:{story:`Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fdx-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.
        `}}};const m=()=>Cs;m.parameters={docs:{description:{story:`For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fdx-side-nav--narrow</code> and <code>.fdx-side-nav--compact</code> modifier classed to <code>.fdx-side-nav</code> base class.
`}}};const u=()=>Ws;u.storyName="Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const I=()=>Es,k=()=>Ns;k.storyName="Cosy Wide With Icon and Filter Integration, 1 Level";const h=()=>Xs;h.parameters={docs:{description:{story:`By default, side navigation will wrap long text into multiple lines if the width of the nav is not enough. Developers can modify this behaviour by adding <code>.fdx-side-nav--single-line</code> class modifier.
        `}}};var w,g,N;r.parameters=n(s({},r.parameters),{docs:n(s({},(w=r.parameters)==null?void 0:w.docs),{source:s({originalSource:"() => cozyWideIconsExampleHtml"},(N=(g=r.parameters)==null?void 0:g.docs)==null?void 0:N.source)})});var E,W,C;l.parameters=n(s({},l.parameters),{docs:n(s({},(E=l.parameters)==null?void 0:E.docs),{source:s({originalSource:"() => cozyWideTextOnlyExampleHtml"},(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source)})});var M,S,H;f.parameters=n(s({},f.parameters),{docs:n(s({},(M=f.parameters)==null?void 0:M.docs),{source:s({originalSource:"() => dynamicWidthExampleHtml"},(H=(S=f.parameters)==null?void 0:S.docs)==null?void 0:H.source)})});var q,T,U;a.parameters=n(s({},a.parameters),{docs:n(s({},(q=a.parameters)==null?void 0:q.docs),{source:s({originalSource:"() => cosyWideTextOnlyLevelsExampleHtml"},(U=(T=a.parameters)==null?void 0:T.docs)==null?void 0:U.source)})});var O,P,z;x.parameters=n(s({},x.parameters),{docs:n(s({},(O=x.parameters)==null?void 0:O.docs),{source:s({originalSource:"() => cosyWideIconsLevelsExampleHtml"},(z=(P=x.parameters)==null?void 0:P.docs)==null?void 0:z.source)})});var D,B,F;p.parameters=n(s({},p.parameters),{docs:n(s({},(D=p.parameters)==null?void 0:D.docs),{source:s({originalSource:"() => cosyWideIconsLevelsMultiClickExampleHtml"},(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source)})});var X,G,Q;d.parameters=n(s({},d.parameters),{docs:n(s({},(X=d.parameters)==null?void 0:X.docs),{source:s({originalSource:"() => compactWideIconsExampleHtml"},(Q=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Q.source)})});var V,j,A;c.parameters=n(s({},c.parameters),{docs:n(s({},(V=c.parameters)==null?void 0:V.docs),{source:s({originalSource:"() => compactWideIconsNavCollapseExampleHtml"},(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source)})});var J,K,R;_.parameters=n(s({},_.parameters),{docs:n(s({},(J=_.parameters)==null?void 0:J.docs),{source:s({originalSource:"() => cosyNarrowExampleHtml"},(R=(K=_.parameters)==null?void 0:K.docs)==null?void 0:R.source)})});var Y,Z,$;v.parameters=n(s({},v.parameters),{docs:n(s({},(Y=v.parameters)==null?void 0:Y.docs),{source:s({originalSource:"() => cosyNarrowOverflowExampleHtml"},($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ss,ns,es;L.parameters=n(s({},L.parameters),{docs:n(s({},(ss=L.parameters)==null?void 0:ss.docs),{source:s({originalSource:"() => cosyNarrowPopoverExampleHtml"},(es=(ns=L.parameters)==null?void 0:ns.docs)==null?void 0:es.source)})});var is,ts,ls;o.parameters=n(s({},o.parameters),{docs:n(s({},(is=o.parameters)==null?void 0:is.docs),{source:s({originalSource:"() => cosyNarrowPopoverDynamicWidthExampleHtml"},(ls=(ts=o.parameters)==null?void 0:ts.docs)==null?void 0:ls.source)})});var as,ds,cs;m.parameters=n(s({},m.parameters),{docs:n(s({},(as=m.parameters)==null?void 0:as.docs),{source:s({originalSource:"() => compactNarrowExampleHtml"},(cs=(ds=m.parameters)==null?void 0:ds.docs)==null?void 0:cs.source)})});var _s,os,rs;u.parameters=n(s({},u.parameters),{docs:n(s({},(_s=u.parameters)==null?void 0:_s.docs),{source:s({originalSource:"() => compactNarrowOverflowExampleHtml"},(rs=(os=u.parameters)==null?void 0:os.docs)==null?void 0:rs.source)})});var fs,xs,ps;I.parameters=n(s({},I.parameters),{docs:n(s({},(fs=I.parameters)==null?void 0:fs.docs),{source:s({originalSource:"() => compactNarrowPopoverExampleHtml"},(ps=(xs=I.parameters)==null?void 0:xs.docs)==null?void 0:ps.source)})});var vs,ms,us;k.parameters=n(s({},k.parameters),{docs:n(s({},(vs=k.parameters)==null?void 0:vs.docs),{source:s({originalSource:"() => cozyWideIconsSearchExampleHtml"},(us=(ms=k.parameters)==null?void 0:ms.docs)==null?void 0:us.source)})});var ks,hs,Ls;h.parameters=n(s({},h.parameters),{docs:n(s({},(ks=h.parameters)==null?void 0:ks.docs),{source:s({originalSource:"() => wrappingLongTextExampleHtml"},(Ls=(hs=h.parameters)==null?void 0:hs.docs)==null?void 0:Ls.source)})});const Ys=["CozyWideIcons","CozyWideTextOnly","DynamicWidth","CosyWideTextOnlyLevels","CosyWideIconsLevels","CosyWideIconsLevelsMultiClick","CompactWideIcons","CompactWideIconsNavCollapse","CosyNarrow","CosyNarrowOverflow","CosyNarrowPopover","CosyNarrowPopoverDynamicWidth","CompactNarrow","CompactNarrowOverflow","CompactNarrowPopover","CozyWideIconsSearch","WrappingLongText"];export{m as CompactNarrow,u as CompactNarrowOverflow,I as CompactNarrowPopover,d as CompactWideIcons,c as CompactWideIconsNavCollapse,_ as CosyNarrow,v as CosyNarrowOverflow,L as CosyNarrowPopover,o as CosyNarrowPopoverDynamicWidth,x as CosyWideIconsLevels,p as CosyWideIconsLevelsMultiClick,a as CosyWideTextOnlyLevels,r as CozyWideIcons,k as CozyWideIconsSearch,l as CozyWideTextOnly,f as DynamicWidth,h as WrappingLongText,Ys as __namedExportsOrder,Rs as default};
