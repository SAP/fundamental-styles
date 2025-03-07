/* empty css                         *//* empty css             *//* empty css               *//* empty css                      */const a=`<div class="fddocs-button-container">
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
        <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
        <button aria-label="Basket" class="fd-button"><i class="sap-icon--basket" aria-pressed="false"></i></button>
        <button aria-label="Joule" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--da"></i></button>
        <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
    </div>
</div>
`,s=`<div class="fddocs-button-container">
  <div class="fd-segmented-button fd-segmented-button--vertical" role="group" aria-label="Group label">
      <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
      <button aria-label="Database" class="fd-button"><i class="sap-icon--database" aria-pressed="false"></i></button>
      <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
      <button aria-label="Basket" class="fd-button"><i class="sap-icon--basket" aria-pressed="false"></i></button>
      <button aria-label="Calendar" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--calendar"></i></button>
      <button aria-label="Favorite" class="fd-button"><i class="sap-icon--favorite" aria-pressed="false"></i></button>
      <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
  </div>
</div>
`,l={title:"Components/Buttons/Segmented Button",parameters:{description:'The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.\nThis button type was previously known as "button group" and is comparable to a radio button group.\nIt can be displayed by using the container with `fd-segmented-button` class with `role="group"` and the `aria-label="Group label"` attribute.\nActive button should have `aria-pressed="true"` and `fd-button--toggled` class and inactive buttons should have `aria-pressed="false"` \n\n**New Feature:** Multiple items can be selected at a time.\n    ',tags:["f3","a11y","theme"]}},t=()=>a;t.storyName="Segmented button";t.parameters={docs:{description:{story:""}}};const e=()=>s;e.storyName="Vertical alignment";e.parameters={docs:{description:{story:`Segmented button can also be rendered vertically if \`.fd-segmented-button--vertical\` class modifier is added.
      <div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--information" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
        <b class="fd-message-strip__text">
          Vertical segmented button should only be used with icon-only buttons.
        </b>
      </div>
      `}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => segmentedButtonExampleHtml",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => segmentedButtonVerticalExampleHtml",...e.parameters?.docs?.source}}};const d=["SegmentedButton","Vertical"];export{t as SegmentedButton,e as Vertical,d as __namedExportsOrder,l as default};
