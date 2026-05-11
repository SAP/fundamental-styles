const a=`<h3>Responsive</h3>
<div class="sap-container-type-inline-size">
    <div class="demo sap-content-paddings-home">
        <div></div>
    </div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-home-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-home-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-home-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-home-xl">
    <div></div>
</div>
`,i=`<h3>Responsive</h3>
<div class="sap-container-type-inline-size">
    <div class="demo sap-content-paddings-container">
        <div></div>
    </div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-container-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-container-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-container-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-container-xl">
    <div></div>
</div>
`,t={title:"Content Paddings",parameters:{description:`Content containers (Page, Dynamic Page, Object Page, Tab Container, Icon Tab Bar, Wizard) can hold any types of controls and layouts that are needed to visualize application content. The content areas of these controls should by default use responsive paddings which value is determined by the container width.
      `}},n=`
<style>
    div.demo {
        height: 2rem;
        max-width: 100%;
        background: #69ADF8;
    }
    .demo div {
        height: 100%;
        width: 100%;
        background: #E2EEFF;
    }
</style>
`,d=()=>`
${n}
${a}
`;d.storyName="Home (content area)";d.parameters={docs:{description:{story:`
<style>
.padding-size-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
}
.padding-size-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.padding-size-card dl {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    font-size: 0.875rem;
    align-items: baseline;
}
.padding-size-card dt {
    font-weight: 600;
    color: #32363a;
}
.padding-size-card dd {
    margin: 0;
    color: #6a6d70;
}
.padding-size-card code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
    display: inline-block;
    margin: 0.125rem 0;
}
</style>

<div class="padding-size-card">
    <h4>SM (Small) - up to 599px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>0.5rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapShell_Space_S)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-home-sm</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(home, sm);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>MD (Medium) - 600px to 1023px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>2rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapShell_Space_M)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-home-md</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(home, md);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>LG (Large) - 1024px to 1439px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>2rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapShell_Space_L)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-home-lg</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(home, lg);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>XL (Extra Large) - 1440px and up</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>3rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapShell_Space_XL)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-home-xl</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(home, xl);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>Default (Responsive)</h4>
    <dl>
        <dt>Behavior:</dt>
        <dd>Automatically adjusts based on screen size</dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-home</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(home, default);</code> or <code>@include sap-content-paddings(home);</code></dd>
    </dl>
</div>`}}};const e=()=>`
${n}
${i}
`;e.storyName="Content containers";e.parameters={docs:{description:{story:`
<style>
.padding-size-card {
    background: #f7f8fa;
    border: 1px solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
}
.padding-size-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.padding-size-card dl {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    font-size: 0.875rem;
    align-items: baseline;
}
.padding-size-card dt {
    font-weight: 600;
    color: #32363a;
}
.padding-size-card dd {
    margin: 0;
    color: #6a6d70;
}
.padding-size-card code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 1px solid #e4e4e4;
    display: inline-block;
    margin: 0.125rem 0;
}
</style>

<div class="padding-size-card">
    <h4>SM (Small) - up to 599px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>1rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_Space_S)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-container-sm</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(container, sm);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>MD (Medium) - 600px to 1023px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>2rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_Space_M)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-container-md</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(container, md);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>LG (Large) - 1024px to 1439px</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>2rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_Space_L)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-container-lg</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(container, lg);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>XL (Extra Large) - 1440px and up</h4>
    <dl>
        <dt>Padding:</dt>
        <dd><code>3rem</code> (left & right)</dd>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_Space_XL)</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-container-xl</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(container, xl);</code></dd>
    </dl>
</div>

<div class="padding-size-card">
    <h4>Default (Responsive)</h4>
    <dl>
        <dt>Behavior:</dt>
        <dd>Automatically adjusts based on screen size</dd>
        <dt>Class:</dt>
        <dd><code>.sap-content-paddings-container</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-content-paddings(container, default);</code> or <code>@include sap-content-paddings(container);</code></dd>
    </dl>
</div>`}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${homeExampleHtml}\n`",...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${containerExampleHtml}\n`",...e.parameters?.docs?.source}}};const o=["HomeExample","ContainerExample"];export{e as ContainerExample,d as HomeExample,o as __namedExportsOrder,t as default};
