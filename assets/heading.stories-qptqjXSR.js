const s=`<h1 class="sap-heading-1">Heading 1</h1>
    <h2 class="sap-heading-2">Heading 2</h2>
    <h3 class="sap-heading-3">Heading 3</h3>
    <h4 class="sap-heading-4">Heading 4</h4>
    <h5 class="sap-heading-5">Heading 5</h5>
    <h6 class="sap-heading-6">Heading 6</h6>`,a={title:"Heading",parameters:{description:`
Provides CSS classes and an SCSS mixin to style headings according to SAP design guidelines. Classes target specific heading levels, while the sap-heading mixin applies styles for <code>h1</code> through <code>h6</code>.
<br><br>
<b>CSS Class: </b>
<code>.sap-heading-<i style="color: red;">number</i></code><br>
<b>SCSS Mixin: </b>
<code>@include sap-heading(<i style="color: red;">level</i>)</code><br><br>
where:
<ul>
<li><code style="color: red;">number</code>: is the heading level, an integer from 1 to 6</li>
<li><code style="color: red;">level</code>: is the heading level -> h1, h2, h3, h4, h5, h6</li>
</ul>`}},e=()=>s;e.storyName="Semantic Levels";e.parameters={docs:{description:{story:"There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => levelsExampleHtml",...e.parameters?.docs?.source}}};const i=["Levels"];export{e as Levels,i as __namedExportsOrder,a as default};
