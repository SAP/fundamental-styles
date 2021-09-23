export default {
    title: 'Experimental/Select',
    parameters: {
        description: `

        `,
        components: ['fn-input', 'fn-select', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
        border-radius: 0.25rem;
    }
</style>
`;

export const defaultInput = () => `${localStyles}
<div class="docs-fn-container">

<div class="fn-select">
    <div class="fn-text-field">
        <label class="fn-text-field__label" for="field-1">Standard Selector</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input fn-select__input" type="text" id="field-1" placeholder="Select an option" readonly />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--navigation-down-arrow"></span>
        </div>
    </div>
    <ul class="fn-select__menu" role="listbox" aria-label="Select menu">
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
        <li class="fn-select__item fn-select__item--selected" role="option" tabindex="0">Selected</li>
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
    </ul>
</div>

<br><br>
<div class="fn-select">
    <div class="fn-text-field">
        <label class="fn-text-field__label" for="field-2">Editable Selector</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input fn-select__input" type="text" id="field-2" placeholder="Select an option" />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--navigation-down-arrow"></span>
        </div>
    </div>
    <ul class="fn-select__menu" role="listbox" aria-label="Select menu">
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
        <li class="fn-select__item fn-select__item--selected" role="option" tabindex="0">Selected</li>
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
        <li class="fn-select__item" role="option" tabindex="0">Option</li>
    </ul>
</div>
`;

defaultInput.storyName = 'Select';
defaultInput.parameters = {
    docs: {
        iframeHeight: 500
    }
};
