/* empty css                      *//* empty css             */const t=`
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
    <span class="fd-object-marker__text">Locked</span>
</a>
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
    <span class="fd-object-marker__text">Unsaved Changes</span>
</a>
`,c=`
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--request" role="presentation"></i>
    <span class="fd-object-marker__text">Request</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--favorite" role="presentation"></i>
    <span class="fd-object-marker__text">Favourite</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--flag" role="presentation"></i>
    <span class="fd-object-marker__text">Flag</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
    <span class="fd-object-marker__text">Locked</span>
</div>
`,o=`
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Locked</span>
</div>
`,n=`
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--flag" aria-label="icon for flag"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--user-edit" aria-label="icon for user edit"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--private" aria-label="icon for private"></i>
</div>
`,l={title:"Components/Object Marker",parameters:{description:`Object marker indicates the technical status of an object. It display the technical state like (draft,
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle.
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `,tags:["f3","a11y","theme"]}},e=()=>n;e.parameters={docs:{storyDescription:"Object Marker can display the semantic status of an object: (class: `fd-object-marker`)"}};const a=()=>o;a.parameters={docs:{storyDescription:"Object Marker Text only"}};const r=()=>c;r.parameters={docs:{description:{story:"The Marker supports the Icon and Text mode of displaying the Object."}}};const s=()=>t;s.parameters={docs:{description:{story:"If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => iconOnlyExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => markerTextExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => iconAndTextExampleHtml",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => clickableObjectMarkerExampleHtml",...s.parameters?.docs?.source}}};const m=["IconOnly","MarkerText","IconAndText","ClickableObjectMarker"];export{s as ClickableObjectMarker,r as IconAndText,e as IconOnly,a as MarkerText,m as __namedExportsOrder,l as default};
