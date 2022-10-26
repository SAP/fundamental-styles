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

export const FirstPage = () => `<h3>> 9 Pages</h3>
<div class='fd-pagination'>
    <nav class='fd-pagination__nav' role='navigation' aria-label='first page example, pagination with more than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <label class='fd-form-label fd-pagination__label' id='firstPageInputPage' aria-label='Page input, Current page, Page 1'>Page:</label>

        <input aria-labelledby='firstPageInputPage firstPageInputOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='1' required />

        <label class='fd-form-label fd-pagination__label' id='firstPageInputOf'>of 500</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 2'>2</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 3'>3</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 4'>4</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 5'>5</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 6'>6</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 7'>7</a>

        <span class='fd-pagination__more fd-pagination__more--compact' role='presentation'></span>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 500'>500</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class='fd-pagination fd-pagination--short'>
    <nav class='fd-pagination__nav' role='navigation' aria-label='first page example, pagination with less than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <label class='fd-form-label fd-pagination__label' id='firstPageInputShortPage' aria-label='Page input, Current page, Page 1'>Page:</label>

        <input aria-labelledby="firstPageInputShortPage firstPageInputShortOf" class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='3' value='1' required />

        <label class='fd-form-label fd-pagination__label' id='firstPageInputShortOf'>of 3</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link is-active' aria-label='Current Page, Page 1' aria-current='true'>1</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 2'>2</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 3'>3</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>3 Results</span>
    </div>
</div>
`;

FirstPage.storyName = 'First page';

FirstPage.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `First and Previous page buttons are disabled when first page is active.
    `
        }
    }
};

export const MiddlePage = () => `<h3>> 9 Pages</h3>
<div class='fd-pagination'>
    <nav class='fd-pagination__nav' role='navigation' aria-label='middle page example, pagination with more than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 1'>1</a>

        <span class='fd-pagination__more fd-pagination__more--compact' role='presentation'></span>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 298'>298</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 299'>299</a>

        <label class='fd-form-label fd-pagination__label' id='middlePageInputPage' aria-label='Page input, Current page, Page 300'>Page:</label>

        <input aria-labelledby='middlePageInputPage middlePageInputOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='300' required />

        <label class='fd-form-label fd-pagination__label' id='middlePageInputOf'>of 500</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 301'>301</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 302'>302</a>

        <span class='fd-pagination__more fd-pagination__more--compact' role='presentation'></span>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 500'>500</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class='fd-pagination fd-pagination--short'>
    <nav class='fd-pagination__nav'  role='navigation' aria-label='middle page example, pagination with less than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 1'>1</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link is-active' aria-label='Current page, Page 2' aria-current='true'>2</a>

        <label class='fd-form-label fd-pagination__label' id='middlePageInputShortPage' aria-label='Page input, Current page, Page 1'>Page:</label>

        <input aria-labelledby='middlePageInputShortPage middlePageInputShortOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='3' value='2' required />

        <label class='fd-form-label fd-pagination__label' id='middlePageInputShortOf'>of 3</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 3'>3</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>3 Results</span>
    </div>
</div>
`;

MiddlePage.storyName = 'Middle pages';

MiddlePage.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Pagination can display middle pages to increase reachability.
        The ellipsis will not only display before the last page but also after the first page, showing two pages before & two after the current page.
        In sum 9 elements are shown: first page + more + 2 pages before + current page + 2 pages after + more + last page.
    `
        }
    }
};

export const LastPage = () => `<h3>> 9 Pages</h3>
<div class='fd-pagination'>
    <nav class='fd-pagination__nav' role='navigation' aria-label='last page example, pagination with more than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 1'>1</a>

        <span class='fd-pagination__more fd-pagination__more--compact' role='presentation'></span>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 494'>494</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 495'>495</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 496'>496</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 497'>497</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 498'>498</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 499'>499</a>

        <label class='fd-form-label fd-pagination__label' id='lastPageInputPage' aria-label='Page input, Current page, Page 500'>Page:</label>

        <input aria-labelledby='lastPageInputPage lastPageInputOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='500' required />

        <label class='fd-form-label fd-pagination__label' id='lastPageInputOf'>of 500</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class='fd-pagination fd-pagination--short'>
    <nav class='fd-pagination__nav' role='navigation' aria-label='last page example, pagination with less than 9 pages'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 1'>1</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'  aria-label='Goto page 2'>2</a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link is-active' aria-label='Current Page, page 3' aria-current='true'>3</a>

        <label class='fd-form-label fd-pagination__label' id='lastPageInputShortPage' aria-label='Page input, Current page, Page 3'>Page:</label>

        <input aria-labelledby='lastPageInputShortPage lastPageInputShortOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='3' value='3' required />

        <label class='fd-form-label fd-pagination__label' id='lastPageInputShortOf'>of 3</label>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>3 Results</span>
    </div>
</div>
`;

LastPage.storyName = 'Last page';

LastPage.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Last and Next page buttons are disabled when last page is active.
    `
        }
    }
};

export const PerPage = () => `<div style='height: 175px'>
    <div class='fd-pagination'>
        <div class='fd-pagination__per-page'>
            <label class='fd-form-label fd-pagination__per-page-label' id='compactSelectLabel'>Results per page: </label>

            <div class='fd-popover'>
                <div class='fd-popover__control'>
                    <div class='fd-select fd-select--compact'>
                        <button id='compactSelectCombobox' onclick="
                                        toggleElAttrs('h0C6A326', ['aria-hidden']);
                                        toggleElAttrs('compactSelectCombobox', ['aria-expanded']);
                                    " class='fd-select__control' tabindex='0' aria-labelledby='compactSelectLabel compactSelectValue' aria-expanded='true' aria-haspopup='listbox'>
                          <span id='compactSelectValue' class='fd-select__text-content'>4</span>
                          <span class='fd-button fd-button--transparent fd-button--compact fd-select__button'>
                                        <i class='sap-icon--slim-arrow-down'></i>
                                    </span>
                        </button>
                    </div>
                </div>

                <div class='fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown' aria-hidden='false' id='h0C6A326'>
                    <ul aria-activedescendant='compactSelectCombobox-currentlyFocusedItem' aria-labelledby='compactSelectLabel' class='fd-list fd-list--dropdown fd-list--compact' role='listbox'>
                        <li id='compactSelectCombobox-currentlyFocusedItem' class='fd-list__item is-selected' aria-selected='true' role='option' tabindex='0'>
                            <span class='fd-list__title'>4</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>8</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>16</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>32</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class='fd-pagination__nav' role='navigation' aria-label='per page page example, pagination with more than 9 pages'>
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 1'>1</a>

            <span class='fd-pagination__more fd-pagination__more--compact' role='presentation'></span>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 494'>494</a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 495'>495</a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 496'>496</a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 497'>497</a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 498'>498</a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link' aria-label='Goto page 499'>499</a>

            <label class='fd-form-label fd-pagination__label' id='perPageInputPage' aria-label='Page input, Current page, Page 500'>Page:</label>

            <input aria-labelledby='perPageInputPage perPageInputOf' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='500' required />

            <label class='fd-form-label fd-pagination__label' id='perPageInputOf'>of 500</label>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>

            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>

        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

PerPage.storyName = 'Per page';

PerPage.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Additionally, per page section can be displayed with select to specify which number of items should be shown on the every page.
    `
        }
    }
};

export const Cozy = () => `<div style='height: 200px'>
    <div class='fd-pagination'>
        <div class='fd-pagination__per-page'>
            <label class='fd-form-label fd-pagination__per-page-label' id='selectLabel'>Results per page: </label>

            <div class='fd-popover'>
                <div class='fd-popover__control'>
                    <div class='fd-select'>
                        <button id='compactSelectCombobox' onclick="
                                        toggleElAttrs('h0C6A327', ['aria-hidden']);
                                        toggleElAttrs('selectCombobox', ['aria-expanded']);
                                    " class='fd-select__control' tabindex='0' aria-labelledby='selectLabel selectValue' aria-expanded='true' aria-haspopup='listbox'>
                            <span id='selectValue' class='fd-select__text-content'>4</span>
                            <span class='fd-button fd-button--transparent fd-select__button'>
                                <i class='sap-icon--slim-arrow-down'></i>
                            </span>
                        </button>
                    </div>
                </div>

                <div class='fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown' aria-hidden='false' id='h0C6A327'>
                    <ul aria-activedescendant='selectCombobox-currentlyFocusedItem' aria-labelledby='selectLabel' class='fd-list fd-list--dropdown fd-list' role='listbox'>
                        <li id='selectCombobox-currentlyFocusedItem' class='fd-list__item is-selected' aria-selected='true' role='option' tabindex='0'>
                            <span class='fd-list__title'>4</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>8</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>16</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>32</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class='fd-pagination__nav' role='navigation' aria-label='cozy mode example, pagination with more than 9 pages'>
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>1</a>

            <span class='fd-pagination__more' role='presentation'></span>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 494'>494</a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 495'>495</a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 496'>496</a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 497'>497</a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 498'>498</a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__link' aria-label='Goto page 499'>499</a>

            <label class='fd-form-label fd-pagination__label' id='cozyPageInputPage' aria-label='Page input, Current page, Page 500'>Page:</label>

            <input aria-labelledby='cozyPageInputPage cozyPageInputOf' class='fd-input fd-pagination__input' type='number' min='1' max='500' value='500' required />

            <label class='fd-form-label fd-pagination__label' id='cozyPageInputOf'>of 500</label>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>

        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

Cozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Showing pagination in Cozy mode is preferable on tablets & mobile.
    `
        }
    }
};

export const Mobile = () => `<div style="height: 200px;">
    <div class='fd-pagination fd-pagination--mobile'>
        <div class='fd-pagination__per-page'>
            <label class='fd-form-label fd-pagination__per-page-label' id='selectLabel'>Results per page: </label>

            <div class='fd-popover'>
                <div class='fd-popover__control'>
                    <div class='fd-select'>
                        <button id='compactSelectCombobox' onclick="
                                        toggleElAttrs('h0C6A327', ['aria-hidden']);
                                        toggleElAttrs('selectCombobox', ['aria-expanded']);
                                    " class='fd-select__control' tabindex='0' aria-labelledby='selectLabel selectValue' aria-expanded='true' aria-haspopup='listbox'>
                            <span id='selectValue' class='fd-select__text-content'>4</span>
                            <span class='fd-button fd-button--transparent fd-select__button'>
                                <i class='sap-icon--slim-arrow-down'></i>
                            </span>
                        </button>
                    </div>
                </div>

                <div class='fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown' aria-hidden='false' id='h0C6A327'>
                    <ul aria-activedescendant='selectCombobox-currentlyFocusedItem' aria-labelledby='selectLabel' class='fd-list fd-list--dropdown fd-list' role='listbox'>
                        <li id='selectCombobox-currentlyFocusedItem' class='fd-list__item is-selected' aria-selected='true' role='option' tabindex='0'>
                            <span class='fd-list__title'>4</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>8</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>16</span>
                        </li>
                        <li class='fd-list__item' role='option' tabindex='-1'>
                            <span class='fd-list__title'>32</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class='fd-pagination__nav' role='navigation' aria-label='mobile mode example, pagination with more than 9 pages'>
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First page' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Previous page' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>

            <label class='fd-form-label fd-pagination__label' id='mobilePageInputPage' aria-label='Page input, Current page, Page 500'>Page:</label>

            <input aria-labelledby='mobilePageInputPage cozyPageInputOf' class='fd-input fd-pagination__input' type='number' min='1' max='500' value='500' required />

            <label class='fd-form-label fd-pagination__label' id='mobilePageInputOf'>of 500</label>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Next page' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>

            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last page' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>

        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Pagination component is responsive by default. When the screen's size is smaller than 1024px in width mobile mode is shown and you have nothing to do.
        If you want to display pagination component always in mobile mode please add \`.fd-pagination--mobile\` modifier class to the component.
    `
        }
    }
};
