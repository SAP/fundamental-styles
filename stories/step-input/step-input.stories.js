export default {
    title: 'Components/StepInput',
    parameters: {
        description: `
The step input control allows the user to change the input values in predefined increments (steps).

Use the step input if:

* The user needs to adjust amounts, quantities, or other values quickly.
* The user needs to adjust values for a specific step (for example, in a shopping cart).

Do not use the step input if:

* The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use the regular input field control instead.
* You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular input field control instead.
* You want the user to enter dates and times. In this case, use the date picker, date range selection, time picker, or date/time picker instead.  
  `,
        components: ['button', 'icon', 'form-item', 'step-input', 'form-label', 'input']
    }
};

/** On smartphones and tablets, the step input is shown in cozy mode (default). */

export const primary = () => `<label class="fd-form-label" for="step-3">Default Step Input</label><br />
<div class="fd-step-input">
  <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button" onclick="stepInputValue('step-3', 'down');" tabindex="-1" type="button">
    <i class="sap-icon--less"></i>
  </button>
  <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3" type="number" value="0" />
  <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button" onclick="stepInputValue('step-3', 'up');" tabindex="-1" type="button">
    <i class="sap-icon--add"></i>
  </button>
</div>
`;

primary.storyName = 'Default';

/**
 * The Step Input should be used in compact mode when using a desktop of devices with large screens.
It can be achieved by adding the `--compact` modifier to the main element as well as the
button and input elements.
 */

export const compact = () => `<label class="fd-form-label" for="step-1">Compact Step Input</label><br />
<div class="fd-form-item fd-form-item--horizontal">
    <div class="fd-step-input fd-step-input--compact">
            <button aria-label="Step down" class="
                fd-button
                fd-button--compact
                fd-button--transparent
                fd-step-input__button"
                onclick="stepInputValue('step-1', 'down');"
                tabindex="-1" type="button">
                    <i class="sap-icon--less"></i>
            </button>
        <input class="
                fd-input 
                fd-input--compact 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-1" type="number" value="0">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--compact
                fd-button--transparent
                fd-step-input__button"
                onclick="stepInputValue('step-1', 'up');" 
                tabindex="-1" type="button">
                    <i class="sap-icon--add"></i>
            </button>
    </div>
    <span class="fd-form-label fd-form-label--unit-description">PC</span>
</div>
`;

/**
 * By default there is built-in focus indicator for StepInput component, which is not supported by IE11.
To make focus work on IE11, it should be added by putting `.is-focus` class to component
 */

export const focused = () => `<label class="fd-form-label" for="step-20">Focused Step Input</label><br />
<div class="fd-step-input is-focus">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-20', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-20" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-20', 'up');" 
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>
`;

/**
 * The Step Input component also supports semantic states as does every form.
The semantic states can be customized by adding the `is-error` | `is-success` | `is-warning` | or `is-information` into the fd-step-input element.
 */

export const states = () => `<label class="fd-form-label" for="step-5">Success Step Input</label><br />
<div class="fd-step-input is-success">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-5', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-5" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-5', 'up');" 
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>

<br><br>
<label class="fd-form-label" for="step-6">Information Step Input</label><br />
<div class="fd-step-input is-information">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-6', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-6" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-6', 'up');" 
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>
<br><br>
<label class="fd-form-label" for="step-7">Error Step Input</label><br />
<div class="fd-step-input is-error">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-7', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-7" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-7', 'up');" 
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>

<br><br>

<label class="fd-form-label" for="step-8">Warning Step Input</label><br />
<div class="fd-step-input is-warning">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'down');"
        tabindex="-1" type="button">
            <i class="sap-icon--less"></i>
    </button>
    <input class="
        fd-input 
        fd-input--no-number-spinner 
        fd-step-input__input
    " id="step-8" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button 
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'up');" 
        tabindex="-1" type="button">
            <i class="sap-icon--add"></i>
    </button>
</div>
`;

states.parameters = {
    docs: {
        iframeHeight: 300
    }
};


export const disabled = () => `<label class="fd-form-label" for="step-13">Disabled Step Input</label><br />
<div class="fd-step-input is-disabled">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-13', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-13" type="number" value="0" disabled>
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-13', 'up');" 
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>
`;

export const readOnly = () => `<label class="fd-form-label" for="step-14">Temperature set to</label><br />
<div class="fd-form-item fd-form-item--horizontal">
    <div class="fd-step-input is-readonly">
            <button aria-label="Step down" class="
                fd-button
                fd-button--transparent
                fd-step-input__button"
                onclick="stepInputValue('step-14', 'down');"
                tabindex="-1" type="button">
                    <i class="sap-icon--less"></i>
            </button>
        <input class="
                fd-input 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-14" type="number" readonly value="23">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--transparent
                fd-step-input__button"
                onclick="stepInputValue('step-14', 'up');" 
                tabindex="-1" type="button">
                    <i class="sap-icon--add"></i>
            </button>
            </div>
        <span class="fd-form-label fd-form-label--unit-description">Degree Celsius</span>
</div>
`;
