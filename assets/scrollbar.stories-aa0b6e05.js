var m=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(s,e,r)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,t=(s,e)=>{for(var r in e||(e={}))b.call(e,r)&&i(s,r,e[r]);if(l)for(var r of l(e))f.call(e,r)&&i(s,r,e[r]);return s},o=(s,e)=>p(s,h(e));/* empty css                  */const u=`
    <div style="width: 300px; height: 100px" class="fd-scrollbar">
        <div style="width: 9000px; height: 9000px;"></div>
    </div>
`,v={title:"Components/Scrollbar",parameters:{description:`
Themeable scrollbar is the scrollbar component made accordingly to the Fiori 3 design guidelines.
Using the themeable scrollbar is preferred over the browser's default in the components that support having scrollbars and made accordingly to the Fiori 3 design guidelines.
Themeable scrollbar works in Chrome, Safari, and other WebKit-based browsers and partially works in Firefox (no hover effects).
Component not working in the IE, default scrollbar is shown instead.
            `,tags:["f3","theme","development"]}},a=()=>u;a.storyName="Default";a.parameters={docs:{description:{story:"To use themeable scrollbar use `fd-scrollbar` class on scrollable element.\n"}}};var n,d,c;a.parameters=o(t({},a.parameters),{docs:o(t({},(n=a.parameters)==null?void 0:n.docs),{source:t({originalSource:"() => defaultExampleExampleHtml"},(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});const w=["DefaultExample"];export{a as DefaultExample,w as __namedExportsOrder,v as default};
