var m=Object.defineProperty,l=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var a=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,r=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&a(n,t,e[t]);if(i)for(var t of i(e))f.call(e,t)&&a(n,t,e[t]);return n},s=(n,e)=>l(n,u(e));import{e as g}from"./chunk-HLWAVYOI-3addbd4f.js";import{f as v}from"./IntroductionPage-e1480e5b.js";import"./index-f12b7f60.js";import{R as C}from"./IntroductionPageWrapper-88f5a994.js";import"./iframe-57024c08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-187a63f9.js";import"./index-8c3ac41d.js";import"./index-356e4a49.js";/* empty css                   */import"./toNumber-511431be.js";const y=`# CX - Customer Experience 

The Customer Experience (CX) package offers components built following the CX style guidelines. The CX team owns the design and the components presented in this package. 

## CX Components

Side Nav Bar: lets users navigate the entire content of a product or a section. It is usually positioned on the right or left part of the page.

## Getting Started

To install the Customer Experience Package:

\`\`\`bash
npm i @fundamental-styles/cx
\`\`\`
`,D={title:"Introduction",component:()=>null,parameters:{docs:{container:g,page:C(y),theme:v},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},o={render:()=>"<div></div>",parameters:{storyshots:{disable:!0},docsOnly:!0}};var d,c,p;o.parameters=s(r({},o.parameters),{docs:s(r({},(d=o.parameters)==null?void 0:d.docs),{source:r({originalSource:`{
  render: () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
  },
  parameters: {
    storyshots: {
      disable: true
    },
    docsOnly: true
  }
}`},(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source)})});const P=["Cx"];export{o as Cx,P as __namedExportsOrder,D as default};
