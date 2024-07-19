var y=Object.defineProperty,g=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var u=(r,s,i)=>s in r?y(r,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[s]=i,e=(r,s)=>{for(var i in s||(s={}))W.call(s,i)&&u(r,i,s[i]);if(f)for(var i of f(s))H.call(s,i)&&u(r,i,s[i]);return r},o=(r,s)=>g(r,E(s));const C=`<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus-within(0.0625rem, 0.25rem, true);</pre>
</div>`,M=`<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus(0.0625rem, 0.25rem, true);</pre>
</div>`,T=`<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus-within(0.0625rem, true);</pre>
</div>`,_=`<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus(0.0625rem, true);</pre>
</div>`,S={title:"Focus Visual",parameters:{description:`Focus Visual is the visual representation of the focus state. When focus visual is shown it is always visible regardless of the other states the control is in (normal, hover, pressed, active, selected, etc). The Focus Visual Element is available in all themes with colors that work on light and dark backgrounds. The usage of focus or contrast focus colors is determined by each control individually and might be different for the light and dark versions of the controls.
      `}},t=()=>_;t.storyName="Mixin sap-fiori-focus";t.parameters={docs:{description:{story:"<code>sap-fiori-focus</code> has 2 optional parameters: <code>$offset</code> and <code>$alternative</code>. By default, the <code>$offset</code> is set to -0.1875rem, and <code>$alternative</code> to false. If <code>$alternative</code> is set to true, the outline color is <code>--sapContent_ContrastFocusColor</code>, instead of <code>--sapContent_FocusColor</code>."}}};const a=()=>T;a.storyName="Mixin sap-fiori-focus-within";a.parameters={docs:{description:{story:"The focus-within applies styling rules to a parent element when any child element receives focus. Use the <code>sap-fiori-focus-within</code> mixin in such cases. The parameters are the same as in <code>sap-fiori-focus</code>"}}};const n=()=>M;n.storyName="Mixin sap-fake-fiori-focus";n.parameters={docs:{description:{story:`Most modern browsers do not support outline radius. An alternative apporach, using <code>sap-fake-fiori-focus</code> mixin, can be applied to solve this problem. 
            The parameters this mixin accepts are: $offset, $radius and $alternative.`}}};const c=()=>C;c.storyName="Mixin sap-fake-fiori-focus-within";c.parameters={docs:{description:{story:""}}};var d,l,p;t.parameters=o(e({},t.parameters),{docs:o(e({},(d=t.parameters)==null?void 0:d.docs),{source:e({originalSource:"() => fioriFocusExampleHtml"},(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source)})});var m,h,v;a.parameters=o(e({},a.parameters),{docs:o(e({},(m=a.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => fioriFocusWithinExampleHtml"},(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source)})});var $,F,w;n.parameters=o(e({},n.parameters),{docs:o(e({},($=n.parameters)==null?void 0:$.docs),{source:e({originalSource:"() => fakeFioriFocusExampleHtml"},(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source)})});var k,x,b;c.parameters=o(e({},c.parameters),{docs:o(e({},(k=c.parameters)==null?void 0:k.docs),{source:e({originalSource:"() => fakeFioriFocusWithinExampleHtml"},(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source)})});const V=["FioriFocus","FioriFocusWithin","FakeFioriFocus","FakeFioriFocusWithin"];export{n as FakeFioriFocus,c as FakeFioriFocusWithin,t as FioriFocus,a as FioriFocusWithin,V as __namedExportsOrder,S as default};
