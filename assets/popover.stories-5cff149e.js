var A=Object.defineProperty,I=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var v=(s,e,a)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,n=(s,e)=>{for(var a in e||(e={}))N.call(e,a)&&v(s,a,e[a]);if(c)for(var a of c(e))Y.call(e,a)&&v(s,a,e[a]);return s},o=(s,e)=>I(s,D(e));/* empty css               *//* empty css            *//* empty css               *//* empty css             *//* empty css             *//* empty css                *//* empty css                         *//* empty css                    */const M=`<div style="display: flex; justify-content: center; padding: 100px 0 25px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--arrow-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF1r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF2r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF2r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--center fd-popover__body--arrow-bottom fd-popover__body--arrow-x-center fd-popover__body--resizable" aria-hidden="false" id="popoverF2r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF3r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF3r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--right fd-popover__body--arrow-bottom fd-popover__body--arrow-x-end fd-popover__body--resizable" aria-hidden="false" id="popoverF3r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 5</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 6</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 0 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF4r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF4r');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--arrow-right fd-popover__body--resizable" aria-hidden="false" id="popoverF4r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 7</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 8</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF5r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF5r');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left fd-popover__body--resizable" aria-hidden="false" id="popoverF5r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 9</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 10</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF6r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF6r');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--middle fd-popover__body--arrow-right fd-popover__body--arrow-y-center fd-popover__body--resizable" aria-hidden="false" id="popoverF6r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 11</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 12</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF7r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF7r');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--middle fd-popover__body--arrow-left fd-popover__body--arrow-y-center fd-popover__body--resizable" aria-hidden="false" id="popoverF7r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 13</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 14</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 25px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF8r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF8r');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--bottom fd-popover__body--arrow-right fd-popover__body--arrow-y-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF8r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 15</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 16</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF9r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF9r');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--bottom fd-popover__body--arrow-left fd-popover__body--arrow-y-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF9r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 17</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 18</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: center; padding-bottom: 100px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF10r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF10r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--resizable" aria-hidden="false" id="popoverF10r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 19</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 20</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF11r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF11r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--center fd-popover__body--arrow-x-center fd-popover__body--resizable" aria-hidden="false" id="popoverF11r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 21</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 22</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF12r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF12r');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--arrow-x-end fd-popover__body--resizable" aria-hidden="false" id="popoverF12r">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 23</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 24</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <span class="fd-popover__resize-handle"></span>
            </div>
        </div>
    </div>
</div>
`,U=`<div class="fd-popover" style="margin-bottom: 100px">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onClick="onPopoverClick('popoverF1');"
            role="button"
        >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverF1">
        <div class="fd-popover__wrapper" style="max-height: 250px;">
            <nav class="fd-menu" aria-label="big navigation menu">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>`,V=`<div style="display: flex; justify-content: center; padding: 100px 0 25px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--arrow-bottom" aria-hidden="false" id="popoverF1">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1a"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1a');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--center fd-popover__body--arrow-bottom fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1a">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1b"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1b');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--right fd-popover__body--arrow-bottom fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1b">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 0 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1c"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1c');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--arrow-right" aria-hidden="false" id="popoverF1c">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1d"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1d');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="false" id="popoverF1d">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1e"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1e');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--middle fd-popover__body--arrow-right fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1e">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1f"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1f');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--middle fd-popover__body--arrow-left fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1f">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 25px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1g"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1g');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--bottom fd-popover__body--arrow-right fd-popover__body--arrow-y-bottom" aria-hidden="false" id="popoverF1g">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1h"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1h');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--bottom fd-popover__body--arrow-left fd-popover__body--arrow-y-bottom" aria-hidden="false" id="popoverF1h">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: center; padding-bottom: 100px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1i"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1i');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverF1i">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1j"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1j');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--center fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1j">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1k"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1k');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1k">
            <div class="fd-popover__wrapper" style="max-height: 250px;">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
`,G=`<div class="fd-popover" style="margin-bottom: 300px">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1');"
            role="button">
                <!- role is needed to override the combobox role due to aria-haspopup -->
                Popover with overflow
            </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverF1">
        <div class="fd-popover__wrapper" style="max-height: 250px;">
            <nav class="fd-menu" aria-label="big navigation menu">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 4</span>
                        </a>
                    </li>
                                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 5</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 6</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 7</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 8</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
`,R=`<div class="fd-container" style="margin-bottom: 200px">
    <div class="fd-row">
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control" style="width: 48px; height: 48px;">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                            aria-controls="popoverB2"
                            aria-expanded="true"
                            aria-haspopup="true"
                            aria-label="Avatar"
                            style="background-image: url('assets/images/avatars/3.svg');"
                            onclick="onPopoverClick('popoverB2');"
                            role="button"
                            tabindex="0"></span>
                </div>
                <div class="fd-popover__body fd-popover__body--left" aria-hidden="false" id="popoverB2">
                    <nav class="fd-menu" aria-label="navigation items">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4');"
                        role="button">
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body" aria-hidden="false" id="popoverB4">
                    <nav class="fd-menu" aria-label="options triggered by icon button">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`,q=`<div class="fddocs-container" style="margin-bottom: 275px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF1"
                aria-expanded="true"
                aria-haspopup="true"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF1');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Header
                </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverHSF1">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button aria-label="previous options" class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
            </div>
            <nav class="fd-menu" aria-label="options with header">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF2"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF2');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Footer
                </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverHSF2">
            <nav class="fd-menu" aria-label="options with footer">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="fd-popover__body-footer">
                <div class="fd-bar is-compact fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF3"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF3');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Header, subheader and footer
            </button>
        </div>
        <section
            aria-hidden="false"
            class="fd-popover__body"
            id="popoverHSF3"
            aria-label="Dialog Data 1"
            role="dialog">
            <header class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button
                                aria-label="back button"
                                class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>
                        <div id="popoverHeader" class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
                <div class="fd-bar is-compact fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">
                            <div class="fd-form-item">
                                <div class="fd-segmented-button" role="group" aria-label="Group label">
                                    <button aria-label="email" class="fd-button fd-button--toggled" aria-pressed="true">
                                        <i class="sap-icon--email"></i>
                                    </button>
                                    <button  aria-label="phone" class="fd-button" aria-pressed="false">
                                        <i class="sap-icon--iphone"></i>
                                    </button>
                                    <button  aria-label="notification" class="fd-button" aria-pressed="false">
                                        <i class="sap-icon--notification-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav class="fd-menu" aria-label="options with header, subheader and footer">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <footer class="fd-popover__body-footer">
                <div class="fd-bar is-compact fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</div>
`,W=`<div class="fd-container" style="margin-bottom: 400px">
    <div class="fd-row">
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--btp">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4Btp"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4Btp');"
                        role="button">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body" aria-hidden="false" id="popoverB4Btp">
                    <div class="fd-popover__body-header">Header (optional, empty container)</div>
                    <div class="fd-popover__body-content" style="color: #fff; background: #0e7290; width: 15rem; height: 18rem;">
                        Content (empty container)
                    </div>
                    <div class="fd-popover__body-footer">
                        Footer (optional, empty container)
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--btp">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4B"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4B');"
                        role="button">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--padding" aria-hidden="false" id="popoverB4BTP">
                    <div class="fd-popover__body-header">Header (optional, empty container)</div>
                    <div class="fd-popover__body-content" style="color: #fff; background: #0e7290; width: 15rem; height: 18rem;">
                        Content (empty container)
                    </div>
                    <div class="fd-popover__body-footer fd-popover__body-footer--center">
                        Footer (optional, empty container)
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,en={title:"Components/Popover",parameters:{description:`The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a **Menu**, whereas the menu button would trigger a dropdown (body).

##Usage
**Use a popover if:**

- You need to define your own structure.
- You want to show UI elements that are not available with the quick view.

**Do not use a popover if:**

- The objects are in a master list (in this case, the details are shown in the details area).


##Guidelines
- As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.
- Show status information as text fields in a content group. You can use semantic text colors.
- You can define a height for the popover. If the content exceeds the height, a scroll bar is displayed.

`,tags:["f3","a11y","theme"]}},i=()=>q;i.storyName="Body variants";i.parameters={docs:{description:{story:`There are several variants of the popover body that can be displayed depending on the use case.

Variant | Modifier class | Description
:------ | :------------- | :---------------
Header | \`fd-popover__body-header\` | To display a header.
Footer | \`fd-popover__body-footer\` | To display a footer with actions.

You can also have subheader by using **Bar** component with subheader.
        `}}};const r=()=>R;r.storyName="Control variants";r.parameters={docs:{description:{story:`As popover's triggers buttons, images, icons, and more can be used. In the example below, the **Avatar** and **Icon** act as triggers.
        `}}};const d=()=>G;d.parameters={docs:{description:{story:"When the content overflows, the popover body can become scrollable. To achieve this, add element with class `fd-popover-body__wrapper` inside the popover body element.\n        "}}};const l=()=>V;l.parameters={docs:{description:{story:"It's possible to show popover on different sides of the trigger. To do that apply the following modifier classes to the popover body element.\n\n| Modifier | Description |\n| :---- | :---------- |\n| `fd-popover__body` | Positions the popover below the trigger. *(default)* |\n| `fd-popover__body--above` | Positions the popover above the trigger. |\n| `fd-popover__body--before` | Positions the popover before the trigger. |\n| `fd-popover__body--after` | Positions the popover next to the trigger. |\n\nTo align the popover arrow with the trigger apply the following modifier classes to the popover body element.\n\n| Arrow modifier class | Description |\n| :------------- | :---------- |\n| `fd-popover__body` | Positions the arrow on the top left side of the popover. *(default)* |\n| `fd-popover__body--arrow-bottom` | Positions the arrow on the bottom left right side of the popover. |\n| `fd-popover__body--arrow-left` | Positions the arrow on the left top side of the popover. |\n| `fd-popover__body--arrow-right` | Positions the arrow on the right top side of the popover. |\n| `fd-popover__body--arrow-x-center` | Positions the arrow horizontally centered on the popover. |\n| `fd-popover__body--arrow-x-end` | Positions the arrow to the end by horizontal line of the popover body. |\n| `fd-popover__body--arrow-y-center` | Positions the arrow vertically centered on the popover. |\n| `fd-popover__body--arrow-y-bottom` | Positions the arrow to the end by vertical line of the popover. |\n\n**note:** `fd-popover__body--arrow-y--end` class has been deprecated in favor of `fd-popover__body--arrow-y-bottom`!\n        "}}};const p=()=>U;p.parameters={docs:{description:{story:"It's possible to hide popover's arrow.\nTo achieve this apply the `fd-popover__body--no-arrow` modifier class to the popover body element and remove all the arrow modifier classes."}}};const _=()=>M;_.parameters={docs:{description:{story:""}}};const t=()=>W;t.storyName="BTP Popover";t.parameters={docs:{description:{story:`This extension of Popover is used by components and patterns in the BTP area. Apply the <code>.fd-popover--btp</code> modifier class to <code>.fd-popover</code> base class. <br>
      To add padding to the Popover body use the <code>.fd-popover__body--padding</code> modifier class together with <code>.fd-popover__body</code> base class. <br>
      The content of the footer can be centered by using the <code>.fd-popover__body-footer--center</code> modifier. 
        `}}};var f,u,m;i.parameters=o(n({},i.parameters),{docs:o(n({},(f=i.parameters)==null?void 0:f.docs),{source:n({originalSource:"() => variantsExampleHtml"},(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source)})});var b,h,y;r.parameters=o(n({},r.parameters),{docs:o(n({},(b=r.parameters)==null?void 0:b.docs),{source:n({originalSource:"() => controlExamplesExampleHtml"},(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source)})});var g,w,x;d.parameters=o(n({},d.parameters),{docs:o(n({},(g=d.parameters)==null?void 0:g.docs),{source:n({originalSource:"() => scrollableExampleHtml"},(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source)})});var k,F,O;l.parameters=o(n({},l.parameters),{docs:o(n({},(k=l.parameters)==null?void 0:k.docs),{source:n({originalSource:"() => placementExampleHtml"},(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source)})});var P,C,z;p.parameters=o(n({},p.parameters),{docs:o(n({},(P=p.parameters)==null?void 0:P.docs),{source:n({originalSource:"() => noArrowExampleHtml"},(z=(C=p.parameters)==null?void 0:C.docs)==null?void 0:z.source)})});var H,B,E;_.parameters=o(n({},_.parameters),{docs:o(n({},(H=_.parameters)==null?void 0:H.docs),{source:n({originalSource:"() => resizableExampleHtml"},(E=(B=_.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var S,T,j;t.parameters=o(n({},t.parameters),{docs:o(n({},(S=t.parameters)==null?void 0:S.docs),{source:n({originalSource:"() => controlExamplesBtpExampleHtml"},(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});const an=["Variants","ControlExamples","Scrollable","Placement","NoArrow","Resizable","ControlExamplesBtp"];export{r as ControlExamples,t as ControlExamplesBtp,p as NoArrow,l as Placement,_ as Resizable,d as Scrollable,i as Variants,an as __namedExportsOrder,en as default};
