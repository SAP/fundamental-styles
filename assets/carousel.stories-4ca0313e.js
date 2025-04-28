/* empty css               *//* empty css             *//* empty css                     *//* empty css             */const o=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Mixed Data in Carousel</h4>
    <section
        class="fd-carousel fd-carousel--no-navigation"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="margin-block-end: 4rem;"
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
                        <div class="fd-message-page__subtitle fd-message-page__subtitle--center">
                            Check your internet connection. 
                            And if that's not it, try reloading. If that still doesn't help, check with your administrator.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-12" aria-live="polite">
        Error in loading items
    </div>

    <h4>Images in Carousel	
    </h4>
    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="max-width: 30rem;">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <div class="fd-message-page">
                        <div class="fd-message-page__container">
                            <div class="fd-message-page__icon-container">
                                <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>
                            </div>
        
                            <div role="status" aria-live="polite" class="fd-message-page__content">
                                <div class="fd-message-page__title">
                                    Unable to load data
                                </div>
                                <div class="fd-message-page__subtitle fd-message-page__subtitle--center">
                                    Check your internet connection. 
                                    And if that's not it, try reloading. If that still doesn't help, check with your administrator.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>
</div>
`,l=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Items in horizontal direction</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__content fd-carousel__content--horizontal">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__page-indicators">
                    <span role="img" aria-label="Item 1 of 3 displayed" class="fd-carousel__page-indicator"></span>
                    <span role="img" aria-label="Item 2 of 3 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                    <span role="img" aria-label="Item 3 of 3 displayed" class="fd-carousel__page-indicator"></span>
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-11" aria-live="polite">
        Displaying item 2 of 3
    </div>
</div>
`,r=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Hiding navigation buttons in page indicator</h4>

    <section
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        class="fd-carousel fd-carousel--no-navigation"
        style="margin-bottom: 3rem; max-width: 20rem;"
    >
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-9" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>Hiding navigation buttons in the content</h4>

    <section
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"
        class="fd-carousel fd-carousel--no-navigation"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>

        <div class="fd-carousel__content">
            <button
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-2"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>

            <button
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-10" aria-live="polite">
        Displaying item 1 of 7
    </div>
</div>
`,d=`<div style="display: flex; flex-direction: column; align-items: center">
    <h4>Transparent Carousel Content</h4>

    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        
        <div class="fd-carousel__content fd-carousel__content--transparent">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <h4>Solid Carousel Content</h4>
    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        
        <div class="fd-carousel__content fd-carousel__content--solid">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-2"
                    class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 4</div>

    <h4>Transparent Page Indicator Container</h4>

    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-3"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
       
        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-3"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--transparent">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>
    </section>

    <h4>Translucent Page Indicator Container</h4>
    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-4"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        
        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--up"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-4"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--down"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--translucent">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>
    </section>

    <h4>Page Indicator Container with no border</h4>

    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-5"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        
        <div class="fd-carousel__content fd-carousel__content--solid">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-5"
                    class="fd-carousel__item fd-carousel__item--active">
                    <span style="width: 300px; height: 200px; display: flex;"></span>
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container fd-carousel__page-indicator-container--no-border">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 4</div>
</div>
`,c=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Navigation buttons in page indicator</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-5" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>Navigation buttons in content</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>

        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-2"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-6" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>Numeral format for page indicator</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-3"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
        </div>

        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-3"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-7" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>No page indicators</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-4"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page">
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page">
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-4"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture">
                </div>
            </div>
        </div>
    </section>

    <div style="display: none;" role="region" id="carousel-8" aria-live="polite">
        Displaying item 1 of 7
    </div>
</div>
`,u=`<div style="display: flex; flex-direction: column; align-items: center">
    <h4>Navigation buttons in page indicator (focussed)</h4>

    <section 
        class="fd-carousel is-focus" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-1"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <h4>Navigation buttons in page indicator (vertical)</h4>
    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-2"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
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
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 7</div>

    <h4>Content navigation buttons</h4>

    <section 
        class="fd-carousel" 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-3"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-3"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>
    </section>

    <h4>Content navigation buttons (vertical)</h4>
    <section 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-4"
        class="fd-carousel" 
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--up"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-4"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--down"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
            </button>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <span role="img" aria-label="Item 1 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 2 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 3 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 4 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 5 of 7 displayed" class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></span>
                <span role="img" aria-label="Item 6 of 7 displayed" class="fd-carousel__page-indicator"></span>
                <span role="img" aria-label="Item 7 of 7 displayed" class="fd-carousel__page-indicator"></span>
            </div>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 7</div>

    <h4>Numeric page indicator</h4>

    <section 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-5"
        class="fd-carousel" 
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-5"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>
        </div>

        <div class="fd-carousel__page-indicator-container">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-3" aria-live="polite">Displaying item 1 of 7</div>

    <h4>No page indicator</h4>

    <section 
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-6"
        class="fd-carousel" 
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem">
        <div class="fd-carousel__content">
            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--left"
                title="Previous Page"
            >
                <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
            </button>

            <div class="fd-carousel__slides">
                <div 
                    role="option"
                    aria-setsize="1"
                    aria-posinset="1"
                    aria-selected="true"
                    aria-hidden="false"
                    id="carousel-item-6"
                    class="fd-carousel__item fd-carousel__item--active">
                    <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
                </div>
            </div>

            <button
                role="button"
                class="fd-button fd-carousel__button fd-carousel__button--right"
                title="Next Page"
            >
                <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
            </button>
        </div>
    </section>

    <div style="display: none" role="region" id="carousel-4" aria-live="polite">Displaying item 1 of 7</div>
</div>
`;const g={title:"Components/Carousel",parameters:{description:'The carousel component is used for browsing through a set of images. One or several items can be displayed at a time, and the user can navigate to either the next or the previous item.\n\nThe size of the content area automatically adjusts depending on the available screen space. On non-touchable devices, the buttons on the left and right side of the content are used for navigation. The buttons either float on the left and right side or appear in the page indicator area. On touchable devices, the user navigates with a swipe gesture and the buttons are not displayed.\n\n## Usage\n**Use the carousel if:**\n\n- You want a strong visual representation of the items you want to display.\n- You want to display items sequentially or side by side.\n\n**Do not use the carousel if:**\n\n- The items you want to display are uniform\n\n## Empty State\n\nWhen no pages are loaded, carousel displays a **Message Page** with a `sap-icon--document` icon.\n\n## Accessibility\n\nTo ensure that the carousel is accessible, a div element with class `fd-carousel` has a visually hidden sibling div element with `role="region"` and an `aria-live="polite"` attribute. This way, the text will be dynamically updated using Javascript so that carousel\'s content changes are announced to the user by screen readers.\n\n## Structure\n\n* `fd-carousel` The carousel container.\n  * `fd-carousel__content` The carousel content. <b>Modifier classes:</b> `fd-carousel__content--horizontal`, `fd-carousel__content--solid`, and  `fd-carousel__content--transparent`.\n    * `fd-carousel__button` The carousel button in content.\n    * `fd-carousel__button--left` The carousel button in content for previous page.\n    * `fd-carousel__button--right` The carousel button in content for next page.\n    * `fd-carousel__button--up` The carousel button in content for previous page in vertical mode.\n    * `fd-carousel__button--down` The carousel button in content for next page in vertical mode.\n    * `fd-carousel__slides` The carousel slides.\n      * `fd-carousel__item` The carousel item.\n  * `fd-carousel__page-indicator-container` The carousel page indicator container. <br> <b>Modifier classes:</b> `fd-carousel__page-indicator-container--translucent`, `fd-carousel__page-indicator-container--transparent` and `fd-carousel__page-indicator-container--no-border`\n    * `fd-carousel__button` The carousel button.\n    * `fd-carousel__button--left` The carousel button for previous page.\n    * `fd-carousel__button--right` The carousel button for next page.\n    * `fd-carousel__page-indicators` The carousel page indicators list.\n      * `fd-carousel__page-indicator-item` The carousel page indicator item.\n',tags:["f3","a11y","theme","development"]}},a=()=>u;a.storyName="Bottom page indicator";a.parameters={docs:{description:{story:"The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*."}}};const e=()=>c;e.storyName="Top page indicator";e.parameters={docs:{description:{story:`The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.
`}}};const n=()=>r;n.storyName="Hidden navigation buttons";n.parameters={docs:{description:{story:"Carousel can also be displayed without navigation buttons. To hide them, add the `fd-carousel--no-navigation` modifier class to the `fd-carousel` class. On touchable devices, the user can navigate with a swipe gesture.\n"}}};const i=()=>d;i.storyName="Background modifiers";i.parameters={docs:{description:{story:"The background of the Carousel Content and Page Indicator Container can be changed by modifier classes. <br><b>Carousel Content</b><br>The <b>default</b> background for the Carousel Content is <b>translucent</b>. For <b>transparent</b> background apply `fd-carousel__content--transparent` modifier class. For <b>solid</b> background apply `fd-carousel__content--solid` modifier class to the `fd-carousel__content` base class.<br><br><b>Page Indicator Container</b><br>The <b>default</b> background for the container is <b>solid</b>. For <b>transparent</b> background apply `fd-carousel__page-indicator-container--transparent` modifier class. For <b>translucent</b> background apply `fd-carousel__page-indicator-container--translucent` modifier class to the `fd-carousel__page-indicator-container` base class. The  `fd-carousel__page-indicator-container--no-border` will remove the border top or bottom of the container. "}}};const s=()=>l;s.storyName="Items in horizontal direction";s.parameters={docs:{description:{story:`Carousel will have items which will spread horizontally and will be visible on navigation. For translate animation effect to work, all items should be in DOM.
`}}};const t=()=>o;t.storyName="Items loading error";t.parameters={docs:{description:{story:"Error message can be displayed when items could not be loaded. Error message can be composed using Message page component. For mixed data use <code>sapIllus-Scene-ReloadScreen</code> illustration, and for images in Carousel use <code>sapIllus-Dialog-UnableToLoadImage</code> illustration."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => carouselBottomExampleHtml",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => carouselTopExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => carouselNoNavigationExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => carouselBackgroundsExampleHtml",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => horizontalCarouselExampleHtml",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => errorExampleHtml",...t.parameters?.docs?.source}}};const b=["CarouselBottom","CarouselTop","CarouselNoNavigation","CarouselBackgrounds","HorizontalCarousel","Error"];export{i as CarouselBackgrounds,a as CarouselBottom,n as CarouselNoNavigation,e as CarouselTop,t as Error,s as HorizontalCarousel,b as __namedExportsOrder,g as default};
