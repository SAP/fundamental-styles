var h=Object.defineProperty,u=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var r=(n,e,a)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,s=(n,e)=>{for(var a in e||(e={}))y.call(e,a)&&r(n,a,e[a]);if(d)for(var a of d(e))C.call(e,a)&&r(n,a,e[a]);return n},t=(n,e)=>u(n,x(e));const E=`You can add inline code like here <code class="fd-code fd-code--inline">FundamentalExtension</code> and add mores
<code class="fd-code fd-code--inline">ClassName</code>`,b=`

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
`;const I={title:"Components/Code",parameters:{description:`The code component helps with formating and styling code snippets. It differantiates the code lines from the normal text.
##Usage

**Use the code if:**
* You want to display a block of code.
* You want to dispaly a line of code.

`,tags:["f3","a11y","theme","development"]}},o=()=>b;o.storyName="Code Block";o.parameters={docs:{description:{story:"Code Block is a combination of multiple lines of code which can be displayed as a standalone element."}}};const i=()=>E;i.parameters={docs:{description:{story:"Inline Code is used to hightlight a short snippet code inside a paragraph."}}};var c,l,m;o.parameters=t(s({},o.parameters),{docs:t(s({},(c=o.parameters)==null?void 0:c.docs),{source:s({originalSource:"() => primaryExampleHtml"},(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source)})});var p,g,f;i.parameters=t(s({},i.parameters),{docs:t(s({},(p=i.parameters)==null?void 0:p.docs),{source:s({originalSource:"() => inlineCodeExampleHtml"},(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});const U=["Primary","InlineCode"];export{i as InlineCode,o as Primary,U as __namedExportsOrder,I as default};
