const n=`<style>
    .demo {
        gap: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .demo > div {
        padding: 1.5rem;
        min-width: 200px;
        background: #fff;
    }

    /* Demonstrate reset effect */
    .with-reset {
        font-family: "72", "72full", Arial, Helvetica, sans-serif;
        font-size: var(--sapFontSize);
        line-height: normal;
        color: var(--sapTextColor);
        font-weight: normal;
        box-sizing: border-box;
        padding: 1.5rem;
        margin: 0;
        border: 0;
    }

    .without-reset ul {
        padding-left: 2rem;
        margin: 1rem 0;
    }

    .with-reset ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .demo-label {
        font-size: 0.75rem;
        font-weight: 600;
        color: #666;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .border-example-card {
        background: #f7f8fa;
        border: 0.0625rem solid #eaecee;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-block-end: 1rem;
    }
    .border-example-card h4 {
        margin: 0 0 0.75rem 0;
        color: #0a6ed1;
        font-size: 0.9375rem;
        font-weight: 600;
    }
    .border-example-card pre {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        border-radius: 0.25rem;
        padding: 0.75rem 1rem;
        margin: 0.5rem 0;
        font-size: 0.875rem;
        font-family: 'Courier New', Courier, monospace;
        color: #32363a;
        overflow-x: auto;
        line-height: 1.5;
    }
</style>

<div class="demo">
    <div class="without-reset">
        <div class="demo-label">Without Reset</div>
        <ul>
            <li>Default margin</li>
            <li>Default padding</li>
            <li>List style bullets</li>
        </ul>
    </div>
    <div class="with-reset">
        <div class="demo-label">With Reset</div>
        <ul>
            <li>No margin</li>
            <li>No padding</li>
            <li>No list style</li>
        </ul>
    </div>
</div>

<br><br>

<div class="border-example-card">
    <h4>Reset Mixin</h4>
    <pre>@mixin sap-reset {
  font-family: "72", "72full", Arial, Helvetica, sans-serif;
  font-size: var(--sapFontSize);
  line-height: normal;
  color: var(--sapTextColor);
  font-weight: normal;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  text-indent: 0;
  list-style-type: none;

  &::before,
  &::after {
    box-sizing: inherit;
    font-size: inherit;
  }
}</pre>
</div>`,r={title:"Component Reset",parameters:{description:`
      `}},e=()=>n;e.storyName="Mixin sap-reset";e.parameters={docs:{description:{story:"The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. "}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => resetExampleHtml",...e.parameters?.docs?.source}}};const i=["Reset"];export{e as Reset,i as __namedExportsOrder,r as default};
