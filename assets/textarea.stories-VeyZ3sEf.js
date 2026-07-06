/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const t=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-3">Success message:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT51" aria-expanded="true" aria-haspopup="true">
            <textarea 
                class="fd-textarea is-success" 
                rows="2"
                id="textarea-3"
                placeholder="Enter your message here"
                aria-required="false"
                aria-labelledby="textarea-3-count"
                aria-describedby="textarea-3-message popoverT51"></textarea>
            <div class="fd-textarea__sr-only" id="textarea-3-message">Value State Success</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT51">
            <div class="fd-form-message fd-form-message--success">Your input was successfully saved.</div>
        </div>
    </div>
    <div class="fd-textarea-counter" id="textarea-3-count">150 characters remaining</div>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-4">Error message:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT52" aria-expanded="true" aria-haspopup="true">
            <textarea 
                class="fd-textarea is-error" 
                rows="2"
                id="textarea-4" 
                placeholder="Enter your message here"
                aria-required="false"
                aria-invalid="true"
                aria-describedby="textarea-4-message popoverT52"></textarea>
            <div class="fd-textarea__sr-only" id="textarea-4-message">Value State Error</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT52">
            <div class="fd-form-message fd-form-message--error">Please correct the highlighted error.</div>
        </div>
    </div>
</div>

<br><br><br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-5">Warning message:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT53" aria-expanded="true" aria-haspopup="true">
            <textarea 
                class="fd-textarea is-warning" 
                rows="2"
                id="textarea-5" 
                placeholder="Enter your message here"
                aria-required="false"
                aria-describedby="textarea-5-message popoverT53"></textarea>
            <div class="fd-textarea__sr-only" id="textarea-5-message">Value State Warning</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT53">
            <div class="fd-form-message fd-form-message--warning">Please review your input for potential issues.</div>
        </div>
    </div>
</div>

<br><br><br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-6">Information message:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT54" aria-expanded="true" aria-haspopup="true">
            <textarea 
                class="fd-textarea is-information" 
                rows="2"
                id="textarea-6" 
                placeholder="Enter your message here"
                aria-required="false"
                aria-describedby="textarea-6-message popoverT54"></textarea>
            <div class="fd-textarea__sr-only" id="textarea-6-message">Value State Information</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT54">
            <div class="fd-form-message fd-form-message--information">This is additional information about your input.</div>
        </div>
    </div>
</div>
`,o=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-7" aria-disabled="true">Message (Disabled)</label>
    <textarea
      class="fd-textarea"
      rows="2"
      id="textarea-7"
      name="message-disabled"
      aria-required="false"
      disabled
      aria-disabled="true">Disabled textarea
    </textarea>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-8">Message (Read-Only)</label>
    <textarea
      class="fd-textarea"
      rows="2"
      id="textarea-8"
      name="message-readonly"
      aria-required="false"
      readonly
      aria-readonly="true">Read Only textarea
    </textarea>
</div>

<br><br>

<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-9">Message (Read-Only & Focused)</label>
    <textarea
      class="fd-textarea is-focus"
      rows="2"
      id="textarea-9"
      name="message-readonly-focus"
      aria-required="false"
      readonly
      aria-readonly="true"
    >Focused Read Only textarea</textarea>
  </div>`,n=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-2">Message</label>
  
    <textarea
      class="fd-textarea"
      id="textarea-2"
      name="message"
      rows="4"
      maxlength="200"
      aria-required="false"
      placeholder="Write something here"
      aria-labelledby="textarea-2-counter"
    ></textarea>
  
    <div class="fd-textarea-counter" id="textarea-2-counter">
      200 characters left
    </div>
  </div>`,d=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-1">Message:</label>
    <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here" rows="4" aria-required="false"></textarea>
</div>
`,g={title:"Components/Forms/Textarea",parameters:{description:`
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,tags:[]}},e=()=>d;e.parameters={docs:{}};const a=()=>n;a.parameters={docs:{description:{story:"Textarea can have a counter to display the number of characters entered or left to type. The counter is displayed below the textarea."}}};const r=()=>o;r.parameters={docs:{story:{}}};const s=()=>t;s.parameters={docs:{description:{story:"As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none)."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => counterExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => disabledAndReadOnlyExampleHtml",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => statesExampleHtml",...s.parameters?.docs?.source}}};const y=["Primary","Counter","DisabledAndReadOnly","States"];export{a as Counter,r as DisabledAndReadOnly,e as Primary,s as States,y as __namedExportsOrder,g as default};
