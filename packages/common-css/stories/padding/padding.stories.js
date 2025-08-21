import '../../src/sap-padding.scss';
import allRoundPaddingExampleHtml from './all-round-padding.example.html?raw';
import horizontalPaddingExampleHtml from './horizontal-padding.example.html?raw';
import responsivePaddingExampleHtml from './responsive-padding.example.html?raw';
import responsivePaddingContainerExampleHtml from './responsive-padding-container.example.html?raw';
import noPaddingExampleHtml from './no-padding.example.html?raw';
import helperMixinsExampleHtml from './helper-mixins.example.html?raw';


export default {
  title: 'Padding',
  parameters: {
    description: `The CSS padding properties are used to generate space around an element's content, inside of any defined borders. `
  }
};
const localStyles = `
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
`;


export const AllRoundPadding = () => `${localStyles}${allRoundPaddingExampleHtml}`;
AllRoundPadding.storyName = 'All-Round Padding';
AllRoundPadding.parameters = {
  docs: {
    description: {
      story: `All-round padding appear on all sides of the container they are applied to.<br><b>CSS class: </b> <code>.sap-padding</code><br><b>SCSS mixin: </b> <code>@include sap-padding();</code><br>This will apply 1rem padding on all sides of the container.
        `
    }
  }
};

export const HorizontalPadding = () => `${localStyles}${horizontalPaddingExampleHtml}`;
HorizontalPadding.storyName = 'Double Sided Padding';
HorizontalPadding.parameters = {
  docs: {
    description: {
      story: `Double sided paddings appear on two opposite sides of the element. The horizontal paddings are displayed on left and right side of the element.
            
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
  <tr>
      <th style="padding: 0.25rem;">Type</th>
      <th style="padding: 0.25rem;">Class</th>
      <th style="padding: 0.25rem;">Variable</th>
      <th style="padding: 0.25rem;">Value</th>
      <th style="padding: 0.25rem;">Mixin</th>
  </tr>
  <tr>
      <td style="padding: 0.25rem;">Tiny</td>
      <td style="padding: 0.25rem;"><code>.sap-padding-x-tiny</code> or <br><code>.sap-padding-inline-tiny</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: var(--sapContent\\_Space\\_Tiny)</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: 0.5rem;</code></td>
      <td style="padding: 0.25rem;">@include sap-padding(tiny, x)</td>
  </tr>
  <tr>
      <td style="padding: 0.25rem;">Small</td>
      <td style="padding: 0.25rem;"><code>.sap-padding-x-small</code> or <br><code>.sap-padding-inline-small</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: var(--sapContent\\_Space\\_Small)</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: 1rem;</code></td>
      <td style="padding: 0.25rem;">@include sap-padding(small, x)</td>
  </tr>
  <tr>
      <td style="padding: 0.25rem;">Medium</td>
      <td style="padding: 0.25rem;"><code>.sap-padding-x-medium</code> or <br><code>.sap-padding-inline-medium</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: var(--sapContent\\_Space\\_Medium)</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: 2rem;</code></td>
      <td style="padding: 0.25rem;">@include sap-padding(medium, x)</td>
  </tr>
  <tr>
      <td style="padding: 0.25rem;">Large</td>
      <td style="padding: 0.25rem;"><code>.sap-padding-x-large</code> or <br><code>.sap-padding-inline-large</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: var(--sapContent\\_Space\\_Large)</code></td>
      <td style="padding: 0.25rem;"><code>padding-inline: 3rem;</code></td>
      <td style="padding: 0.25rem;">@include sap-padding(large, x)</td>
  </tr>
</table>`
    }
  }
};
export const ResponsivePadding = () => `${localStyles}${responsivePaddingExampleHtml}`;
ResponsivePadding.storyName = 'Responsive Paddings';
ResponsivePadding.parameters = {
  docs: {
    description: {
      story: `The responsive padding class adds a double sided padding inside a container based on screen width.<br><b>CSS Class: </b><code>.sap-padding-responsive</code><br><b>Mixin: </b><code>@include sap-padding-responsive()</code>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Screen Size</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_S);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 1rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_M);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_L);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_XL);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 3rem;</code></td>
    </tr>
</table>`
    }
  }
};
export const ResponsivePaddingContainer = () => `${localStyles}${responsivePaddingContainerExampleHtml}`;
ResponsivePaddingContainer.storyName = 'Responsive Container Paddings';
ResponsivePaddingContainer.parameters = {
  docs: {
    description: {
      story: `The responsive padding class adds a double sided padding inside a container based on its width.<br><b>CSS Class: </b><code>.sap-padding-responsive-container</code><br><b>Mixin: </b><code>@include sap-padding-container-responsive()</code>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Container Size</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_S);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 1rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_M);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_L);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;"><code>padding: 0 var(--sapContent\\_Space\\_XL);</code></td>
        <td style="padding: 0.25rem;"><code>padding: 0 3rem;</code></td>
    </tr>
</table>`
    }
  }
};
export const NoPadding = () => `${localStyles}${noPaddingExampleHtml}`;
NoPadding.parameters = {
  docs: {
    description: {
      story: `No padding class removes existing container paddings. <br><b>CSS class: </b> <code>.sap-padding-none</code><br><b>SCSS mixin: </b> <code>@include sap-padding(0);</code><br>
            `
    }
  }
};

export const HelperMixins = () => helperMixinsExampleHtml;
HelperMixins.parameters = {
  docs: {
    description: {
      story: `<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
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
        <td style="padding: 0.25rem 0.75rem;">padding-block-start: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-bottom($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-block-end: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-begin($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-inline-start: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-end($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-inline-end: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-x-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-inline: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-y-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-block: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-x($valueLeft, $valueRight)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-inline-start: $valueLeft;<br>padding-inline-end: $valueRight;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-padding-y($valueTop, $valueBottom)</td>
        <td style="padding: 0.25rem 0.75rem;">padding-block-start: $valueTop;<br>padding-block-end: $valueBottom;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-padding($value, $side)</td>
        <td style="padding: 0.25rem 0.75rem;">based on parameters</td>
        <td style="padding: 0.25rem 0.75rem;">$value: tiny, small, medium, large or defined by the user <br> $side:
            top, bottom, begin, end, x, y, inline, block, inline-start, inline-end, block-start, block-end
        </td>
    </tr>
</table>`
    }
  }
};
