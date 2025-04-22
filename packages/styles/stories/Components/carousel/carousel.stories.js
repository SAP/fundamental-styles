import errorExampleHtml from "./error.example.html?raw";
import horizontalCarouselExampleHtml from "./horizontal-carousel.example.html?raw";
import carouselNoNavigationExampleHtml from "./carousel-no-navigation.example.html?raw";
import carouselBackgroundsExampleHtml from "./carousel-backgrounds.example.html?raw";
import carouselTopExampleHtml from "./carousel-top.example.html?raw";
import carouselBottomExampleHtml from "./carousel-bottom.example.html?raw";
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
  * \`fd-carousel__content\` The carousel content. <b>Modifier classes:</b> \`fd-carousel__content--horizontal\`, \`fd-carousel__content--solid\`, and  \`fd-carousel__content--transparent\`.
    * \`fd-carousel__button\` The carousel button in content.
    * \`fd-carousel__button--left\` The carousel button in content for previous page.
    * \`fd-carousel__button--right\` The carousel button in content for next page.
    * \`fd-carousel__button--up\` The carousel button in content for previous page in vertical mode.
    * \`fd-carousel__button--down\` The carousel button in content for next page in vertical mode.
    * \`fd-carousel__slides\` The carousel slides.
      * \`fd-carousel__item\` The carousel item.
  * \`fd-carousel__page-indicator-container\` The carousel page indicator container. <br> <b>Modifier classes:</b> \`fd-carousel__page-indicator-container--translucent\`, \`fd-carousel__page-indicator-container--transparent\` and \`fd-carousel__page-indicator-container--no-border\`
    * \`fd-carousel__button\` The carousel button.
    * \`fd-carousel__button--left\` The carousel button for previous page.
    * \`fd-carousel__button--right\` The carousel button for next page.
    * \`fd-carousel__page-indicators\` The carousel page indicators list.
      * \`fd-carousel__page-indicator-item\` The carousel page indicator item.
`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const CarouselBottom = () => carouselBottomExampleHtml;
CarouselBottom.storyName = 'Bottom page indicator';
CarouselBottom.parameters = {
  docs: {
    description: {
      story: 'The bottom page indicator carousel displays a content area, navigation buttons and a page indicator at the bottom. The page indicator wraps onto the next line if the content is too long, and after the pages reach a count of 8, the dots are replaced by numerical representation i.e. *1 of 4*.'
    }
  }
};
export const CarouselTop = () => carouselTopExampleHtml;
CarouselTop.storyName = 'Top page indicator';
CarouselTop.parameters = {
  docs: {
    description: {
      story: `The top page indicator carousel displays a content area, navigation buttons and a page indicator at the top.
`
    }
  }
};
export const CarouselNoNavigation = () => carouselNoNavigationExampleHtml;
CarouselNoNavigation.storyName = 'Hidden navigation buttons';
CarouselNoNavigation.parameters = {
  docs: {
    description: {
      story: `Carousel can also be displayed without navigation buttons. To hide them, add the \`fd-carousel--no-navigation\` modifier class to the \`fd-carousel\` class. On touchable devices, the user can navigate with a swipe gesture.
`
    }
  }
};

export const CarouselBackgrounds = () => carouselBackgroundsExampleHtml;
CarouselBackgrounds.storyName = 'Background modifiers';
CarouselBackgrounds.parameters = {
  docs: {
    description: {
      story: `The background of the Carousel Content and Page Indicator Container can be changed by modifier classes. <br><b>Carousel Content</b><br>The <b>default</b> background for the Carousel Content is <b>translucent</b>. For <b>transparent</b> background apply \`fd-carousel__content--transparent\` modifier class. For <b>solid</b> background apply \`fd-carousel__content--solid\` modifier class to the \`fd-carousel__content\` base class.<br><br><b>Page Indicator Container</b><br>The <b>default</b> background for the container is <b>solid</b>. For <b>transparent</b> background apply \`fd-carousel__page-indicator-container--transparent\` modifier class. For <b>translucent</b> background apply \`fd-carousel__page-indicator-container--translucent\` modifier class to the \`fd-carousel__page-indicator-container\` base class. The  \`fd-carousel__page-indicator-container--no-border\` will remove the border top or bottom of the container. `
    }
  }
};

export const HorizontalCarousel = () => horizontalCarouselExampleHtml;
HorizontalCarousel.storyName = 'Items in horizontal direction';
HorizontalCarousel.parameters = {
  docs: {
    description: {
      story: `Carousel will have items which will spread horizontally and will be visible on navigation. For translate animation effect to work, all items should be in DOM.
`
    }
  }
};
export const Error = () => errorExampleHtml;
Error.storyName = 'Items loading error';
Error.parameters = {
  docs: {
    description: {
      story: `Error message can be displayed when items could not be loaded. Error message can be composed using Message page component. For mixed data use <code>sapIllus-Scene-ReloadScreen</code> illustration, and for images in Carousel use <code>sapIllus-Dialog-UnableToLoadImage</code> illustration.`
    }
  }
};