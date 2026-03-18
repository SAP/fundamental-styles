/* empty css                  *//* empty css                   *//* empty css              *//* empty css                *//* empty css                     */const s=`<!-- Default Input -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-default-field">Full Name</label>
    <input
      class="fd-input"
      type="text"
      id="input-default-field"
      placeholder="e.g., Jane Doe"
      autocomplete="off"
    >
  </div>
  
  <br><br>
  
  <!-- Success Input with Message -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="input-success-field">Email Address</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="success-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-success"
          type="email"
          id="input-success-field"
          placeholder="e.g., user@example.com"
          autocomplete="off"
          aria-describedby="success-message-input success-message"
        >
        <div class="fd-input__sr-only" id="success-message-input">Value State Success</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="success-message">
        <div class="fd-form-message fd-form-message--success">Email address looks good.</div>
      </div>
    </div>
  </div>
  
  <br><br><br><br>
  
  <!-- Error Input with Message -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="input-error-field">Username</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="error-message-state" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-error"
          type="text"
          id="input-error-field"
          placeholder="e.g., johndoe123"
          autocomplete="off"
          aria-describedby="error-message-input error-message-state"
          aria-invalid="true"
        >
        <div class="fd-input__sr-only" id="error-message-input">Value State Error</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="error-message-state">
        <div class="fd-form-message fd-form-message--error">Username must be at least 6 characters.</div>
      </div>
    </div>
  </div>

  
  <br><br><br><br>
  
  <!-- Warning Input with Message -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-field">Security Answer</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="warn-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-warning"
          type="text"
          id="input-warning-field"
          placeholder="e.g., Your first pet's name"
          autocomplete="off"
          aria-describedby="warn-message-input warn-message"
        >
        <div class="fd-input__sr-only" id="warn-message-input">Value State Warning</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="warn-message">
        <div class="fd-form-message fd-form-message--warning">Make sure this is easy for you to remember.</div>
      </div>
    </div>
  </div>
  <br><br><br><br>
  
  <!-- Information Input with Message -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="input-info-field">Additional Notes</label>
    <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="info-message" aria-expanded="true" aria-haspopup="true">
        <input
          class="fd-input is-information"
          type="text"
          id="input-info-field"
          placeholder="Optional"
          autocomplete="off"
          aria-describedby="info-message-input info-message"
        >
        <div class="fd-input__sr-only" id="info-message-input">Value State Information</div>
      </div>
      <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="info-message">
        <div class="fd-form-message fd-form-message--information">You can leave this blank if not applicable.</div>
      </div>
    </div>
  </div>
  
  <br><br><br><br>
  
  <!-- Disabled Input -->
  <div class="fd-form-item">
    <label class="fd-form-label fd-form-label--disabled" for="input-disabled-field" aria-disabled="true">Organization</label>
    <input
      class="fd-input"
      type="text"
      id="input-disabled-field"
      value="SAP"
      placeholder="Organization"
      autocomplete="off"
      disabled
    >
  </div>
  
  <br><br>
  
  <!-- Read-Only Input -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="input-readonly-field">Country</label>
    <input
      class="fd-input"
      type="text"
      id="input-readonly-field"
      value="Canada"
      placeholder="Country"
      autocomplete="off"
      readonly
    >
  </div>
  `,a=`<div class="fd-form-item">
    <label class="fd-form-label" for="input-default">Full Name</label>
    <input class="fd-input" type="text" id="input-default" placeholder="e.g., Jane Doe" autocomplete="off">
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-hover">Full Name (Hover State)</label>
    <input class="fd-input is-hover" type="text" id="input-hover" placeholder="e.g., Jane Doe" autocomplete="off">
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-focus">Full Name (Focus State)</label>
    <input class="fd-input is-focus" type="text" id="input-focus" placeholder="e.g., Jane Doe" autocomplete="off">
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="input-required">Email Address</label>
    <input class="fd-input" type="email" id="input-required" placeholder="e.g., user@example.com" autocomplete="off" required aria-required="true">
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-password">Password</label>
    <input class="fd-input" type="password" id="input-password" autocomplete="off" required aria-required="true">
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-error">Username (Error)</label>
    <input class="fd-input is-error" type="text" id="input-error" placeholder="Invalid username" autocomplete="off" aria-invalid="true" aria-describedby="input-error-message">
    <div class="fd-input__sr-only" id="input-error-message">You have entered invalid username.</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-error-hover">Username (Error + Hover)</label>
    <input class="fd-input is-error is-hover" type="text" id="input-error-hover" placeholder="Invalid username" autocomplete="off" aria-invalid="true" aria-describedby="input-error-hover-message">
    <div class="fd-input__sr-only" id="input-error-hover-message">You have entered invalid username.</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-error-focus">Username (Error + Focus)</label>
    <input class="fd-input is-error is-focus" type="text" id="input-error-focus" placeholder="Invalid username" autocomplete="off" aria-invalid="true" aria-describedby="input-error-focus-message">
    <div class="fd-input__sr-only" id="input-error-focus-message">You have entered invalid username.</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-success">Phone Number (Success)</label>
    <input class="fd-input is-success" type="tel" id="input-success" placeholder="e.g., +1 555 123 4567" autocomplete="off" aria-describedby="input-success-message">
    <div class="fd-input__sr-only" id="input-success-message">Entry successfully validated</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-success-hover">Phone Number (Success + Hover)</label>
    <input class="fd-input is-success is-hover" type="tel" id="input-success-hover" placeholder="e.g., +1 555 123 4567" autocomplete="off" aria-describedby="input-success-hover-message">
    <div class="fd-input__sr-only" id="input-success-hover-message">Entry successfully validated</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-success-focus">Phone Number (Success + Focus)</label>
    <input class="fd-input is-success is-focus" type="tel" id="input-success-focus" placeholder="e.g., +1 555 123 4567" autocomplete="off" aria-describedby="input-success-focus-message">
    <div class="fd-input__sr-only" id="input-success-focus-message">Entry successfully validated</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning">Security Answer (Warning)</label>
    <input class="fd-input is-warning" type="text" id="input-warning" placeholder="e.g., Your first pet's name" autocomplete="off" aria-describedby="input-warning-message">
    <div class="fd-input__sr-only" id="input-warning-message">Warning message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-hover">Security Answer (Warning + Hover)</label>
    <input class="fd-input is-warning is-hover" type="text" id="input-warning-hover" placeholder="e.g., Your first pet's name" autocomplete="off" aria-describedby="input-warning-hover-message">
    <div class="fd-input__sr-only" id="input-warning-hover-message">Warning message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-focus">Security Answer (Warning + Focus)</label>
    <input class="fd-input is-warning is-focus" type="text" id="input-warning-focus" placeholder="e.g., Your first pet's name" autocomplete="off" aria-describedby="input-warning-focus-message">
    <div class="fd-input__sr-only" id="input-warning-focus-message">Warning message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-info">Notes (Info)</label>
    <input class="fd-input is-information" type="text" id="input-info" placeholder="e.g., Optional comments" autocomplete="off" aria-describedby="input-info-message">
    <div class="fd-input__sr-only" id="input-info-message">Informative message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-info-hover">Notes (Info + Hover)</label>
    <input class="fd-input is-information is-hover" type="text" id="input-info-hover" placeholder="e.g., Optional comments" autocomplete="off" aria-describedby="input-info-hover-message">
    <div class="fd-input__sr-only" id="input-info-hover-message">Informative message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-info-focus">Notes (Info + Focus)</label>
    <input class="fd-input is-information is-focus" type="text" id="input-info-focus" placeholder="e.g., Optional comments" autocomplete="off" aria-describedby="input-info-focus-message">
    <div class="fd-input__sr-only" id="input-info-focus-message">Informative message</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--disabled" for="input-disabled" aria-disabled="true">Organization</label>
    <input class="fd-input" type="text" id="input-disabled" value="SAP" disabled>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-readonly">Country (Read-Only)</label>
    <input class="fd-input" type="text" id="input-readonly" value="Canada" readonly>
</div>

<br><br>
  
<div class="fd-form-item fd-form-item--horizontal">
    <label class="fd-form-label" for="input-horizontal">Department</label>
    <input class="fd-input" type="text" id="input-horizontal" placeholder="e.g., Marketing">
</div>

<br><br>

<div class="fd-form-item fd-form-item--horizontal">
    <label class="fd-form-label fd-form-label--required" for="input-horizontal-required">Employee ID</label>
    <input class="fd-input" type="text" id="input-horizontal-required" placeholder="e.g., E12345" required aria-required="true">
</div>
  `,d={title:"Components/Forms/Input",parameters:{description:`Inputs are used to collect data from the user and should always be paired with a label. When a field is required, the label should include an asterisk (*).

A text input field allows users to enter and edit text or numeric values in one line. To help users enter a valid value, it provides additional features like “auto-complete”, “suggestions”, and “value help”.

##Usage

Use the input field if:

- The user needs to enter a short, single-line text or numbers, dates or times.
- The user needs to select one or more items from a list of items, such a a multi-input.
- The user needs to find one or more items out of a list of items by searching for more than one attribute, such as a combobox.

Do not use the input field if:

- The user needs to enter long texts. In this case, use the textarea.
- The user needs to carry out a search. In this case, use the search field.
        `,tags:[]}},e=()=>a;e.storyName="Default";e.parameters={docs:{description:{story:"The standard input component can be displayed by using `fd-input` class"}}};const n=()=>s;n.parameters={docs:{storyDescription:`
 The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.

- **Default**: The field is editable but no validation has occurred
- **Success**: The data format entered has been validated and it's correct, such as an email address.
- **Error**: The data entered is not valid and must be corrected.
- **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
- **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
- **Read Only**: Used to display static information in the context of a form.

Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.`}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => statesExampleHtml",...n.parameters?.docs?.source}}};const u=["Primary","States"];export{e as Primary,n as States,u as __namedExportsOrder,d as default};
