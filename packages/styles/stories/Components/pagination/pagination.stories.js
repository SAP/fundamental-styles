import mobileExampleHtml from "./mobile.example.html?raw";
import cozyExampleHtml from "./cozy.example.html?raw";
import perPageExampleHtml from "./per-page.example.html?raw";
import lastPageExampleHtml from "./last-page.example.html?raw";
import middlePageExampleHtml from "./middle-page.example.html?raw";
import firstPageExampleHtml from "./first-page.example.html?raw";
import '../../../src/select.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
import '../../../src/pagination.scss';
import '../../../src/popover.scss';
import '../../../src/list.scss';
export default {
  title: 'Components/Pagination',
  parameters: {
    description: `Pagination allows users to separate their content into discrete pages, making it easier to digest and navigate through. Pagination is commonly used for tables and tiles.

##Usage
**Use pagination if:**

- The user needs to search through several related items (over 30 is a good basis)
- The content contains products that users can choose from
- You want to allow users to bookmark pages
- You want your content to be optimized for search

##Details
- > 9 pages: 9 elements should be shown (including pages, more symbols and the current page), use input for the current page
- < 9 pages, add \`.fd-pagination--short\` class: all pages should be shown, button in active state shown for the current page

##Elements
The pagination component consists of the following elements:

Element | Modifier/class | Description
:------ | :------------- | :----------
Main | \`fd-pagination\` | The main container
Navigation | \`fd-pagination__nav\` | The navigation area
Total page count | \`fd-pagination__total\` | The area where total pages information is placed
Total page count label | \`fd-pagination__total-label\` | The total number of pages label
Links | \`fd-pagination__link\` | The page number links that users can select to navigate to a different pages
Selected page (> 9 pages) | \`fd-pagination__input\` | The input with the page that is currently selected, can be used to navigate to the specific page
Selected page (< 9 pages) | \`fd-pagination__link.is-active\` | The button with the page number that is currently selected
Selected page label | \`fd-pagination__label\` | The label of the selected page input. Shown only on mobile.
First page button | \`fd-pagination__button--mobile\` | The first page button that users can use to navigate to the first page. This button is disabled when on the first page. Shown only on mobile.
Previous page button | \`fd-pagination__button\` | The previous page button that users can use to navigate backward. This button is disabled when on the first page.
Next page button | \`fd-pagination__button\` | The next arrow that users can use to navigate forward. This arrow is disabled when on the last page.
Last page button | \`fd-pagination__button--mobile\` | The last page button that users can use to navigate to the last page. This button is disabled when on the last page. Shown only on mobile.
Per page | \`fd-pagination__per-page\` | The area where items per page select & its label are placed
Per page label | \`fd-pagination__per-page-label\` | Per page section label. Hidden on mobile.
<br>
<br>
      `,
    tags: ['a11y', 'theme']
  }
};
export const FirstPage = () => firstPageExampleHtml;
FirstPage.storyName = 'First page';
FirstPage.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `First and Previous page buttons are disabled when first page is active.
    `
    }
  }
};
export const MiddlePage = () => middlePageExampleHtml;
MiddlePage.storyName = 'Middle pages';
MiddlePage.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `Pagination can display middle pages to increase reachability.
        The ellipsis will not only display before the last page but also after the first page, showing two pages before & two after the current page.
        In sum 9 elements are shown: first page + more + 2 pages before + current page + 2 pages after + more + last page.
    `
    }
  }
};
export const LastPage = () => lastPageExampleHtml;
LastPage.storyName = 'Last page';
LastPage.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `Last and Next page buttons are disabled when last page is active.
    `
    }
  }
};
export const PerPage = () => perPageExampleHtml;
PerPage.storyName = 'Per page';
PerPage.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `Additionally, per page section can be displayed with select to specify which number of items should be shown on the every page.
    `
    }
  }
};
export const Cozy = () => cozyExampleHtml;
Cozy.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `Showing pagination in Cozy mode is preferable on tablets & mobile.
    `
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `Pagination component is responsive by default. When the screen's size is smaller than 1024px in width mobile mode is shown and you have nothing to do.
        If you want to display pagination component always in mobile mode please add \`.fd-pagination--mobile\` modifier class to the component.
    `
    }
  }
};