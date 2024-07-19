var E=Object.defineProperty,H=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var l=(r,s,a)=>s in r?E(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,e=(r,s)=>{for(var a in s||(s={}))S.call(s,a)&&l(r,a,s[a]);if(p)for(var a of p(s))T.call(s,a)&&l(r,a,s[a]);return r},o=(r,s)=>H(r,I(s));/* empty css                     *//* empty css                  *//* empty css                   *//* empty css              *//* empty css                */const B=`<div class="fd-form-item" style="min-height: 100px;">
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
`,F=`<div class="fd-form-item" style="min-height: 100px;">
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
`,W=`<div class="fd-form-item" style="min-height: 100px;">
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
`,D=`<div class="fd-form-item" style="min-height: 100px;">
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
`,U={title:"Components/Forms/Form Message",parameters:{description:`
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

        `,tags:["f3","a11y","theme"]}},i=()=>D;i.parameters={docs:{description:{story:"To display a success message below an input field, add the `--success` modifier class to the `fd-form-message` element.\n        "}}};const t=()=>W;t.parameters={docs:{description:{story:"To display an error message below an input field, add the `--error` modifier class to the `fd-form-message` element.\n        "}}};const n=()=>F;n.parameters={docs:{description:{story:"To display a warning message below an input field, add the `--warning` modifier class to the `fd-form-message` element.\n        "}}};const d=()=>B;d.parameters={docs:{description:{story:"To display an information message below an input field, add the `--information` modifier class to the `fd-form-message` element.\n        "}}};var m,c,f;i.parameters=o(e({},i.parameters),{docs:o(e({},(m=i.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => successExampleHtml"},(f=(c=i.parameters)==null?void 0:c.docs)==null?void 0:f.source)})});var u,v,g;t.parameters=o(e({},t.parameters),{docs:o(e({},(u=t.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => errorExampleHtml"},(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source)})});var h,b,y;n.parameters=o(e({},n.parameters),{docs:o(e({},(h=n.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => warningExampleHtml"},(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source)})});var _,x,w;d.parameters=o(e({},d.parameters),{docs:o(e({},(_=d.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => informationExampleHtml"},(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source)})});const j=["Success","Error","Warning","Information"];export{t as Error,d as Information,i as Success,n as Warning,j as __namedExportsOrder,U as default};
