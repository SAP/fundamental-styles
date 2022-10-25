import 'fn/src/fn-input.scss';
import 'fn/src/fn-nested-button.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Multi-Input',
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
</style>
`;
export const MultiInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="0">
        <input class="fn-input__text-field is-hover" type="text" id="field-2" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="0">
        <input class="fn-input__text-field is-active" type="text" id="field-3" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="0">
        <input class="fn-input__text-field is-focus" type="text" id="field-4" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="-1">
        <input class="fn-input__text-field is-disabled" type="text" id="field-5" placeholder="Placeholder" tabindex="-1" disabled />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right is-disabled" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>


<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--multi-input" tabindex="0">
        <input class="fn-input__text-field is-display" type="text" id="field-6" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--value-help"></span>
        </button>
    </div>
</div>
`;
MultiInput.storyName = 'Multi-Input';
MultiInput.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Add the `.fn-input--multi-input` modifier classes to `.fn-input` for a Multi-input element. '
    }
  }
};
