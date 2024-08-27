var g=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,s=(a,e)=>{for(var t in e||(e={}))h.call(e,t)&&l(a,t,e[t]);if(i)for(var t of i(e))y.call(e,t)&&l(a,t,e[t]);return a},r=(a,e)=>f(a,v(e));/* empty css                         *//* empty css             *//* empty css               *//* empty css                      */const S=`<div class="fddocs-button-container">
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
        <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
        <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
    </div>
</div>
`,B=`<div class="fddocs-button-container">
  <div class="fd-segmented-button fd-segmented-button--vertical" role="group" aria-label="Group label">
      <button aria-label="Survey" class="fd-button"><i class="sap-icon--survey" aria-pressed="false"></i></button>
      <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><i class="sap-icon--pie-chart"></i></button>
      <button aria-label="Pool" class="fd-button"><i class="sap-icon--pool" aria-pressed="false"></i></button>
  </div>
</div>
`,H={title:"Components/Buttons/Segmented Button",parameters:{description:'The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.\nThis button type was previously known as "button group" and is comparable to a radio button group.\nIt can be displayed by using the container with `fd-segmented-button` class with `role="group"` and the `aria-label="Group label"` attribute.\nActive button should have `aria-pressed="true"` and `fd-button--toggled` class and inactive buttons should have `aria-pressed="false"`.\n    ',tags:["f3","a11y","theme"]}},o=()=>S;o.storyName="Segmented button";o.parameters={docs:{description:{story:""}}};const n=()=>B;n.storyName="Vertical alignment";n.parameters={docs:{description:{story:`Segmented button can also be rendered vertically if \`.fd-segmented-button--vertical\` class modifier is added.
      <div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--information" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
        <b class="fd-message-strip__text">
          Vertical segmented button should only be used with icon-only buttons.
        </b>
      </div>
      `}}};var d,c,u;o.parameters=r(s({},o.parameters),{docs:r(s({},(d=o.parameters)==null?void 0:d.docs),{source:s({originalSource:"() => segmentedButtonExampleHtml"},(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source)})});var p,b,m;n.parameters=r(s({},n.parameters),{docs:r(s({},(p=n.parameters)==null?void 0:p.docs),{source:s({originalSource:"() => segmentedButtonVerticalExampleHtml"},(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source)})});const C=["SegmentedButton","Vertical"];export{o as SegmentedButton,n as Vertical,C as __namedExportsOrder,H as default};
