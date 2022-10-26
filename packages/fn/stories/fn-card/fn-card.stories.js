import 'fn/src/fn-card.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-avatar.scss';
import 'fn/src/fn-list.scss';

export default {
  title: 'Card',
  parameters: {
    description: `
There are two types of cards - "container" cards (default), and "data" cards which are interactive / hoverable / focusable / selectable. Typically container cards will contain complex
controls within the card whereas the data cards are themselves what the user will be interacting with.
<br><br>
By default, cards only have a minimum width, so the developer should set width rules or keep the card in a container of appropriate width.

## Structure
- <b>.fn-card</b>. Modifier classes: <b>.fn-card--data</b>
    - <b>.fn-card__header</b>
        - <b>.fn-card__title-container</b>
            - <b>.fn-card__title</b>. Modifier classes: <b>fn-card__title--truncate</b>
            - <b>.fn-card__subtitle</b>. Modifier classes: <b>fn-card__subtitle--truncate</b>
        - <b>.fn-card__actions-container</b>
    - <b>.fn-card__content</b>. Modifier classes:  <b>.fn-card__content--no-padding</b>, <b>.fn-card__content--scroll</b>
`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const Card = () => `${localStyles}
    <div class="fn-card" style="max-width: 40rem">
        <div class="fn-card__header">
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Card Title</h1>
            </div>
        </div>
        <div class="fn-card__content"></div>
    </div>
    
    <br><br>
    
    <div class="fn-card" style="max-width: 40rem">
        <div class="fn-card__header">
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Card Title</h1>
                <p class="fn-card__subtitle">Card Subtitle</p>
            </div>
        </div>
        <div class="fn-card__content"></div>
    </div>
    
    <br><br>
    
    <div class="fn-card" style="max-width: 40rem">
        <div class="fn-card__header">
            <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Card Title</h1>
            </div>
            <div class="fn-card__actions-container">
                <button class="fn-button fn-button--secondary">
                    <span class="fn-button__text">Button</span>
                </button>
            </div>
        </div>
        <div class="fn-card__content"></div>
    </div>
    <br><br>
    <div class="fn-card" style="max-width: 40rem">
        <div class="fn-card__header">
            <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Card Title</h1>
                <p class="fn-card__subtitle">Card Subtitle</p>
            </div>
        </div>
        <div class="fn-card__content"></div>
    </div>
    <br><br>
    <div class="fn-card" style="max-width: 40rem">
        <div class="fn-card__header">
            <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Card Title</h1>
                <p class="fn-card__subtitle">Card Subtitle</p>
            </div>
            <div class="fn-card__actions-container">
                <button class="fn-button fn-button--secondary">
                    <span class="fn-button__text">Button</span>
                </button>
                <button class="fn-button fn-button--secondary">
                    <span class="fn-button__text">Button</span>
                </button>
            </div>
        </div>
        <div class="fn-card__content"></div>
    </div>
`;
Card.parameters = {
  docs: {
    storyDescription: 'This is a container (default) card component.'
  }
};
export const DataCard = () => `${localStyles}
<div class="fn-card fn-card--data" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title</h1>
        </div>
    </div>
    <div class="fn-card__content"></div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>:hover</b></div>
<div class="fn-card fn-card--data is-hover" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title</h1>
            <p class="fn-card__subtitle">Card Subtitle</p>
        </div>
    </div>
    <div class="fn-card__content"></div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>:selected</b></div>
<div class="fn-card fn-card--data is-selected" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title</h1>
        </div>
    </div>
    <div class="fn-card__content"></div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>:focus</b></div>
<div class="fn-card fn-card--data is-focus" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title</h1>
            <p class="fn-card__subtitle">Card Subtitle</p>
        </div>
    </div>
    <div class="fn-card__content"></div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>title and subtitle with very long text (default behaviour: no truncate)</b></div>
<div class="fn-card fn-card--data" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p class="fn-card__subtitle">Card Subtitle et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div class="fn-card__actions-container">
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Button</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Button</span>
            </button>
        </div>
    </div>
    <div class="fn-card__content">
        <ul class="fn-list">
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
        </ul>
    </div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>container with no padding and truncate for the title and subtitle</b></div>
<div class="fn-card fn-card--data" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
        <div class="fn-card__title-container">
            <h1 class="fn-card__title fn-card__title--truncate">Card Title lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
            <p class="fn-card__subtitle fn-card__subtitle--truncate">Card Subtitle et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div class="fn-card__actions-container">
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Button</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Button</span>
            </button>
        </div>
    </div>
    <div class="fn-card__content fn-card__content--no-padding">
        <ul class="fn-list">
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
        </ul>
    </div>
</div>
<br><br>
<div style="margin-bottom: 1rem;"><b>container with vertical scroll</b></div>
<div class="fn-card fn-card--data" tabindex="0" style="max-width: 40rem">
    <div class="fn-card__header">
        <span class="fn-icon fn-icon--sys-help-2" style="background: #0070F2; width: 18px; height: 18px"></span>
        <div class="fn-card__title-container">
            <h1 class="fn-card__title">Card Title</h1>
            <p class="fn-card__subtitle">Card Subtitle</p>
        </div>
    </div>
    <div class="fn-card__content fn-card__content--scroll" style="max-height: 250px;">
        <ul class="fn-list">
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
            <li class="fn-list__item" tabindex="0">
                <span class="fn-list__text">List Item</span>
            </li>
        </ul>
    </div>
</div>
`;
DataCard.parameters = {
  docs: {
    storyDescription: 'The data card has hover, focus, and selected states. For this type of cards add the `.fn-card--data` modifier class to the `.fn-card` base class. By default, the Card content comes with a 1.5rem padding. For a container with no padding add the `.fn-card__content--no-padding` modifier class to the `fn-card__content` base class. To clip the Card container and add a vertical scroll it, you need to apply the `fn-card__content--scroll` modifier class to the `fn-card__content` base class and also specify the max-height of the element with inline styling.'
  }
};
