import "../../dist/button.css";
import "../../dist/icon.css";
import "../../dist/form-item.css";
import "../../dist/step-input.css";
import "../../dist/form-label.css";
import "../../dist/input.css";

export default {
  title: "Components/StepInput",
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
  `
  }
};

export const primary = () => `
<div class="fd-step-input">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-3', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-3" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-3', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
`;

primary.story = {
  name: "Default",
  parameters: {
      docs: {
          storyDescription: "On smartphones and tablets, the step input is shown in cozy mode (default)."
      }
  }
};

export const compact = () => `
<div class="fd-form-item fd-form-item--horizontal">
    <div class="fd-step-input fd-step-input--compact">
            <button aria-label="Step down" class="
                fd-button
                fd-button--compact
                fd-button--transparent
                fd-step-input__button
                sap-icon--less"
                onclick="stepInputValue('step-1', 'down');"
                tabindex="-1" type="button">
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
                fd-step-input__button
                sap-icon--add"
                onclick="stepInputValue('step-1', 'up');" 
                tabindex="-1" type="button">
            </button>
    </div>
    <span class="fd-form-label fd-form-label--unit-description">PC</span>
</div>
`;

compact.story = {
  parameters: {
      docs: {
          storyDescription: `
The Step Input should be used in compact mode when using a desktop of devices with large screens. 
It can be achieved by adding the <code>--compact</code> modifier to the main element as well as the
button and input elements.    
          `
      },
  }
};

export const focused = () => `
<div class="fd-step-input is-focus">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-20', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-20" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-20', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
`;

focused.story = {
  parameters: {
      docs: {
          storyDescription: `
By default there is built-in focus indicator for StepInput component, which is not supported by IE11.
To make focus work on IE11, it should be added by putting <code>.is-focus</code> class to component  
          `
      },
  }
};


export const states = () => `
<h3>Success</h3>

<div class="fd-step-input is-success">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-5', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-5" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-5', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>

<br><br>
<h3>Information</h3>
<div class="fd-step-input is-information">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-6', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-6" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-6', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
<br><br>
<h3>Error</h3>
<div class="fd-step-input is-error">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-7', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-7" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-7', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>

<br><br>

<h3>Warning</h3>
<div class="fd-step-input is-warning">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button
        sap-icon--less"
        onclick="stepInputValue('step-8', 'down');"
        tabindex="-1" type="button">
    </button>
    <input class="
        fd-input 
        fd-input--no-number-spinner 
        fd-step-input__input
    " id="step-8" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button 
        fd-button--transparent
        fd-step-input__button
        sap-icon--add"
        onclick="stepInputValue('step-8', 'up');" 
        tabindex="-1" type="button">
    </button>
</div>
`;

states.story = {
  parameters: {
      docs: {
          storyDescription: `
The Step Input component also supports semantic states as does every form. 
The semantic states can be customized by adding the <code>is-error</code> | <code>is-success</code> | <code>is-warning</code> | or <code>is-information</code> into the fd-step-input element.
          `
      },
  }
};

export const disabled = () => `
<div class="fd-step-input is-disabled">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-13', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-13" type="number" value="0" disabled>
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-13', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
`;

export const readOnly = () => `
<div class="fd-step-input is-readonly">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-14', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-14" type="number" readonly value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-14', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
`;
