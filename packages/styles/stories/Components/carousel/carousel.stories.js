import '../../../src/carousel.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/message-page.scss';
import '../../../src/link.scss';
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

When no pages are loaded, carousel displays a **Message Page** with a \`sap-icon--document\` icon.

## Accessibility

To ensure that the carousel is accessible, a div element with class \`fd-carousel\` has a visually hidden sibling div element with \`role="region"\` and an \`aria-live="polite"\` attribute. This way, the text will be dynamically updated using Javascript so that carousel's content changes are announced to the user by screen readers.

## Structure

* \`fd-carousel\` The carousel container.
  * \`fd-carousel__content\` The carousel content.
    * \`fd-carousel__button\` The carousel button in content.
    * \`fd-carousel__button--left\` The carousel button in content for previous page.
    * \`fd-carousel__button--right\` The carousel button in content for next page.
    * \`fd-carousel__slides\` The carousel slides.
      * \`fd-carousel__item\` The carousel item.
  * \`fd-carousel__page-indicator-container\` The carousel page indicator container.
    * \`fd-carousel__button\` The carousel button.
    * \`fd-carousel__button--left\` The carousel button for previous page.
    * \`fd-carousel__button--right\` The carousel button for next page.
    * \`fd-carousel__page-indicators\` The carousel page indicators list.
      * \`fd-carousel__page-indicator-item\` The carousel page indicator item.
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

export const CarouselBottom = () => `<div style="display: flex; flex-direction: column; align-items: center;">
    <h4>Navigation buttons in page indicator</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
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

    <div style="display: none;" role="region" id="carousel-1" aria-live="polite">
        Displaying item 1 of 4
    </div>

    <h4>Content navigation buttons</h4>

    <div
        class="fd-carousel"
        data-ride="carousel"
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
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
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
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
        style="margin-bottom: 3rem; max-width: 20rem; max-height: 15.5rem;"
    >
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

    <div style="display: none;" role="region" id="carousel-4" aria-live="polite">
        Displaying item 1 of 4
    </div>
</div>
`;

CarouselBottom.storyName = 'Bottom page indicator';
CarouselBottom.parameters = {
    docs: {
        description: {
            story: 'The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*.'
        }
    }
};

export const CarouselTop = () => `<div style="display: flex; flex-direction: column; align-items: center;">
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
`;

CarouselTop.storyName = 'Top page indicator';
CarouselTop.parameters = {
    docs: {
        description: {
            story: `The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.
`
        }
    }
};

export const CarouselNoNavigation = () => `<div style="display: flex; flex-direction: column; align-items: center;">
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
`;

CarouselNoNavigation.storyName = 'Hidden navigation buttons';
CarouselNoNavigation.parameters = {
    docs: {
        description: {
            story: `Carousel can also be displayed without navigation buttons. To hide them, add the \`fd-carousel--no-navigation\` modifier class to the \`fd-carousel\` class. On touchable devices, the user can navigate with a swipe gesture.
`
        }
    }
};

export const HorizontalCarousel = () => `<div style="display: flex; flex-direction: column; align-items: center;">
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
`;

HorizontalCarousel.storyName = 'Items in horizontal direction';
HorizontalCarousel.parameters = {
    docs: {
        description: {
            story: `Carousel will have items which will spread horizontally and will be visible on navigation. For translate animation effect to work, all items should be in DOM.
`
        }
    }
};

export const Error = () => `<div style="display: flex; flex-direction: column; align-items: center;">
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
`;

Error.storyName = 'Items loading error';
Error.parameters = {
    docs: {
        description: {
            story: 'Error message can be displayed when items could not be loaded. Error message can be composed using Message page component.'
        }
    }
};
