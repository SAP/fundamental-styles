const c=`<b>CSS Classes: </b><br><br>
<code>.sap-position-<i style="color: red;">type</i></code> &nbsp;&nbsp; <i>(type can be static, fixed, absolute, relative, sticky, inherit)</i><br><br>
<code>.sap-position-absolute-center</code>&nbsp;&nbsp; <i>center an element horizontally and vertically *</i><br><br>
<code>.sap-position-absolute-center-x</code>&nbsp;&nbsp; <i>center an element horizontally *</i><br><br>
<code>.sap-position-absolute-center-y</code>&nbsp;&nbsp; <i>center an element vertically *</i><br><br>

<code>.sap-position-top-0</code><br><br>
<code>.sap-position-right-0</code><br><br>
<code>.sap-position-bottom-0</code><br><br>
<code>.sap-position-left-0</code><br><br>

*for this class to work, the parent element must have <code>position: relative</code>

<br><br><b>SCSS Mixins: </b><br><br>
<code>@include sap-position(<i style="color: red;">type, $args</i>);</code><br>

<br><br>
<code>@include sap-position-absolute(<i style="color: red;">$args...</i>);</code><br>

<br><br>
<code>@include sap-position-relative(<i style="color: red;">$args...</i>);</code><br>

<br><br>
<code>@include sap-position-fixed(<i style="color: red;">$args...</i>);</code><br>

<br><br>
<code>@include sap-position-sticky(<i style="color: red;">$args...</i>);</code><br><br>

where <br>
- <code style="color: red;">type</code> can be one of the following:  static, fixed, absolute, relative, sticky, inherit<br>
- <code style="color: red;">args</code> are the offset values for top, right, bottom, left (optional)`,d={title:"Position",parameters:{description:c}},a=`
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
        margin: 0.1rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
    }
</style>
`,o=()=>`${a}
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
`;o.parameters={docs:{description:{story:`
        `}}};const e=()=>`${a}
<div class="sap-docs-container">
    <code><pre>
    .test-position {
        @include sap-position(absolute, $top: 0, $bottom: 2rem);
    }
    </pre></code>

    <code><pre>
    .test-position-relative {
        @include sap-position-relative($top: 0, $bottom: 2rem);
    }
    </pre></code>
    
    <code><pre>
    .test-position-absolute {
        @include sap-position-absolute($top: 0, $right: 4rem, $bottom: 2rem);
    }
    </pre></code>
      
    <code><pre>
    .test-position-fixed {
        @include sap-position-fixed($top: 0, $right: 4rem, $bottom: 2rem, $left: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-sticky {
        @include sap-position-sticky($bottom: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center {
        @include sap-position-absolute-center();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-horizontally {
        @include sap-position-absolute-center-x();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-vertically {
        @include sap-position-absolute-center-y();
    }
    </pre></code>
</div>

`;e.parameters={docs:{description:{story:`
        `}}};var i,t,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`\${localStyles}
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
\``,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,r,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
    <code><pre>
    .test-position {
        @include sap-position(absolute, $top: 0, $bottom: 2rem);
    }
    </pre></code>

    <code><pre>
    .test-position-relative {
        @include sap-position-relative($top: 0, $bottom: 2rem);
    }
    </pre></code>
    
    <code><pre>
    .test-position-absolute {
        @include sap-position-absolute($top: 0, $right: 4rem, $bottom: 2rem);
    }
    </pre></code>
      
    <code><pre>
    .test-position-fixed {
        @include sap-position-fixed($top: 0, $right: 4rem, $bottom: 2rem, $left: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-sticky {
        @include sap-position-sticky($bottom: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center {
        @include sap-position-absolute-center();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-horizontally {
        @include sap-position-absolute-center-x();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-vertically {
        @include sap-position-absolute-center-y();
    }
    </pre></code>
</div>

\``,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const l=["PositionClasses","PositionMixins"];export{o as PositionClasses,e as PositionMixins,l as __namedExportsOrder,d as default};
