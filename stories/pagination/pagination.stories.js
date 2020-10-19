export default {
    title: 'Components/Pagination',
    parameters: {
        description: 'Pagination is commonly used for tables and tiles. It allows users to see how many pages of content exist, to navigate and highlights which page they are currently viewing.',
        tags: ['a11y', 'theme'],
        components: ['pagination']
    }
};

/**
 * When the first page is active, the Back arrow should be disabled.
 */

export const firstPage = () => `<div class="fd-pagination">
    <span class="fd-pagination__total">30 items</span>
    <nav class="fd-pagination__nav">
        <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"aria-disabled="true"></a>
        <a href="#" class="fd-pagination__link is-selected" >1</a>
        <a href="#" class="fd-pagination__link">2</a>
        <a href="#" class="fd-pagination__link">3</a>
        <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
        aria-disabled="false"></a>
    </nav>
</div>
`;

/**
 * ##### Second Page
 * When any other page different than the first is active, the Back button should be enabled
 */

export const secondPage = () => `<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link is-selected">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
`;

/**
  * More than 3 pages
  */

export const multiplePages = () => `<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link is-selected">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
`;

/**
 * In between more than three Pages
 */

export const middlePage = () => `<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">21</a>
    <a href="#" class="fd-pagination__link is-selected">22</a>
    <a href="#" class="fd-pagination__link">23</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
`;

/**
 * On the last page, the Next arrow should be disabled.
 */

export const lastPage = () => `<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">49</a>
    <a href="#" class="fd-pagination__link is-selected">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="true"></a>
  </nav>
</div>
`;
