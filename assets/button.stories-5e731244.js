/* empty css                         *//* empty css             *//* empty css               *//* empty css                      */const l=`<div class="fddocs-button-container">
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
        <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
        <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
    </div>
</div>
`,d=`<div class="fddocs-button-container">
  <div class="fd-segmented-button fd-segmented-button--vertical" role="group" aria-label="Group label">
      <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
      <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
      <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
  </div>
</div>
`,m={title:"Components/Buttons/Segmented Button",parameters:{description:'The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.\nThis button type was previously known as "button group" and is comparable to a radio button group.\nIt can be displayed by using the container with `fd-segmented-button` class with `role="group"` and the `aria-label="Group label"` attribute.\nActive button should have `aria-pressed="true"` and `fd-button--toggled` class and inactive buttons should have `aria-pressed="false"`.\n    ',tags:["f3","a11y","theme"]}},e=()=>l;e.storyName="Segmented button";e.parameters={docs:{description:{story:""}}};const t=()=>d;t.storyName="Vertical alignment";t.parameters={docs:{description:{story:`Segmented button can also be rendered vertically if \`.fd-segmented-button--vertical\` class modifier is added.
      <div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--information" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
        <b class="fd-message-strip__text">
          Vertical segmented button should only be used with icon-only buttons.
        </b>
      </div>
      `}}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"() => segmentedButtonExampleHtml",...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"() => segmentedButtonVerticalExampleHtml",...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const g=["SegmentedButton","Vertical"];export{e as SegmentedButton,t as Vertical,g as __namedExportsOrder,m as default};
//# sourceMappingURL=button.stories-5e731244.js.map
