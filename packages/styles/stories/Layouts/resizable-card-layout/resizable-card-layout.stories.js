import '../../../src/resizable-card-layout.scss';
import '../../../src/button.scss';
import '../../../src/avatar.scss';
import '../../../src/badge.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/numeric-content.scss';
import '../../../src/table.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/link.scss';
import '../../../src/icon.scss';
export default {
    title: 'Layouts/Resizable Card Layout',
    parameters: {
        description: `The resizable card layout is a layout for the overview page. It enables users to define a personalized card layout by changing not only the position of a card, but also its size, and thus how the card content is presented.

This layout gives users much greater flexibility in tailoring the overview page to their specific business needs. And it allows app teams to offer varying levels of detail for any given card. Whenever the size of a card changes, the content adapts automatically to show the most relevant information in the available space.

Cards can be resized vertically in rows of 1 rem and horizontally in steps of 20 rem (minimum width).
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

export const ResizeCardLayout = () =>
    `<div id="layout1" class="fd-resizable-card-layout fd-resizable-card-layout--md fd-custom-resizable-card-layout-flex">
        <div id="one" class="fd-resizable-card-layout__item card-one-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>

        <div id="two" class="fd-resizable-card-layout__item card-two-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
                    <a class="fd-card__header" tabindex="0">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="presentation"></span>
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>

        <div id="three" class="fd-resizable-card-layout__item card-three-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="List Card Example 2">
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
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                                <span class="fd-list__title">List item 5</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>

        <div id="six" class="fd-resizable-card-layout__item card-six-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="List Card Example 3">
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>

        <div id="four" class="fd-resizable-card-layout__item card-four-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 1">
                    <a class="fd-card__header" tabindex="0">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                              style="background-image: url('/assets/images/avatars/1.svg')"
                              role="img"
                              aria-label="John Doe"></span>
                        <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Card Title</div>
                        </div>
                        <div class="fd-card__subtitle-area">
                            <div class="fd-card__subtitle">Card Subtitle</div>
                        </div>
                        </div>
                    </a>
                    <div class="fd-card__content" role="group" aria-label="Card Content">
                        <div class="fd-card__content-container">
                        <div class="fd-card__content-section">
                            <div class="fd-card__content-title-container">Group Title 1</div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                            </div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                            </div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                            </div>
                        </div>
                        <div class="fd-card__content-section">
                            <div class="fd-card__content-title-container">Group Title 2</div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                            </div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                            </div>
                            <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label Only</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>

        <div id="five" class="fd-resizable-card-layout__item card-five-dimensions">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>
    </div>
`;

ResizeCardLayout.storyName = 'Resizable card layout';
ResizeCardLayout.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `Resizable card layout with multiple cards.
        `
        }
    }
};

export const ResizeCardHorizontalVerticalDirection = () =>
    `<div id="grid1" class="fd-resizable-card-layout">
        <div id="seven" class="fd-resizable-card-layout__item fd-resizable-card-layout__indication-border">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="List Card Example 4">
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>
    </div>
`;

ResizeCardHorizontalVerticalDirection.storyName = 'Card resize in horizontal and vertical directions';
ResizeCardHorizontalVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `Cards can be resized in horizontal direction as well as vertical direction. Resize handle will expand on right border for horizontal resize and bottom border for vertical resize.
        `
        }
    }
};

export const ResizeCardHorizontalDirection = () =>
    `<div id="grid1" class="fd-resizable-card-layout">
        <div id="eight" class="fd-resizable-card-layout__item">
            <div class="fd-resizable-card-layout__resize--vertical"></div>
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="List Card Example 5">
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon fd-resizable-card-layout__icon--horizontal"></div>
                </div>
            </div>
        </div>
    </div>
`;

ResizeCardHorizontalDirection.storyName = 'Card resize in horizontal directions';
ResizeCardHorizontalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `Cards can also be resized in horizontal direction only. Resize handle will expand on right border.
        `
        }
    }
};

export const ResizeCardVerticalDirection = () =>
    `<div id="grid1" class="fd-resizable-card-layout">
        <div id="nine" class="fd-resizable-card-layout__item">
            <div class="fd-resizable-card-layout__card">
                <div class="fd-card" role="region" aria-label="List Card Example 6">
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
                <div class="fd-resizable-card-layout__icon-wrapper">
                    <div class="fd-resizable-card-layout__icon fd-resizable-card-layout__icon--vertical"></div>
                </div>
            </div>
            <div class="fd-resizable-card-layout__resize--horizontal"></div>
        </div>
    </div>
`;

ResizeCardVerticalDirection.storyName = 'Card resize in vertical directions';
ResizeCardVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `Cards can be resized in vertical direction only. Resize handle will expand on bottom border.
        `
        }
    }
};
