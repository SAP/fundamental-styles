var w=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(a,e,n)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,d=(a,e)=>{for(var n in e||(e={}))z.call(e,n)&&g(a,n,e[n]);if(m)for(var n of m(e))L.call(e,n)&&g(a,n,e[n]);return a},t=(a,e)=>M(a,T(e));const N=`The CSS padding properties are used to generate space around an element's content, inside of any defined borders. <br>
<br>
##Helper mixins:<br>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem 0.75rem;">Mixin</th>
        <th style="padding: 0.25rem 0.75rem;">Resultant CSS</th>
        <th style="padding: 0.25rem 0.75rem;">$value</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-all($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-top($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-top: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-bottom($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-bottom: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-begin($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-left: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-end($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-right: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-x-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-right: $value; <br>padding-left: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-y-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-top: $value; <br>padding-bottom: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-x($valueLeft, $valueRight)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-left: $valueLeft;<br>padding-right: $valueRight;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-y($valueTop, $valueBottom)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-top: $valueTop;<br>padding-bottom: $valueBottom;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-padding($value, $side)</td>
        <td style="padding: 0.25rem 0.75rem;">based on parameters</td>
        <td style="padding: 0.25rem 0.75rem;">$value:tiny,small,<br> medium,large<br> or defined by the user <br> $side:
            top, bottom, begin, end, x, y
        </td>
    </tr>
</table>
`,A=`<div class="demo sap-padding">
    <div></div>
</div>
`,D=`<h3>Tiny (0.5rem)</h3>
<div class="demo sap-padding-x-tiny">
    <div></div>
</div>
<br>
<h3>Small (1rem)</h3>
<div class="demo sap-padding-x-small">
    <div></div>
</div>
<br>
<h3>Medium (2rem)</h3>
<div class="demo sap-padding-x-medium">
    <div></div>
</div>
<br>
<h3>Large (3rem)</h3>
<div class="demo sap-padding-x-large">
    <div></div>
</div>
<br>
`,F=`<div class="demo sap-padding-responsive">
    <div></div>
</div>
`,_=`<div style="container-type: inline-size;">
    <div class="demo sap-padding-responsive-container">
        <div></div>
    </div>
</div>
`,k=`<div class="demo sap-padding-none">
    <div></div>
</div>

`,B={title:"Padding",parameters:{description:N}},o=`
<style>
    div.demo {
        display: flex;
        height: 4rem;
        width: 8rem;
        background: #69ADF8;
    }
    .demo div {
        height: 100%;
        width: 100%;
        background: #E2EEFF;
    }
</style>
`,r=()=>`${o}${A}`;r.storyName="All-Round Padding";r.parameters={docs:{description:{story:`All-round padding appear on all sides of the container they are applied to.<br>
            <b>CSS class: </b> <code>.sap-padding</code><br>
            <b>SCSS mixin: </b> <code>@include sap-padding();</code><br>
            This will apply 1rem padding on all sides of the container.
        `}}};const i=()=>`${o}${D}`;i.storyName="Double Sided Padding";i.parameters={docs:{description:{story:`Double sided paddings appear on two opposite sides of the element. The horizontal margins are displayed on left and right side of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-padding-x-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-padding(tiny, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-padding-x-small</td>
                    <td style="padding: 0.25rem;">@include sap-padding(small, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-padding-x-medium</td>
                    <td style="padding: 0.25rem;">@include sap-padding(medium, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-padding-x-large</td>
                    <td style="padding: 0.25rem;">@include sap-padding(large, x)</td>
                </tr>
            </table>`}}};const s=()=>`${o}${F}`;s.storyName="Responsive Paddings";s.parameters={docs:{description:{story:`The responsive padding class adds a double sided padding inside a container based on screen width.<br>
            <b>CSS Class: </b><code>.sap-padding-responsive</code><br>
            <b>Mixin: </b><code>@include sap-padding-responsive()</code>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Screen Size</th>
                    <th style="padding: 0.25rem;">CSS</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">SM</td>
                    <td style="padding: 0.25rem;">padding: 0 1rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">MD</td>
                    <td style="padding: 0.25rem;">padding: 0 2rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">LG</td>
                    <td style="padding: 0.25rem;">padding: 0 2rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">XL</td>
                    <td style="padding: 0.25rem;">padding: 0 3rem !important;</td>
                </tr>
            </table>`}}};const p=()=>`${o}${_}`;p.storyName="Responsive Container Paddings";p.parameters={docs:{description:{story:`The responsive padding class adds a double sided padding inside a container based on its width.<br>
            <b>CSS Class: </b><code>.sap-padding-responsive-container</code><br>
            <b>Mixin: </b><code>@include sap-padding-container-responsive()</code>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Container Size</th>
                    <th style="padding: 0.25rem;">CSS</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">SM</td>
                    <td style="padding: 0.25rem;">padding: 0 1rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">MD</td>
                    <td style="padding: 0.25rem;">padding: 0 2rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">LG</td>
                    <td style="padding: 0.25rem;">padding: 0 2rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">XL</td>
                    <td style="padding: 0.25rem;">padding: 0 3rem !important;</td>
                </tr>
            </table>`}}};const l=()=>`${o}${k}`;l.parameters={docs:{description:{story:`No padding class removes existing container paddings. <br>
            <b>CSS class: </b> <code>.sap-padding-none</code><br>
            <b>SCSS mixin: </b> <code>@include sap-padding(0);</code><br>
            `}}};var c,y,u;r.parameters=t(d({},r.parameters),{docs:t(d({},(c=r.parameters)==null?void 0:c.docs),{source:d({originalSource:"() => `${localStyles}${allRoundPaddingExampleHtml}`"},(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source)})});var v,b,h;i.parameters=t(d({},i.parameters),{docs:t(d({},(v=i.parameters)==null?void 0:v.docs),{source:d({originalSource:"() => `${localStyles}${horizontalPaddingExampleHtml}`"},(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source)})});var $,S,x;s.parameters=t(d({},s.parameters),{docs:t(d({},($=s.parameters)==null?void 0:$.docs),{source:d({originalSource:"() => `${localStyles}${responsivePaddingExampleHtml}`"},(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source)})});var P,f,C;p.parameters=t(d({},p.parameters),{docs:t(d({},(P=p.parameters)==null?void 0:P.docs),{source:d({originalSource:"() => `${localStyles}${responsivePaddingContainerExampleHtml}`"},(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source)})});var E,R,H;l.parameters=t(d({},l.parameters),{docs:t(d({},(E=l.parameters)==null?void 0:E.docs),{source:d({originalSource:"() => `${localStyles}${noPaddingExampleHtml}`"},(H=(R=l.parameters)==null?void 0:R.docs)==null?void 0:H.source)})});const G=["AllRoundPadding","HorizontalPadding","ResponsivePadding","ResponsivePaddingContainer","NoPadding"];export{r as AllRoundPadding,i as HorizontalPadding,l as NoPadding,s as ResponsivePadding,p as ResponsivePaddingContainer,G as __namedExportsOrder,B as default};
