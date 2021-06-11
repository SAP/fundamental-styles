export default {
    title: 'Components/Carousel',
    parameters: {
        description: `The carousel component is used for browsing through a set of images. One or several items can be displayed at a time, and the user can navigate to either the next or the previous item.

The size of the content area automatically adjusts depending on the available screen space. On non-touchable devices, the buttons on the left and right side of the content are used for navigation. The buttons either float on the left and right side or appear in the page indicator area. On touchable devices, the user navigates with a swipe gesture and the buttons are not displayed.

## Usage
**Use the carousel if:**

- You want a strong visual representation of the items you want to display.
- You want to display items sequentially or side by side.

**Do not use the carousel if:**

- The items you want to display are uniform

## Empty State

When no pages are loaded, carousel displays a **Message Page** with a <code class="docs-code">sap-icon--document</code> icon.


## Accessibility

To ensure that the carousel is accessible, a div element with class <code class="docs-code">fd-carousel</code> has a visually hidden sibling div element with <code class="docs-code">role="region"</code> and an <code class="docs-code">aria-live="polite"</code> attribute. This way, the text will be dynamically updated using Javascript so that carousel's content changes are announced to the user by screen readers.

`,
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: ['carousel', 'button', 'icon']
    }
};

export const carouselBottom = () => `<div style="display: flex; flex-direction: column; align-items: center; background: #CCD1D1;">
    <h4>Navigation buttons in page indicator</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
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
    <div style="display: none;" role="region" id="carousel-1" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Content navigation buttons</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
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
    </div>
    <div style="display: none;" role="region" id="carousel-2" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Numeric page indicator</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
        <div class="fd-carousel__page-indicator-container">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>
    <div style="display: none;" role="region" id="carousel-3" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>No page indicator</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--right"
                data-slide="next"
                aria-label="Go to next item">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
    </div>
    <div style="display: none;" role="region" id="carousel-4" aria-live="polite">
        Displaying item 1 of 4
    </div>
</div>
`;

carouselBottom.storyName = 'Bottom page indicator';
carouselBottom.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*.
`
    }
};

export const carouselTop = () => `<div style="display: flex; flex-direction: column; align-items: center; background: #CCD1D1;">
    <h4>Navigation buttons in page indicator</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
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
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
    </div>
    <div style="display: none;" role="region" id="carousel-5" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Navigation buttons in content</h4>
    <div 
        class="fd-carousel" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
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
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
           <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
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
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
        </div>
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
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
        style="margin-bottom: 3rem; max-width: 30rem;">
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
        <div class="fd-carousel__content" style="text-align: center; padding: 1rem; min-height: 15.5rem;">
            <div class="fd-carousel__item fd-carousel__item--active">
                <div
                    style="
                        width:100%;
                        background-image: url(assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg);
                        height: 15.5rem;
                        background-size:cover;"
                    role="img"
                    aria-label="Carousel Image 4" />
            </div>
        </div>
    </div>
    <div style="display: none;" role="region" id="carousel-8" aria-live="polite">
        Displaying item 1 of 4
    </div>
</div>
`;

carouselTop.storyName = 'Top page indicator';
carouselTop.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.
`
    }
};

export const carouselNoNavigation = () => `<div style="display: flex; flex-direction: column; align-items: center; background: #CCD1D1;">
    <h4>Hiding navigation buttons in page indicator</h4>
    <div 
        class="fd-carousel fd-carousel--no-navigation" 
        data-ride="carousel" 
        style="margin-bottom: 3rem; max-width: 30rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
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
        style="margin-bottom: 3rem; max-width: 30rem;">
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
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
           <button 
                class="fd-button fd-carousel__button fd-carousel__button--left"
                data-slide="prev"
                aria-label="Go to previous item">
                <i class="sap-icon--slim-arrow-left"></i>
            </button>
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
`;

carouselNoNavigation.storyName = 'Hidden navigation buttons';
carouselNoNavigation.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Carousel can also be displayed without navigation buttons. To hide them, add the <code class="docs-code">fd-carousel--no-navigation</code> modifier class to the <code class="docs-code">fd-carousel</code> class. On touchable devices, the user can navigate with a swipe gesture.
`
    }
};

export const horizontalCarousel = () => `<div style="display: flex; flex-direction: column; align-items: center; background: #CCD1D1;">
    <h4>Items in horizontal direction</h4>
    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 60rem;">
        <div class="fd-carousel__content fd-carousel__content--horizontal" style="text-align: center; padding: 1rem; min-height: 15.5rem;">
            <div class="fd-carousel__item fd-carousel__item--active">
                <div
                    style="
                        width:100%;
                        background-image: url(assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg);
                        height: 15.5rem;
                        background-size:cover;"
                    role="img"
                    aria-label="Carousel Image 5">
                </div>
            </div>

            <div class="fd-carousel__item fd-carousel__item--active">
                <div
                    style="
                        width:100%;
                        background-image: url(assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg);
                        height: 15.5rem;
                        background-size:cover;"
                    role="img"
                    aria-label="Carousel Image 6">
                </div>
            </div>

            <div class="fd-carousel__item fd-carousel__item--active">
                <div
                    style="
                        width:100%;
                        background-image: url(assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg);
                        height: 15.5rem;
                        background-size:cover;"
                    role="img"
                    aria-label="Carousel Image 7">
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
`;

horizontalCarousel.storyName = 'Items in horizontal direction';
horizontalCarousel.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Carousel will have items which will spread horizontally and will be visible on navigation. For translation to work, all items should be in DOM.
`
    }
};

export const error = () => `<div style="display: flex; flex-direction: column; align-items: center; background: #CCD1D1;">
    <h4>Error in loading items</h4>
    <div
        class="fd-carousel fd-carousel--no-navigation"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 60rem;">
        <div class="fd-carousel__content fd-carousel__content--error-message" style="text-align: center; padding: 1rem; min-height: 15.5rem;">
            <div class="docs-column-flex">
                <div class="fddocs-horizontal-center">
                    <i class="sap-icon--document"></i>
                </div>
                Items could not be loaded
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
`;

error.storyName = 'Items loading error';
error.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Error message can be disaplyed when items could not be loaded.
`
    }
};
