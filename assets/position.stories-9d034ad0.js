var v=Object.defineProperty,h=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(n,o,e)=>o in n?v(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,i=(n,o)=>{for(var e in o||(o={}))g.call(o,e)&&c(n,e,o[e]);if(a)for(var e of a(o))f.call(o,e)&&c(n,e,o[e]);return n},s=(n,o)=>h(n,$(o));const x=`<b>CSS Classes: </b><br><br>
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
- <code style="color: red;">args</code> are the offset values for top, right, bottom, left (optional)`,S=`
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
`,k=`
<div class="sap-docs-container">
    <code>
    .test-position {
        @include sap-position(absolute, $top: 0, $bottom: 2rem);
    }
    </code>

    <code>
    .test-position-relative {
        @include sap-position-relative($top: 0, $bottom: 2rem);
    }
    </code>

    <code>
    .test-position-absolute {
        @include sap-position-absolute($top: 0, $right: 4rem, $bottom: 2rem);
    }
    </code>

    <code>
    .test-position-fixed {
        @include sap-position-fixed($top: 0, $right: 4rem, $bottom: 2rem, $left: 0);
    }
    </code>

    <code>
    .test-position-sticky {
        @include sap-position-sticky($bottom: 0);
    }
    </code>

    <code>
    .test-position-absolute-center {
        @include sap-position-absolute-center();
    }
    </code>

    <code>
    .test-position-absolute-center-horizontally {
        @include sap-position-absolute-center-x();
    }
    </code>

    <code>
    .test-position-absolute-center-vertically {
        @include sap-position-absolute-center-y();
    }
    </code>
</div>

`,C={title:"Position",parameters:{description:x}},y=`
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
`,t=()=>`${y}${S}`;t.parameters={docs:{description:{story:`
        `}}};const r=()=>`${y}${k}`;r.parameters={docs:{description:{story:`
        `}}};var p,d,l;t.parameters=s(i({},t.parameters),{docs:s(i({},(p=t.parameters)==null?void 0:p.docs),{source:i({originalSource:"() => `${localStyles}${positionClassesExampleHtml}`"},(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var b,m,u;r.parameters=s(i({},r.parameters),{docs:s(i({},(b=r.parameters)==null?void 0:b.docs),{source:i({originalSource:"() => `${localStyles}${positionMixinsExampleHtml}`"},(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source)})});const P=["PositionClasses","PositionMixins"];export{t as PositionClasses,r as PositionMixins,P as __namedExportsOrder,C as default};
