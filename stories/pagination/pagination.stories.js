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

##Elements
The pagination component consists of the following elements:

Element | Modifier/class | Description
:------ | :------------- | :----------
Main | \`fd-pagination\` | The main container
Navigation | \`fd-pagination__nav\` | The navigation area
Total page count | \`fd-pagination__total\` | The area where total pages information is placed
Total page count label | \`fd-pagination__total-label\` | The total number of pages label
Links | \`fd-pagination__link\` | The page number links that users can select to navigate to a different pages
Selected page | \`fd-pagination__input\` | The input with the page that is currently selected, can be used to navigate to the specific page 
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
        tags: ['a11y', 'theme'],
        components: ['select', 'button', 'icon', 'form-label', 'input', 'pagination', 'popover', 'list']
    }
};

export const firstPage = () => `<style>/** Related to the docs, don't copy */ *[dir='rtl'] .fd-pagination__button { transform: rotate(180deg) !important; }</style>
<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <label class='fd-form-label fd-pagination__label' for='firstPageInput'>Page:</label>
        
        <input id='firstPageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='3' value='1' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>2</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>3</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>3 Results</span>
    </div>
</div>
`;

firstPage.storyName = 'First page';

firstPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `First and Previous page buttons are disabled when first page is active.
    `
    }
};

export const secondPage = () => `<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>1</a>
        
        <label class='fd-form-label fd-pagination__label' for='secondPageInput'>Page:</label>
        
        <input id='secondPageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='3' value='2' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>3</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>3 Results</span>
    </div>
</div>`;

secondPage.storyName = 'Second page';

secondPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `When the user is not on first or last page, the previous and next buttons are enabled.
    `
    }
};

export const multiplePages = () => `<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <label class='fd-form-label fd-pagination__label' for='multiplePageInput'>Page:</label>
        
        <input id='multiplePageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='1' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>2</a>
        
        <span class='fd-pagination__more' role='presentation'></span>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>500</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>
`;

multiplePages.storyName = 'Multiple pages';

multiplePages.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The pagination component displays a certain number of pages before an ellipsis appears followed by the last page number.
        The general rule is that if there is a lot of screen space, pagination can display several page numbers to select from.
        For mobile, page numbers and total pages section are not shown. Instead First & Last page buttons are shown.
    `
    }
};

export const middlePage = () => `<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>1</a>
        
        <span class='fd-pagination__more' role='presentation'></span>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>299</a>
        
        <label class='fd-form-label fd-pagination__label' for='middlePageInput'>Page:</label>
        
        <input id='middlePageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='300' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>301</a>
        
        <span class='fd-pagination__more' role='presentation'></span>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>500</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>
`;

middlePage.storyName = 'Middle pages';

middlePage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Pagination can display middle pages to increase reachability.
        The ellipsis will not only display before the last page but also after the first page, showing three page numbers in the middle.
    `
    }
};

export const lastPage = () => `<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>1</a>
        
        <span class='fd-pagination__more' role='presentation'></span>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>499</a>
        
        <label class='fd-form-label fd-pagination__label' for='lastPageInput'>Page:</label>
        
        <input id='lastPageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='500' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='true'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='true'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
    </div>
</div>
`;

lastPage.storyName = 'Last page';

lastPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Last and Next page buttons are disabled when last page is active.
    `
    }
};

export const perPage = () => `<div style='height: 175px'>
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
                          <span class='fd-button fd-button--transparent fd-select__button'>
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
        
        <nav class='fd-pagination__nav'>
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>1</a>
            
            <span class='fd-pagination__more' role='presentation'></span>
            
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>499</a>
            
            <label class='fd-form-label fd-pagination__label' for='perPageInput'>Page:</label>
            
            <input id='perPageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='500' value='500' required />
            
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>
      
        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

perPage.storyName = 'Per page';

perPage.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Additionally, per page section can be displayed with select to specify which number of items should be shown on the every page. 
    `
    }
};

export const cozy = () => `<div style='height: 200px'>
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
        
        <nav class='fd-pagination__nav'>
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>1</a>
            
            <span class='fd-pagination__more' role='presentation'></span>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>499</a>
            
            <label class='fd-form-label fd-pagination__label' for='cozyPageInput'>Page:</label>
            
            <input id='cozyPageInput' class='fd-input fd-pagination__input' type='number' min='1' max='500' value='500' required />
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>
      
        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

cozy.storyName = 'Cozy';

cozy.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Showing pagination in Cozy mode is preferable on tablets & mobile.
    `
    }
};

export const mobile = () => `<div style="height: 200px;">
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

        <nav class='fd-pagination__nav'>
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
                <i class='sap-icon sap-icon--media-rewind'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
                <i class='sap-icon sap-icon--navigation-left-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>1</a>
            
            <span class='fd-pagination__more' role='presentation'></span>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>499</a>
            
            <label class='fd-form-label fd-pagination__label' for='cozyPageInput'>Page:</label>
            
            <input id='cozyPageInput' class='fd-input fd-pagination__input' type='number' min='1' max='500' value='500' required />
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='true'>
                <i class='sap-icon sap-icon--navigation-right-arrow'></i>
            </a>
            
            <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='true'>
                <i class='sap-icon sap-icon--media-forward'></i>
            </a>
        </nav>

        <div class='fd-pagination__total'>
            <span class='fd-form-label fd-pagination__total-label'>500 Results</span>
        </div>
    </div>
</div>
`;

mobile.storyName = 'Mobile';

mobile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Pagination component is responsive by default. When the screen's size is smaller than 600px in width mobile mode is shown and you have nothing to do.
        If you want to display pagination component always in mobile mode, no matter what is the screen size, please add \`.fd-pagination--mobile\` modifier class to the component.
    `
    }
};
