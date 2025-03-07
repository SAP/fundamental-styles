/* empty css                  *//* empty css                   *//* empty css              *//* empty css                *//* empty css                     */const a=`
<div class="fd-form-item">
    <label class="fd-form-label" for="input-1aa">Normal input:</label>
    <input class="fd-input" type="text" id="input-1aa" placeholder="Field placeholder text" aria-label="Image label">
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1bb">Success input:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverB2" aria-expanded="true" aria-haspopup="true">
            <input class="fd-input is-success" type="text" id="input-1bb" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB2">
            <div class="fd-form-message fd-form-message--success">Success message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1cc">Error input:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="true" aria-haspopup="true">
            <input class="fd-input is-error" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB3">
            <div class="fd-form-message fd-form-message--error">Error message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1dd">Warning input:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverB4" aria-expanded="true" aria-haspopup="true">
            <input class="fd-input is-warning" type="text" id="input-1dd" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB4">
            <div class="fd-form-message fd-form-message--warning">Warning message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1ee">Information input:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverB5" aria-expanded="true" aria-haspopup="true">
            <input class="fd-input is-information" type="text" id="input-1ee" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB5">
            <div class="fd-form-message fd-form-message--information">Information message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1ff">Disabled Input:</label>
    <input class="fd-input" placeholder="Disabled field" type="text" id="input-1ff" value="Non editable data" disabled>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1gg">Read Only Input:</label>
    <input class="fd-input" type="text" id="input-1gg" value="Read only data" readonly>
</div>
`,t=`<div style="">
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input (regular):</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
    <br>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1-hover">Default input (hover):</label>
        <input class="fd-input is-hover" type="text" id="input-1-hover" placeholder="Field placeholder text">
    </div>
    <br>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1-focus">Default input (focus):</label>
        <input class="fd-input is-focus" type="text" id="input-1-focus" placeholder="Field placeholder text">
    </div>
    <br>
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" aria-required="true" for="input-1d">Password:</label>
        <input class="fd-input" type="password" id="input-1d">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-01">Error Input:</label>
        <input class="fd-input is-error" type="text" id="input-01" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-01-hover">Error Input:</label>
        <input class="fd-input is-error is-hover" type="text" id="input-01-hover" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-01-focus">Error Input:</label>
        <input class="fd-input is-error is-focus" type="text" id="input-01-focus" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-02">Success Input:</label>
        <input class="fd-input is-success" type="text" id="input-02" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-02-hover">Success Input:</label>
        <input class="fd-input is-success is-hover" type="text" id="input-02-hover" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-02-focus">Success Input:</label>
        <input class="fd-input is-success is-focus" type="text" id="input-02-focus" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-03">Warning (Alert) Input:</label>
        <input class="fd-input is-warning" type="text" id="input-03" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-03-hover">Warning (Alert) Input:</label>
        <input class="fd-input is-warning is-hover" type="text" id="input-03-hover" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-03-focus">Warning (Alert) Input:</label>
        <input class="fd-input is-warning is-focus" type="text" id="input-03-focus" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-04">Information Input:</label>
        <input class="fd-input is-information" type="text" id="input-04" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-04-hover">Information Input:</label>
        <input class="fd-input is-information is-hover" type="text" id="input-04-hover" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-04-focus">Information Input:</label>
        <input class="fd-input is-information is-focus" type="text" id="input-04-focus" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input:</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-06">Read-Only Input:</label>
        <input class="fd-input" type="text" id="input-06" readonly placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" for="input-07">Default input:</label>
        <input class="fd-input" type="text" id="input-07" placeholder="Field placeholder text" aria-label="Image label">
    </div>
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label fd-form-label--required" for="input-09">Required Input:</label>
        <input class="fd-input" type="text" id="input-09" placeholder="Field placeholder text">
    </div>
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" aria-required="true" for="input-10">Password:</label>
        <input class="fd-input" type="password" id="input-10">
    </div>
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" aria-required="true" for="input-11">Input:</label>
        <input class="fd-input" type="text" id="input-11">
    </div>
</div>
`,o={title:"Components/Forms/Input",parameters:{description:`Inputs are used to collect data from the user and should always be paired with a label. When a field is required, the label should include an asterisk (*).

A text input field allows users to enter and edit text or numeric values in one line. To help users enter a valid value, it provides additional features like “auto-complete”, “suggestions”, and “value help”.

##Usage

Use the input field if:

- The user needs to enter a short, single-line text or numbers, dates or times.
- The user needs to select one or more items from a list of items, such a a multi-input.
- The user needs to find one or more items out of a list of items by searching for more than one attribute, such as a combobox.

Do not use the input field if:

- The user needs to enter long texts. In this case, use the textarea.
- The user needs to carry out a search. In this case, use the search field.
        `,tags:["f3","a11y","theme"]}},e=()=>t;e.storyName="Default";e.parameters={docs:{description:{story:"The standard input component can be displayed by using `fd-input` class"}}};const l=()=>a;l.parameters={docs:{storyDescription:`
 The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.

- **Default**: The field is editable but no validation has occurred
- **Success**: The data format entered has been validated and it's correct, such as an email address.
- **Error**: The data entered is not valid and must be corrected.
- **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
- **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
- **Read Only**: Used to display static information in the context of a form.

Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.`}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => statesExampleHtml",...l.parameters?.docs?.source}}};const p=["Primary","States"];export{e as Primary,l as States,p as __namedExportsOrder,o as default};
