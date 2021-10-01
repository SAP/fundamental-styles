export default {
    title: 'Experimental/Toggles',
    parameters: {
        description: `

        `,
        components: ['fn-checkbox', 'fn-radio', 'fn-switch']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
    }

    .docs-fn-container label {
        margin-bottom: 1rem;
    }
</style>
`;

export const checkbox = () => `${localStyles}
<div class="docs-fn-container">
    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">First</span>
    </label>

    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Second</span>
    </label>

    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Third</span>
    </label>

    <label class="fn-checkbox is-disabled">
        <input class="fn-checkbox__input" type="checkbox" disabled tabindex="-1">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Fourth</span>
    </label>
</div>
`;

checkbox.storyName = 'Checkbox';
checkbox.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const checkboxGroup = () => `${localStyles}
<div class="docs-fn-container">
    <div style="width: 10rem">
        <label class="fn-checkbox fn-checkbox--group" tabindex="0">
            <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">First</span>
        </label>

        <label class="fn-checkbox fn-checkbox--group" tabindex="0">
            <input class="fn-checkbox__input" type="checkbox" tabindex="-1">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Second</span>
        </label>

        <label class="fn-checkbox fn-checkbox--group" tabindex="0">
            <input class="fn-checkbox__input" type="checkbox" tabindex="-1">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Third</span>
        </label>

        <label class="fn-checkbox fn-checkbox--group is-disabled">
            <input class="fn-checkbox__input" type="checkbox" disabled tabindex="-1">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Fourth</span>
        </label>
    </div>
</div>
`;

checkboxGroup.storyName = 'Checkbox Group';
checkboxGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'By default, the width of the checkbox input is `fit-content`. Use the `.fn-checkbox--group` modifier class to make all the controls within a group the same width. In this case the checkbox control will take the width of the parent element.'
    }
};

export const radio = () => `${localStyles}
<div class="docs-fn-container">
    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" name="radio" tabindex="-1">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">First</span>
    </label>

    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" name="radio" tabindex="-1">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Second</span>
    </label>

    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" name="radio" tabindex="-1">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Third</span>
    </label>

    <label class="fn-radio is-disabled">
        <input class="fn-radio__input" type="radio" disabled name="radio" tabindex="-1">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Fourth</span>
    </label>
</div>

`;

radio.storyName = 'Radio';
radio.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const radioGroup = () => `${localStyles}
<div class="docs-fn-container">
    <div style="width: 10rem">
        <label class="fn-radio fn-radio--group" tabindex="0">
            <input class="fn-radio__input" type="radio" checked="checked" name="radio" tabindex="-1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">First</span>
        </label>

        <label class="fn-radio fn-radio--group" tabindex="0">
            <input class="fn-radio__input" type="radio" name="radio" tabindex="-1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Second</span>
        </label>

        <label class="fn-radio fn-radio--group" tabindex="0">
            <input class="fn-radio__input" type="radio" name="radio" tabindex="-1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Third</span>
        </label>

        <label class="fn-radio fn-radio--group is-disabled">
            <input class="fn-radio__input" type="radio" disabled name="radio" tabindex="-1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Fourth</span>
        </label>
    </div>
</div>

`;

radioGroup.storyName = 'Radio Group';
radioGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'By default, the width of the radio input is `fit-content`. Use the `.fn-radio--group` modifier class to make all the controls within a group the same width. In this case the radio control will take the width of the parent element.'
    }
};


export const switchToggle = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-switch">
        <label class="fn-switch__toggle">
            <input type="checkbox" class="fn-switch__input">
            <span class="fn-switch__slider"></span>
            <span class="fn-switch__label">Toggle</span>
        </label>
    </div>
</div>

`;

switchToggle.storyName = 'Switch';
switchToggle.parameters = {
    docs: {
        iframeHeight: 500
    }
};
