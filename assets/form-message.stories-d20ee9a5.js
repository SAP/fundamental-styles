/* empty css                     *//* empty css                  *//* empty css                   *//* empty css              *//* empty css                */const g=`<div class="fd-form-item" style="min-height: 100px;">
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
`,h=`<div class="fd-form-item" style="min-height: 100px;">
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
`,b=`<div class="fd-form-item" style="min-height: 100px;">
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
`,y=`<div class="fd-form-item" style="min-height: 100px;">
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
`,I={title:"Components/Forms/Form Message",parameters:{description:`
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

        `,tags:["f3","a11y","theme"]}},e=()=>y;e.parameters={docs:{description:{story:"To display a success message below an input field, add the `--success` modifier class to the `fd-form-message` element.\n        "}}};const s=()=>b;s.parameters={docs:{description:{story:"To display an error message below an input field, add the `--error` modifier class to the `fd-form-message` element.\n        "}}};const a=()=>h;a.parameters={docs:{description:{story:"To display a warning message below an input field, add the `--warning` modifier class to the `fd-form-message` element.\n        "}}};const r=()=>g;r.parameters={docs:{description:{story:"To display an information message below an input field, add the `--information` modifier class to the `fd-form-message` element.\n        "}}};var o,i,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"() => successExampleHtml",...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var n,d,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"() => errorExampleHtml",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"() => warningExampleHtml",...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var f,u,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"() => informationExampleHtml",...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const S=["Success","Error","Warning","Information"];export{s as Error,r as Information,e as Success,a as Warning,S as __namedExportsOrder,I as default};
//# sourceMappingURL=form-message.stories-d20ee9a5.js.map
