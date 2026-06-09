import{z as n,d as t}from"./iframe-C0hDTCBm.js";import{R as s}from"./IntroductionPageWrapper-CD7Om6_4.js";import"./preload-helper-CR6acF8F.js";const a=`# CX - Customer Experience

A specialized CSS component library for SAP Customer Experience (CX) applications. Built following CX style guidelines, this package provides components designed and maintained by the CX team.

## 🚀 Quick Start

### 📦 Installation

\`\`\`bash
npm install @fundamental-styles/cx
\`\`\`

### 🎨 Theming Requirements

**Required dependencies:** CX components need SAP theming variables to work properly.

\`\`\`bash
npm install @sap-theming/theming-base-content fundamental-styles
\`\`\`

### ⚙️ Basic Usage

**Load order matters:** Always load theme variables before CX components:

\`\`\`html
<!-- 1. Theme variables first -->
<link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">
<link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- 2. Then CX components -->
<link href="https://unpkg.com/@fundamental-styles/cx@latest/dist/cx.css" rel="stylesheet">
\`\`\`

### ⬇️ NPM Usage

**Import in your JavaScript/TypeScript:**

\`\`\`javascript
// Theme CSS (required)
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css';
import 'fundamental-styles/dist/theming/sap_horizon.css';

// CX components
import '@fundamental-styles/cx/dist/cx.css';
\`\`\`

**Or import specific components only:**

\`\`\`javascript
// Only import what you need
import '@fundamental-styles/cx/dist/side-nav.css';
\`\`\`


## 🌐 CDN Usage

\`\`\`html
<!-- Theme CSS -->
<link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">
<link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- All CX components -->
<link href="https://unpkg.com/@fundamental-styles/cx@latest/dist/cx.css" rel="stylesheet">
\`\`\`

**Pin to specific version:**

\`\`\`html
<link href="https://unpkg.com/@fundamental-styles/cx@0.41.4/dist/cx.css" rel="stylesheet">
\`\`\`

**Use prerelease version:**

\`\`\`html
<link href="https://unpkg.com/@fundamental-styles/cx@prerelease/dist/cx.css" rel="stylesheet">
\`\`\`

## 📚 Resources

- 📚 [Fundamental Styles Documentation](https://sap.github.io/fundamental-styles/)
- 🎨 [Theming Base Content](https://github.com/SAP/theming-base-content)
- 💬 [Create an issue](https://github.com/SAP/fundamental-styles/issues/new/choose)
`,l={title:"Introduction",component:()=>null,parameters:{docs:{container:t,page:s(a),theme:n},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},e={render:()=>"<div></div>",parameters:{storyshots:{disable:!0},docsOnly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const c=["Cx"];export{e as Cx,c as __namedExportsOrder,l as default};
