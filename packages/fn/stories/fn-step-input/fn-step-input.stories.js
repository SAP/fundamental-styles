import 'fn/src/fn-input.scss';
import 'fn/src/fn-nested-button.scss';
import 'fn/src/fn-step-input.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Step Input',
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
export const StepInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><label for="field-1">normal:</label></div>
    <div class="fn-input fn-step-input" tabindex="0">
        <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field" type="number" id="field-1" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><label for="field-2">hover:</label></div>
    <div class="fn-input fn-step-input" tabindex="0">
        <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field is-hover" type="number" id="field-2" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><label for="field-3">active:</label></div>
    <div class="fn-input fn-step-input" tabindex="0">
        <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field is-active" type="number" id="field-3" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><label for="field-4">focus:</label></div>
    <div class="fn-input fn-step-input" tabindex="0">
        <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field is-focus" type="number" id="field-4" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><label for="field-5">disabled:</label></div>
    <div class="fn-input fn-step-input" tabindex="-1">
        <button class="fn-nested-button fn-nested-button--absolute-left" disabled aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field" disabled type="number" id="field-5" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" disabled aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>


<div class="docs-fn-container">
    <div><label for="field-6">display:</label></div>
    <div class="fn-input fn-step-input is-display" tabindex="-1">
        <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
            <span class="sap-icon sap-icon--less"></span>
        </button>
        <input class="fn-input__text-field fn-step-input__text-field is-display" type="number" id="field-6" value="42" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
            <span class="sap-icon sap-icon--add"></span>
        </button>
    </div>
</div>
`;
StepInput.parameters = {
  docs: {
    iframeHeight: 500
  }
};
