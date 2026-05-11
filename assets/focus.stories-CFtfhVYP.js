const a=`<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus-within(0.0625rem, 0.25rem, true);</pre>
</div>`,t=`<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus(0.0625rem, 0.25rem, true);</pre>
</div>`,c=`<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus-within(0.0625rem, true);</pre>
</div>`,n=`<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus(0.0625rem, true);</pre>
</div>`,r=`
<style>
.focus-example-card pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
}
.focus-example-card > div {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #6a6d70;
}
</style>
`,f={title:"Focus Visual",parameters:{description:`Focus Visual is the visual representation of the focus state. When focus visual is shown it is always visible regardless of the other states the control is in (normal, hover, pressed, active, selected, etc). The Focus Visual Element is available in all themes with colors that work on light and dark backgrounds. The usage of focus or contrast focus colors is determined by each control individually and might be different for the light and dark versions of the controls.
      `}},e=()=>`${r}<div class="focus-example-card">${n}</div>`;e.storyName="Mixin sap-fiori-focus";e.parameters={docs:{description:{story:"<code>sap-fiori-focus</code> has 2 optional parameters: <code>$offset</code> and <code>$alternative</code>. By default, the <code>$offset</code> is set to -0.1875rem, and <code>$alternative</code> to false. If <code>$alternative</code> is set to true, the outline color is <code>--sapContent_ContrastFocusColor</code>, instead of <code>--sapContent_FocusColor</code>."}}};const s=()=>`${r}<div class="focus-example-card">${c}</div>`;s.storyName="Mixin sap-fiori-focus-within";s.parameters={docs:{description:{story:"The focus-within applies styling rules to a parent element when any child element receives focus. Use the <code>sap-fiori-focus-within</code> mixin in such cases. The parameters are the same as in <code>sap-fiori-focus</code>"}}};const i=()=>`${r}<div class="focus-example-card">${t}</div>`;i.storyName="Mixin sap-fake-fiori-focus";i.parameters={docs:{description:{story:"Most modern browsers do not support outline radius. An alternative apporach, using <code>sap-fake-fiori-focus</code> mixin, can be applied to solve this problem. The parameters this mixin accepts are: $offset, $radius and $alternative."}}};const o=()=>`${r}<div class="focus-example-card">${a}</div>`;o.storyName="Mixin sap-fake-fiori-focus-within";o.parameters={docs:{description:{story:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'() => `${focusStyles}<div class="focus-example-card">${fioriFocusExampleHtml}</div>`',...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => `${focusStyles}<div class="focus-example-card">${fioriFocusWithinExampleHtml}</div>`',...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'() => `${focusStyles}<div class="focus-example-card">${fakeFioriFocusExampleHtml}</div>`',...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'() => `${focusStyles}<div class="focus-example-card">${fakeFioriFocusWithinExampleHtml}</div>`',...o.parameters?.docs?.source}}};const d=["FioriFocus","FioriFocusWithin","FakeFioriFocus","FakeFioriFocusWithin"];export{i as FakeFioriFocus,o as FakeFioriFocusWithin,e as FioriFocus,s as FioriFocusWithin,d as __namedExportsOrder,f as default};
