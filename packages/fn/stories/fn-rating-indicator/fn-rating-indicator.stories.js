import 'fn/src/fn-button.scss';
import 'fn/src/fn-rating-indicator.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Rating Indicator',
  parameters: {
    description: `
        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        align-items: center;
    }

    .docs-fn-container > div {
        text-align: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }
</style>
`;
export const RatingIndicator = () => `${localStyles}
<div class="docs-fn-container">
    <div>normal</div>
    <form class="fn-rating-indicator">
        <fieldset class="fn-rating-indicator__container" aria-label="Star Rating (out of 5)">
        
            <input aria-label="0 star" type="radio" class="fn-rating-indicator__input fn-rating-indicator__input--zero-rating" id="rating-max-value-5-0" name="rating-max-value-5" value="0">
            <label class="fn-rating-indicator__label fn-rating-indicator__label--zero-rating" for="rating-max-value-5-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-5-1" name="rating-max-value-5" value="1">
            <label class="fn-rating-indicator__label" for="rating-max-value-5-1"></label>

            <input aria-label="2 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-5-2" name="rating-max-value-5" value="2" checked>
            <label class="fn-rating-indicator__label" for="rating-max-value-5-2"></label>

            <input aria-label="3 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-5-3" name="rating-max-value-5" value="3">
            <label class="fn-rating-indicator__label" for="rating-max-value-5-3"></label>

            <input aria-label="4 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-5-4" name="rating-max-value-5" value="4">
            <label class="fn-rating-indicator__label" for="rating-max-value-5-4"></label>

            <input aria-label="5 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-5-5" name="rating-max-value-5" value="5">
            <label class="fn-rating-indicator__label" for="rating-max-value-5-5"></label>
        </fieldset>
    </form>
</div>

<div class="docs-fn-container">
    <div>disabled</div>
    <form class="fn-rating-indicator is-disabled">
        <fieldset class="fn-rating-indicator__container" aria-label="Star Rating (out of 5)">
        
            <input aria-label="0 star" type="radio" class="fn-rating-indicator__input fn-rating-indicator__input--zero-rating" id="rating-max-value-6-0" name="rating-max-value-6" value="0" disabled>
            <label class="fn-rating-indicator__label fn-rating-indicator__label--zero-rating" for="rating-max-value-6-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-6-1" name="rating-max-value-6" value="1" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-6-1"></label>

            <input aria-label="2 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-6-2" name="rating-max-value-6" value="2" checked disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-6-2"></label>

            <input aria-label="3 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-6-3" name="rating-max-value-6" value="3" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-6-3"></label>

            <input aria-label="4 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-6-4" name="rating-max-value-6" value="4" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-6-4"></label>

            <input aria-label="5 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-6-5" name="rating-max-value-6" value="5" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-6-5"></label>
        </fieldset>
    </form>
</div>

<div class="docs-fn-container">
    <div>readonly</div>
    <form class="fn-rating-indicator is-readonly">
        <fieldset class="fn-rating-indicator__container" aria-label="Star Rating (out of 5)">
        
            <input aria-label="0 star" type="radio" class="fn-rating-indicator__input fn-rating-indicator__input--zero-rating" id="rating-max-value-7-0" name="rating-max-value-7-0" value="0" disabled>
            <label class="fn-rating-indicator__label fn-rating-indicator__label--zero-rating" for="rating-max-value-7-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-7-1" name="rating-max-value-7-1" value="1" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-7-1"></label>

            <input aria-label="2 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-7-2" name="rating-max-value-7-2" value="2" checked disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-7-2"></label>

            <input aria-label="3 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-7-3" name="rating-max-value-7-3" value="3" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-7-3"></label>

            <input aria-label="4 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-7-4" name="rating-max-value-7-4" value="4" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-7-4"></label>

            <input aria-label="5 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-7-5" name="rating-max-value-7-5" value="5" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-7-5"></label>
        </fieldset>
    </form>
</div>

<div class="docs-fn-container">
    <div>display</div>
    <form class="fn-rating-indicator is-display">
        <fieldset class="fn-rating-indicator__container" aria-label="Star Rating (out of 5)">
        
            <input aria-label="0 star" type="radio" class="fn-rating-indicator__input fn-rating-indicator__input--zero-rating" id="rating-max-value-8-0" name="rating-max-value-8-0" value="0" disabled>
            <label class="fn-rating-indicator__label fn-rating-indicator__label--zero-rating" for="rating-max-value-8-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-8-1" name="rating-max-value-8-1" value="1" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-8-1"></label>

            <input aria-label="2 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-8-2" name="rating-max-value-8-2" value="2" checked disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-8-2"></label>

            <input aria-label="3 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-8-3" name="rating-max-value-8-3" value="3" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-8-3"></label>

            <input aria-label="4 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-8-4" name="rating-max-value-8-4" value="4" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-8-4"></label>

            <input aria-label="5 star" type="radio" class="fn-rating-indicator__input" id="rating-max-value-8-5" name="rating-max-value-8-5" value="5" disabled>
            <label class="fn-rating-indicator__label" for="rating-max-value-8-5"></label>
        </fieldset>
    </form>
</div>
`;
