const t=`<div>
<div class="sap-overflow-auto" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,a=`<div>
<div class="sap-overflow-scroll" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,l=`<div>
<div class="sap-overflow-hidden" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,s=`<div>
<div class="sap-overflow-visible" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;const d={title:"Overflow",parameters:{description:`The overflow property controls what happens to content that is too big to fit into an area. <br>
        The following values are available:
        <ul>
            <li><b>visible</b>: default value. The overflow is not clipped and the content renders outside the element's box</li>
            <li><b>hidden</b>: the overflow is clipped to fit into the area, and the rest of the content will be hidden</li>
            <li><b>scroll</b>: the overflow is clipped, and a scrollbar is added to see the rest of the content</li>
            <li><b>auto</b>: the overflow is not clipped, scrollbars are added only when necessary</li>
        </ul>
      `}},e=()=>s;e.parameters={docs:{description:{story:"For overflow visible use: <code>.sap-overflow-visible</code>, <code>.sap-overflow-x-visible</code> or <code>.sap-overflow-y-visible</code> classes."}}};const o=()=>l;o.parameters={docs:{description:{story:"For overflow hidden use: <code>.sap-overflow-hidden</code>, <code>.sap-overflow-x-hidden</code> or <code>.sap-overflow-y-hidden</code> classes."}}};const i=()=>a;i.parameters={docs:{description:{story:"For overflow scroll use: <code>.sap-overflow-scroll</code>, <code>.sap-overflow-x-scroll</code> or <code>.sap-overflow-y-scroll</code> classes."}}};const r=()=>t;r.parameters={docs:{description:{story:"For overflow auto use: <code>.sap-overflow-auto</code>, <code>.sap-overflow-x-auto</code> or <code>.sap-overflow-y-auto</code> classes."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => overflowVisibleExampleHtml",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => overflowHiddenExampleHtml",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => overflowScrollExampleHtml",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => overflowAutoExampleHtml",...r.parameters?.docs?.source}}};const n=["OverflowVisible","OverflowHidden","OverflowScroll","OverflowAuto"];export{r as OverflowAuto,o as OverflowHidden,i as OverflowScroll,e as OverflowVisible,n as __namedExportsOrder,d as default};
