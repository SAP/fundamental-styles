export default {
    title: 'Components/Pagination',
    parameters: {
        description: `Pagination allows users to separate their content into discrete pages, making the content easier to digest and navigate through. It is commonly used for tables and tiles.

##Usage
**Use pagination if:**

- The user needs to search through several related items (over 30 is a good basis).
- The content contains products that users can choose from.
- You want to allow users to bookmark pages.
- You want your content to be optimized for search.     
        `,
        tags: ['a11y', 'theme'],
        components: ['pagination']
    }
};

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

firstPage.storyName = 'First page';

firstPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Pagination displays a non-interactive page number and a disabled back button when it is active.
      ` }
};

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

secondPage.storyName = 'Second page';

secondPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `When the user is on any other page after the first page, the back button should be enabled.
      ` }
};

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

multiplePages.storyName = 'Mutliple pages';

multiplePages.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The pagination component displays a certain number of pages before an ellipsis appears followed by the last page number. The general rule is that if there is a lot of screen space, pagination can display several page numbers to select from. For mobile, however, there should be a maximum of three page numbers displayed before an ellipsis and last page appears.
      ` }
};

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

middlePage.storyName = 'Middle pages';

middlePage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Pagination can display middle pages to increase searchability. The ellipsis will not only display at the end before the last page but also after the first page, showing three page numbers in the middle.
      ` }
};

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

lastPage.storyName = 'Last page';

lastPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `When the user reaches the last page, the next arrow button should be disabled.
      ` }
};
