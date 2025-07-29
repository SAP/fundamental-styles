import '../../src/sap-flex.scss';
import flexAlignSelfExampleHtml from './flex-align-self.example.html?raw';
import flexExampleHtml from './flex.example.html?raw';
import flexAlignContentExampleHtml from './flex-align-content.example.html?raw';
import flexDirectionExampleHtml from './flex-direction.example.html?raw';
import flexGapExampleHtml from './flex-gap.example.html?raw';
import flexJustifyExampleHtml from './flex-justify.example.html?raw';
import flexWrapExampleHtml from './flex-wrap.example.html?raw';
import flexOrderExampleHtml from './flex-order.example.html?raw';
import flexShrinkExampleHtml from './flex-shrink.example.html?raw';
import flexGrowExampleHtml from './flex-grow.example.html?raw';
import flexAlignItemsExampleHtml from './flex-align-items.example.html?raw';
import flexCenterExampleHtml from './flex-center.example.html?raw';

export default {
  title: 'Flex',
  parameters: {
    description: `The Flexbox Layout, commonly known as Flex, provides an efficient way to align and distribute elements within a container.
`
  }
};
const localStyles = `
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
`;
export const Flex = () => `${localStyles}${flexExampleHtml}`;
Flex.storyName = 'Flex Container';
Flex.parameters = {
  docs: {
    description: {
      story: `To turn a parent element into a flex container apply the <code>.sap-flex</code> class to this element. <br><b>SCSS Mixin:</b><code>@include  sap-flex()</code>`
    }
  }
};
export const FlexAlignContent = () => `${localStyles}${flexAlignContentExampleHtml}`;
FlexAlignContent.storyName = 'Flex Align Content (Flex Container)';
FlexAlignContent.parameters = {
  docs: {
    description: {
      story: `
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
<code>@include sap-flex-align-content(type)</code><br>where <code>type</code> can be one of the following: <code>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline</code>`
    }
  }
};
export const FlexAlignItems = () => `${localStyles}${flexAlignItemsExampleHtml}`;
FlexAlignItems.storyName = 'Flex Align Items (Flex Container)';
FlexAlignItems.parameters = {
  docs: {
    description: {
      story: `
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
<code>@include sap-flex-align-items(type)</code><br>where <code>type</code> can be one of the following: <code>flex-start | start | self-start | flex-end | end | self-end | center | baseline | stretch </code>`
    }
  }
};
export const FlexCenter = () => `${localStyles}${flexCenterExampleHtml}`;
FlexCenter.storyName = 'Flex Center (Flex Container)';
FlexCenter.parameters = {
  docs: {
    description: {
      story: `

<b>SCSS Mixin:</b> 
<code>@include sap-flex-center(direction)</code><br>where <code>direction</code> can be one of the following: <code>row (default) | row-reverse | column | column-reverse</code>`
    }
  }
};
export const FlexDirection = () => `${localStyles}${flexDirectionExampleHtml}`;
FlexDirection.storyName = 'Flex Direction (Flex Container)';
FlexDirection.parameters = {
  docs: {
    description: {
      story: `
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

<b>SCSS Mixin:</b> <code>@include sap-flex(direction)</code><br>
where <code>direction</code> can be one of the following values: <code>row (default) | row-reverse | column | column-reverse</code>
`
    }
  }
};
export const FlexGap = () => `${localStyles}${flexGapExampleHtml}`;
FlexGap.storyName = 'Flex Gap (Flex Container)';
FlexGap.parameters = {
  docs: {
    description: {
      story: `
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
<code>@include sap-flex-gap(value, type)</code><br>
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
</table>`
    }
  }
};
export const FlexJustify = () => `${localStyles}${flexJustifyExampleHtml}`;
FlexJustify.storyName = 'Flex Justify Content (Flex Container)';
FlexJustify.parameters = {
  docs: {
    description: {
      story: `
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
<code>@include sap-flex-justify(type)</code><br>
where <code>type</code> can be one of the following: <code>flex-start(default) | flex-end | center | space-between | space-around | space-evenly | start | end | left | right</code>`
    }
  }
};
export const FlexWrap = () => `${localStyles}${flexWrapExampleHtml}`;
FlexWrap.storyName = 'Flex Wrap (Flex Container)';
FlexWrap.parameters = {
  docs: {
    description: {
      story: `
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
<code>@include sap-flex-wrap(type)</code><br>
where <code>type</code> can be one of the following: <code>nowrap(default) | wrap | wrap-reverse</code>`
    }
  }
};
export const FlexOrder = () => `${localStyles}${flexOrderExampleHtml}`;
FlexOrder.storyName = 'Flex Order (Flex Items)';
FlexOrder.parameters = {
  docs: {
    description: {
      story: `
To change the order in which the flex items appear in the flex container use the <code>.sap-flex-order-*</code> class, where <b>*</b> can be a number from 0 to 10.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-order(value)</code><br>
where <code>value</code> is an integer.`
    }
  }
};
export const FlexShrink = () => `${localStyles}${flexShrinkExampleHtml}`;
FlexShrink.storyName = 'Flex Shrink (Flex Items)';
FlexShrink.parameters = {
  docs: {
    description: {
      story: `
Flex shrink defines the ability for a flex item to shrink if necessary. The class to specify it is: <code>.sap-flex-shrink-*</code>, where <b>*</b> can be a number from 0 to 10. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-shrink(value)</code><br>
where <code>value</code> is a positive integer.`
    }
  }
};
export const FlexGrow = () => `${localStyles}${flexGrowExampleHtml}`;
FlexGrow.storyName = 'Flex Grow (Flex Items)';
FlexGrow.parameters = {
  docs: {
    description: {
      story: `
Flex grow defines the ability for a flex item to grow if necessary. The class to specify it is: <code>.sap-flex-grow-*</code>, where <b>*</b> can be a number from 0 to 10. Negative numbers are invalid.<br>

<b>SCSS Mixin:</b> 
<code>@include sap-flex-grow(value)</code><br>
where <code>value</code> is a positive integer.`
    }
  }
};
export const FlexAlignSelf = () => `${localStyles}${flexAlignSelfExampleHtml}`;
FlexAlignSelf.storyName = 'Flex Align Self (Flex Items)';
FlexAlignSelf.parameters = {
  docs: {
    description: {
      story: `
Align-self allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. <br>
<code>sap-flex-align-self-auto</code>|<code>sap-flex-align-self-flex-start</code>|<code>sap-flex-align-self-flex-end</code>|<code>sap-flex-align-self-center</code>|<code>sap-flex-align-self-baseline</code>|<code>sap-flex-align-self-stretch</code>
<br>
<b>SCSS Mixin:</b> 
<code>@include sap-flex-align-self(value)</code><br>
where <code>value</code> can be one of the following <code>auto | flex-start | flex-end | center | baseline | stretch</code>.`
    }
  }
};
