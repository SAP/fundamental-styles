const U={title:"Flex",parameters:{description:`The Flexbox Layout, commonly known as Flex, provides an efficient way to align and distribute elements within a container.
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
`,i=()=>`${e}
<div class="sap-docs-container">
    <section class="sap-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`;i.storyName="Flex Container";i.parameters={docs:{description:{story:`To turn a parent element into a flex container apply the <code>.sap-flex</code> class to this element. <br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-flex()</code>
            `}}};const d=()=>`${e}
<div class="sap-docs-container">
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

`;d.storyName="Flex Align Content (Flex Container)";d.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline</code>`}}};const t=()=>`${e}
<div class="sap-docs-container">
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

`;t.storyName="Flex Align Items (Flex Container)";t.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start | start | self-start | flex-end | end | self-end | center | baseline | stretch </code>`}}};const n=()=>`${e}
<div class="sap-docs-container">
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

`;n.storyName="Flex Center (Flex Container)";n.parameters={docs:{description:{story:`

<b>SCSS Mixin:</b> 
<code>@include sap-flex-center(direction)</code>;<br>
where <code>direction</code> can be one of the following: <code>row (default) | row-reverse | column | column-reverse</code>`}}};const s=()=>`${e}
<div class="sap-docs-container">
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
`;s.storyName="Flex Direction (Flex Container)";s.parameters={docs:{description:{story:`To specify the direction of the items placed in the flex container use one of the following modifier classes: <br><br>
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
            `}}};const v=()=>`${e}
<div class="sap-docs-container">
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

`;v.storyName="Flex Gap (Flex Container)";v.parameters={docs:{description:{story:`
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
</table>`}}};const a=()=>`${e}
<div class="sap-docs-container">
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
`;a.storyName="Flex Justify Content (Flex Container)";a.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>flex-start(default) | flex-end | center | space-between | space-around | space-evenly | start | end | left | right</code>`}}};const l=()=>`${e}
<div class="sap-docs-container">
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

`;l.storyName="Flex Wrap (Flex Container)";l.parameters={docs:{description:{story:`
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
where <code>type</code> can be one of the following: <code>nowrap(default) | wrap | wrap-reverse</code>`}}};const c=()=>`${e}
<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div class="sap-flex-order-3">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </section>
</div>

`;c.storyName="Flex Order (Flex Items)";c.parameters={docs:{description:{story:`
To change the order in which the flex items appear in the flex container use the <code>.sap-flex-order-*</code> class, where <b>*</b> can be a number from 0 to 20.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-order(value)</code>;<br>
where <code>value</code> is an integer.`}}};const r=()=>`${e}
<div class="sap-docs-container">
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

`;r.storyName="Flex Shrink (Flex Items)";r.parameters={docs:{description:{story:`
Flex shrink defines the ability for a flex item to shrink if necessary. The class to specify it is: <code>.sap-flex-shrink-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-shrink(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const o=()=>`${e}
<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div>1</div>
        <div class="sap-flex-grow-4">2</div>
        <div class="sap-flex-grow-1">3</div>
        <div>4</div>
    </section>
</div>

`;o.storyName="Flex Grow (Flex Items)";o.parameters={docs:{description:{story:`
Flex grow defines the ability for a flex item to grow if necessary. The class to specify it is: <code>.sap-flex-grow-*</code>, where <b>*</b> can be a number from 0 to 20. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-grow(value)</code>;<br>
where <code>value</code> is a positive integer.`}}};const p=()=>`${e}
<div class="sap-docs-container">
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


`;p.storyName="Flex Align Self (Flex Items)";p.parameters={docs:{description:{story:`
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
where <code>value</code> can be one of the following <code>auto | flex-start | flex-end | center | baseline | stretch;</code>.`}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
    <section class="sap-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

\``,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var m,b,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,u,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var S,F,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var j,$,k;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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
\``,...(k=($=s.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var M,N,R;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var A,T,D;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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
\``,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,G,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(L=(G=l.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var q,E,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div class="sap-flex-order-3">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </section>
</div>

\``,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var J,W,_;r.parameters={...r.parameters,docs:{...(J=r.parameters)==null?void 0:J.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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

\``,...(_=(W=r.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,B,H;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
    <section class="sap-flex" style="max-width:30rem;">
        <div>1</div>
        <div class="sap-flex-grow-4">2</div>
        <div class="sap-flex-grow-1">3</div>
        <div>4</div>
    </section>
</div>

\``,...(H=(B=o.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var K,P,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => \`\${localStyles}
<div class="sap-docs-container">
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


\``,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const V=["Flex","FlexAlignContent","FlexAlignItems","FlexCenter","FlexDirection","FlexGap","FlexJustify","FlexWrap","FlexOrder","FlexShrink","FlexGrow","FlexAlignSelf"];export{i as Flex,d as FlexAlignContent,t as FlexAlignItems,p as FlexAlignSelf,n as FlexCenter,s as FlexDirection,v as FlexGap,o as FlexGrow,a as FlexJustify,c as FlexOrder,r as FlexShrink,l as FlexWrap,V as __namedExportsOrder,U as default};
//# sourceMappingURL=flex.stories-31574bcd.js.map
