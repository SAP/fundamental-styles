const x=`The CSS padding properties are used to generate space around an element's content, inside of any defined borders. <br>
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
`,f={title:"Padding",parameters:{description:x}},i=`
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
`,d=()=>`${i}
<div class="demo sap-padding">
    <div></div>
</div>
`;d.storyName="All-Round Padding";d.parameters={docs:{description:{story:`All-round padding appear on all sides of the container they are applied to.<br>
            <b>CSS class: </b> <code>.sap-padding</code><br>
            <b>SCSS mixin: </b> <code>@include sap-padding();</code><br>
            This will apply 1rem padding on all sides of the container.
        `}}};const e=()=>`${i}
<h3>Tiny (0.5rem)</h3>
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
`;e.storyName="Double Sided Padding";e.parameters={docs:{description:{story:`Double sided paddings appear on two opposite sides of the element. The horizontal margins are displayed on left and right side of the element.
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
            </table>`}}};const t=()=>`${i}
<div class="demo sap-padding-responsive">
    <div></div>
</div>
`;t.storyName="Responsive Paddings";t.parameters={docs:{description:{story:`The responsive padding class adds a double sided padding inside a container based on screen width.<br>
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
            </table>`}}};const n=()=>`${i}
<div style="container-type: inline-size;">
    <div class="demo sap-padding-responsive-container">
        <div></div>
    </div>
</div>
`;n.storyName="Responsive Container Paddings";n.parameters={docs:{description:{story:`The responsive padding class adds a double sided padding inside a container based on its width.<br>
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
            </table>`}}};const a=()=>`${i}
<div class="demo sap-padding-none">
    <div></div>
</div>

`;a.parameters={docs:{description:{story:`No padding class removes existing container paddings. <br>
            <b>CSS class: </b> <code>.sap-padding-none</code><br>
            <b>SCSS mixin: </b> <code>@include sap-padding(0);</code><br>
            `}}};var r,s,p;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`\${localStyles}
<div class="demo sap-padding">
    <div></div>
</div>
\``,...(p=(s=d.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,o,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`\${localStyles}
<h3>Tiny (0.5rem)</h3>
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
\``,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var g,c,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`\${localStyles}
<div class="demo sap-padding-responsive">
    <div></div>
</div>
\``,...(y=(c=t.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var v,u,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`\${localStyles}
<div style="container-type: inline-size;">
    <div class="demo sap-padding-responsive-container">
        <div></div>
    </div>
</div>
\``,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,S,$;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`\${localStyles}
<div class="demo sap-padding-none">
    <div></div>
</div>

\``,...($=(S=a.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const C=["AllRoundPadding","HorizontalPadding","ResponsivePadding","ResponsivePaddingContainer","NoPadding"];export{d as AllRoundPadding,e as HorizontalPadding,a as NoPadding,t as ResponsivePadding,n as ResponsivePaddingContainer,C as __namedExportsOrder,f as default};
