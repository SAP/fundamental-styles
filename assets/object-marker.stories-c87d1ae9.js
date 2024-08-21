var g=Object.defineProperty,O=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var l=(s,a,r)=>a in s?g(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,e=(s,a)=>{for(var r in a||(a={}))T.call(a,r)&&l(s,r,a[r]);if(d)for(var r of d(a))E.call(a,r)&&l(s,r,a[r]);return s},t=(s,a)=>O(s,M(a));/* empty css                      *//* empty css             */const I=`
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
    <span class="fd-object-marker__text">Locked</span>
</a>
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
    <span class="fd-object-marker__text">Unsaved Changes</span>
</a>
`,H=`
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
`,q=`
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Locked</span>
</div>
`,w=`
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
`,S={title:"Components/Object Marker",parameters:{description:`Object marker indicates the technical status of an object. It display the technical state like (draft,
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle.
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `,tags:["f3","a11y","theme"]}},c=()=>w;c.parameters={docs:{storyDescription:"Object Marker can display the semantic status of an object: (class: `fd-object-marker`)"}};const o=()=>q;o.parameters={docs:{storyDescription:"Object Marker Text only"}};const n=()=>H;n.parameters={docs:{description:{story:"The Marker supports the Icon and Text mode of displaying the Object."}}};const i=()=>I;i.parameters={docs:{description:{story:"If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class."}}};var m,p,f;c.parameters=t(e({},c.parameters),{docs:t(e({},(m=c.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => iconOnlyExampleHtml"},(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source)})});var b,k,j;o.parameters=t(e({},o.parameters),{docs:t(e({},(b=o.parameters)==null?void 0:b.docs),{source:e({originalSource:"() => markerTextExampleHtml"},(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source)})});var _,v,u;n.parameters=t(e({},n.parameters),{docs:t(e({},(_=n.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => iconAndTextExampleHtml"},(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source)})});var h,x,y;i.parameters=t(e({},i.parameters),{docs:t(e({},(h=i.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => clickableObjectMarkerExampleHtml"},(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source)})});const L=["IconOnly","MarkerText","IconAndText","ClickableObjectMarker"];export{i as ClickableObjectMarker,n as IconAndText,c as IconOnly,o as MarkerText,L as __namedExportsOrder,S as default};
