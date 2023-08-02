/* empty css              */const v=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,g=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,L=`<h1 class="fd-title fd-title--h6">Title Level 1</h1>
<h2 class="fd-title fd-title--h5">Title Level 2</h2>
<h3 class="fd-title fd-title--h4">Title Level 3</h3>
<h4 class="fd-title fd-title--h3">Title Level 4</h4>
<h5 class="fd-title fd-title--h2">Title Level 5</h5>
<h6 class="fd-title fd-title--h1">Title Level 6</h6>
`,w=`<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
`,x={title:"Components/Title",parameters:{description:`
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,tags:["f3"]}},e=()=>w;e.storyName="Semantic Level";e.parameters={docs:{description:{story:"There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used."}}};const s=()=>L;s.parameters={docs:{description:{story:"If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance."}}};const t=()=>g;t.storyName="Text Elision";t.parameters={docs:{description:{story:"By default the Title text overflow will be elided when longer than its container."}}};const i=()=>v;i.storyName="Text Wrapping";i.parameters={docs:{description:{story:"Add the `--wrap` modifier to cause the overflow text to wrap instead."}}};var l,a,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"() => levelsExampleHtml",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,d,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"() => visualLevelExampleHtml",...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,h,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"() => elisionExampleHtml",...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,f,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"() => wrappingExampleHtml",...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const y=["Levels","VisualLevel","Elision","Wrapping"];export{t as Elision,e as Levels,s as VisualLevel,i as Wrapping,y as __namedExportsOrder,x as default};
//# sourceMappingURL=title.stories-fcc7a9a2.js.map
