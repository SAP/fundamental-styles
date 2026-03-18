/* empty css                      *//* empty css             */const s=`<span class="fd-object-marker__sr-only" id="fd-object-marker-status" aria-hidden="true">Status(active)</span>

<a href="#" tabindex="0" aria-labelledby="fd-object-marker-status fd-object-marker-text-1" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text" id="fd-object-marker-text-1">Locked</span>
</a>
<a href="#" tabindex="0" aria-labelledby="fd-object-marker-status fd-object-marker-text-2" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text" id="fd-object-marker-text-2">Unsaved Changes</span>
</a>
`,n=`<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--request" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Request</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--favorite" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Favourite</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--flag" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Flag</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Locked</span>
</div>
`,c=`<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" aria-labelledby="status">
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <span class="fd-object-marker__text">Locked</span>
</div>
`,i=`<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-1">
    <i class="fd-object-marker__icon sap-icon--request" title="Request" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-1" aria-hidden="true">Request</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-2">
    <i class="fd-object-marker__icon sap-icon--favorite" title="Favourite" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-2" aria-hidden="true">Favourite</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-3">
    <i class="fd-object-marker__icon sap-icon--flag" title="Flag" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-3" aria-hidden="true">Flag</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-4">
    <i class="fd-object-marker__icon sap-icon--user-edit" title="Edit" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-4" aria-hidden="true">Edit</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-5">
    <i class="fd-object-marker__icon sap-icon--private" title="Private" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-5" aria-hidden="true">Private</span>
</div>
`,l={title:"Components/Object Marker",parameters:{description:`Object marker indicates the technical status of an object. It display the technical state like (draft,
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle.
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `,tags:["f3","a11y","theme"]}},e=()=>i;e.parameters={docs:{storyDescription:"Object Marker can display the semantic status of an object: (class: `fd-object-marker`)"}};const a=()=>c;a.parameters={docs:{storyDescription:"Object Marker Text only"}};const r=()=>n;r.parameters={docs:{description:{story:"The Marker supports the Icon and Text mode of displaying the Object."}}};const t=()=>s;t.parameters={docs:{description:{story:"If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => iconOnlyExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => markerTextExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => iconAndTextExampleHtml",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => clickableObjectMarkerExampleHtml",...t.parameters?.docs?.source}}};const b=["IconOnly","MarkerText","IconAndText","ClickableObjectMarker"];export{t as ClickableObjectMarker,r as IconAndText,e as IconOnly,a as MarkerText,b as __namedExportsOrder,l as default};
