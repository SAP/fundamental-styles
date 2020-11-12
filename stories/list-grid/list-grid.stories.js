export default {
    title: 'Components/Grid List',
    parameters: {
        description: `
As with the list and the responsive table, the grid list displays a set of items. In contrast to both controls, the grid list displays the items not in rows, but in a grid.
The grid list is usually used as an alternative view for a list or table. It is ideal for displaying images, charts, object cards, and other content, which profit from more height (but less width).

##Usage
**Use the grid list if:**

- Your content is “visual” and profits from the rectangular format of the items. This is true for e.g. images, charts, and object cards.
- The focus is on items, not on cells. The grid list shows complete items.
- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple data sets.
- As an alternative view for tables or lists, if the content profits from the different format.

**Do not use the grid list if:**

- Your content is not appropriate for a card-like format. For example, do not use the grid list for displaying a wall of text. Use a table instead.
- The main use case is to select one item from a very small number of items, without viewing additional details. In this case, a select or combo box might be more appropriate.
- Data needs to be structured in a hierarchical manner. In this case, a tree might be more appropriate.
- You need an overview of a large amount of data. In this case, use a chart.
- You just need it for layout reasons. In this case, use a layout container such as the CSSGrid.
- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a table.
    `,
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: [
            'list-grid',
            'layout-grid',
            'toolbar',
            'button',
            'icon',
            'title',
            'radio',
            'checkbox',
            'avatar',
            'link',
            'object-status'
        ]
    }
};

export const noneMode = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link is-navigated">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>
                                
                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>
                                
                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>
                                
                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

noneMode.storyName = 'None mode';

noneMode.parameters = {
    docs: {
        storyDescription: 'Items cannot be selected but can still use "navigation", which allows click handling on specific items.'
    }
};

export const singleSelectMasterMode = () => `<div class="fd-grid-list fd-grid-list__mode--single-select-master">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                    <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="pDidh761" name="singleSelectMasterRadio">
                    <label class="fd-radio__label fd-grid-list__radio--label" for="pDidh761"></label>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="pDidh761123" name="singleSelectMasterRadio">
                    <label class="fd-radio__label fd-grid-list__radio--label" for="pDidh761123"></label>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>
                                

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item is-selected">
                    <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="pDidh7611234" name="singleSelectMasterRadio" checked>
                    <label class="fd-radio__label fd-grid-list__radio--label" for="pDidh7611234"></label>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">5</span>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="pDidh761642" name="singleSelectMasterRadio">
                    <label class="fd-radio__label fd-grid-list__radio--label" for="pDidh761642"></label>
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

singleSelectMasterMode.storyName = 'Single select master mode';

singleSelectMasterMode.parameters = {
    docs: {
        storyDescription: `
One item in the grid list can be selected. Need click on an item to select it.
To turn on the Single select master mode, add the \`fd-grid-list__mode--single-select-master\` modifier class to the main element.
        `
    }
};

export const singleSelectLeftMode = () => `<div class="fd-grid-list fd-grid-list__mode--single-select-left">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="pDidh1761" name="singleSelectLeftRadio">
                        <label class="fd-radio__label fd-grid-list__radio--label" for="pDidh1761"></label>
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item is-selected">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="p1Didh1761" name="singleSelectLeftRadio" checked>
                        <label class="fd-radio__label fd-grid-list__radio--label" for="p1Didh1761"></label>
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="p12Didh1761" name="singleSelectLeftRadio">
                        <label class="fd-radio__label fd-grid-list__radio--label" for="p12Didh1761"></label>
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">5</span>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="radio" class="fd-radio fd-radio--compact fd-grid-list__radio--input" id="p1x2Didh1761" name="singleSelectLeftRadio">
                        <label class="fd-radio__label fd-grid-list__radio--label" for="p1x2Didh1761"></label>
                        <span class="fd-toolbar__spacer"></span>
                    </div>
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

singleSelectLeftMode.storyName = 'Single select left mode';

singleSelectLeftMode.parameters = {
    docs: {
        storyDescription: `
One item in the grid list can be selected. For this, the grid list provides radio buttons on the left side of each item toolbar.
To turn on the Single select left mode, add the \`fd-grid-list__mode--single-select-left\` modifier class to the main element.
`
    }
};

export const multiSelectMode = () => `<div class="fd-grid-list fd-grid-list__mode--multi-select">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link is-selected">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-grid-list__checkbox--input" id="Ai4ez611c" checked>
                        <label class="fd-checkbox__label fd-checkbox__label--compact fd-grid-list__checkbox--label" for="Ai4ez611c"></label>
                        
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-grid-list__checkbox--input" id="Ai4ez611c2">
                        <label class="fd-checkbox__label fd-checkbox__label--compact fd-grid-list__checkbox--label" for="Ai4ez611c2"></label>

                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item is-selected">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-grid-list__checkbox--input" id="Ai4ez611c3" checked>
                        <label class="fd-checkbox__label fd-checkbox__label--compact fd-grid-list__checkbox--label" for="Ai4ez611c3"></label>

                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">5</span>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-grid-list__checkbox--input" id="Ai4ez611c4">
                        <label class="fd-checkbox__label fd-checkbox__label--compact fd-grid-list__checkbox--label" for="Ai4ez611c4"></label>

                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">5</span>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

multiSelectMode.storyName = 'Multi select mode';

multiSelectMode.parameters = {
    docs: {
        storyDescription: `
Users can select one or more items. For this, the grid list provides checkboxes on the left side of each item toolbar.
To turn on the Multi select mode, add the \`fd-grid-list__mode--multi-select\` modifier class to the main element.
`
    }
};

export const deleteMode = () => `<div class="fd-grid-list fd-grid-list__mode--delete">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Delete">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Delete">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Delete">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>
                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Delete">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

deleteMode.storyName = 'Delete mode';

deleteMode.parameters = {
    docs: {
        storyDescription: `
This places a Delete button on the right side of an item toolbar.
To turn on the Delete mode, add the \`fd-grid-list__mode--delete\` modifier class to the main element.
`
    }
};

export const group = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                Company: Company A
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company A</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company A</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                Company: Company B
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

group.storyName = 'Group';

group.parameters = {
    docs: {
        storyDescription: `
If grouped, a group header is displayed above all items which belong to the corresponding group. The group header is not interactive.
To create grid list group headers use \`fd-grid-list__group-header\` class.
    `
    }
};

export const states = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                State: Unread
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--state-unread">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                State: Error
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--state-error">
                    <span class="fd-grid-list__highlight--error"></span>

                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>
                                

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>

                        <div class="fd-grid-list__item--state-actions">
                            <span class="fd-object-status fd-object-status--negative">
                                <span class="fd-object-status__text">(Contains errors)</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                State: Locked
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--state-locked">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>

                        <div class="fd-grid-list__item--state-actions">
                            <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Locked">
                                <i class="sap-icon--private"></i>
                                Locked
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-grid-list__group-header">
                State: Draft
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--state-draft">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>

                        <div class="fd-grid-list__item--state-actions">
                            <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Draft">
                                Draft
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

states.storyName = 'States';

states.parameters = {
    docs: {
        storyDescription: `
To apply state, add the corresponding class \`.fd-grid-list__item--state-(unread|error|locked|draft)\` to the \`.fd-grid-list__item\`.
    `
    }
};

export const highlight = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <span class="fd-grid-list__highlight--success"></span>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <span class="fd-grid-list__highlight--error"></span>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <span class="fd-grid-list__highlight--warning"></span>
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <span class="fd-grid-list__highlight--neutral"></span>
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

highlight.storyName = 'Highlight';

highlight.parameters = {
    docs: {
        storyDescription: `
A highlight indicator is shown in front of the item it needs to show that an item needs attention.
To add highlight indicator, add a span element with \`.fd-grid-list__highlight--(success|warning|error|neutral)\` class, before the item body element
    `
    }
};

export const filterInfobar = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">
                    Filtered by: Company (Company A, Company B)
                    <span class="fd-toolbar__spacer"></span>
                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Cancel">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

filterInfobar.storyName = 'Filter Infobar';

filterInfobar.parameters = {
    docs: {
        storyDescription: `
The filter information panel displays the selected filters.
To show filter information panel, follow the current example.
`
    }
};

export const more = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-grid-list__more">
                    <h6 class="fd-title fd-title--h6 fd-grid-list__more--title">More</h6>
                    <p class="fd-grid-list__more--description">[ 5 / 10 ]</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

more.storyName = '"More" Button';

more.parameters = {
    docs: {
        storyDescription: `
The More button loads more items to the front end if not all items have yet been loaded.
To show "More" button, follow the current example.
`
    }
};

export const footer = () => `<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <span class="fd-grid-list__item--counter">10</span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Navigation">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-toolbar fd-grid-list__toolbar">
                        <span class="fd-toolbar__spacer"></span>

                        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Edit">
                            <i class="sap-icon--edit"></i>
                        </button>
                    </div>

                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                <div tabindex="0" class="fd-grid-list__item">
                    <div class="fd-grid-list__item--body fd-grid-list__item--body--padding">
                        <div class="grid-list-item-body-example">
                            <span class="fd-avatar fd-avatar--s grid-list-item-body-example-avatar" role="presentation" aria-label="John Doe"></span>
                            <div>
                                <h4 class="fd-title fd-title--h4">John Li</h4>
                                <p>Product Owner, Company B</p>

                                <div>
                                    <p>781 Main Street</p>
                                    <p>Anytown, SD 57401</p>
                                    <p>USA</p>
                                </div>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-grid-list__footer">
                    This is footer text
                </div>
            </div>
        </div>
    </div>
</div>
`;

footer.storyName = 'Footer';

footer.parameters = {
    docs: {
        storyDescription: `
The footer can be used to display additional static information relating to the content.
To create a grid list footer, follow the current example.
`
    }
};
