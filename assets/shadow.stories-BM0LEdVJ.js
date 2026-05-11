const e=`
<div class="demo">
    <h3>Level 0 Shadow (<code>.sap-has-shadow-level-0</code>)</h3>
    <div class="sap-has-shadow-level-0"></div>
    <br>
    <h3>Level 1 Shadow (<code>.sap-has-shadow-level-1</code>)</h3>
    <div class="sap-has-shadow-level-1"></div>
    <br>
    <h3>Level 2 Shadow (<code>.sap-has-shadow-level-2</code>)</h3>
    <div class="sap-has-shadow-level-2"></div>
    <br>
    <h3>Level 3 Shadow (<code>.sap-has-shadow-level-3</code>)</h3>
    <div class="sap-has-shadow-level-3"></div>
    <br>
    <h3>Header Shadow (<code>.sap-has-shadow-header</code>)</h3>
    <div class="sap-has-shadow-header"></div>
    <br>
    <h3>Shell Shadow (<code>.sap-has-shadow-shell</code>)</h3>
    <div class="sap-has-shadow-shell"></div>
    <br>
    <h3>Shadow None (<code>.sap-has-shadow-none</code>)</h3>
    <div class="sap-has-shadow-none"></div>
    <br>
    <h3>Interaction Shadow (<code>.sap-has-shadow-interaction</code>)</h3>
    <div class="sap-has-shadow-interaction"></div>
    <br>
    <h3>Selected Shadow (<code>.sap-has-shadow-selected</code>)</h3>
    <div class="sap-has-shadow-selected"></div>
    <br>
    <h3>Negative Shadow (<code>.sap-has-shadow-negative</code>)</h3>
    <div class="sap-has-shadow-negative"></div>
    <br>
    <h3>Critical Shadow (<code>.sap-has-shadow-critical</code>)</h3>
    <div class="sap-has-shadow-critical"></div>
    <br>
    <h3>Positive Shadow (<code>.sap-has-shadow-positive</code>)</h3>
    <div class="sap-has-shadow-positive"></div>
    <br>
    <h3>Informative Shadow (<code>.sap-has-shadow-informative</code>)</h3>
    <div class="sap-has-shadow-informative"></div>
    <br>
    <h3>Neutral Shadow (<code>.sap-has-shadow-neutral</code>)</h3>
    <div class="sap-has-shadow-neutral"></div>
    <br>
    <br>
    <h3 class="sap-has-shadow-text">Text Shadow (<code>.sap-has-shadow-text</code>)</h3>
    <br>
    <h3 class="sap-has-shadow-contrast-text">Contrast Text Shadow (<code>.sap-has-shadow-contrast-text</code>)</h3>
    <br>
    <h3 class="sap-has-shadow-group-title-text">Group Title Text Shadow (<code>.sap-has-shadow-group-title-text</code>)</h3>
    <br>
    <h3 class="sap-has-shadow-emphasized-text">Emphasized Text Shadow (<code>.sap-has-shadow-emphasized-text</code>)</h3>
</div>
`,n=`<style>
.shadow-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
}
.shadow-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.shadow-card dl {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    font-size: 0.875rem;
    align-items: baseline;
}
.shadow-card dt {
    font-weight: 600;
    color: #32363a;
}
.shadow-card dd {
    margin: 0;
    color: #6a6d70;
    word-break: break-word;
}
.shadow-card code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
    display: inline-block;
    margin: 0.125rem 0;
}
.shadow-section {
    margin-block-end: 2rem;
}
.shadow-section > h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #32363a;
    margin-block-end: 1rem;
}
.helper-section {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-block-end: 1rem;
}
.helper-section h3 {
    margin: 0 0 1rem 0;
    color: #0a6ed1;
    font-size: 1.125rem;
    font-weight: 600;
}
.helper-section dl {
    margin: 0 0 1.5rem 0;
}
.helper-section dt {
    font-weight: 600;
    color: #32363a;
    margin-block-end: 0.5rem;
    font-size: 0.875rem;
}
.helper-section dd {
    margin: 0 0 1rem 0;
    padding-inline-start: 1rem;
}
.helper-section dd code {
    background: #fff;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
    display: block;
    margin: 0.25rem 0;
}
.helper-section .type-list {
    background: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 0.0625rem solid #e4e4e4;
    font-size: 0.8125rem;
}
.helper-section .type-list code {
    background: transparent;
    padding: 0.125rem 0.25rem;
    border: none;
    display: inline;
    margin: 0;
    color: #0854a0;
}
</style>

<p>Shadows create visual depth and hierarchy. These utilities and mixins offer predefined shadow levels for containers and elements, along with options for interaction and text shadows to improve clarity and user experience.</p>

<div class="shadow-section">
    <h4>Content Shadows</h4>

    <div class="shadow-card">
        <h4>Level 0</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-level-0</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(level-0)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Shadow0</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Level 1</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-level-1</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(level-1)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Shadow1</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Level 2</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-level-2</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(level-2)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Shadow2</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Level 3</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-level-3</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(level-3)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Shadow3</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>None</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-none</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(none)</code></dd>
            <dt>Variable:</dt>
            <dd>none</dd>
        </dl>
    </div>
</div>

<div class="shadow-section">
    <h4>Header Shadows</h4>

    <div class="shadow-card">
        <h4>Header</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-header</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(header)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_HeaderShadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Shell</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-shell</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(shell)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapShell_Shadow</code></dd>
        </dl>
    </div>
</div>

<div class="shadow-section">
    <h4>Interaction Shadows</h4>

    <div class="shadow-card">
        <h4>Interaction</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-interaction</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(interaction)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Interaction_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Selected</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-selected</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(selected)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Selected_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Negative</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-negative</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(negative)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Negative_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Critical</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-critical</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(critical)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Critical_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Positive</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-positive</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(positive)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Positive_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Informative</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-informative</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(informative)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Informative_Shadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Neutral</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-neutral</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(neutral)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_Neutral_Shadow</code></dd>
        </dl>
    </div>
</div>

<div class="shadow-section">
    <h4>Text Shadows</h4>

    <div class="shadow-card">
        <h4>Text</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-text</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(text)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_TextShadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Contrast Text</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-contrast-text</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(contrast-text)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapContent_ContrastTextShadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Group Title Text</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-group-title-text</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(group-title-text)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapShell_GroupTitleTextShadow</code></dd>
        </dl>
    </div>

    <div class="shadow-card">
        <h4>Emphasized Text</h4>
        <dl>
            <dt>Class:</dt>
            <dd><code>.sap-has-shadow-emphasized-text</code></dd>
            <dt>Mixin:</dt>
            <dd><code>@include sap-shadow(emphasized-text)</code></dd>
            <dt>Variable:</dt>
            <dd><code>--sapButton_Emphasized_TextShadow</code></dd>
        </dl>
    </div>
</div>

<div class="helper-section">
    <h3>Helper Mixins</h3>

    <dl>
        <dt>Set box-shadow with custom value:</dt>
        <dd>
            <code>@include sap-set-box-shadow($value)</code>
            <div style="margin-top: 0.5rem; color: #6a6d70; font-size: 0.8125rem;">
                Example: <code>@include sap-set-box-shadow(var(--sapContent_Shadow0))</code>
            </div>
        </dd>

        <dt>Set text-shadow with custom value:</dt>
        <dd>
            <code>@include sap-set-text-shadow($value)</code>
            <div style="margin-top: 0.5rem; color: #6a6d70; font-size: 0.8125rem;">
                Example: <code>@include sap-set-text-shadow(var(--sapContent_TextShadow))</code>
            </div>
        </dd>

        <dt>Apply predefined shadow by type:</dt>
        <dd>
            <code>@include sap-shadow($type)</code>
        </dd>
    </dl>

    <p style="margin: 1.5rem 0 0.5rem 0; font-weight: 600; color: #32363a; font-size: 0.875rem;">Available <code>$type</code> values:</p>
    <div class="type-list">
        <code>level-0</code> | <code>level-1</code> | <code>level-2</code> | <code>level-3</code> | <code>text</code> | <code>contrast-text</code> | <code>group-title-text</code> | <code>emphasized-text</code> | <code>header</code> | <code>shell</code> | <code>interaction</code> | <code>selected</code> | <code>negative</code> | <code>critical</code> | <code>positive</code> | <code>informative</code> | <code>neutral</code> | <code>none</code>
    </div>
</div>
`,o={title:"Shadow",parameters:{description:n}},a=`
<style>
    .demo > div {
        height: 10rem;
        width: 10rem;
        border-radius: 1rem;
        background: #fff;
    }
</style>
`,d=()=>`${a}${e}`;d.storyName="Shadow Types";d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => `${localStyles}${shadowExampleHtml}`",...d.parameters?.docs?.source}}};const s=["ShadowExample"];export{d as ShadowExample,s as __namedExportsOrder,o as default};
