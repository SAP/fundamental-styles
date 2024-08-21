var w=Object.defineProperty,E=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(t,a,r)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,e=(t,a)=>{for(var r in a||(a={}))S.call(a,r)&&p(t,r,a[r]);if(l)for(var r of l(a))O.call(a,r)&&p(t,r,a[r]);return t},s=(t,a)=>E(t,H(a));/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const R=`
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
`,W=`<div class="fd-form-item">
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
`,A=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-2">Counter text area:</label>
    <textarea class="fd-textarea" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
`,C=`<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-1">Text area:</label>
    <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here"></textarea>
</div>
`,B={title:"Components/Forms/Textarea",parameters:{description:`
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,tags:["f3","a11y","theme"]}},d=()=>C;d.parameters={docs:{}};const n=()=>A;n.parameters={docs:{description:{story:"Textarea can have a counter to display the number of characters entered or left to type. The counter is displayed below the textarea."}}};const i=()=>W;i.parameters={docs:{story:{}}};const o=()=>R;o.storyName="Responsiveness";o.parameters={docs:{description:{story:"As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none)."}}};var c,m,f;d.parameters=s(e({},d.parameters),{docs:s(e({},(c=d.parameters)==null?void 0:c.docs),{source:e({originalSource:"() => primaryExampleHtml"},(f=(m=d.parameters)==null?void 0:m.docs)==null?void 0:f.source)})});var v,x,u;n.parameters=s(e({},n.parameters),{docs:s(e({},(v=n.parameters)==null?void 0:v.docs),{source:e({originalSource:"() => counterExampleHtml"},(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source)})});var b,h,g;i.parameters=s(e({},i.parameters),{docs:s(e({},(b=i.parameters)==null?void 0:b.docs),{source:e({originalSource:"() => disabledAndReadOnlyExampleHtml"},(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source)})});var y,_,T;o.parameters=s(e({},o.parameters),{docs:s(e({},(y=o.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => statesExampleHtml"},(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source)})});const G=["Primary","Counter","DisabledAndReadOnly","States"];export{n as Counter,i as DisabledAndReadOnly,d as Primary,o as States,G as __namedExportsOrder,B as default};
