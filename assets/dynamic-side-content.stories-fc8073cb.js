var H=Object.defineProperty,T=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var m=(n,i,d)=>i in n?H(n,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[i]=d,s=(n,i)=>{for(var d in i||(i={}))z.call(i,d)&&m(n,d,i[d]);if(l)for(var d of l(i))R.call(i,d)&&m(n,d,i[d]);return n},e=(n,i)=>T(n,L(i));const P=`
    <h4>On extra large screens, the main content area occupies 75% of the width.</h4>
    <div class="fd-dynamic-side fd-dynamic-side--xl">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
    <h4>On medium-sized screens, the main content area occupies 66.66% of the width.</h4>
    <div class="fd-dynamic-side fd-dynamic-side--md" style="max-width: 920px">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
    <h4>On small screens, the main content area occupies 100% of the width and the side content is hidden.</h4>
    <div class="fd-dynamic-side fd-dynamic-side--sm" style="max-width: 420px">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
`,B=`    <div class="fd-dynamic-side fd-dynamic-side--equal-split">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`,N=`    <div class="fd-dynamic-side fd-dynamic-side--below">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`,O=`    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
    </div>
`,k=`    <div class="fd-dynamic-side">
        <div class="fd-dynamic-side__side">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
        </div>
        <div class="fd-dynamic-side__main">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
        </div>
    </div>
`;const D={title:"Layouts/Dynamic Side Content",parameters:{description:`
Dynamic side content is a layout control that displays supplemental content in a separate area to support the users' understanding of the main content displayed.

**The dynamic side content consists of two elements:**

*  \`.fd-dynamic-side__side\`: Side content section.
*  \`.fd-dynamic-side__main\`: Main content section.


## Usage
### Use dynamic side content if:
*  You want to display information that:
  *  Will enrich the main content and will help the user better perform his/her tasks;
  *  Only makes sense when displayed next to the main container (side-by-side);
  *  Influences the main content (for example, a filter for list; settings for chart, details for map).
*  Users should have access to all of the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.


## Sizes
The screen width ratio between the side and main content area will vary depending on the available screen space or window size. The default style displays side content on the left or right side of the main content area but if the space is limited, it can display at the bottom.

| Screen size &nbsp;&nbsp; | Main content width ratio &nbsp;&nbsp; | Side content width ratio &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- | :--- | :--- |
| >= 1400px &nbsp;&nbsp; | 75% | 25% | \`fd-dynamic-side--xl\` |
| < 1400px & > 720px &nbsp;&nbsp; | 66.66% | 33.33% | \`fd-dynamic-side--md\` |
| < 720px &nbsp;&nbsp; | 100% | Disappears | \`fd-dynamic-side--sm\` |
| Equal split mode (> 720px) &nbsp;&nbsp; | 50% | 50% |

Note: For all screens < 720px, the side content disappears entirely.
`,tags:["f3","development"]}},a=()=>k;a.storyName="Left";a.parameters={docs:{description:{story:"To display side content from the left, put `fd-dynamic-side__side` as the first child element of `fd-dynamic-side`."}}};const t=()=>O;t.storyName="Right";t.parameters={docs:{description:{story:"To display side content from the right, put `fd-dynamic-side__side` as the second child element of `fd-dynamic-side`."}}};const o=()=>N;o.storyName="Below";o.parameters={docs:{description:{story:"To display side content below the main content area, keep `fd-dynamic-side__side` as the last child element and add the `fd-dynamic-side--below` modifier class."}}};const c=()=>B;c.storyName="Equal split";c.parameters={docs:{description:{story:"The equal split mode provides users with a 50:50 view of the main content and side content, which enables users to show more data i.e. for comparison purposes. To enable equal split mode, add the `fd-dynamic-side--equal-split` modifier class to the container."}}};const r=()=>P;r.parameters={docs:{description:{story:`
To display the dynamic side content for specific screen sizes, use the respective modifier classes:

| Size &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- |
| Small &nbsp;&nbsp; | \`fd-dynamic-side--sm\` |
| Medium & Large &nbsp;&nbsp; | \`fd-dynamic-side--md\` |
| Extra Large &nbsp;&nbsp; | \`fd-dynamic-side--xl\` |
`}}};var p,y,f;a.parameters=e(s({},a.parameters),{docs:e(s({},(p=a.parameters)==null?void 0:p.docs),{source:s({originalSource:"() => positionLeftExampleHtml"},(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source)})});var h,v,u;t.parameters=e(s({},t.parameters),{docs:e(s({},(h=t.parameters)==null?void 0:h.docs),{source:s({originalSource:"() => positionRightExampleHtml"},(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source)})});var g,b,_;o.parameters=e(s({},o.parameters),{docs:e(s({},(g=o.parameters)==null?void 0:g.docs),{source:s({originalSource:"() => positionBottomExampleHtml"},(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source)})});var x,w,S;c.parameters=e(s({},c.parameters),{docs:e(s({},(x=c.parameters)==null?void 0:x.docs),{source:s({originalSource:"() => equalSplitExampleHtml"},(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source)})});var E,M,q;r.parameters=e(s({},r.parameters),{docs:e(s({},(E=r.parameters)==null?void 0:E.docs),{source:s({originalSource:"() => responsivenessExampleHtml"},(q=(M=r.parameters)==null?void 0:M.docs)==null?void 0:q.source)})});const U=["PositionLeft","PositionRight","PositionBottom","EqualSplit","Responsiveness"];export{c as EqualSplit,o as PositionBottom,a as PositionLeft,t as PositionRight,r as Responsiveness,U as __namedExportsOrder,D as default};
