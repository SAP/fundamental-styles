const w=`<div>
<div class="sap-overflow-auto" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,b=`<div>
<div class="sap-overflow-scroll" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,h=`<div>
<div class="sap-overflow-hidden" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`,g=`<div>
<div class="sap-overflow-visible" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;const x={title:"Overflow",parameters:{description:`The overflow property controls what happens to content that is too big to fit into an area. <br>
        The following values are available:
        <ul>
            <li><b>visible</b>: default value. The overflow is not clipped and the content renders outside the element's box</li>
            <li><b>hidden</b>: the overflow is clipped to fit into the area, and the rest of the content will be hidden</li>
            <li><b>scroll</b>: the overflow is clipped, and a scrollbar is added to see the rest of the content</li>
            <li><b>auto</b>: the overflow is not clipped, scrollbars are added only when necessary</li>
        </ul>
      `}},e=()=>g;e.parameters={docs:{description:{story:"For overflow visible use: <code>.sap-overflow-visible</code>, <code>.sap-overflow-x-visible</code> or <code>.sap-overflow-y-visible</code> classes."}}};const o=()=>h;o.parameters={docs:{description:{story:"For overflow hidden use: <code>.sap-overflow-hidden</code>, <code>.sap-overflow-x-hidden</code> or <code>.sap-overflow-y-hidden</code> classes."}}};const i=()=>b;i.parameters={docs:{description:{story:"For overflow scroll use: <code>.sap-overflow-scroll</code>, <code>.sap-overflow-x-scroll</code> or <code>.sap-overflow-y-scroll</code> classes."}}};const r=()=>w;r.parameters={docs:{description:{story:"For overflow auto use: <code>.sap-overflow-auto</code>, <code>.sap-overflow-x-auto</code> or <code>.sap-overflow-y-auto</code> classes."}}};var t,a,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => overflowVisibleExampleHtml",...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,d,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"() => overflowHiddenExampleHtml",...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,u,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => overflowScrollExampleHtml",...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,v,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"() => overflowAutoExampleHtml",...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const E=["OverflowVisible","OverflowHidden","OverflowScroll","OverflowAuto"];export{r as OverflowAuto,o as OverflowHidden,i as OverflowScroll,e as OverflowVisible,E as __namedExportsOrder,x as default};
