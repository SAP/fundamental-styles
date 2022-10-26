import '../../../src/fixed-card-layout.scss';
import '../../../src/avatar.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/numeric-content.scss';
import '../../../src/table.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/icon.scss';
export default {
    title: 'Layouts/Fixed Card Layout',
    parameters: {
        description: `The fixed card layout is a layout for the overview page. The cards have a fixed width, and the height is determined by the card type and the embedded control.
        `,
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: [
            'fixed-card-layout',
            'avatar',
            'card',
            'object-status',
            'numeric-content',
            'table',
            'checkbox',
            'list',
            'icon'
        ]
    }
};

export const FixedCardLayout = () =>
    `<div class="fd-fixed-card-layout__card-layout fd-fixed-card-layout__card-layout--columns-3" style="height: 1102px;" [attr.dir]="dir">
        <div class="fd-fixed-card-layout__card">
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

        <div class="fd-fixed-card-layout__card">
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
        </div>

        <div class="fd-fixed-card-layout__card">
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
                    </ul>
                </div>
            </div>
        </div>

        <div class="fd-fixed-card-layout__card">
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
        </div>

        <div class="fd-fixed-card-layout__card">
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
        </div>

        <div class="fd-fixed-card-layout__card">
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
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 5</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 6</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 7</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 8</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 9</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 10</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 11</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 12</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="fd-fixed-card-layout__card">
            <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 2">
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
        </div>

        <div class="fd-fixed-card-layout__card">
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
        </div>

        <div class="fd-fixed-card-layout__card">
            <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 2">
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
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI2">
                            <label class="fd-checkbox__label" for="kqqzPI2"></label>
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
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh2">
                            <label class="fd-checkbox__label" for="EWuzWh2"></label>
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
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc2">
                            <label class="fd-checkbox__label" for="19j0Sc2"></label>
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
                            <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX2">
                            <label class="fd-checkbox__label" for="a7SfGX2"></label>
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
        </div>
    </div>`;

FixedCardLayout.storyName = 'Fixed card layout with 3 columns';
FixedCardLayout.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `Cards arrangement in a 3 column layout.
* Use \`fd-fixed-card-layout__card-layout\` class for the wrapper element, specify amount of columns with \`fd-fixed-card-layout__card-layout--columns-N\` class, where \`1 < N < 11\`.
Layout is single column by default. Also, set \`height\` or \`max-height\` for the wrapper element. 
* Apply \`fd-fixed-card-layout__card\` class to the every card element.`
        }
    }
};
