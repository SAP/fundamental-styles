import '../../dist/carousel.css';

export default {
    title: 'Components/Carousel',
    parameters: {
        description: `The carousel component is used for browsing through a set of images. One or several items can be displayed at a time. The user can navigate to either the next or the previous item.

## Usage

- to achieve a strong visual representations of the items you want to display
- to display items sequentially or side by side

## Responsiveness

The size of the content area is adjusted automatically, depending on the screen and the available space.
On non-touchable devices, the buttons on the left and right of the page indicator or the content are used for navigating to the next or the previous item/s. On touchable devices the navigation is achieved with a swipe gesture and the buttons are not displayed. 
The page indicator wraps on the next line if the content is too long.

## Layout

- **Content**- (mandatory) the area displaying either the current item or a set of items.
- **Page indicator**- (optional) can be above or below the content area. After the pages reach the count of 8, the dots are replaced by numeral representation (valid for all devices).
The numeral format is the following: **1 of 9**
- **Buttons**- on non-touch devices, paging buttons either float above the left and right sides of the content area, or appear in the paging indicator area. The buttons are not displayed on touchable devices. The <code class="docs-code">fd-carousel--touch-device</code> modifier class applied with <code class="docs-code">fd-carousel</code> when the device is touchable will hide the buttons.

## Behavior and Interaction

- **Navigation for single items**- when the user navigates from the current item to another item, the current item is moved out of the content area, and the next or previous item slides in (depending on the direction of navigation). If the item set contains only one item, navigation is deactivated.
- **Navigation for single items**- when the user clicks one of the paging buttons, the rightmost or leftmost item is moved out of the content area, and the next or previous item slides in (depending on the navigation direction).
- **Looping**- if looping is enabled, the carousel jumps back to the first item once all items have been displayed.
- **Paging**- the current position inside the set of items is displayed using an optional paging indicator. 
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};


export const carousel = () => `
<div style="display: flex; justify-content: space-between;">
    <div class="fd-carousel" data-ride="carousel" style="margin: 3rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
        <div class="fd-carousel__page-indicator-container">
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-left"
                data-slide="prev">
            </button>
            <ol class="fd-carousel__page-indicators">
                <li 
                    data-slide-to="1" 
                    aria-label="Displaying item 1 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="2" 
                    aria-label="Displaying item 2 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="3" 
                    aria-label="Displaying item 3 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="4" 
                    aria-label="Displaying item 4 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="5" 
                    aria-label="Displaying item 5 of 7" 
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li 
                    data-slide-to="6" 
                    aria-label="Displaying item 6 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="7" 
                    aria-label="Displaying item 7 of 7" 
                    class="fd-carousel__page-indicator"></li>
            </ol>
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-right"
                data-slide="next">
            </button>
        </div>
    </div>

    <div class="fd-carousel" data-ride="carousel" style="margin: 3rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
        <div class="fd-carousel__page-indicator-container">
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-left"
                data-slide="prev">
            </button>
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-right"
                data-slide="next">
            </button>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between;">
    <div class="fd-carousel" data-ride="carousel" style="margin: 3rem;">
        <div class="fd-carousel__page-indicator-container">
            <ol class="fd-carousel__page-indicators">
                <li 
                    data-slide-to="1" 
                    aria-label="Displaying item 1 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="2" 
                    aria-label="Displaying item 2 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="3" 
                    aria-label="Displaying item 3 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="4" 
                    aria-label="Displaying item 4 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="5" 
                    aria-label="Displaying item 5 of 7" 
                    class="fd-carousel__page-indicator fd-carousel__page-indicator--active"></li>
                <li 
                    data-slide-to="6" 
                    aria-label="Displaying item 6 of 7" 
                    class="fd-carousel__page-indicator"></li>
                <li 
                    data-slide-to="7" 
                    aria-label="Displaying item 7 of 7" 
                    class="fd-carousel__page-indicator"></li>
            </ol>
        </div>
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
           <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-left"
                data-slide="prev">
            </button>
           <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-right"
                data-slide="next">
            </button>
        </div>
    </div>

    <div class="fd-carousel" data-ride="carousel" style="margin: 3rem;">
        <div class="fd-carousel__page-indicator-container">
            <div class="fd-carousel__page-indicators">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
        </div>
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-left"
                data-slide="prev">
            </button>
            <button 
                class="fd-button fd-carousel__button sap-icon--slim-arrow-right"
                data-slide="next">
            </button>
        </div>
    </div>
</div>
`;

carousel.storyName = '';
carousel.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `
`
    }
};
