/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                */const u=`
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
`,b=`<div class="fd-form-item">
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
`,h=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-2">Counter text area:</label>
    <textarea class="fd-textarea" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
`,g=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-1">Text area:</label>
    <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here"></textarea>
</div>
`,O={title:"Components/Forms/Textarea",parameters:{description:`
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,tags:["f3","a11y","theme"]}},a=()=>g;a.parameters={docs:{iframeHeight:250}};const r=()=>h;r.parameters={docs:{story:{iframeHeight:150},description:{story:"Textarea can have a counter to display the number of characters entered or left to type. The counter is displayed below the textarea."}}};const t=()=>b;t.parameters={docs:{story:{iframeHeight:200}}};const e=()=>u;e.storyName="Responsiveness";e.parameters={docs:{story:{iframeHeight:500},description:{story:"As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none)."}}};var s,o,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => primaryExampleHtml",...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"() => counterExampleHtml",...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"() => disabledAndReadOnlyExampleHtml",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,v,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"() => statesExampleHtml",...(x=(v=e.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const R=["Primary","Counter","DisabledAndReadOnly","States"];export{r as Counter,t as DisabledAndReadOnly,a as Primary,e as States,R as __namedExportsOrder,O as default};
//# sourceMappingURL=textarea.stories-742b83bc.js.map
