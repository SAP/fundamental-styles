const r=`<div>
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

</div>`,o={title:"Border",parameters:{description:`
      `}},e=()=>r;e.storyName="Mixin sap-border";e.parameters={docs:{description:{story:"The <code>sap-border</code> helper mixin allows you to specify the width, style, and color of an element's border. This is achieved by providing values to the <code>sap-border</code> parameters: <code>$width</code>, <code>$style</code>, <code>$color</code>, and <code>$pos</code>.<br><br> The <code>$pos</code> value can be one of the following: <code>all | top | bottom | left | right | x | y</code>. The default value is <code>all</code>, which will apply borders on all sides. <code>x</code> will set borders on left and right of the element, and <code>y</code> on top and bottom of the element."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => borderExampleHtml",...e.parameters?.docs?.source}}};const d=["Border"];export{e as Border,d as __namedExportsOrder,o as default};
