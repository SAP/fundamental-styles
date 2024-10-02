var c=Object.defineProperty,u=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var r=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&r(t,n,e[n]);if(i)for(var n of i(e))h.call(e,n)&&r(t,n,e[n]);return t},s=(t,e)=>u(t,S(e));import{ai as g}from"./chunk-NUUEMKO5-ca24990b.js";import{f as C}from"./IntroductionPage-11d20f6c.js";import{R as y}from"./IntroductionPageWrapper-a3e6dd1c.js";import"./iframe-f0789bb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-187a63f9.js";import"./index-1b441bc2.js";import"./index-fbe4b113.js";import"./index-356e4a49.js";/* empty css                   */import"./toNumber-456066af.js";const P=`SAP UI Common CSS Package

## What is SAP UI Common CSS?

SAP UI Common CSS Package is a set of utility classes and SCSS mixins that allow developers to add padding, margin, color, font, shadow, and more to their applications and controls without writing custom css.
The class naming follows the BEM (Block Element Modifier) methodology and the values of the CSS rules are based on SAP Fiori Design Guidelines. Further customization is possible by using the SCSS mixins and providing user defined values as parameters. SCSS Mixins help in defining styles that can be re-used throughout the project's stylesheet. 


## Getting Started

### 1. SAP UI Common CSS Package included in Fundamental Styles

SAP UI Common CSS Package is part of the Fundamental Styles. If you have installed the Fundamental Styles in your project, you automatically get the SAP UI Common CSS Package.

**Learn more at http://sap.github.io/fundamental-styles/**


### 2. SAP UI Common CSS Package on its own

SAP UI Common CSS Package can stand on its own. To install the package:

\`\`\`bash
npm i @sap-ui/common-css
\`\`\`

## Common CSS Properties

The SAP UI Common CSS Package consists of property values that align with the SAP Fiori designs.

border-radius
border
content-paddings
display
flex
focus
margin
media-queries
padding
shadow
typography`,O={title:"Introduction",component:()=>null,parameters:{docs:{container:g,page:y(P),theme:C},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},a={render:()=>"<div></div>",parameters:{storyshots:{disable:!0},docsOnly:!0}};var d,m,l;a.parameters=s(o({},a.parameters),{docs:s(o({},(d=a.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
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
}`},(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source)})});const D=["CommonCSS"];export{a as CommonCSS,D as __namedExportsOrder,O as default};
