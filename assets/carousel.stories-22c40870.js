var z=Object.defineProperty,B=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var _=(t,n,e)=>n in t?z(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,a=(t,n)=>{for(var e in n||(n={}))S.call(n,e)&&_(t,e,n[e]);if(u)for(var e of u(n))O.call(n,e)&&_(t,e,n[e]);return t},i=(t,n)=>B(t,I(n));/* empty css               *//* empty css             *//* empty css                     *//* empty css             */const P=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Error in loading items</h4>

    <div
        class="fd-carousel fd-carousel--no-navigation"
        style="max-width: 20rem; max-height: 20rem;"
        data-ride="carousel"
    >
        <div class="fd-carousel__content">
            <div class="fd-message-page">
                <div class="fd-message-page__container">
                    <div class="fd-message-page__icon-container">
                        <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>
                    </div>

                    <div role="status" aria-live="polite" class="fd-message-page__content">
                        <div class="fd-message-page__title">
                            Items could not be loaded
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators"></ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-12" aria-live="polite">
        Error in loading items
    </div>
</div>
`,F=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Items in horizontal direction</h4>

    <div
        class="fd-carousel"
        style="max-width: 20rem; max-height: 15.5rem;"
        data-ride="carousel"
    >
        <div class="fd-carousel__content fd-carousel__content--horizontal">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li
                    data-slide-to="1"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="2"
                    aria-label="Displaying item 2 of 3"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li
                    data-slide-to="3"
                    class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-11" aria-live="polite">
        Displaying item 2 of 3
    </div>
</div>
`,M=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Hiding navigation buttons in page indicator</h4>

    <div
        class="fd-carousel fd-carousel--no-navigation"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem;"
    >
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li
                    data-slide-to="1"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="2"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="3"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="4"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li
                    data-slide-to="6"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="7"
                    class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-9" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Hiding navigation buttons in the content</h4>

    <div
        class="fd-carousel fd-carousel--no-navigation"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <ol class="fd-carousel__page-indicators">
                <li
                    data-slide-to="1"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="2"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="3"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="4"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li
                    data-slide-to="6"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="7"
                    class="fd-carousel__page-indicator"></li>
            </ol>
        </div>

        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-10" aria-live="polite">
        Displaying item 1 of 4
    </div>
</div>
`,U=`<div style="display: flex; flex-direction: column; align-items: center">
    <h4>Transparent Carousel Content</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content fd-carousel__content--transparent">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                ></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <h4>Solid Carousel Content</h4>
    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content fd-carousel__content--solid">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-up"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                ></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 4</div>

    <h4>Transparent Page Indicator Container</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--transparent">
            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="5" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>
        </div>
    </div>

    <h4>Translucent Page Indicator Container</h4>
    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--up"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-up"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--down"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--translucent">
            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="5" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>
        </div>
    </div>

    <h4>Page Indicator Container with no border</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content fd-carousel__content--solid">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--no-border">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                ></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 4</div>
</div>
`,Y=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Navigation buttons in page indicator</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li
                    data-slide-to="1"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="2"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="3"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="4"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li
                    data-slide-to="6"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="7"
                    class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>

        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-5" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Navigation buttons in content</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <ol class="fd-carousel__page-indicators">
                <li
                    data-slide-to="1"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="2"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="3"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="4"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li
                    data-slide-to="6"
                    class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="7"
                    class="fd-carousel__page-indicator"></li>
            </ol>
        </div>

        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-6" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Numeral format for page indicator</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
        </div>

        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-7" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>No page indicators</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators"></ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>

        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image">
                </div>
            </div>
        </div>
    </div>

    <div style="display: none;" role="region" id="carousel-8" aria-live="polite">
        Displaying item 1 of 4
    </div>
</div>
`,j=`<div style="display: flex; flex-direction: column; align-items: center">
    <h4>Navigation buttons in page indicator (focussed)</h4>

    <div class="fd-carousel is-focus" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                ></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <h4>Navigation buttons in page indicator (vertical)</h4>
    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-up"></i>
            </button>

            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li
                    data-slide-to="5"
                    aria-label="Displaying item 5 of 7"
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                ></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 4</div>

    <h4>Content navigation buttons</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="5" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>
        </div>
    </div>

    <h4>Content navigation buttons (vertical)</h4>
    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--up"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-up"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--down"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <ol class="fd-carousel__page-indicators">
                <li data-slide-to="1" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="2" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="3" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="4" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="5" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li data-slide-to="6" class="fd-carousel__page-indicator"></li>
                <li data-slide-to="7" class="fd-carousel__page-indicator"></li>
            </ol>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 4</div>

    <h4>Numeric page indicator</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-3" aria-live="polite">Displaying item 1 of 4</div>

    <h4>No page indicator</h4>

    <div class="fd-carousel" data-ride="carousel" style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item"
            >
                <i class="sap-icon--slim-arrow-left"></i>
            </button>

            <div class="fd-carousel__slides">
                <div class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="first image" />
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item"
            >
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>

    <div style="display: none" role="region" id="carousel-4" aria-live="polite">Displaying item 1 of 4</div>
</div>
`;const L={title:"Components/Carousel",parameters:{description:'The carousel component is used for browsing through a set of images. One or several items can be displayed at a time, and the user can navigate to either the next or the previous item.\n\nThe size of the content area automatically adjusts depending on the available screen space. On non-touchable devices, the buttons on the left and right side of the content are used for navigation. The buttons either float on the left and right side or appear in the page indicator area. On touchable devices, the user navigates with a swipe gesture and the buttons are not displayed.\n\n## Usage\n**Use the carousel if:**\n\n- You want a strong visual representation of the items you want to display.\n- You want to display items sequentially or side by side.\n\n**Do not use the carousel if:**\n\n- The items you want to display are uniform\n\n## Empty State\n\nWhen no pages are loaded, carousel displays a **Message Page** with a `sap-icon--document` icon.\n\n## Accessibility\n\nTo ensure that the carousel is accessible, a div element with class `fd-carousel` has a visually hidden sibling div element with `role="region"` and an `aria-live="polite"` attribute. This way, the text will be dynamically updated using Javascript so that carousel\'s content changes are announced to the user by screen readers.\n\n## Structure\n\n* `fd-carousel` The carousel container.\n  * `fd-carousel__content` The carousel content. <b>Modifier classes:</b> `fd-carousel__content--horizontal`, `fd-carousel__content--solid`, and  `fd-carousel__content--transparent`.\n    * `fd-carousel__button` The carousel button in content.\n    * `fd-carousel__button--left` The carousel button in content for previous page.\n    * `fd-carousel__button--right` The carousel button in content for next page.\n    * `fd-carousel__button--up` The carousel button in content for previous page in vertical mode.\n    * `fd-carousel__button--down` The carousel button in content for next page in vertical mode.\n    * `fd-carousel__slides` The carousel slides.\n      * `fd-carousel__item` The carousel item.\n  * `fd-carousel__page-indicator-container` The carousel page indicator container. <br> <b>Modifier classes:</b> `fd-carousel__page-indicator-container--translucent`, `fd-carousel__page-indicator-container--transparent` and `fd-carousel__page-indicator-container--no-border`\n    * `fd-carousel__button` The carousel button.\n    * `fd-carousel__button--left` The carousel button for previous page.\n    * `fd-carousel__button--right` The carousel button for next page.\n    * `fd-carousel__page-indicators` The carousel page indicators list.\n      * `fd-carousel__page-indicator-item` The carousel page indicator item.\n',tags:["f3","a11y","theme","development"]}},s=()=>j;s.storyName="Bottom page indicator";s.parameters={docs:{description:{story:"The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*."}}};const o=()=>Y;o.storyName="Top page indicator";o.parameters={docs:{description:{story:`The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.
`}}};const l=()=>M;l.storyName="Hidden navigation buttons";l.parameters={docs:{description:{story:"Carousel can also be displayed without navigation buttons. To hide them, add the `fd-carousel--no-navigation` modifier class to the `fd-carousel` class. On touchable devices, the user can navigate with a swipe gesture.\n"}}};const d=()=>U;d.storyName="Background modifiers";d.parameters={docs:{description:{story:"The background of the Carousel Content and Page Indicator Container can be changed by modifier classes. <br><b>Carousel Content</b><br>The <b>default</b> background for the Carousel Content is <b>translucent</b>. For <b>transparent</b> background apply `fd-carousel__content--transparent` modifier class. For <b>solid</b> background apply `fd-carousel__content--solid` modifier class to the `fd-carousel__content` base class.<br><br><b>Page Indicator Container</b><br>The <b>default</b> background for the container is <b>solid</b>. For <b>transparent</b> background apply `fd-carousel__page-indicator-container--transparent` modifier class. For <b>translucent</b> background apply `fd-carousel__page-indicator-container--translucent` modifier class to the `fd-carousel__page-indicator-container` base class. The  `fd-carousel__page-indicator-container--no-border` will remove the border top or bottom of the container. "}}};const r=()=>F;r.storyName="Items in horizontal direction";r.parameters={docs:{description:{story:`Carousel will have items which will spread horizontally and will be visible on navigation. For translate animation effect to work, all items should be in DOM.
`}}};const c=()=>P;c.storyName="Items loading error";c.parameters={docs:{description:{story:"Error message can be displayed when items could not be loaded. Error message can be composed using Message page component."}}};var f,p,m;s.parameters=i(a({},s.parameters),{docs:i(a({},(f=s.parameters)==null?void 0:f.docs),{source:a({originalSource:"() => carouselBottomExampleHtml"},(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});var g,v,b;o.parameters=i(a({},o.parameters),{docs:i(a({},(g=o.parameters)==null?void 0:g.docs),{source:a({originalSource:"() => carouselTopExampleHtml"},(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source)})});var h,x,y;l.parameters=i(a({},l.parameters),{docs:i(a({},(h=l.parameters)==null?void 0:h.docs),{source:a({originalSource:"() => carouselNoNavigationExampleHtml"},(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source)})});var w,G,T;d.parameters=i(a({},d.parameters),{docs:i(a({},(w=d.parameters)==null?void 0:w.docs),{source:a({originalSource:"() => carouselBackgroundsExampleHtml"},(T=(G=d.parameters)==null?void 0:G.docs)==null?void 0:T.source)})});var C,D,N;r.parameters=i(a({},r.parameters),{docs:i(a({},(C=r.parameters)==null?void 0:C.docs),{source:a({originalSource:"() => horizontalCarouselExampleHtml"},(N=(D=r.parameters)==null?void 0:D.docs)==null?void 0:N.source)})});var E,H,k;c.parameters=i(a({},c.parameters),{docs:i(a({},(E=c.parameters)==null?void 0:E.docs),{source:a({originalSource:"() => errorExampleHtml"},(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source)})});const Q=["CarouselBottom","CarouselTop","CarouselNoNavigation","CarouselBackgrounds","HorizontalCarousel","Error"];export{d as CarouselBackgrounds,s as CarouselBottom,l as CarouselNoNavigation,o as CarouselTop,c as Error,r as HorizontalCarousel,Q as __namedExportsOrder,L as default};
