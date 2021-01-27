export default {
    title: 'Layouts/Resizable Card Layout',
    parameters: {
        description: `The resizable card layout is a layout for the overview page. It enables users to define a personalized card layout by changing not only the position of a card, but also its size, and thus how the card content is presented.
        
This layout gives users much greater flexibility in tailoring the overview page to their specific business needs. And it allows app teams to offer varying levels of detail for any given card. Whenever the size of a card changes, the content adapts automatically to show the most relevant information in the available space.

Cards can be increased and decreased vertically in rows of 1 rem and horizontally in steps of 20 rem (minimum width).
        `,
        tags: ['f3', 'theme', 'development'],
        components: [
            'resizable-card-layout',
            'button',
            'avatar',
            'badge',
            'card',
            'object-status',
            'numeric-content',
            'table',
            'checkbox',
            'list',
            'link',
            'icon'
        ]
    }
};

export const resizableCardLayout = () => `
<div class="fd-resizable-card-layout">
    <div id="one" class="fd-card-container fd-card-container__row-span-8 fd-card-container__resize__direction--both">
        <div class="fd-card-container__resize__handle--vertical-handle"></div>
        <div class="fd-card-container__card">
            <div class="fd-card" role="region" aria-label="List Card Example 1">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">4 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fd-card-container__resize__handle--horizontal-handle"></div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--both"></div>
    </div>

    <div id="two" class="fd-card-container fd-card-container__row-span-5 fd-card-container__resize__direction--both">
        <div class="fd-card-container__resize__handle--vertical-handle"></div>
        <div class="fd-card-container__card">
            <div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
                <a class="fd-card__header" tabindex="0">
                    <span
                        class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                        style="background-image: url('/assets/images/backgrounds/city.jpg')"
                        role="presentation"
                        aria-label="John Doe">
                    </span>
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Card Title</div>
                            <span class="fd-object-status fd-card__counter">Counter</span>
                        </div>
                        <div class="fd-card__subtitle-area">
                            <div class="fd-card__subtitle">Card Subtitle</div>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            </div>
        </div>
        <div class="fd-card-container__resize__handle--horizontal-handle"></div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--both"></div>
    </div>

    <div id="three" class="fd-card-container fd-card-container__row-span-10 fd-card-container__resize__direction--both">
        <div class="fd-card-container__resize__handle--vertical-handle"></div>
        <div class="fd-card-container__card">
            <div class="fd-card" role="region" aria-label="List Card Example 1">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">5 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fd-card-container__resize__handle--horizontal-handle"></div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--both"></div>
    </div>

    <div id="four" class="fd-card-container fd-card-container__row-span-15 fd-card-container__resize__direction--vertical">
        <div class="fd-card-container__card">
            <div class="fd-card fd-card--analytical" role="region" aria-label="Analytical Card Example 2">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <span class="fd-object-status fd-card__counter">Counter</span>
                        </div>
                        <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <div class="fd-card__currency">Currency</div>
                        </div>
                        <div class="fd-card__analytics-area">
                        <div class="fd-numeric-content fd-card__numeric-content">
                            <div class="fd-numeric-content__kpi-container">
                            <div class="fd-numeric-content__kpi">1Ñç</div>
                            </div>
                            <div class="fd-numeric-content__scale-container">
                            <div class="fd-numeric-content__scale">
                                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                                <span class="fd-numeric-content__scale-text">M</span>
                            </div>
                            </div>
                        </div>
                        <div class="fd-card__analytics-container">
                            <div class="fd-card__analytics">
                            <div class="fd-card__analytics-text">Target</div>
                            <div class="fd-card__analytics-content">110K</div>
                            </div>
                            <div class="fd-card__analytics">
                            <div class="fd-card__analytics-text">Deviation</div>
                            <div class="fd-card__analytics-content">-35.7%</div>
                            </div>
                        </div>
                        </div>
                        <div class="fd-card__second-subtitle">Second Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            </div>
        </div>
        <div class="fd-card-container__resize__handle--horizontal-handle"></div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--vertical"></div>
    </div>

    <div id="five" class="fd-card-container fd-card-container__row-span-10 fd-card-container__col-span-2 fd-card-container__resize__direction--both">
        <div class="fd-card-container__resize__handle--vertical-handle"></div>
        <div class="fd-card-container__card">
            <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 1">
                <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                    <div class="fd-card__title">Table Card</div>
                    <span class="fd-object-status fd-card__counter">4 of 20</span>
                    </div>
                </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
                        <thead class="fd-table__header">
                        <tr class="fd-table__row">
                            <th class="fd-table__cell fd-table__cell--checkbox">
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI">
                            <label class="fd-checkbox__label" for="kqqzPI"></label>
                            </th>
                            <th class="fd-table__cell" scope="col">Name</th>
                            <th class="fd-table__cell" scope="col">Status</th>
                            <th class="fd-table__cell" scope="col">Price</th>
                            <th class="fd-table__cell" scope="col">Country</th>
                            <th class="fd-table__cell"></th>
                        </tr>
                        </thead>
                        <tbody class="fd-table__body">
                        <tr class="fd-table__row">
                            <td class="fd-table__cell fd-table__cell--checkbox">
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                            <label class="fd-checkbox__label" for="EWuzWh"></label>
                            </td>
                            <td class="fd-table__cell">Banana</td>
                            <td class="fd-table__cell">
                            <span class="fd-object-status fd-object-status--positive">
                                                Available
                                            </span>
                            </td>
                            <td class="fd-table__cell">5 EUR</td>
                            <td class="fd-table__cell">India</td>
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                            <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                        <tr class="fd-table__row">
                            <td class="fd-table__cell fd-table__cell--checkbox">
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc">
                            <label class="fd-checkbox__label" for="19j0Sc"></label>
                            </td>
                            <td class="fd-table__cell">Pineapple</td>
                            <td class="fd-table__cell">
                            <span class="fd-object-status fd-object-status--negative">
                                                Out of stock
                                            </span>
                            </td>
                            <td class="fd-table__cell">2 EUR</td>
                            <td class="fd-table__cell">Mexico</td>
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                            <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                        <tr class="fd-table__row">
                            <td class="fd-table__cell fd-table__cell--checkbox">
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX">
                            <label class="fd-checkbox__label" for="a7SfGX"></label>
                            </td>
                            <td class="fd-table__cell">Orange</td>
                            <td class="fd-table__cell">
                            <span class="fd-object-status fd-object-status--informative">
                                                Temporary unavailable
                                            </span>
                            </td>
                            <td class="fd-table__cell">6 EUR</td>
                            <td class="fd-table__cell">Spain</td>
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                            <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="fd-card-container__resize__handle--horizontal-handle"></div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--both"></div>
    </div>

    <div id="six" class="fd-card-container fd-card-container__row-span-10 fd-card-container__resize__direction--horizontal">
        <div class="fd-card-container__resize__handle--vertical-handle"></div>
        <div class="fd-card-container__card">
            <div class="fd-card" role="region" aria-label="List Card Example 1">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">4 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--horizontal"></div>
    </div>

</div>
`;

resizableCardLayout.storyName = 'Resizable card layout';
resizableCardLayout.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Resizable card layout is based on grid layout. It shows the responsiveness based on screen sizes.
        `
    }
};

export const resizeCardHorizontalVerticalDirection = () => `
    <div class="fd-resizable-card-layout">
        <div id="one" class="fd-card-container fd-card-container__row-span-8 fd-card-container__resize__direction--both fd-card-container__resize--indication-border">
            <div class="fd-card-container__resize__handle--vertical-handle"></div>
            <div class="fd-card-container__card">
                <div class="fd-card" role="region" aria-label="List Card Example 1">
                    <a class="fd-card__header" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title">Quick Links</div>
                                <span class="fd-object-status fd-card__counter">4 of 20</span>
                            </div>
                        </div>
                    </a>
                    <div class="fd-card__content" role="group" aria-label="Card Content">
                        <ul class="fd-list fd-list--no-border" role="list">
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                                <span class="fd-list__title">List item 1</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                                <span class="fd-list__title">List item 2</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                                <span class="fd-list__title">List item 3</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                                <span class="fd-list__title">List item 4</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fd-card-container__resize__handle--horizontal-handle"></div>
            <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--both"></div>
        </div>
    </div>
`;

resizeCardHorizontalVerticalDirection.storyName = 'Card resize in horizontal and vertical directions';
resizeCardHorizontalVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can be resized in horizontal direction as well as vertical direction. Resize handle will expand on right border for horizontal resize and bottom border for vertical resize
        `
    }
};

export const resizeCardHorizontalDirection = () => `
    <div class="fd-resizable-card-layout">
        <div id="one" class="fd-card-container fd-card-container__row-span-8 fd-card-container__resize__direction--horizontal fd-card-container__resize--indication-border">
            <div class="fd-card-container__resize__handle--vertical-handle"></div>
            <div class="fd-card-container__card">
                <div class="fd-card" role="region" aria-label="List Card Example 1">
                    <a class="fd-card__header" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title">Quick Links</div>
                                <span class="fd-object-status fd-card__counter">4 of 20</span>
                            </div>
                        </div>
                    </a>
                    <div class="fd-card__content" role="group" aria-label="Card Content">
                        <ul class="fd-list fd-list--no-border" role="list">
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                                <span class="fd-list__title">List item 1</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                                <span class="fd-list__title">List item 2</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                                <span class="fd-list__title">List item 3</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                                <span class="fd-list__title">List item 4</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--horizontal"></div>
        </div>
    </div>
`;

resizeCardHorizontalDirection.storyName = 'Card resize in horizontal directions';
resizeCardHorizontalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can also be resized in horizontal direction only. Resize handle will expand on right border.
        `
    }
};

export const resizeCardVerticalDirection = () => `
    <div class="fd-resizable-card-layout">
        <div id="one" class="fd-card-container fd-card-container__row-span-8 fd-card-container__resize__direction--vertical fd-card-container__resize--indication-border">
            <div class="fd-card-container__card">
                <div class="fd-card" role="region" aria-label="List Card Example 1">
                    <a class="fd-card__header" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title">Quick Links</div>
                                <span class="fd-object-status fd-card__counter">4 of 20</span>
                            </div>
                        </div>
                    </a>
                    <div class="fd-card__content" role="group" aria-label="Card Content">
                        <ul class="fd-list fd-list--no-border" role="list">
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                                <span class="fd-list__title">List item 1</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                                <span class="fd-list__title">List item 2</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                                <span class="fd-list__title">List item 3</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                                <span class="fd-list__title">List item 4</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fd-card-container__resize__handle--horizontal-handle"></div>
            <div class="fd-card-container__resize--icon fd-card-container__resize__cursor--vertical"></div>
        </div>
    </div>
`;

resizeCardVerticalDirection.storyName = 'Card resize in vertical directions';
resizeCardVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can be resized in vertical direction only. Resize handle will expand on bottom border
        `
    }
};
