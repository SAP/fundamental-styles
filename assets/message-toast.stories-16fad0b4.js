var u=Object.defineProperty,c=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,o=(a,e)=>{for(var t in e||(e={}))h.call(e,t)&&n(a,t,e[t]);if(i)for(var t of i(e))g.call(e,t)&&n(a,t,e[t]);return a},r=(a,e)=>c(a,p(e));/* empty css                      */const f=`
<div class="fd-message-toast">Product added</div>
<br><br>
<div class="fd-message-toast">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
`,b={title:"Components/Message Toast",parameters:{description:`
The message toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds. When message toast is displayed, it is always centered horizontally at the bottom of the screen and fades in and out automatically.

Note: The timing and duration of the message toast is defined by the application, the standard value being 3000 ms. The duration can be above 3000 ms, but it's not recommended to be less than that value.

##Usage

**Use message toast if:**

- To display a short success message.
- To avoid interrupting the user while they are performing an action.
- To confirm a successful action.


**Do not use the message toast if:**

- You want to display an error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
        `,tags:["f3","a11y","theme"]}},s=()=>f;s.storyName="Default";s.parameters={docs:{description:{story:`The default message toast displays a simple popup with non-interactive text. The text wraps once it reaches the max-width of 15rem.
        `}}};var d,m,l;s.parameters=r(o({},s.parameters),{docs:r(o({},(d=s.parameters)==null?void 0:d.docs),{source:o({originalSource:"() => defaultToastExampleHtml"},(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source)})});const v=["DefaultToast"];export{s as DefaultToast,v as __namedExportsOrder,b as default};
