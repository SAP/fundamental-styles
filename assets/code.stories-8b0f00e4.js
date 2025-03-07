const n=`You can add inline code like here <code class="fd-code fd-code--inline">FundamentalExtension</code> and add mores
<code class="fd-code fd-code--inline">ClassName</code>`,s=`

<pre><code class="fd-code">apiVersion: extensions.name/v1alpha1
kind: Class
metadata:
  name: fundamental-extension-management
spec:
  cdmUrl: {{ url.path.version1 }}://{{ .subdomain.domain }}{{ .Values.cdmPath }}
  description: This Extension adds Extension Management to Project1
  displayName: Extension Management
  supportsDynamicCdmUrls: false
  multipleInstallations: false
  image: "data:image/png;base64,sfg87sg98f7gs9d8g7s9fgdfg"
  installableScopes:
    - Cluster
  extensionConfig:
    extensionManagerServiceUrl: https://extension-manager-name.{{ .Values.landscapeDomainName }}/graphql
</code></pre>
`;const o={title:"Components/Code",parameters:{description:`The code component helps with formating and styling code snippets. It differantiates the code lines from the normal text.
##Usage

**Use the code if:**
* You want to display a block of code.
* You want to dispaly a line of code.

`,tags:["f3","a11y","theme","development"]}},e=()=>s;e.storyName="Code Block";e.parameters={docs:{description:{story:"Code Block is a combination of multiple lines of code which can be displayed as a standalone element."}}};const a=()=>n;a.parameters={docs:{description:{story:"Inline Code is used to hightlight a short snippet code inside a paragraph."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => inlineCodeExampleHtml",...a.parameters?.docs?.source}}};const t=["Primary","InlineCode"];export{a as InlineCode,e as Primary,t as __namedExportsOrder,o as default};
