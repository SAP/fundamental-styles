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
    title: 'Components/Card',
    parameters: {
        description: `A card is content container that represents a task or a topic on the overview page of an application. It is essentially a smart component that uses UI annotations to render its content. Cards can display read-only content from different sources side by side – without requiring the user to switch screens.

**Cards can display different types of content, such as:**

- a chart
- a list
- a table
- an object or group of objects
- informative text
- a combination of two elements

Card sizes vary depending on the layout, and they are not editable. A card can focus on either a single object or topic, or on a group of objects. Several cards can reference the same application, but the information should be distinct from one card to another.

##Card anatomy

A card is a container that consists of two main components: a selectable header area (with a title) and a content area. The width and the height of a card depends on its parent, and its header can be placed either above or below the content.

Components | Description
:--------- |:-----------
Header (main) | The header displays a mandatory title, indicating what the card is about and functions as a navigation control that directs the user to the parent app.
Content (main) | The content area is reserved for application content.
Title | A title is mandatory to explain what content is being displayed to the user.
Avatar (optional) | An avatar can be displayed in a size S (3rem).
Subtitle (optional) | The subtitle provides additional context to the title or displays a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with an ellipsis.
Counter (optional) | The counter indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or if no items are found in the filter criteria. The counter is right-aligned and is never truncated.
Footer (optional) | The footer displays a list of actions that can be performed on the card. When link is too long, or there is no more place for actions, overflow button should appear.
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};


export const CardAnatomy = () => `<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe"></span>
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
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <div class="fd-card__footer-actions-item">
                        <button class="fd-button fd-button--positive">
                            Button
                        </button>
                    </div>
                    <div class="fd-card__footer-actions-item">
                        <button class="fd-button fd-button--negative">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 2">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe">
                </span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            <div class="fd-card__footer">
                <a class="fd-link fd-card__footer-link" href="#"><span class="fd-link__content">Footer with a link</span></a>
            </div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 2">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe">
                </span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            <div class="fd-card__footer">
                <a class="fd-link fd-card__footer-link" href="#"><span class="fd-link__content">Footer with a long link Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium</span></a>
                <button class="fd-button fd-button--transparent">
                    <i class="sap-icon sap-icon--overflow"></i>
                </button>
            </div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 2">
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe"></span>
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
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 3">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <span class="fd-object-status fd-object-status--informative fd-card__counter">1 of 15</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 4">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/backgrounds/city.jpg')"
                    role="img"
                    aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--positive fd-card__counter">6 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 5">
            <div class="fd-badge">Badge</div>
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--critical fd-card__counter">3 of 15</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 6">
            <div class="fd-badge">Badge</div>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--critical fd-card__counter">3 of 15</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="Card Anatomy Example 7">
            <div class="fd-badge">New</div>
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <span class="fd-object-status fd-card__counter">1 of 15</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="8">
            <div class="fd-badge">Updated Content</div>
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-card__counter">1 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>
</div>
`;

CardAnatomy.storyName = 'Standard card';
CardAnatomy.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `The standard card displays a header area with a title and a content area, as well as any other components mentioned in the card anatomy section.
`
        }
    }
};

export const AnalyticalCard = () => `<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card fd-card--analytical" role="region" aria-label="Analytical Card Example 1">
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-card__counter">Counter</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Card Subtitle</div>
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
                    <div class="fd-card__second-subtitle">Second Subtitle</div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content"></div>
        </div>
    </div>

    <div style="width: 700px; height: 400px; margin: 1rem;">
        <div class="fd-card fd-card--analytical"  role="region" aria-label="Analytical Card Example 2">
            <a class="fd-card__header" tabindex="0">
                <div class="fd-badge">Badge</div>
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
</div>
`;

AnalyticalCard.storyName = 'Analytical card';
AnalyticalCard.parameters = {
    docs: {
        iframeHeight: 450,
        description: {
            story: `The analytical card is used for data visualization. It can display a KPI header and various chart types in the content. The only difference between a KPI header and a standard header is that the former requires a subtitle, a KPI area and can display an optional second subtitle. To display an analytical card, add the \`fd-card--analytical\` modifier class to the main element.

####Chart types
**The content area of an analytical card can display 8 different chart types:**

- Line
- Bubble
- Column
- Stacked column
- Vertical bullet
- Donut
- Combined
- Scatter plot

`
        }
    }
};

export const ListCard = () => `<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 100%; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="List Card Example 1">
            <div class="fd-card__header fd-card__header--non-interactive">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Quick Links</div>
                        <span class="fd-object-status fd-card__counter">6 of 20</span>
                    </div>
                </div>
            </div>
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
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div style="width: 300px; height: 100%; margin: 1rem;">
        <div class="fd-card" role="region" aria-label="List Card Example 2">
            <div class="fd-card__header fd-card__header--non-interactive">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Quick Links</div>
                        <span class="fd-object-status fd-card__counter">6 of 20</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Compact Mode</div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-label="Card Content">
                <ul class="fd-list fd-list--no-border fd-list--compact" role="list">
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
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

ListCard.storyName = 'List card';
ListCard.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `A card can display various types of lists. All components placed inside should behave natively.
            For this kind of card it is not recommended to keep header interactive, or navigable.
            Such a header can be achieved by adding \`fd-card__header--non-interactive\` modifier class.
        `
        }
    }
};

export const TableCard = () => `<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 500px; height: 100%; margin: 1rem;">
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
    <div style="width: 500px; height: 100%; margin: 1rem;">
        <div class="fd-card fd-card--table fd-card--compact" role="region" aria-label="Table Card Example 2">
            <a class="fd-card__header" tabindex="0">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Table Card</div>
                        <span class="fd-object-status fd-card__counter">4 of 20</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Compact Mode</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content" role="group" aria-label="Card Content">
                <table class="fd-table fd-table--compact fd-table--no-horizontal-borders fd-table--no-vertical-borders">
                    <thead class="fd-table__header">
                        <tr class="fd-table__row">
                            <th class="fd-table__cell" scope="col">Name</th>
                            <th class="fd-table__cell" scope="col">Status</th>
                            <th class="fd-table__cell" scope="col">Price</th>
                            <th class="fd-table__cell" scope="col">Country</th>
                            <th class="fd-table__cell"></th>
                        </tr>
                    </thead>
                    <tbody class="fd-table__body">
                        <tr class="fd-table__row">
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
</div>
`;

TableCard.storyName = 'Table card';
TableCard.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'Cards can display tables within the content area. To display a table card, add the `fd-card--table` modifier class to the main element.'
        }
    }
};


export const ObjectCard = () => `<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 14rem; height: 34rem; margin: 1rem;">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 1">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
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
    <div style="width: 40rem; height: 20rem; margin: 1rem;">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 2">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
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
                <div class="fd-card__content-container fd-card__content-container--horizontal">
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">
                            <h3 style="margin: 0;">Group Title 1</h3>
                        </div>
                        <div class="fd-card__content-group">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Avatar">
                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                            </span>
                            <div class="fd-card__content-group-text">
                                <span style="color: green;">Label</span>
                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Link Text</span></a>
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
                        <div class="fd-card__content-title-container">
                            <h3 style="margin: 0;">Group Title 2</h3>
                        </div>
                        <div class="fd-card__content-group">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Avatar">
                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                            </span>
                            <div class="fd-card__content-group-text">
                                <span style="color: blue">Label</span>
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
                </div>
            </div>
        </div>
    </div>
</div>
`;

ObjectCard.storyName = 'Object card';
ObjectCard.parameters = {
    docs: {
        iframeHeight: 600,
        description: {
            story: `The object card can display a single object or a group of objects. Contrary to other cards, object card has 1rem padding on all sides of the content area. To display an object card, add the \`fd-card--object\` modifier class to the main element.

**Within the content area, there are several components:**

Component (class) |	Description
:---------------- | :-----------
\`fd-card__content-container\` | a wrapper for the content sections. By default, the content is displayed in one column. To display the content in two columns, add the \`fd-card__content-container--horizontal\` modifier class.
\`fd-card__content-section\` | a content section. A section contains a group title and one or multiple groups. The min-width of the section is 12rem and it can reach a maximum of 24rem.
\`fd-card__content-title-container\` | a container for the title.
\`fd-card__content-group\` | a container for the content group. It can also contain an avatar with size XS, a group label and a group value.
\`fd-card__content-label-container\` | a container for the label of the group.
\`fd-card__content-group-container\` | a container for the value of the group.
`
        }
    }
};
