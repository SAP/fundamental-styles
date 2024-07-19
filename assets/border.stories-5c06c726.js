var i=Object.defineProperty,b=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(o,e,r)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,n=(o,e)=>{for(var r in e||(e={}))h.call(e,r)&&l(o,r,e[r]);if(s)for(var r of s(e))u.call(e,r)&&l(o,r,e[r]);return o},t=(o,e)=>b(o,m(e));const f=`<div>
1. All

<pre>@include sap-border(0.125rem, solid, #000);</pre>
<br>

2. Top Border
<pre>@include sap-border(0.125rem, solid, #000, top);</pre>
<br>

3. Bottom Border
<pre>@include sap-border(0.125rem, solid, #000, bottom);</pre>
<br>

4. Left Border
<pre>@include sap-border(0.125rem, solid, #000, left);</pre>
<br>

6. Right Border
<pre>@include sap-border(0.125rem, solid, #000, right);</pre>
<br>

7. Top and Bottom Border (y)
<pre>@include sap-border(0.125rem, solid, #000, y);</pre>
<br>

8. Left and Right Border (x)
<pre>@include sap-border(0.125rem, solid, #000, x);</pre>
<br>

</div>`,B={title:"Border",parameters:{description:`
      `}},d=()=>f;d.storyName="Mixin sap-border";d.parameters={docs:{description:{story:"The <code>sap-border</code> helper mixin allows you to specify the width, style, and color of an element's border. This is achieved by providing values to the <code>sap-border</code> parameters: <code>$width</code>, <code>$style</code>, <code>$color</code>, and <code>$pos</code>.<br><br> The <code>$pos</code> value can be one of the following: <code>all | top | bottom | left | right | x | y</code>. The default value is <code>all</code>, which will apply borders on all sides. <code>x</code> will set borders on left and right of the element, and <code>y</code> on top and bottom of the element."}}};var a,p,c;d.parameters=t(n({},d.parameters),{docs:t(n({},(a=d.parameters)==null?void 0:a.docs),{source:n({originalSource:"() => borderExampleHtml"},(c=(p=d.parameters)==null?void 0:p.docs)==null?void 0:c.source)})});const x=["Border"];export{d as Border,x as __namedExportsOrder,B as default};
