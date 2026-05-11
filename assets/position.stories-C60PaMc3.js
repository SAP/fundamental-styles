const i=`<style>
.position-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
}
.position-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.position-card pre {
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
.position-card p {
    font-size: 0.875rem;
    color: #6a6d70;
    margin: 0.5rem 0;
}
</style>

<p>Utilities and mixins for controlling element positioning. Provides CSS classes for common position types and quick alignment helpers, as well as SCSS mixins to apply position properties with optional offset values.</p>

<h3 style="margin-block: 1.5rem 1rem; font-size: 1.125rem; font-weight: 600; color: #32363a;">CSS Classes</h3>

<div class="position-card">
    <h4>Position Types</h4>
    <p>Apply position property to an element:</p>
    <pre>.sap-position-<i style="color: #d93025;">type</i></pre>
    <p>Where <code>type</code> can be: <code>static</code>, <code>fixed</code>, <code>absolute</code>, <code>relative</code>, <code>sticky</code>, <code>inherit</code></p>
</div>

<div class="position-card">
    <h4>Absolute Centering</h4>
    <p><strong>Note:</strong> Parent element must have <code>position: relative</code></p>
    <pre>.sap-position-absolute-center</pre>
    <p>Center element horizontally and vertically</p>
    <pre>.sap-position-absolute-center-x</pre>
    <p>Center element horizontally only</p>
    <pre>.sap-position-absolute-center-y</pre>
    <p>Center element vertically only</p>
</div>

<div class="position-card">
    <h4>Edge Positioning</h4>
    <p>Set element edges to 0:</p>
    <pre>.sap-position-top-0
.sap-position-right-0
.sap-position-bottom-0
.sap-position-left-0</pre>
</div>

<h3 style="margin-block: 1.5rem 1rem; font-size: 1.125rem; font-weight: 600; color: #32363a;">SCSS Mixins</h3>

<div class="position-card">
    <h4>Generic Position Mixin</h4>
    <p>Apply any position type with optional offset values:</p>
    <pre>@include sap-position(<i style="color: #d93025;">$type</i>, <i style="color: #d93025;">$args</i>);</pre>
    <p>Where <code>$type</code> is one of: <code>static</code>, <code>fixed</code>, <code>absolute</code>, <code>relative</code>, <code>sticky</code>, <code>inherit</code></p>
    <p>And <code>$args</code> are optional offset parameters: <code>$top</code>, <code>$right</code>, <code>$bottom</code>, <code>$left</code></p>
</div>

<div class="position-card">
    <h4>Specific Position Mixins</h4>
    <p>Dedicated mixins for common position types:</p>
    <pre>@include sap-position-absolute(<i style="color: #d93025;">$args...</i>);
@include sap-position-fixed(<i style="color: #d93025;">$args...</i>);
@include sap-position-sticky(<i style="color: #d93025;">$args...</i>);
@include sap-position-relative(<i style="color: #d93025;">$args...</i>);</pre>
    <p>Where <code>$args</code> are optional: <code>$top</code>, <code>$right</code>, <code>$bottom</code>, <code>$left</code></p>
</div>

<div class="position-card">
    <h4>Centering Mixins</h4>
    <p>Center elements absolutely (parent must be <code>position: relative</code>):</p>
    <pre>@include sap-position-absolute-center();</pre>
    <p>Center horizontally and vertically</p>
    <pre>@include sap-position-absolute-center-x();</pre>
    <p>Center horizontally only</p>
    <pre>@include sap-position-absolute-center-y();</pre>
    <p>Center vertically only</p>
</div>
`,t=`
<div class="sap-docs-container">
    <h4>relative position</h4>
    <div class="sap-position-relative sap-position-top-0 sap-position-bottom-0">.sap-position-relative.sap-position-top-0.sap-position-bottom-0</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>static position</h4>
    <div class="sap-position-static">.sap-position-static</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>inherit position</h4>
    <div class="sap-position-inherit">.sap-position-inherit</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>absolute position</h4>
    <div class="sap-position-absolute">.sap-position-absolute</div>
</div>

<br><br><br><br><br><br>`,s=`<style>
.position-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
}
.position-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
}
.position-example-card pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
    line-height: 1.5;
}
</style>

<div class="position-example-card">
    <h4>Generic Position with Offsets</h4>
    <pre>.my-element {
    @include sap-position(absolute, $top: 0, $bottom: 2rem);
}</pre>
</div>

<div class="position-example-card">
    <h4>Position Relative with Offsets</h4>
    <pre>.my-element {
    @include sap-position-relative($top: 0, $bottom: 2rem);
}</pre>
</div>

<div class="position-example-card">
    <h4>Position Absolute with Multiple Offsets</h4>
    <pre>.my-element {
    @include sap-position-absolute($top: 0, $right: 4rem, $bottom: 2rem);
}</pre>
</div>

<div class="position-example-card">
    <h4>Position Fixed with All Offsets</h4>
    <pre>.my-element {
    @include sap-position-fixed($top: 0, $right: 4rem, $bottom: 2rem, $left: 0);
}</pre>
</div>

<div class="position-example-card">
    <h4>Position Sticky</h4>
    <pre>.my-element {
    @include sap-position-sticky($bottom: 0);
}</pre>
</div>

<div class="position-example-card">
    <h4>Absolute Center (Both Axes)</h4>
    <pre>.my-element {
    @include sap-position-absolute-center();
}</pre>
</div>

<div class="position-example-card">
    <h4>Absolute Center Horizontally</h4>
    <pre>.my-element {
    @include sap-position-absolute-center-x();
}</pre>
</div>

<div class="position-example-card">
    <h4>Absolute Center Vertically</h4>
    <pre>.my-element {
    @include sap-position-absolute-center-y();
}</pre>
</div>
`,r={title:"Position",parameters:{description:i}},o=`
<style>
    .sap-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }
    .sap-docs-container div {
        background: #69ADF8;
        min-width: 8rem;
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin-inline: 0.1rem;
        margin-block: 0.1rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
    }
</style>
`,e=()=>`${o}${t}`;e.parameters={docs:{description:{story:`
        `}}};const n=()=>`${o}${s}`;n.parameters={docs:{description:{story:`
        `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => `${localStyles}${positionClassesExampleHtml}`",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => `${localStyles}${positionMixinsExampleHtml}`",...n.parameters?.docs?.source}}};const p=["PositionClasses","PositionMixins"];export{e as PositionClasses,n as PositionMixins,p as __namedExportsOrder,r as default};
