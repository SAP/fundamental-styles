var c=Object.defineProperty,g=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(s,e,a)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,r=(s,e)=>{for(var a in e||(e={}))m.call(e,a)&&d(s,a,e[a]);if(l)for(var a of l(e))b.call(e,a)&&d(s,a,e[a]);return s},o=(s,e)=>g(s,p(e));const v=`<h1 class="sap-heading-1">Heading 1</h1>
<h2 class="sap-heading-2">Heading 2</h2>
<h3 class="sap-heading-3">Heading 3</h3>
<h4 class="sap-heading-4">Heading 4</h4>
<h5 class="sap-heading-5">Heading 5</h5>
<h6 class="sap-heading-6">Heading 6</h6>
`;const u={title:"Heading",parameters:{description:`
The following classes and mixin provide a way to style your headings per SAP design. 
<br><br>
<b>CSS Class: </b>
<code>.sap-heading-<i style="color: red;">number</i></code><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-heading(<i style="color: red;">level</i>)</code><br><br>
where: <br><br>
<code style="color: red;">- number</code>: is the heading level, an integer from 1 to 6 <br>
<code style="color: red;">- level</code>: is the heading level -> h1, h2, h3, h4, h5, h6`}},n=()=>v;n.storyName="Semantic Levels";n.parameters={docs:{description:{story:"There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used."}}};var i,h,t;n.parameters=o(r({},n.parameters),{docs:o(r({},(i=n.parameters)==null?void 0:i.docs),{source:r({originalSource:"() => levelsExampleHtml"},(t=(h=n.parameters)==null?void 0:h.docs)==null?void 0:t.source)})});const y=["Levels"];export{n as Levels,y as __namedExportsOrder,u as default};
