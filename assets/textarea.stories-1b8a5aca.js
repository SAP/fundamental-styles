/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const s=`
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-3">Success text area:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT51" aria-expanded="true" aria-haspopup="true">
            <textarea class="fd-textarea is-success" id="textarea-3" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT51">
            <div class="fd-form-message fd-form-message--success">Success message</div>
        </div>
    </div>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-4">Error text area:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT52" aria-expanded="true" aria-haspopup="true">
            <textarea class="fd-textarea is-error" id="textarea-4" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT52">
            <div class="fd-form-message fd-form-message--error">Error message</div>
        </div>
    </div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-5">Warning text area:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT53" aria-expanded="true" aria-haspopup="true">
            <textarea class="fd-textarea is-warning" id="textarea-5" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT53">
            <div class="fd-form-message fd-form-message--warning">Warning message</div>
        </div>
    </div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-6">Information text area:</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="popoverT54" aria-expanded="true" aria-haspopup="true">
            <textarea class="fd-textarea is-information" id="textarea-6" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverT54">
            <div class="fd-form-message fd-form-message--information">Information message</div>
        </div>
    </div>
</div>
`,o=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-7">Text area:</label>
    <textarea class="fd-textarea" id="textarea-7" disabled>Disabled textarea</textarea>
</div>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-8">Text area:</label>
    <textarea class="fd-textarea" id="textarea-8" readonly>Read Only textarea</textarea>
</div>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-9">Text area:</label>
    <textarea class="fd-textarea is-focus" id="textarea-9" readonly>Focussed Read Only textarea</textarea>
</div>
`,d=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-2">Counter text area:</label>
    <textarea class="fd-textarea" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
`,n=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-1">Text area:</label>
    <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here"></textarea>
</div>
`,h={title:"Components/Forms/Textarea",parameters:{description:`
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,tags:["f3","a11y","theme"]}},a=()=>n;a.parameters={docs:{}};const r=()=>d;r.parameters={docs:{description:{story:"Textarea can have a counter to display the number of characters entered or left to type. The counter is displayed below the textarea."}}};const t=()=>o;t.parameters={docs:{story:{}}};const e=()=>s;e.storyName="Responsiveness";e.parameters={docs:{description:{story:"As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none)."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => counterExampleHtml",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => disabledAndReadOnlyExampleHtml",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => statesExampleHtml",...e.parameters?.docs?.source}}};const g=["Primary","Counter","DisabledAndReadOnly","States"];export{r as Counter,t as DisabledAndReadOnly,a as Primary,e as States,g as __namedExportsOrder,h as default};
