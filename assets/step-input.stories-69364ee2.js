/* empty css               *//* empty css             *//* empty css                  *//* empty css                   *//* empty css              */const u=`<label class="fd-form-label" for="step-14">Temperature set to</label><br />
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
`,i=`<label class="fd-form-label" for="step-13">Disabled Step Input</label><br />
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
`,o=`<label class="fd-form-label" for="step-20">Focused Step Input</label><br />
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

<br><br>
<label class="fd-form-label" for="step-5">Success Step Input (Focused)</label><br />
<div class="fd-step-input is-success is-focus">
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
<label class="fd-form-label" for="step-6">Information Step Input (Focused)</label><br />
<div class="fd-step-input is-information is-focus">
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
<label class="fd-form-label" for="step-7">Error Step Input (Focused)</label><br />
<div class="fd-step-input is-error is-focus">
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

<label class="fd-form-label" for="step-8">Warning Step Input (Focused)</label><br />
<div class="fd-step-input is-warning is-focus">
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
`,l=`<label class="fd-form-label" for="step-5">Success Step Input</label><br />
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
`,d=`<label class="fd-form-label" for="step-3">Default Step Input</label><br />
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
<br />
<label class="fd-form-label" for="step-3-focused">Focused Step Input</label><br />
<div class="fd-step-input is-focus">
  <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button is-focus" onclick="stepInputValue('step-3-focused', 'down');" tabindex="-1" type="button">
    <i class="sap-icon--less"></i>
  </button>
  <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3-focused" type="number" value="0" />
  <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button" onclick="stepInputValue('step-3-focused', 'up');" tabindex="-1" type="button">
    <i class="sap-icon--add"></i>
  </button>
</div>
`,r=`<label class="fd-form-label" for="step-3f">Default Step Input</label><br />
<div class="fd-step-input fd-step-input--full-width">
  <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button" onclick="stepInputValue('step-3f', 'down');" tabindex="-1" type="button">
    <i class="sap-icon--less"></i>
  </button>
  <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3f" type="number" value="0" />
  <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button" onclick="stepInputValue('step-3f', 'up');" tabindex="-1" type="button">
    <i class="sap-icon--add"></i>
  </button>
</div>

<br><br>

<label class="fd-form-label" for="step-5f">Success Step Input</label><br />
<div class="fd-step-input is-success fd-step-input--full-width">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-5f', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input
            fd-input--no-number-spinner
            fd-step-input__input
    " id="step-5f" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-5f', 'up');"
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>

<br><br>

<label class="fd-form-label" for="step-6f">Information Step Input</label><br />
<div class="fd-step-input is-information fd-step-input--full-width">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-6f', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input
            fd-input--no-number-spinner
            fd-step-input__input
    " id="step-6f" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-6f', 'up');"
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>

<br><br>

<label class="fd-form-label" for="step-7f">Error Step Input</label><br />
<div class="fd-step-input is-error fd-step-input--full-width">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-7f', 'down');"
            tabindex="-1" type="button">
                <i class="sap-icon--less"></i>
        </button>
    <input class="
            fd-input
            fd-input--no-number-spinner
            fd-step-input__input
    " id="step-7f" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-7f', 'up');"
            tabindex="-1" type="button">
                <i class="sap-icon--add"></i>
        </button>
</div>

<br><br>

<label class="fd-form-label" for="step-8f">Warning Step Input</label><br />
<div class="fd-step-input is-warning fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8f', 'down');"
        tabindex="-1" type="button">
            <i class="sap-icon--less"></i>
    </button>
    <input class="
        fd-input
        fd-input--no-number-spinner
        fd-step-input__input
    " id="step-8f" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8f', 'up');"
        tabindex="-1" type="button">
            <i class="sap-icon--add"></i>
    </button>
</div>
`;const y={title:"Components/Step Input",parameters:{description:`
The step input control allows the user to change the input values in predefined increments (steps).

##Usage
**Use the step input if:**

- The user needs to adjust amounts, quantities, or other values quickly.
- The user needs to adjust values for a specific step (for example, in a shopping cart).

**Do not use the step input if:**

- The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use **Input Field** instead.
- You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use **Input Field** instead.
- You want the user to enter dates and times. In this case, use the **Date Picker** or **Time Picker** pattern instead.

`}},n=()=>d;n.storyName="Default";n.parameters={docs:{description:{story:`The default step input displays an input field with a plus and minus icon on opposing sides to either increase or decrease the value. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `}}};const e=()=>l;e.parameters={docs:{description:{story:`Step input can be displayed in various states such as Success, Information, Error and Warning.

**To display step input in a semantic state, add the following classes to the main elements:**

State | Class
:------ | :-----------
Success | \`is-success\`
Information | \`is-information\`
Error | \`is-error\`
Warning | \`is-warning\`

        `}}};const s=()=>o;s.parameters={docs:{description:{story:"To enable the focused state add the `.is-focus` class to the main element with class `.fd-step-input`.\n        "}}};const p=()=>i;p.parameters={docs:{description:{story:"Step input can be disabled by adding the `is-disabled` class to the main element.\n        "}}};const t=()=>u;t.storyName="Read-only";t.parameters={docs:{description:{story:"Step input can be displayed as read-only by adding the `is-readonly` class to the main element.\n        "}}};const a=()=>r;a.parameters={docs:{description:{story:"For Step Input that takes the whole width of the container element add the `fd-step-input--full-width` modifier class to the main element.\n        "}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => statesExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => focusedExampleHtml",...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => readOnlyExampleHtml",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => fullWidthExampleHtml",...a.parameters?.docs?.source}}};const S=["Primary","States","Focused","Disabled","ReadOnly","FullWidth"];export{p as Disabled,s as Focused,a as FullWidth,n as Primary,t as ReadOnly,e as States,S as __namedExportsOrder,y as default};
