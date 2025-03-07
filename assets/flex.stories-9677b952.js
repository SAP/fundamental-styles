const x=`<div class="sap-docs-container">
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


`,f=`<div class="sap-docs-container">
    <section class="sap-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>
`,m=`<div class="sap-docs-container">
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

`,h=`<div class="sap-docs-container">
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
`,b=`<div class="sap-docs-container">
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

`,g=`<div class="sap-docs-container">
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
`,u=`<div class="sap-docs-container">
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

`,y=`<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div class="sap-flex-order-3">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </section>
</div>

`,w=`<div class="sap-docs-container">
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

`,S=`<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div>1</div>
        <div class="sap-flex-grow-4">2</div>
        <div class="sap-flex-grow-1">3</div>
        <div>4</div>
    </section>
</div>

`,F=`<div class="sap-docs-container">
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

`,$=`<div class="sap-docs-container">
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

`,C={title:"Flex",parameters:{description:`The Flexbox Layout, commonly known as Flex, provides an efficient way to align and distribute elements within a container.
`}},e=`
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
`,t=()=>`${e}${f}`;t.storyName="Flex Container";t.parameters={docs:{description:{story:`To turn a parent element into a flex container apply the <code>.sap-flex</code> class to this element. <br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-flex()</code>
            `}}};const d=()=>`${e}${m}`;d.storyName="Flex Align Content (Flex Container)";d.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline</code>`}}};const i=()=>`${e}${F}`;i.storyName="Flex Align Items (Flex Container)";i.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start | start | self-start | flex-end | end | self-end | center | baseline | stretch </code>`}}};const n=()=>`${e}${$}`;n.storyName="Flex Center (Flex Container)";n.parameters={docs:{description:{story:`

<b>SCSS Mixin:</b> 
<code>@include sap-flex-center(direction)</code>;<br>
where <code>direction</code> can be one of the following: <code>row (default) | row-reverse | column | column-reverse</code>`}}};const s=()=>`${e}${h}`;s.storyName="Flex Direction (Flex Container)";s.parameters={docs:{description:{story:`To specify the direction of the items placed in the flex container use one of the following modifier classes: <br><br>
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
            `}}};const a=()=>`${e}${b}`;a.storyName="Flex Gap (Flex Container)";a.parameters={docs:{description:{story:`
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
</table>`}}};const l=()=>`${e}${g}`;l.storyName="Flex Justify Content (Flex Container)";l.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start(default) | flex-end | center | space-between | space-around | space-evenly | start | end | left | right</code>`}}};const r=()=>`${e}${u}`;r.storyName="Flex Wrap (Flex Container)";r.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>nowrap(default) | wrap | wrap-reverse</code>`}}};const o=()=>`${e}${y}`;o.storyName="Flex Order (Flex Items)";o.parameters={docs:{description:{story:`
To change the order in which the flex items appear in the flex container use the <code>.sap-flex-order-*</code> class, where <b>*</b> can be a number from 0 to 20.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-order(value)</code>;<br>
where <code>value</code> is an integer.`}}};const c=()=>`${e}${w}`;c.storyName="Flex Shrink (Flex Items)";c.parameters={docs:{description:{story:`
Flex shrink defines the ability for a flex item to shrink if necessary. The class to specify it is: <code>.sap-flex-shrink-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-shrink(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const v=()=>`${e}${S}`;v.storyName="Flex Grow (Flex Items)";v.parameters={docs:{description:{story:`
Flex grow defines the ability for a flex item to grow if necessary. The class to specify it is: <code>.sap-flex-grow-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-grow(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const p=()=>`${e}${x}`;p.storyName="Flex Align Self (Flex Items)";p.parameters={docs:{description:{story:`
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
where <code>value</code> can be one of the following <code>auto | flex-start | flex-end | center | baseline | stretch;</code>.`}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexExampleHtml}`",...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexAlignContentExampleHtml}`",...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexAlignItemsExampleHtml}`",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexCenterExampleHtml}`",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexDirectionExampleHtml}`",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexGapExampleHtml}`",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexJustifyExampleHtml}`",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexWrapExampleHtml}`",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexOrderExampleHtml}`",...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexShrinkExampleHtml}`",...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexGrowExampleHtml}`",...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => `${localStyles}${flexAlignSelfExampleHtml}`",...p.parameters?.docs?.source}}};const E=["Flex","FlexAlignContent","FlexAlignItems","FlexCenter","FlexDirection","FlexGap","FlexJustify","FlexWrap","FlexOrder","FlexShrink","FlexGrow","FlexAlignSelf"];export{t as Flex,d as FlexAlignContent,i as FlexAlignItems,p as FlexAlignSelf,n as FlexCenter,s as FlexDirection,a as FlexGap,v as FlexGrow,l as FlexJustify,o as FlexOrder,c as FlexShrink,r as FlexWrap,E as __namedExportsOrder,C as default};
