/* empty css              */const l=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,a=`<div style="width: 300px">
    <h1 class="fd-title fd-title--h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`,r=`<h1 class="fd-title fd-title--h6">Title Level 1</h1>
<h2 class="fd-title fd-title--h5">Title Level 2</h2>
<h3 class="fd-title fd-title--h4">Title Level 3</h3>
<h4 class="fd-title fd-title--h3">Title Level 4</h4>
<h5 class="fd-title fd-title--h2">Title Level 5</h5>
<h6 class="fd-title fd-title--h1">Title Level 6</h6>
`,o=`<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
`,n={title:"Components/Title",parameters:{description:`
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,tags:["f3"]}},e=()=>o;e.storyName="Semantic Level";e.parameters={docs:{description:{story:"There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used."}}};const s=()=>r;s.parameters={docs:{description:{story:"If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance."}}};const t=()=>a;t.storyName="Text Elision";t.parameters={docs:{description:{story:"By default the Title text overflow will be elided when longer than its container."}}};const i=()=>l;i.storyName="Text Wrapping";i.parameters={docs:{description:{story:"Add the `--wrap` modifier to cause the overflow text to wrap instead."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => levelsExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => visualLevelExampleHtml",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => elisionExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => wrappingExampleHtml",...i.parameters?.docs?.source}}};const c=["Levels","VisualLevel","Elision","Wrapping"];export{t as Elision,e as Levels,s as VisualLevel,i as Wrapping,c as __namedExportsOrder,n as default};
