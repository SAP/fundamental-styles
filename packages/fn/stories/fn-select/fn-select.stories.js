import 'fn/src/fn-input.scss';
import 'fn/src/fn-nested-button.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Select',
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
        background: white;
        padding: 1rem;
        align-items: center;
    }
</style>
`;
export const DefaultInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--select" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--select is-hover" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-2" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--select is-active" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-3" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--select is-focus" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-4" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--select is-disabled" tabindex="-1">
        <input class="fn-input__text-field" type="text" id="field-5" placeholder="Placeholder" tabindex="-1" disabled />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>


<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--select is-display" tabindex="0">
        <input class="fn-input__text-field" type="text" id="field-6" placeholder="Placeholder" tabindex="-1" />
        <div class="fn-input__border"></div>
        <button class="fn-nested-button" aria-label="nested button" tabindex="-1">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>
`;
DefaultInput.storyName = 'Select';
DefaultInput.parameters = {
  docs: {
    iframeHeight: 500
  }
};
