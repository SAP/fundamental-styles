var E=Object.defineProperty,H=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var c=(s,t,i)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,e=(s,t)=>{for(var i in t||(t={}))S.call(t,i)&&c(s,i,t[i]);if(n)for(var i of n(t))N.call(t,i)&&c(s,i,t[i]);return s},l=(s,t)=>H(s,b(t));/* empty css              */const W=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,_=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,q=`<h1 class="fd-title fd-title--h6">Title Level 1</h1>
<h2 class="fd-title fd-title--h5">Title Level 2</h2>
<h3 class="fd-title fd-title--h4">Title Level 3</h3>
<h4 class="fd-title fd-title--h3">Title Level 4</h4>
<h5 class="fd-title fd-title--h2">Title Level 5</h5>
<h6 class="fd-title fd-title--h1">Title Level 6</h6>
`,A=`<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
`,B={title:"Components/Title",parameters:{description:`
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,tags:["f3"]}},a=()=>A;a.storyName="Semantic Level";a.parameters={docs:{description:{story:"There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used."}}};const d=()=>q;d.parameters={docs:{description:{story:"If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance."}}};const r=()=>_;r.storyName="Text Elision";r.parameters={docs:{description:{story:"By default the Title text overflow will be elided when longer than its container."}}};const o=()=>W;o.storyName="Text Wrapping";o.parameters={docs:{description:{story:"Add the `--wrap` modifier to cause the overflow text to wrap instead."}}};var h,p,m;a.parameters=l(e({},a.parameters),{docs:l(e({},(h=a.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => levelsExampleHtml"},(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});var f,u,v;d.parameters=l(e({},d.parameters),{docs:l(e({},(f=d.parameters)==null?void 0:f.docs),{source:e({originalSource:"() => visualLevelExampleHtml"},(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source)})});var g,L,w;r.parameters=l(e({},r.parameters),{docs:l(e({},(g=r.parameters)==null?void 0:g.docs),{source:e({originalSource:"() => elisionExampleHtml"},(w=(L=r.parameters)==null?void 0:L.docs)==null?void 0:w.source)})});var T,x,y;o.parameters=l(e({},o.parameters),{docs:l(e({},(T=o.parameters)==null?void 0:T.docs),{source:e({originalSource:"() => wrappingExampleHtml"},(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source)})});const C=["Levels","VisualLevel","Elision","Wrapping"];export{r as Elision,a as Levels,d as VisualLevel,o as Wrapping,C as __namedExportsOrder,B as default};
