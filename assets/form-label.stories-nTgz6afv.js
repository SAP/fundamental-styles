/* empty css                  *//* empty css                   *//* empty css              */const l=`<div class="fd-form-item">
    <label class="fd-form-label" for="disabled-input" aria-disabled="true">Organization</label>
    <input 
        class="fd-input" 
        type="text" 
        id="disabled-input" 
        name="organization"
        value="SAP"
        disabled>
</div>`,s=`<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--colon" for="input-with-colon">Job Title</label>
    <input 
        class="fd-input" 
        type="text" 
        id="input-with-colon" 
        name="job-title"
        placeholder="e.g., Software Engineer">
</div>`,t=`<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="required-email">Email Address</label>
    <input 
        class="fd-input" 
        type="email" 
        id="required-email" 
        name="email"
        placeholder="e.g., user@example.com" 
        autocomplete="email" 
        required 
        aria-required="true">
</div>`,d=`<div class="fd-form-item">
    <label class="fd-form-label" for="default-input">Full Name</label>
    <input 
        class="fd-input" 
        type="text" 
        id="default-input" 
        name="full-name"
        placeholder="e.g., Jane Doe" 
        autocomplete="name">
</div>`,m={title:"Components/Forms/Form Label",parameters:{description:`
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,tags:[]}},e=()=>d;e.storyName="Default";e.parameters={docs:{description:{story:"Use the default form label when the field is optional and does not require special styling or behavior."}}};const a=()=>t;a.parameters={docs:{description:{story:'To visually and programmatically indicate a required field, add the <code>fd-form-label--required</code> modifier to the label and use the <code>required</code> and <code>aria-required="true"</code> attributes on the input.'}}};const r=()=>s;r.parameters={docs:{description:{story:"To display a label with a colon, add the <code>fd-form-label--colon</code> modifier."}}};const o=()=>l;o.parameters={docs:{description:{story:`There are 3 ways to visually show that a label is disabled:
1. Add <code>aria-disabled="true"</code>. This communicates to assistive technologies (like screen readers) that the label is representing a disabled UI element.
2. Add <code>is-disabled</code> class to <code>fd-form-label</code> class.
3. Add <code>fd-form-label--disabled</code> modifier class to <code>fd-form-label</code> class.
        `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => requiredExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => colonExampleHtml",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...o.parameters?.docs?.source}}};const p=["Primary","Required","Colon","Disabled"];export{r as Colon,o as Disabled,e as Primary,a as Required,p as __namedExportsOrder,m as default};
