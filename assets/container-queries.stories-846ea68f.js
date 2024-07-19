var c=Object.defineProperty,m=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&o(n,t,e[t]);if(a)for(var t of a(e))u.call(e,t)&&o(n,t,e[t]);return n},r=(n,e)=>m(n,y(e));const g=`<pre>
    .article-container {
        @include sap-container-type(inline-size);
    }

   
    @include sap-container-query-from(640px) {
        .article {
            font-size: 20px;
        }
    }
    
</pre>`,x={title:"Container Queries",parameters:{description:`Container queries are similar to media queries, but they allow you to apply styles to an element based on the dimensions of the element's container rather than the device’s viewport. For more information please visit the <a target="_blank" title="MDN documentation website" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries">MDN website</a>.   
        <br><br><br>
        <h3>Containment Context</h3>
        To define a container, you need to specify the <code>container-type</code> property on the element. The container-type can accept three options: size, inline-size, and normal. <br>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;"><b>normal</b></td>
        <td style="padding: 0.25rem;">the element is not a query container for any container size, but it can be used to apply styles to the element</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-normal</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(normal)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>size</b></td>
        <td style="padding: 0.25rem;">the container will not assume the position it has on the viewport, you must explicitly set the height and width of the container</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-size</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(size)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>inline-size</b></td>
        <td style="padding: 0.25rem;">the element assumes the position it has on the viewport</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-inline-size</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(inline-size)</code></td>
    </tr>
    </tbody>
</table>
<br>
<h3>Mixins</h3>
<table style="width: 60%; border-collapse: collapse; margin-top: 1rem;text-align: left;">
    <tr>
        <th style="padding: 0.25rem;">Mixin</th>
        <th style="padding: 0.25rem;">Container width</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-sm()</code></td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-md()</code></td>
        <td style="padding: 0.25rem;">600px <= width <= 1023px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-lg()</code></td>
        <td style="padding: 0.25rem;">1024px <= width <= 1439px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-xl()</code></td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-from($width)</code></td>
        <td style="padding: 0.25rem;">user defined</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-until($width)</code></td>
        <td style="padding: 0.25rem;">user defined</td>
    </tr>
</table>
      `}},i=()=>g;var s,l,p;i.parameters=r(d({},i.parameters),{docs:r(d({},(s=i.parameters)==null?void 0:s.docs),{source:d({originalSource:"() => usingTheMixinsExampleHtml"},(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source)})});const w=["UsingTheMixins"];export{i as UsingTheMixins,w as __namedExportsOrder,x as default};
