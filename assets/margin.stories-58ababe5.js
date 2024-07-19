var j=Object.defineProperty,I=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var h=(a,d,r)=>d in a?j(a,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[d]=r,e=(a,d)=>{for(var r in d||(d={}))K.call(d,r)&&h(a,r,d[r]);if(v)for(var r of v(d))P.call(d,r)&&h(a,r,d[r]);return a},t=(a,d)=>I(a,J(d));const Q=`The CSS margin properties are used to create space around elements, outside of any defined borders. <br><br>
##Helper mixins:<br>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>

    <tr>
        <th style="padding: 0.25rem 0.75rem;">Mixin</th>
        <th style="padding: 0.25rem 0.75rem;">Resultant CSS</th>
        <th style="padding: 0.25rem 0.75rem;">$value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-all($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-top($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-top: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-bottom($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-bottom: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-begin($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-left: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-end($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-right: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-x-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-right: $value; <br>margin-left: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-y-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-top: $value; <br>margin-bottom: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-x($valueLeft, $valueRight)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-left: $valueLeft;<br>margin-right: $valueRight;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-y($valueTop, $valueBottom)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-top: $valueTop;<br>margin-bottom: $valueBottom;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-margin($value, $side)</td>
        <td style="padding: 0.25rem 0.75rem;">based on parameters</td>
        <td style="padding: 0.25rem 0.75rem;">$value:tiny,small,<br> medium,large<br> or defined by the user <br> $side:
            top, bottom, begin, end, x, y
        </td>
    </tr>
    </tbody>
</table>
`,U=`
<h3>All-Round Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-tiny"></div>
</div>
<br>
<h3>All-Round Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-small"></div>
</div>
<br>
<h3>All-Round Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-medium"></div>
</div>
<br>
<h3>All-Round Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-large"></div>
</div>
<br>
`,W=`
<h3>Top Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-top-tiny"></div>
</div>
<br>
<h3>Top Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-top-small"></div>
</div>
<br>
<h3>Top Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-top-medium"></div>
</div>
<br>
<h3>Top Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-top-large"></div>
</div>
<br>
`,Y=`
<h3>Bottom Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-bottom-tiny"></div>
</div>
<br>
<h3>Bottom Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-bottom-small"></div>
</div>
<br>
<h3>Bottom Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-bottom-medium"></div>
</div>
<br>
<h3>Bottom Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-bottom-large"></div>
</div>
<br>
`,Z=`
<h3>Begin Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-begin-tiny"></div>
</div>
<br>
<h3>Begin Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-begin-small"></div>
</div>
<br>
<h3>Begin Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-begin-medium"></div>
</div>
<br>
<h3>Begin Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-begin-large"></div>
</div>
<br>
`,ee=`
<h3>End Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-end-tiny"></div>
</div>
<br>
<h3>End Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-end-small"></div>
</div>
<br>
<h3>End Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-end-medium"></div>
</div>
<br>
<h3>End Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-end-large"></div>
</div>
<br>
`,te=`
<h3>Horizontal Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-x-tiny"></div>
</div>
<br>
<h3>Horizontal Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-x-small"></div>
</div>
<br>
<h3>Horizontal Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-x-medium"></div>
</div>
<br>
<h3>Horizontal Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-x-large"></div>
</div>
<br>
`,de=`
<h3>Vertical Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-y-tiny"></div>
</div>
<br>
<h3>Vertical Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-y-small"></div>
</div>
<br>
<h3>Vertical Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-y-medium"></div>
</div>
<br>
<h3>Vertical Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-y-large"></div>
</div>
<br>
`,re=`
<div class="demo">
    <div class="sap-margin-responsive"></div>
</div>
`,ae=`
<h3>Horizontal Negative Tiny (-0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-tiny-negative"></div>
</div>
<br>
<h3>Horizontal Negative Small (-1rem)</h3>
<div class="demo">
    <div class="sap-margin-small-negative"></div>
</div>
<br>
<h3>Horizontal Negative Medium (-2rem)</h3>
<div class="demo">
    <div class="sap-margin-medium-negative"></div>
</div>
<br>
<h3>Horizontal Negative Large (-3rem)</h3>
<div class="demo">
    <div class="sap-margin-large-negative"></div>
</div>
<br>
`,ie={title:"Margins",parameters:{description:Q}},n=`
<style>
    div.demo {
        display: flex;
        width: fit-content;
        background: #69ADF8;
    }
    .demo div {
        height: 4rem;
        width: 8rem;
        background: #E2EEFF;
    }
</style>
`,i=()=>`${n}${U}`;i.storyName="All-Round Margins";i.parameters={docs:{description:{story:`All-round margins appear on all sides of the element they are applied to.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large)</td>
                </tr>
                
            </table>`}}};const s=()=>`${n}${W}`;s.storyName="Top Margins";s.parameters={docs:{description:{story:`The top margin is displayed on the top of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-top-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, top)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-top-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, top)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-top-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, top)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-top-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, top)</td>
                </tr>
            </table>`}}};const m=()=>`${n}${Y}`;m.storyName="Bottom Margins";m.parameters={docs:{description:{story:`The bottom margin is displayed on the bottom of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-bottom-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, bottom)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-bottom-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, bottom)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-bottom-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, bottom)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-bottom-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, bottom)</td>
                </tr>
            </table>`}}};const l=()=>`${n}${Z}`;l.storyName="Begin Margins";l.parameters={docs:{description:{story:`The begin margin is displayed on the left side and in right-to-left mode on the right side of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-begin-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, begin)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-begin-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, begin)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-begin-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, begin)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-begin-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, begin)</td>
                </tr>
            </table>`}}};const g=()=>`${n}${ee}`;g.storyName="End Margins";g.parameters={docs:{description:{story:`The end margin is displayed on the right side and in right-to-left mode on the left side of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-end-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, end)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-end-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, end)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-end-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, end)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-end-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, end)</td>
                </tr>
            </table>`}}};const p=()=>`${n}${te}`;p.storyName="Horizontal Margins";p.parameters={docs:{description:{story:`The horizontal margins are displayed on left and right side of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-x-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-x-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-x-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, x)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-x-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, x)</td>
                </tr>
            </table>`}}};const o=()=>`${n}${de}`;o.storyName="Vertical Margins";o.parameters={docs:{description:{story:`The vertical margins are displayed on top and bottom of the element.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">Class</th>
                    <th style="padding: 0.25rem;">Mixin</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (0.5rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-y-tiny</td>
                    <td style="padding: 0.25rem;">@include sap-margin(tiny, y)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (1rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-y-small</td>
                    <td style="padding: 0.25rem;">@include sap-margin(small, y)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (2rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-y-medium</td>
                    <td style="padding: 0.25rem;">@include sap-margin(medium, y)</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (3rem)</td>
                    <td style="padding: 0.25rem;">.sap-margin-y-large</td>
                    <td style="padding: 0.25rem;">@include sap-margin(large, y)</td>
                </tr>
            </table>`}}};const y=()=>`${n}${re}`;y.storyName="Responsive Margins";y.parameters={docs:{description:{story:`The responsive margins class adds a margin around an element based on the width of the container the element is in. <br>
            <b>CSS Class: </b><code>.sap-margin-responsive</code><br>
            <b>Mixin: </b><code>@include sap-margin-responsive()</code>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Screen Size</th>
                    <th style="padding: 0.25rem;">CSS</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">SM</td>
                    <td style="padding: 0.25rem;">margin: 0 0 1rem 0 !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">MD</td>
                    <td style="padding: 0.25rem;">margin: 1rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">LG</td>
                    <td style="padding: 0.25rem;">margin: 1rem 2rem !important;</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">XL</td>
                    <td style="padding: 0.25rem;">margin: 1rem 3rem !important;</td>
                </tr>
            </table>`}}};const c=()=>`${n}${ae}`;c.storyName="Negative Margins";c.parameters={docs:{description:{story:`The negative margin class adds a double sided negative margin to an element. This is useful when aligning elements with built-in paddings.
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <tr>
                    <th style="padding: 0.25rem;">Type</th>
                    <th style="padding: 0.25rem;">CSS</th>
                    <th style="padding: 0.25rem;">Class</th>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Tiny (-0.5rem)</td>
                    <td style="padding: 0.25rem;">margin: 0 -0.5rem !important;</td>
                    <td style="padding: 0.25rem;">.sap-margin-tiny-negative</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Small (-1rem)</td>
                    <td style="padding: 0.25rem;">margin: 0 -1rem !important;l</td>
                    <td style="padding: 0.25rem;">.sap-margin-small-negative</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Medium (-0.5rem)</td>
                    <td style="padding: 0.25rem;">margin: 0 -2rem !important;</td>
                    <td style="padding: 0.25rem;">.sap-margin-medium-negative</td>
                </tr>
                <tr>
                    <td style="padding: 0.25rem;">Large (-0.5rem)</td>
                    <td style="padding: 0.25rem;">margin: 0 -3rem !important;</td>
                    <td style="padding: 0.25rem;">.sap-margin-large-negative</td>
                </tr>
            </table>`}}};var u,b,M;i.parameters=t(e({},i.parameters),{docs:t(e({},(u=i.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => `${localStyles}${allRoundMarginExampleHtml}`"},(M=(b=i.parameters)==null?void 0:b.docs)==null?void 0:M.source)})});var $,S,x;s.parameters=t(e({},s.parameters),{docs:t(e({},($=s.parameters)==null?void 0:$.docs),{source:e({originalSource:"() => `${localStyles}${topMarginExampleHtml}`"},(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source)})});var T,f,H;m.parameters=t(e({},m.parameters),{docs:t(e({},(T=m.parameters)==null?void 0:T.docs),{source:e({originalSource:"() => `${localStyles}${bottomMarginExampleHtml}`"},(H=(f=m.parameters)==null?void 0:f.docs)==null?void 0:H.source)})});var E,L,B;l.parameters=t(e({},l.parameters),{docs:t(e({},(E=l.parameters)==null?void 0:E.docs),{source:e({originalSource:"() => `${localStyles}${beginMarginExampleHtml}`"},(B=(L=l.parameters)==null?void 0:L.docs)==null?void 0:B.source)})});var N,w,z;g.parameters=t(e({},g.parameters),{docs:t(e({},(N=g.parameters)==null?void 0:N.docs),{source:e({originalSource:"() => `${localStyles}${endMarginExampleHtml}`"},(z=(w=g.parameters)==null?void 0:w.docs)==null?void 0:z.source)})});var R,C,A;p.parameters=t(e({},p.parameters),{docs:t(e({},(R=p.parameters)==null?void 0:R.docs),{source:e({originalSource:"() => `${localStyles}${horizontalMarginExampleHtml}`"},(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source)})});var V,F,_;o.parameters=t(e({},o.parameters),{docs:t(e({},(V=o.parameters)==null?void 0:V.docs),{source:e({originalSource:"() => `${localStyles}${verticalMarginExampleHtml}`"},(_=(F=o.parameters)==null?void 0:F.docs)==null?void 0:_.source)})});var k,q,D;y.parameters=t(e({},y.parameters),{docs:t(e({},(k=y.parameters)==null?void 0:k.docs),{source:e({originalSource:"() => `${localStyles}${responsiveMarginExampleHtml}`"},(D=(q=y.parameters)==null?void 0:q.docs)==null?void 0:D.source)})});var G,O,X;c.parameters=t(e({},c.parameters),{docs:t(e({},(G=c.parameters)==null?void 0:G.docs),{source:e({originalSource:"() => `${localStyles}${negativeMarginExampleHtml}`"},(X=(O=c.parameters)==null?void 0:O.docs)==null?void 0:X.source)})});const se=["AllRoundMargin","TopMargin","BottomMargin","BeginMargin","EndMargin","HorizontalMargin","VerticalMargin","ResponsiveMargin","NegativeMargin"];export{i as AllRoundMargin,l as BeginMargin,m as BottomMargin,g as EndMargin,p as HorizontalMargin,c as NegativeMargin,y as ResponsiveMargin,s as TopMargin,o as VerticalMargin,se as __namedExportsOrder,ie as default};
