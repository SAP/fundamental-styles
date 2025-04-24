/* empty css                     *//* empty css                  *//* empty css                   *//* empty css              *//* empty css                */const o=`<div class="fd-form-item" style="min-height: 100px;">
    <label class="fd-form-label" for="input-1ee">Information input:</label>
    <div class="fd-form-input-message-group fd-popover">
        <div class="fd-popover__control" aria-controls="popoverB5" aria-expanded="true" aria-haspopup="true">
            <input class="fd-input is-information" type="text" id="input-1ee"
                   placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow"
             aria-hidden="false" id="popoverB5">
            <div class="fd-form-message fd-form-message--information">Information message</div>
        </div>
    </div>
</div>
`,i=`<div class="fd-form-item" style="min-height: 100px;">
        <label class="fd-form-label" for="input-1cc">Warning input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB4" aria-expanded="true" aria-haspopup="true">
                <input class="fd-input is-warning" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB4">
                <div class="fd-form-message fd-form-message--warning" >Warning message</div>
            </div>
        </div>
    </div>
`,t=`<div class="fd-form-item" style="min-height: 100px;">
        <label class="fd-form-label" for="input-1cc">Error input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="true" aria-haspopup="true">
                <input class="fd-input is-error" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB3">
                <div class="fd-form-message fd-form-message--error" >Error message</div>
            </div>
        </div>
    </div>
`,n=`<div class="fd-form-item" style="min-height: 100px;">
        <label class="fd-form-label" for="input-1bb">Success input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB2" aria-expanded="true" aria-haspopup="true">
                <input class="fd-input is-success" type="text" id="input-1bb" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverB2">
                <div class="fd-form-message fd-form-message--success">Success message</div>
            </div>
        </div>
    </div>
`,f={title:"Components/Forms/Form Message",parameters:{description:`
A form message can appear as a result of interacting with an input field. It essentially sends semantic feedback to the user, informing them whether the data they entered was successful, erroneous, needs further attention, or more.

##Highlight indicators
Form messages can be displayed in various semantic states by adding the following classes to the \`fd-input\` element:

States | Class | Description
:----- | :---- | :----------
Default | _n/a_ | The field is editable, but no validation has occurred.
Success | \`is-success\` | The data format entered has been validated and is correct, such as an email address.
Error |\`is-error\` | The data entered is not valid and must be corrected, stopping the user from moving forward.
Warning | \`is-warning\` | The data entered is formatted correctly but there are other issues that are problematic. However, these issues will not stop the user from moving forward.
Disabled | \`is-disabled\` | Indicates the field is not editable. This state is commonly used when the field is dependent on a previous entry/selection within the form.
Read-only&nbsp;&nbsp;&nbsp; | \`is-readonly\`&nbsp;&nbsp;&nbsp; | Used to display static information in the context of a form.

        `,tags:["f3","a11y","theme"]}},e=()=>n;e.parameters={docs:{description:{story:"To display a success message below an input field, add the `--success` modifier class to the `fd-form-message` element.\n        "}}};const s=()=>t;s.parameters={docs:{description:{story:"To display an error message below an input field, add the `--error` modifier class to the `fd-form-message` element.\n        "}}};const a=()=>i;a.parameters={docs:{description:{story:"To display a warning message below an input field, add the `--warning` modifier class to the `fd-form-message` element.\n        "}}};const r=()=>o;r.parameters={docs:{description:{story:"To display an information message below an input field, add the `--information` modifier class to the `fd-form-message` element.\n        "}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => successExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => errorExampleHtml",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => warningExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => informationExampleHtml",...r.parameters?.docs?.source}}};const u=["Success","Error","Warning","Information"];export{s as Error,r as Information,e as Success,a as Warning,u as __namedExportsOrder,f as default};
