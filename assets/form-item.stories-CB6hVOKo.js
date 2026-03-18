/* empty css                  *//* empty css                   *//* empty css              */const a=`<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="required-email">Email Address:</label>
    <input 
        class="fd-input" 
        type="email" 
        id="required-email" 
        name="email"
        placeholder="e.g., user@example.com" 
        autocomplete="email" 
        required 
        aria-required="true">
</div>`,t=`<div class="fd-form-item">
    <label class="fd-form-label" for="default-input">Full Name:</label>
    <input 
        class="fd-input" 
        type="text" 
        id="default-input" 
        name="full-name"
        placeholder="e.g., Jane Doe" 
        autocomplete="name">
</div>`,n={title:"Components/Forms/Form Item",parameters:{description:"A form item is a combination of a label and an input field. The label clearly describes the expected input, and is associated with the input for accessibility.",tags:[]}},e=()=>t;e.storyName="Default";e.parameters={docs:{description:{story:`Use the default form item when the input is optional and does not require additional validation or indication.
        `}}};const r=()=>a;r.parameters={docs:{description:{story:`To mark an input as required, use the <code>fd-form-label--required</code> modifier. Also set <code>aria-required="true"</code> on the input to ensure screen readers announce the requirement.
        `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => requiredExampleHtml",...r.parameters?.docs?.source}}};const l=["Primary","Required"];export{e as Primary,r as Required,l as __namedExportsOrder,n as default};
