/* empty css                     *//* empty css                  *//* empty css                   *//* empty css              *//* empty css                */const o=`<div class="fd-form-item">
    <label class="fd-form-label" for="input-info-field">Additional Notes</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="info-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-information"
          type="text"
          id="input-info-field"
          placeholder="Optional"
          autocomplete="off"
          aria-describedby="input-info-message info-message"
        >
        <div class="fd-input__sr-only" id="input-info-message">Value State Information</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="info-message">
        <div class="fd-form-message fd-form-message--information">You can leave this blank if not applicable.</div>
      </div>
    </div>
</div>`,n=`<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-field">Security Answer</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="warn-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-warning"
          type="text"
          id="input-warning-field"
          placeholder="e.g., Your first pet's name"
          autocomplete="off"
          aria-describedby="input-warn-message warn-message"
        >
        <div class="fd-input__sr-only" id="input-warn-message">Value State Warning</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="warn-message">
        <div class="fd-form-message fd-form-message--warning">Make sure this is easy for you to remember.</div>
      </div>
    </div>
</div>`,i=`<div class="fd-form-item">
    <label class="fd-form-label" for="input-error-field">Username</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="error-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-error"
          type="text"
          id="input-error-field"
          placeholder="e.g., johndoe123"
          autocomplete="off"
          aria-describedby="input-error-message error-message"
          aria-invalid="true"
        >
        <div class="fd-input__sr-only" id="input-error-message">Value State Error</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="error-message">
        <div class="fd-form-message fd-form-message--error">Username must be at least 6 characters.</div>
      </div>
    </div>
 </div>
`,t=`<div class="fd-form-item">
    <label class="fd-form-label" for="input-success-field">Email Address</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="success-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-success"
          type="email"
          id="input-success-field"
          placeholder="e.g., user@example.com"
          autocomplete="off"
          aria-describedby="input-success-message success-message"
        >
        <div class="fd-input__sr-only" id="input-success-message">Value State Success</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="success-message">
        <div class="fd-form-message fd-form-message--success">Email address looks good.</div>
      </div>
    </div>
</div>`,f={title:"Components/Forms/Form Message",parameters:{description:`The input control offers four value states, for which can be shown an additional value state text message when the focus is on the input field.


##Modifier classes.

Apply the following modifier classes to the \`fd-input\` element to reflect various input states:

States | Class 
:----- | :---- 
Success | \`is-success\` 
Error |\`is-error\` 
Warning | \`is-warning\` 
Information |  \`is-information\`

<br>
Apply the following modifier classes to the \`fd-form-message \` element to indicate different message types:

States | Class 
:----- | :---- 
Success | \`fd-form-message--success\`
Error | \`fd-form-message--error\`
Warning |  \`fd-form-message--warning\`
Information |  \`fd-form-message--information\`

        `,tags:[]}},e=()=>t,s=()=>i,r=()=>n,a=()=>o;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => successExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => errorExampleHtml",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => warningExampleHtml",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => informationExampleHtml",...a.parameters?.docs?.source}}};const u=["Success","Error","Warning","Information"];export{s as Error,a as Information,e as Success,r as Warning,u as __namedExportsOrder,f as default};
