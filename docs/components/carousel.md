---
component: fd-carousel
title: Components/Carousel
category: Components
selector: fd-carousel
cssFile: carousel.css
sourcePath: packages/styles/stories/Components/carousel/carousel.stories.js
tags: []
dependencies: ["button","carousel","icon","link","message-page"]
relatedComponents: ["button","carousel","icon","link","message-page"]
stability: stable
---

# Components/Carousel

The carousel component is used for browsing through a set of images. One or several items can be displayed at a time, and the user can navigate to either the next or the previous item.

The size of the content area automatically adjusts depending on the available screen space. On non-touchable devices, the buttons on the left and right side of the content are used for navigation. The buttons either float on the left and right side or appear in the page indicator area. On touchable devices, the user navigates with a swipe gesture and the buttons are not displayed.

## Usage
**Use the carousel if:**

- You want a strong visual representation of the items you want to display.
- You want to display items sequentially or side by side.

**Do not use the carousel if:**

- The items you want to display are uniform

## Empty State

When no pages are loaded, carousel displays a **Message Page** with a \

## When Not To Use

- The items you want to display are uniform

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `carousel.css`
- `icon.css`
- `link.css`
- `message-page.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/carousel.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/carousel.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-page.css" rel="stylesheet">
```

## Basic Usage

```html
<h4>Navigation buttons in page indicator (focussed)</h4>

<section
    class="fd-carousel is-focus"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"
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
                <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
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
        >
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

            <div class="fd-carousel__page-indicator-container">
                <button
                    role="button"
                    class="fd-button fd-carousel__button fd-carousel__button--left"
                    title="Previous Page"
                    >
                    <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
                </button>

                <ol class="fd-carousel__page-indicators">
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li

                        aria-label="Displaying item 5 of 7"
                        class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                        ></li>
                        <li class="fd-carousel__page-indicator"></li>
                        <li class="fd-carousel__page-indicator"></li>
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

            <div role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 7</div>

            <h4>Content navigation buttons</h4>

            <section
                class="fd-carousel"
                role="listbox"
                aria-roledescription="Carousel"
                aria-activedescendant="carousel-item-3"
                >
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
                    >
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

                    <div role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 7</div>

                    <h4>Numeric page indicator</h4>

                    <section
                        role="listbox"
                        aria-roledescription="Carousel"
                        aria-activedescendant="carousel-item-5"
                        class="fd-carousel"
                        >
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

                        <div role="region" id="carousel-3" aria-live="polite">Displaying item 1 of 7</div>

                        <h4>No page indicator</h4>

                        <section
                            role="listbox"
                            aria-roledescription="Carousel"
                            aria-activedescendant="carousel-item-6"
                            class="fd-carousel"
                            >
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
                            </section>

                            <div role="region" id="carousel-4" aria-live="polite">Displaying item 1 of 7</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-carousel--no-navigation` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |

## BEM Elements

This component uses the following BEM elements:

- `fd-carousel__button`
- `fd-carousel__button--down`
- `fd-carousel__button--left`
- `fd-carousel__button--right`
- `fd-carousel__button--up`
- `fd-carousel__content`
- `fd-carousel__content--horizontal`
- `fd-carousel__content--solid`
- `fd-carousel__content--transparent`
- `fd-carousel__item`
- `fd-carousel__item--active`
- `fd-carousel__page-indicator`
- `fd-carousel__page-indicator--active`
- `fd-carousel__page-indicator-container`
- `fd-carousel__page-indicator-container--no-border`
- `fd-carousel__page-indicator-container--translucent`
- `fd-carousel__page-indicator-container--transparent`
- `fd-carousel__page-indicators`
- `fd-carousel__slides`
- `fd-carousel__text`

## Related Components

This component works with or depends on:

- `button`
- `carousel`
- `icon`
- `link`
- `message-page`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--down`
- `--fdButton_Focus_Border_Radius`
- `--fdCarousel_Button_Display`
- `--fdCarousel_Content_Background`
- `--fdCarousel_Dot_Background`
- `--fdCarousel_Dot_Border`
- `--fdCarousel_Dot_Margin`
- `--fdCarousel_Dot_Selected_Background`
- `--fdCarousel_Dot_Selected_Border`
- `--fdCarousel_Dot_Size`
- `--fdCarousel_Page_Indicator_Background_Color`
- `--fdCarousel_Page_Indicator_Border`
- `--fdCarousel_Page_Indicator_Container_Background`
- `--fdCarousel_Page_Indicator_Margin`

*...and 5 more*

## Examples

### Bottom page indicator

The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*.

```html
<h4>Navigation buttons in page indicator (focussed)</h4>

<section
    class="fd-carousel is-focus"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"
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
                <img src="https://placehold.co/320x200" alt="Example picture" aria-label="Example picture" />
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
        >
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

            <div class="fd-carousel__page-indicator-container">
                <button
                    role="button"
                    class="fd-button fd-carousel__button fd-carousel__button--left"
                    title="Previous Page"
                    >
                    <i class="sap-icon--slim-arrow-up" role="presentation" aria-hidden="true"></i>
                </button>

                <ol class="fd-carousel__page-indicators">
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li class="fd-carousel__page-indicator"></li>
                    <li

                        aria-label="Displaying item 5 of 7"
                        class="fd-carousel__page-indicator fd-carousel__page-indicator--active"
                        ></li>
                        <li class="fd-carousel__page-indicator"></li>
                        <li class="fd-carousel__page-indicator"></li>
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

            <div role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 7</div>

            <h4>Content navigation buttons</h4>

            <section
                class="fd-carousel"
                role="listbox"
                aria-roledescription="Carousel"
                aria-activedescendant="carousel-item-3"
                >
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
                    >
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

                    <div role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 7</div>

                    <h4>Numeric page indicator</h4>

                    <section
                        role="listbox"
                        aria-roledescription="Carousel"
                        aria-activedescendant="carousel-item-5"
                        class="fd-carousel"
                        >
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

                        <div role="region" id="carousel-3" aria-live="polite">Displaying item 1 of 7</div>

                        <h4>No page indicator</h4>

                        <section
                            role="listbox"
                            aria-roledescription="Carousel"
                            aria-activedescendant="carousel-item-6"
                            class="fd-carousel"
                            >
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
                            </section>

                            <div role="region" id="carousel-4" aria-live="polite">Displaying item 1 of 7</div>
```

### Top page indicator

The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.

```html
<h4>Navigation buttons in page indicator</h4>

<section
    class="fd-carousel"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"

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

    <div role="region" id="carousel-5" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>Navigation buttons in content</h4>

    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"

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
        </section>

        <div role="region" id="carousel-6" aria-live="polite">
            Displaying item 1 of 7
        </div>

        <h4>Numeral format for page indicator</h4>

        <section
            class="fd-carousel"
            role="listbox"
            aria-roledescription="Carousel"
            aria-activedescendant="carousel-item-3"

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
            </section>

            <div role="region" id="carousel-7" aria-live="polite">
                Displaying item 1 of 7
            </div>

            <h4>No page indicators</h4>

            <section
                class="fd-carousel"
                role="listbox"
                aria-roledescription="Carousel"
                aria-activedescendant="carousel-item-4"

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
                </section>

                <div role="region" id="carousel-8" aria-live="polite">
                    Displaying item 1 of 7
                </div>
```

### Hidden navigation buttons

Carousel can also be displayed without navigation buttons. To hide them, add the \

```html
<h4>Hiding navigation buttons in page indicator</h4>

<section
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"
    class="fd-carousel fd-carousel--no-navigation"

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

    <div role="region" id="carousel-9" aria-live="polite">
        Displaying item 1 of 7
    </div>

    <h4>Hiding navigation buttons in the content</h4>

    <section
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-2"
        class="fd-carousel fd-carousel--no-navigation"

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
        </section>

        <div role="region" id="carousel-10" aria-live="polite">
            Displaying item 1 of 7
        </div>
```

### Background modifiers

The background of the Carousel Content and Page Indicator Container can be changed by modifier classes. <br><b>Carousel Content</b><br>The <b>default</b> background for the Carousel Content is <b>translucent</b>. For <b>transparent</b> background apply \

```html
<h4>Transparent Carousel Content</h4>

<section
    class="fd-carousel"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"
    >

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
                <span></span>
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
        >

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
                    <span></span>
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

        <div role="region" id="carousel-1" aria-live="polite">Displaying item 1 of 4</div>

        <h4>Transparent Page Indicator Container</h4>

        <section
            class="fd-carousel"
            role="listbox"
            aria-roledescription="Carousel"
            aria-activedescendant="carousel-item-3"
            >

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
                >

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
                    >

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
                                <span></span>
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

                    <div role="region" id="carousel-2" aria-live="polite">Displaying item 1 of 4</div>
```

### Items in horizontal direction

Carousel will have items which will spread horizontally and will be visible on navigation. For translate animation effect to work, all items should be in DOM.

```html
<h4>Items in horizontal direction</h4>

<section
    class="fd-carousel"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"

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

    <div role="region" id="carousel-11" aria-live="polite">
        Displaying item 2 of 3
    </div>
```

### Items loading error

Error message can be displayed when items could not be loaded. Error message can be composed using Message page component. For mixed data use <code>sapIllus-Scene-ReloadScreen</code> illustration, and for images in Carousel use <code>sapIllus-Dialog-UnableToLoadImage</code> illustration.

```html
<h4>Mixed Data in Carousel</h4>
<section
    class="fd-carousel fd-carousel--no-navigation"
    role="listbox"
    aria-roledescription="Carousel"
    aria-activedescendant="carousel-item-1"

    >
    <div class="fd-carousel__content">
        <div class="fd-message-page">
            <div class="fd-message-page__container">
                <div class="fd-message-page__icon-container">
                    <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>

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

    <div role="region" id="carousel-12" aria-live="polite">
        Error in loading items
    </div>

    <h4>Images in Carousel
    </h4>
    <section
        class="fd-carousel"
        role="listbox"
        aria-roledescription="Carousel"
        aria-activedescendant="carousel-item-1"
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
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/carousel/carousel.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
