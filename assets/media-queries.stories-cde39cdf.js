var m=Object.defineProperty,c=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var s=(t,e,d)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[e]=d,i=(t,e)=>{for(var d in e||(e={}))h.call(e,d)&&s(t,d,e[d]);if(a)for(var d of a(e))g.call(e,d)&&s(t,d,e[d]);return t},r=(t,e)=>c(t,b(e));const y=`<pre>
@include sap-media-min-width(400px) {
    div.example {
        font-size: 0.75 rem;
    }
}

@include sap-media-range-width(600px, 1023px) {
    div.example {
        font-size: 1rem;
    }
}

@include sap-media-range-width(1024px, 1439px) {
    div.example {
        font-size: 2rem;
    }
}
</pre>`,u=`<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>

    <tr>
        <td style="padding: 0.25rem;">Size S screen</td>
        <td style="padding: 0.25rem;">Up to 599 pixels</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-sm() {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Size M screen</td>
        <td style="padding: 0.25rem;">Between 600 pixels and 1023 pixels</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-md() {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Size L screen</td>
        <td style="padding: 0.25rem;">Between 1024 pixels and 1439 pixels</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-lg() {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Size XL screen</td>
        <td style="padding: 0.25rem;">1440 pixels or more</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-xl() {...}</code></td>
    </tr>
    </tbody>
</table>
<br><br>
<h3>Media Queries with Custom Breakpoints</h3>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;"><b>Mobile-first</b> approach</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-min-width($width) {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>Desktop-first </b>approach</td>
        <td style="padding: 0.25rem;"><code>@include sap-media-max-width($width) {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>Width range</b></td>
        <td style="padding: 0.25rem;"><code>@include sap-media-range-width($minWidth, $maxWidth) {...}</code></td>
    </tr>
    </tbody>
</table>

<br><br>

<h3>Media Queries From/Until</h3>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;"><b>From</b></td>
        <td style="padding: 0.25rem;"><code>@include sap-media-from($width) {...}</code></td>
        <td style="padding: 0.25rem;"><code>@media screen and (min-width: $width) { @content; }</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>Until</b></td>
        <td style="padding: 0.25rem;"><code>@include sap-media-until($width) {...}</code></td>
        <td style="padding: 0.25rem;"><code>@media screen and (max-width: $width) { @content; }</code></td>
    </tr>
    </tbody>
</table>

<br><br>

<h3>Orientation</h3>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;"><b>portrait </b></td>
        <td style="padding: 0.25rem;">the viewport is in a portrait orientation, i.e., the height is greater than or
            equal to the width
        </td>
        <td style="padding: 0.25rem;"><code>@include sap-media-orientation(portrait) {...}</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>landscape </b></td>
        <td style="padding: 0.25rem;">the viewport is in a landscape orientation, i.e., the width is greater than the
            height
        </td>
        <td style="padding: 0.25rem;"><code>@include sap-media-orientation(landscape) {...}</code></td>
    </tr>
    </tbody>
</table>
<br><br>
<h3>Print</h3>
For media query intended for paged material and documents viewed on a screen in print preview mode use <code>@include
    sap-media-print()</code>
<br><br><br><br>
`,x={title:"Media Queries",parameters:{description:u}},n=()=>y;n.storyName=" ";var o,p,l;n.parameters=r(i({},n.parameters),{docs:r(i({},(o=n.parameters)==null?void 0:o.docs),{source:i({originalSource:"() => customMediaQueriesExampleHtml"},(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source)})});const M=["CustomMediaQueries"];export{n as CustomMediaQueries,M as __namedExportsOrder,x as default};
