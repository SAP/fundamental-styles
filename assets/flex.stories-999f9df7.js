var de=Object.defineProperty,ie=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var u=(s,d,n)=>d in s?de(s,d,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[d]=n,e=(s,d)=>{for(var n in d||(d={}))se.call(d,n)&&u(s,n,d[n]);if(g)for(var n of g(d))ae.call(d,n)&&u(s,n,d[n]);return s},t=(s,d)=>ie(s,ne(d));const le=`<div class="sap-docs-container">
    <h4>flex-end</h4>
    <section class="sap-flex sap-flex--align-items-flex-start" style="max-width:30rem;">
        <div>1</div>
        <div>2</div>
        <div class="sap-flex-align-self-flex-end">3</div>
        <div>4</div>
    </section>
</div>

<div class="sap-docs-container">
    <h4>stretch</h4>
    <section class="sap-flex sap-flex--align-items-flex-start" style="max-width:30rem;">
        <div>1</div>
        <div>2</div>
        <div class="sap-flex-align-self-stretch">3</div>
        <div>4</div>
    </section>
</div>

<div class="sap-docs-container">
    <h4>center</h4>
    <section class="sap-flex sap-flex--align-items-flex-start" style="max-width:30rem;">
        <div>1</div>
        <div>2</div>
        <div class="sap-flex-align-self-center">3</div>
        <div>4</div>
    </section>
</div>


`,re=`<div class="sap-docs-container">
    <section class="sap-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>
`,oe=`<div class="sap-docs-container">
    <h4 style="text-align: center">flex-start</h4>
    <section class="sap-flex sap-flex--align-content-flex-start" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">flex-end</h4>
    <section class="sap-flex sap-flex--align-content-flex-end" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">center</h4>
    <section class="sap-flex sap-flex--align-content-center" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-between</h4>
    <section class="sap-flex sap-flex--align-content-space-between" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-around</h4>
    <section class="sap-flex sap-flex--align-content-space-around" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-evenly</h4>
    <section class="sap-flex sap-flex--align-content-space-evenly" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">stretch</h4>
    <section class="sap-flex sap-flex--align-content-stretch" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">baseline</h4>
    <section class="sap-flex sap-flex--align-content-baseline" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`,ce=`<div class="sap-docs-container">
    <h4>Row</h4>
    <section class="sap-flex sap-flex--row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </section>
</div>

<div class="sap-docs-container">
    <h4>Row Reverse</h4>
    <section class="sap-flex sap-flex--row-reverse">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </section>
</div>

<div class="sap-docs-container">
    <h4>Column</h4>
    <section class="sap-flex sap-flex--column">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </section>
</div>

<div class="sap-docs-container">
    <h4>Column Reverse</h4>
    <section class="sap-flex sap-flex--column-reverse">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </section>
</div>
`,ve=`<div class="sap-docs-container">
    <h4 style="text-align: center">tiny</h4>
    <section class="sap-flex sap-flex--gap-tiny">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">small</h4>
    <section class="sap-flex sap-flex--gap-small">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">medium</h4>
    <section class="sap-flex sap-flex--gap-medium">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">large</h4>
    <section class="sap-flex sap-flex--gap-large">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">column small</h4>
    <section class="sap-flex sap-flex--column-gap-small">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`,pe=`<div class="sap-docs-container">
    <h4 style="text-align: center">flex-start | start</h4>
    <section class="sap-flex sap-flex--justify-flex-start">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">flex-end | end</h4>
    <section class="sap-flex sap-flex--justify-flex-end">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">left</h4>
    <section class="sap-flex sap-flex--justify-left">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">right</h4>
    <section class="sap-flex sap-flex--justify-right">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">center</h4>
    <section class="sap-flex sap-flex--justify-center">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-between</h4>
    <section class="sap-flex sap-flex--justify-space-between">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-around</h4>
    <section class="sap-flex sap-flex--justify-space-around">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-evenly</h4>
    <section class="sap-flex sap-flex--justify-space-evenly">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>
`,xe=`<div class="sap-docs-container">
    <h4>nowrap</h4>
    <section class="sap-flex sap-flex--nowrap" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <h4>wrap</h4>
    <section class="sap-flex sap-flex--wrap" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <h4>wrap-reverse</h4>
    <section class="sap-flex sap-flex--wrap-reverse" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`,fe=`<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div class="sap-flex-order-3">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </section>
</div>

`,me=`<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div>1</div>
        <div class="sap-flex-shrink-2">2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </section>
</div>

`,he=`<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div>1</div>
        <div class="sap-flex-grow-4">2</div>
        <div class="sap-flex-grow-1">3</div>
        <div>4</div>
    </section>
</div>

`,be=`<div class="sap-docs-container">
    <h4 style="text-align: center">flex-start | start | self-start</h4>
    <section class="sap-flex sap-flex--align-items-flex-start">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">flex-end | end | self-end</h4>
    <section class="sap-flex sap-flex--align-items-flex-end">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">center</h4>
    <section class="sap-flex sap-flex--align-items-center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">stretch</h4>
    <section class="sap-flex sap-flex--align-items-stretch">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">baseline</h4>
    <section class="sap-flex sap-flex--align-items-baseline">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`,ge=`<div class="sap-docs-container">
    <h4>row center</h4>
    <section class="sap-flex sap-flex--center" style="max-width:30rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>

    <h4>column center</h4>
    <section class="sap-flex  sap-flex--center-column" style="max-width:30rem; min-height: 20rem;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`,ye={title:"Flex",parameters:{description:`The Flexbox Layout, commonly known as Flex, provides an efficient way to align and distribute elements within a container.
`}},i=`
<style>
    .sap-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }

    .sap-docs-container div {
        background: #69ADF8;
        width: 4rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
    }
</style>
`,a=()=>`${i}${re}`;a.storyName="Flex Container";a.parameters={docs:{description:{story:`To turn a parent element into a flex container apply the <code>.sap-flex</code> class to this element. <br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-flex()</code>
            `}}};const l=()=>`${i}${oe}`;l.storyName="Flex Align Content (Flex Container)";l.parameters={docs:{description:{story:`
<table>
    <thead>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sap-flex--align-content-flex-start</code> | <code>.sap-flex--align-content-start</code></td>
        <td>pack items to the start of the container</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-flex-end</code> | <code>.sap-flex--align-content-end</code></td>
        <td>pack items to the end of the container</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-center</code></td>
        <td>items are centered in the container</td>
    </tr>
    
    <tr>
        <td><code>.sap-flex--align-content-space-between</code></td>
        <td>items are distributed evenly along the line</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-space-around</code></td>
        <td>items are evenly distributed with equal space around each line</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-space-evenly</code></td>
        <td>items are evenly distributed with equal space around them</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-stretch</code></td>
        <td>items stretch to take up the remaining space</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-content-baseline</code></td>
        <td>items are distributed along their content's baseline</td>
    </tr>
    </tbody>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-align-content(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline</code>`}}};const r=()=>`${i}${be}`;r.storyName="Flex Align Items (Flex Container)";r.parameters={docs:{description:{story:`
<table>
    <thead>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sap-flex--align-items-flex-start</code> | <code>.sap-flex--align-items-start</code> | <code>.sap-flex--align-items-self-start</code></td>
        <td>items are placed at the start of the cross axis</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-items-flex-end</code> | <code>.sap-flex--align-items-end</code> | <code>.sap-flex--align-items-self-end</code></td>
        <td>items are placed at the end of the cross axis</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-items-center</code></td>
        <td>items are centered in the cross-axis</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-items-stretch</code></td>
        <td>(default) stretch to fill the container</td>
    </tr>
    <tr>
        <td><code>.sap-flex--align-items-baseline</code></td>
        <td>items are aligned such as their baselines align</td>
    </tr>
    </tbody>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-align-items(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start | start | self-start | flex-end | end | self-end | center | baseline | stretch </code>`}}};const o=()=>`${i}${ge}`;o.storyName="Flex Center (Flex Container)";o.parameters={docs:{description:{story:`

<b>SCSS Mixin:</b> 
<code>@include sap-flex-center(direction)</code>;<br>
where <code>direction</code> can be one of the following: <code>row (default) | row-reverse | column | column-reverse</code>`}}};const c=()=>`${i}${ce}`;c.storyName="Flex Direction (Flex Container)";c.parameters={docs:{description:{story:`To specify the direction of the items placed in the flex container use one of the following modifier classes: <br><br>
            <table>
                <thead>
                <tr>
                    <th>Modifier Class</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><code>.sap-flex--row</code></td>
                    <td>(default) left to right in LTR; right to left in RTL</td>
                </tr>
                <tr>
                    <td><code>.sap-flex--row-reverse</code></td>
                    <td>right to left in LTR; left to right in RTL</td>
                </tr>
                <tr>
                    <td><code>.sap-flex--column</code></td>
                    <td>top to bottom</td>
                </tr>
                <tr>
                    <td><code>.sap-flex--column-reverse</code></td>
                    <td>bottom to top</td>
                </tr>
                </tbody>
            </table>
            <b>SCSS Mixin:</b> <code>@include sap-flex(direction)</code>; <br>
            where <code>direction</code> can be one of the following values: <code>row (default) | row-reverse | column | column-reverse</code>
            `}}};const v=()=>`${i}${ve}`;v.storyName="Flex Gap (Flex Container)";v.parameters={docs:{description:{story:`
<table>
    <thead>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sap-flex--gap-tiny</code></td>
        <td>the gap is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--gap-small</code></td>
        <td>the gap is 1rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--gap-medium</code></td>
        <td>the gap is 2rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--gap-large</code></td>
        <td>the gap is 3rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--row-gap-tiny</code></td>
        <td>the gap between the rows is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--row-gap-small</code></td>
        <td>the gap between the rows is 1rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--row-gap-medium</code></td>
        <td>the gap between the rows is 2rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--row-gap-large</code></td>
        <td>the gap between the rows is 3rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--column-gap-tiny</code></td>
        <td>the gap between the columns is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--column-gap-small</code></td>
        <td>the gap between the columns is 1rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--column-gap-medium</code></td>
        <td>the gap between the columns is 2rem</td>
    </tr>
    <tr>
        <td><code>.sap-flex--column-gap-large</code></td>
        <td>the gap between the columns is 3rem</td>
    </tr>
    </tbody>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-gap(value, type)</code>;<br>
where <code>type</code> is an optional parameter and can be one of the two: <code>row | column </code>. <br> The <code>value</code> can be <code>tiny | small | medium | large</code> or any custom value specified by the user. <br>
<table>
    <tbody>
    <tr>
        <td>tiny</td>
        <td>0.5rem</td>
    </tr>
    <tr>
        <td>small</td>
        <td>1rem</td>
    </tr>
    <tr>
        <td>medium</td>
        <td>2rem</td>
    </tr>
    <tr>
        <td>large</td>
        <td>3rem</td>
    </tr>
    </tbody>
</table>`}}};const p=()=>`${i}${pe}`;p.storyName="Flex Justify Content (Flex Container)";p.parameters={docs:{description:{story:`
<table>
    <thead>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sap-flex--justify-flex-start</code> | <code>.sap-flex--justify-start</code></td>
        <td>(default) pack items toward the start of the flex-direction</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-flex-end</code> | <code>.sap-flex--justify-end</code></td>
        <td>pack items toward the end of the flex-direction</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-left</code></td>
        <td>pack items from the left</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-right</code></td>
        <td>pack items from the right</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-center</code></td>
        <td>items are centered along the line</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-space-between</code></td>
        <td>items are distributed evenly along the line</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-space-around</code></td>
        <td>items are evenly distributed in the line with equal space around them</td>
    </tr>
    <tr>
        <td><code>.sap-flex--justify-space-evenly</code></td>
        <td>items are distributed so that they have equal space around</td>
    </tr>
    </tbody>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-justify(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start(default) | flex-end | center | space-between | space-around | space-evenly | start | end | left | right</code>`}}};const x=()=>`${i}${xe}`;x.storyName="Flex Wrap (Flex Container)";x.parameters={docs:{description:{story:`
<table>
    <thead>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sap-flex--nowrap</code></td>
        <td>(default) all children items fit onto one line</td>
    </tr>
    <tr>
        <td><code>.sap-flex--wrap</code></td>
        <td>items will wrap onto multiple lines, top to bottom</td>
    </tr>
    <tr>
        <td><code>.sap-flex--wrap-reverse</code></td>
        <td>items will wrap onto multiple lines, bottom to top</td>
    </tr>
    </tbody>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-wrap(type)</code>;<br>
where <code>type</code> can be one of the following: <code>nowrap(default) | wrap | wrap-reverse</code>`}}};const f=()=>`${i}${fe}`;f.storyName="Flex Order (Flex Items)";f.parameters={docs:{description:{story:`
To change the order in which the flex items appear in the flex container use the <code>.sap-flex-order-*</code> class, where <b>*</b> can be a number from 0 to 20.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-order(value)</code>;<br>
where <code>value</code> is an integer.`}}};const m=()=>`${i}${me}`;m.storyName="Flex Shrink (Flex Items)";m.parameters={docs:{description:{story:`
Flex shrink defines the ability for a flex item to shrink if necessary. The class to specify it is: <code>.sap-flex-shrink-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-shrink(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const h=()=>`${i}${he}`;h.storyName="Flex Grow (Flex Items)";h.parameters={docs:{description:{story:`
Flex grow defines the ability for a flex item to grow if necessary. The class to specify it is: <code>.sap-flex-grow-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-grow(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const b=()=>`${i}${le}`;b.storyName="Flex Align Self (Flex Items)";b.parameters={docs:{description:{story:`
Align-self allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. <br>

<code>sap-flex-align-self-auto</code>|
<code>sap-flex-align-self-flex-start</code>|
<code>sap-flex-align-self-flex-end</code>|
<code>sap-flex-align-self-center</code>|
<code>sap-flex-align-self-baseline</code>|
<code>sap-flex-align-self-stretch</code>

<br><br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-align-self(value)</code>;<br>
where <code>value</code> can be one of the following <code>auto | flex-start | flex-end | center | baseline | stretch;</code>.`}}};var y,w,S;a.parameters=t(e({},a.parameters),{docs:t(e({},(y=a.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => `${localStyles}${flexExampleHtml}`"},(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source)})});var F,$,C;l.parameters=t(e({},l.parameters),{docs:t(e({},(F=l.parameters)==null?void 0:F.docs),{source:e({originalSource:"() => `${localStyles}${flexAlignContentExampleHtml}`"},(C=($=l.parameters)==null?void 0:$.docs)==null?void 0:C.source)})});var E,H,j;r.parameters=t(e({},r.parameters),{docs:t(e({},(E=r.parameters)==null?void 0:E.docs),{source:e({originalSource:"() => `${localStyles}${flexAlignItemsExampleHtml}`"},(j=(H=r.parameters)==null?void 0:H.docs)==null?void 0:j.source)})});var k,M,A;o.parameters=t(e({},o.parameters),{docs:t(e({},(k=o.parameters)==null?void 0:k.docs),{source:e({originalSource:"() => `${localStyles}${flexCenterExampleHtml}`"},(A=(M=o.parameters)==null?void 0:M.docs)==null?void 0:A.source)})});var N,D,T;c.parameters=t(e({},c.parameters),{docs:t(e({},(N=c.parameters)==null?void 0:N.docs),{source:e({originalSource:"() => `${localStyles}${flexDirectionExampleHtml}`"},(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source)})});var G,I,R;v.parameters=t(e({},v.parameters),{docs:t(e({},(G=v.parameters)==null?void 0:G.docs),{source:e({originalSource:"() => `${localStyles}${flexGapExampleHtml}`"},(R=(I=v.parameters)==null?void 0:I.docs)==null?void 0:R.source)})});var O,J,L;p.parameters=t(e({},p.parameters),{docs:t(e({},(O=p.parameters)==null?void 0:O.docs),{source:e({originalSource:"() => `${localStyles}${flexJustifyExampleHtml}`"},(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source)})});var W,q,_;x.parameters=t(e({},x.parameters),{docs:t(e({},(W=x.parameters)==null?void 0:W.docs),{source:e({originalSource:"() => `${localStyles}${flexWrapExampleHtml}`"},(_=(q=x.parameters)==null?void 0:q.docs)==null?void 0:_.source)})});var z,B,K;f.parameters=t(e({},f.parameters),{docs:t(e({},(z=f.parameters)==null?void 0:z.docs),{source:e({originalSource:"() => `${localStyles}${flexOrderExampleHtml}`"},(K=(B=f.parameters)==null?void 0:B.docs)==null?void 0:K.source)})});var P,Q,U;m.parameters=t(e({},m.parameters),{docs:t(e({},(P=m.parameters)==null?void 0:P.docs),{source:e({originalSource:"() => `${localStyles}${flexShrinkExampleHtml}`"},(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Y;h.parameters=t(e({},h.parameters),{docs:t(e({},(V=h.parameters)==null?void 0:V.docs),{source:e({originalSource:"() => `${localStyles}${flexGrowExampleHtml}`"},(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,ee,te;b.parameters=t(e({},b.parameters),{docs:t(e({},(Z=b.parameters)==null?void 0:Z.docs),{source:e({originalSource:"() => `${localStyles}${flexAlignSelfExampleHtml}`"},(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});const we=["Flex","FlexAlignContent","FlexAlignItems","FlexCenter","FlexDirection","FlexGap","FlexJustify","FlexWrap","FlexOrder","FlexShrink","FlexGrow","FlexAlignSelf"];export{a as Flex,l as FlexAlignContent,r as FlexAlignItems,b as FlexAlignSelf,o as FlexCenter,c as FlexDirection,v as FlexGap,h as FlexGrow,p as FlexJustify,f as FlexOrder,m as FlexShrink,x as FlexWrap,we as __namedExportsOrder,ye as default};
