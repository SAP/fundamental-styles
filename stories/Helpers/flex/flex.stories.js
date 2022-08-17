export default {
    title: 'Helpers/Flex',
    parameters: {
        description: `The Flexbox Layout, commonly known as Flex, provides an efficient way to align and distribute elements within a container.
`,
        components: ['flex']
    }
};

const localStyles = `
<style>
    .fd-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }

    .fd-docs-container div {
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
`;

export const flex = () => `${localStyles}
<div class="fd-docs-container">
    <section class="fd-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`;

flex.storyName = 'Flex Container';
flex.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `To turn a parent element into a flex container apply the <code>.fd-flex</code> class to this element. <br>
            <b>SCSS Mixin:</b> 
            <code>@include  fd-flex()</code>
            `
        }
    }
};

export const flexDirection = () => `${localStyles}
<div class="fd-docs-container">
    <h4>Column</h4>
    <section class="fd-flex fd-flex--column">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

`;

flexDirection.storyName = 'Flex Direction';
flexDirection.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `To specify the direction of the items placed in the flex container use one of the following modifier classes: <br><br>
            <table>
                <tr>
                    <th>Modifier Class</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>.fd-flex--row</code></td>
                    <td>left to right in LTR; right to left in RTL</td>
                </tr>
                <tr>
                    <td><code>.fd-flex--row-reverse</code></td>
                    <td>right to left in LTR; left to right in RTL</td>
                </tr>
                <tr>
                    <td><code>.fd-flex--column</code></td>
                    <td>top to bottom</td>
                </tr>
                <tr>
                    <td><code>.fd-flex--column-reverse</code></td>
                    <td>bottom to top</td>
                </tr>
            </table>
            <b>SCSS Mixin:</b> <code>@include fd-flex(direction)</code>; <br>
            where <code>direction</code> can be one of the following values: <code>row | row-reverse | column | column-reverse</code>
            `
        }
    }
};

export const flexWrap = () => `${localStyles}
<div class="fd-docs-container">
    <h4>nowrap</h4>
    <section class="fd-flex" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--wrap" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--wrap-reverse" style="max-width:30rem;">
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

`;

flexWrap.storyName = 'Flex Wrap';
flexWrap.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
<table>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.fd-flex--nowrap</code></td>
        <td>(default) all children items fit onto one line</td>
    </tr>
    <tr>
        <td><code>.fd-flex--wrap</code></td>
        <td>items will wrap onto multiple lines, top to bottom</td>
    </tr>
    <tr>
        <td><code>.fd-flex--wrap-reverse</code></td>
        <td>items will wrap onto multiple lines, bottom to top</td>
    </tr>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include fd-flex-wrap(type)</code>;<br>
where <code>type</code> can be one of the following: <code>nowrap | wrap | wrap-reverse</code>`
        }
    }
};

export const flexJustify = () => `${localStyles}
<div class="fd-docs-container">
    <h4 style="text-align: center">flex-start | start</h4>
    <section class="fd-flex fd-flex--justify-flex-start">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">flex-end | end</h4>
    <section class="fd-flex fd-flex--justify-flex-end">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">left</h4>
    <section class="fd-flex fd-flex--justify-left">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">right</h4>
    <section class="fd-flex fd-flex--justify-right">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">center</h4>
    <section class="fd-flex fd-flex--justify-center">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-between</h4>
    <section class="fd-flex fd-flex--justify-space-between">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-around</h4>
    <section class="fd-flex fd-flex--justify-space-around">
        <div></div>
        <div></div>
        <div></div>
    </section>

    <br><br>
    <h4 style="text-align: center">space-evenly</h4>
    <section class="fd-flex fd-flex--justify-space-evenly">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>
`;

flexJustify.storyName = 'Flex Justify Content';
flexJustify.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
<table>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-flex-start</code> | <code>.fd-flex--justify-start</code></td>
        <td>(default) pack items toward the start of the flex-direction</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-flex-end</code> | <code>.fd-flex--justify-end</code></td>
        <td>pack items toward the end of the flex-direction</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-left</code></td>
        <td>pack items from the left</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-right</code></td>
        <td>pack items from the right</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-center</code></td>
        <td>items are centered along the line</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-space-between</code></td>
        <td>items are distributed evenly along the line</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-space-around</code></td>
        <td>items are evenly distributed in the line with equal space around them</td>
    </tr>
    <tr>
        <td><code>.fd-flex--justify-space-evenly</code></td>
        <td>items are distributed so that they have equal space around</td>
    </tr>


</table><br>
<b>SCSS Mixin:</b> 
<code>@include fd-flex-justify(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right</code>`
        }
    }
};

export const flexAlignContent = () => `${localStyles}
<div class="fd-docs-container">
    <h4 style="text-align: center">flex-start</h4>
    <section class="fd-flex fd-flex--align-content-flex-start" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-flex-end" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-center" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-space-between" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-space-around" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-space-evenly" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-stretch" style="max-width:30rem;">
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
    <section class="fd-flex fd-flex--align-content-baseline" style="max-width:30rem;">
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

`;

flexAlignContent.storyName = 'Flex Align Content';
flexAlignContent.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
<table>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-flex-start</code> | <code>.fd-flex--align-content-start</code></td>
        <td>pack items to the start of the container</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-flex-end</code> | <code>.fd-flex--align-content-end</code></td>
        <td>pack items to the end of the container</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-center</code></td>
        <td>items are centered in the container</td>
    </tr>
    
    <tr>
        <td><code>.fd-flex--align-content-space-between</code></td>
        <td>items are distributed evenly along the line</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-space-around</code></td>
        <td>items are evenly distributed with equal space around each line</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-space-evenly</code></td>
        <td>items are evenly distributed with equal space around them</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-stretch</code></td>
        <td>items stretch to take up the remaining space</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-content-baseline</code></td>
        <td>items are distributed along their content's baseline</td>
    </tr>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include fd-flex-align-content(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline</code>`
        }
    }
};

export const flexAlignItems = () => `${localStyles}
<div class="fd-docs-container">
    <h4 style="text-align: center">flex-start | start | self-start</h4>
    <section class="fd-flex fd-flex--align-items-flex-start">
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
    <section class="fd-flex fd-flex--align-items-flex-end">
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
    <section class="fd-flex fd-flex--align-items-center">
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
    <section class="fd-flex fd-flex--align-items-stretch">
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
    <section class="fd-flex fd-flex--align-items-baseline">
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

`;

flexAlignItems.storyName = 'Flex Align Items';
flexAlignItems.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
<table>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.fd-flex--align-items-flex-start</code> | <code>.fd-flex--align-items-start</code> | <code>.fd-flex--align-items-self-start</code></td>
        <td>items are placed at the start of the cross axis</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-items-flex-end</code> | <code>.fd-flex--align-items-end</code> | <code>.fd-flex--align-items-self-end</code></td>
        <td>items are placed at the end of the cross axis</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-items-center</code></td>
        <td>items are centered in the cross-axis</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-items-stretch</code></td>
        <td>(default) stretch to fill the container</td>
    </tr>
    <tr>
        <td><code>.fd-flex--align-items-baseline</code></td>
        <td>items are aligned such as their baselines align</td>
    </tr>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include fd-flex-align-items(type)</code>;<br>
where <code>type</code> can be one of the following: <code>flex-start | start | self-start | flex-end | end | self-end | center | baseline | stretch </code>`
        }
    }
};

export const flexGap = () => `${localStyles}
<div class="fd-docs-container">
    <h4 style="text-align: center">tiny</h4>
    <section class="fd-flex fd-flex--gap-tiny">
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
    <section class="fd-flex fd-flex--gap-small">
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
    <section class="fd-flex fd-flex--gap-medium">
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
    <section class="fd-flex fd-flex--gap-large">
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
    <section class="fd-flex fd-flex--column-gap-small">
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

`;

flexGap.storyName = 'Flex Gap';
flexGap.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `
<table>
    <tr>
        <th>Modifier Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.fd-flex--gap-tiny</code></td>
        <td>the gap is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--gap-small</code></td>
        <td>the gap is 1rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--gap-medium</code></td>
        <td>the gap is 2rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--gap-large</code></td>
        <td>the gap is 3rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--row-gap-tiny</code></td>
        <td>the gap between the rows is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--row-gap-small</code></td>
        <td>the gap between the rows is 1rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--row-gap-medium</code></td>
        <td>the gap between the rows is 2rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--row-gap-large</code></td>
        <td>the gap between the rows is 3rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--column-gap-tiny</code></td>
        <td>the gap between the columns is 0.5rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--column-gap-small</code></td>
        <td>the gap between the columns is 1rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--column-gap-medium</code></td>
        <td>the gap between the columns is 2rem</td>
    </tr>
    <tr>
        <td><code>.fd-flex--column-gap-large</code></td>
        <td>the gap between the columns is 3rem</td>
    </tr>
</table><br>
<b>SCSS Mixin:</b> 
<code>@include fd-flex-gap(value, type)</code>;<br>
where <code>type</code> is an optional parameter and can be one of the two: <code>row | column </code>. <br> The <code>value</code> can be <code>tiny | small | medium | large</code> or any custom value specified by the user. <br>
<table>
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
</table>`
        }
    }
};
