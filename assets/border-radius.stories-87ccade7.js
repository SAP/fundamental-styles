var l=Object.defineProperty,u=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var o=(e,r,d)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[r]=d,a=(e,r)=>{for(var d in r||(r={}))c.call(r,d)&&o(e,d,r[d]);if(i)for(var d of i(r))y.call(r,d)&&o(e,d,r[d]);return e},s=(e,r)=>u(e,b(r));const g=`<style>
    div.demo {
        display: flex;
        height: 4rem;
        width: 8rem;
        background: #69ADF8;
    }
</style>

<h3>Element</h3>
<div class="demo sap-border-radius-element"></div>
<br>
<h3>Button</h3>
<div class="demo sap-border-radius-button"></div>
<br>
<h3>Field</h3>
<div class="demo sap-border-radius-field"></div>
<br>
<h3>Group</h3>
<div class="demo sap-border-radius-group"></div>
<br>
<h3>Popover</h3>
<div class="demo sap-border-radius-popover"></div>
<br>
<h3>Tile</h3>
<div class="demo sap-border-radius-tile"></div>
<br>
<h3>None</h3>
<div class="demo sap-border-radius-none"></div>
`,h={title:"Border Radius",parameters:{description:`
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
        <tr>
            <th style="padding: 0.25rem 0.75rem;">Type</th>
            <th style="padding: 0.25rem 0.75rem;">CSS variable</th>
            <th style="padding: 0.25rem 0.75rem;">Class</th>
            <th style="padding: 0.25rem 0.75rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Element</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapElement_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-element</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(element)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Button</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapButton_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-button</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(button)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Field</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapField_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-field</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(field)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Group</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapGroup_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-group</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(group)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Popover</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapPopover_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-popover</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(popover)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Tile</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapTile_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-tile</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(tile)</td>
        </tr>
    </tbody>
</table>
<br><br>
<b>SCSS mixin: </b><code>@include sap-border-radius($value...)</code><br>
Example: <br>
<code>@include sap-border-radius(1rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem 0.25rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem 0.25rem 0.25rem)</code><br>
      `}},t=()=>g;t.storyName="Border Radius Types";var n,m,p;t.parameters=s(a({},t.parameters),{docs:s(a({},(n=t.parameters)==null?void 0:n.docs),{source:a({originalSource:"() => borderRadiusExampleHtml"},(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source)})});const B=["BorderRadius"];export{t as BorderRadius,B as __namedExportsOrder,h as default};
