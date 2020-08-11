import '../../dist/avatar.css';
import '../../dist/badge.css';
import '../../dist/button.css';
import '../../dist/card.css';

export default {
    title: 'Components/Card',
    parameters: {
        description: `A Card is an app content container that represents a task or a topic on an overview page. 
It is a smart component that uses UI annotations to render its content. Cards can show application content from different sources side by side – without requiring the user to switch screens.
Cards can display different content:

- a chart
- a list
- a table
- informative text
- a combination of two elements

Card fields are not editable. A card can focus on a single object or topic, or on a group of objects. Cards sizes vary depanding on the layout.
Several cards can reference the same applicaton but the information should not be repeated. 
`,
        tags: ['development']
    }
};


export const cardAnatomy = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin-bottom: 1rem;">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
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
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
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
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--positive fd-card__counter">6 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">Badge</div>
            <a class="fd-card__header">
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
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">New</div>
            <a class="fd-card__header">
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
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">Updated Content</div>
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-card__counter">1 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
</div>
`;

cardAnatomy.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `Card consists of two mandatory components: a clickable header area and a content area. The card takes the width and the height of its parent.

**Header:**

- indicates what the card is about
- functions as a navigation area for opening the parent app

Elements:

 - Avatar (optional) - use Avatar component with size S (3rem)
 - Title area with a mandatory title and an optional counter - the title explains why this card exists and why a user might want to use it. Titles that exceed three lines are truncated with the ellipsis. The counter indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or no items are found for the filter criteria. The counter is right-aligned and is never truncated.
 - Subtitle area with an optional subtitle - qualifies the title, offers an explanation, or shows a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with the ellipsis.

**Content:**

- reserved for application content.
`
    }
};

export const analyticalCard = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin-bottom: 1rem;">
        <div class="fd-card fd-card--analytical">
            <a class="fd-card__header">
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
                        <div class="fd-numeric-content">
                            <div class="fd-numeric-content__kpi-container">
                                <div class="fd-numeric-content__kpi">1Ñç</div>
                            </div>
                            <div class="fd-numeric-content__scale-container">
                                <div class="fd-numeric-content__scale">
                                    <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
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
            <div class="fd-card__content"></div>
        </div>
    </div>

    <div style="width: 700px; height: 400px; margin-bottom: 1rem;">
        <div class="fd-card fd-card--analytical">
            <a class="fd-card__header">
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
                        <div class="fd-numeric-content">
                            <div class="fd-numeric-content__kpi-container">
                                <div class="fd-numeric-content__kpi">1Ñç</div>
                            </div>
                            <div class="fd-numeric-content__scale-container">
                                <div class="fd-numeric-content__scale">
                                    <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
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
            <div class="fd-card__content"></div>
        </div>
    </div>
</div>
`;

analyticalCard.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `The analytical card is used for data visualization. It consists of two areas – a header area (either a standard header or a KPI header) and a chart area with a visual representation of the data. The analytical card is a single object card and does not contain a footer area.
        
**Header Area:**

- Standard Header
  - Title (mandatory) - The title provides the most important information. It is recommend to use a single-line text, but it can also wrap to two lines.
  - Subtitle (optional) - The subtitle can wrap to two lines, and gets truncated at the end of the second line.
- KPI Header
  - Title (mandatory) - same as for Standard Header
  - Subtitle (mandatory) - The subtitle can wrap to two lines, and gets truncated at the end of the second line. The unit of measure is shown at the end of the subtitle.
  - KPI area (mandatory)
  - Second subtitle (optional)

**Content Area:**

8 chart types can be used with analytical card:

- Line
- Bubble
- Column
- Stacked column
- Veertical bullet
- Donut
- Combined
- Scatter plot
- Waterfall
`
    }
};


export const listCard = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 100%; margin-bottom: 1rem;">
        <div class="fd-card">
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Quick Links</div>
                        <span class="fd-object-status fd-card__counter">6 of 20</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--cart"></span>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--wrench"></span>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--leads"></span>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--batch-payments"></span>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--retail-store"></span>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--travel-expense"></span>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div style="width: 300px; height: 100%; margin-bottom: 1rem;">
        <div class="fd-card">
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Quick Links</div>
                        <span class="fd-object-status fd-card__counter">6 of 20</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Compact Mode</div>
                    </div>
                </div>
            </a>
            <div class="fd-card__content">
                <ul class="fd-list fd-list--no-border fd-list--compact" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--cart"></span>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--wrench"></span>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--leads"></span>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--batch-payments"></span>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--retail-store"></span>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <span class="fd-list__icon sap-icon--travel-expense"></span>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

listCard.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The Header and the Content sections follow the specification described in the Card Anatomy. The Content can accommodate different list types. All controls placed inside should behave natively.'
    }
};

export const tableCard = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 500px; height: 100%; margin-bottom: 1rem;">
        <div class="fd-card fd-card--table">
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Table Card</div>
                        <span class="fd-object-status fd-card__counter">4 of 20</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content">
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div style="width: 500px; height: 100%; margin-bottom: 1rem;">
        <div class="fd-card fd-card--table fd-card--compact">
            <a class="fd-card__header">
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
            <div class="fd-card__content">
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
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
                                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
`;

tableCard.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The Header and the Content sections follow the specification described in the Card Anatomy. The Table component belongs to the Content area.'
    }
};




// TEMPLATE
export const primary = () => `
<div class="fd-card">Test</div>
`;

primary.storyName = 'Card title';
primary.parameters = {
    docs: {
        storyDescription: 'Card section description'
    }
};

