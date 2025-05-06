import '../../src/sap-margin.scss';
import allRoundMarginExampleHtml from './all-round-margin.example.html?raw';
import topMarginExampleHtml from './top-margin.example.html?raw';
import bottomMarginExampleHtml from './bottom-margin.example.html?raw';
import beginMarginExampleHtml from './begin-margin.example.html?raw';
import endMarginExampleHtml from './end-margin.example.html?raw';
import horizontalMarginExampleHtml from './horizontal-margin.example.html?raw';
import verticalMarginExampleHtml from './vertical-margin.example.html?raw';
import responsiveMarginExampleHtml from './responsive-margin.example.html?raw';
import negativeMarginExampleHtml from './negative-margin.example.html?raw';

export default {
  title: 'Margins',
  parameters: {
    description: `The CSS margin properties are used to create space around elements, outside of any defined borders. <br><br>
<h2>Helper mixins: </h2>

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
`
  }
};
const localStyles = `
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
`;
export const AllRoundMargin = () => `${localStyles}${allRoundMarginExampleHtml}`;
AllRoundMargin.storyName = 'All-Round Margins';
AllRoundMargin.parameters = {
  docs: {
    description: {
      story: `All-round margins appear on all sides of the element they are applied to. 

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
    
</table>`
    }
  }
};
export const TopMargin = () => `${localStyles}${topMarginExampleHtml}`;
TopMargin.storyName = 'Top Margins';
TopMargin.parameters = {
  docs: {
    description: {
      story: `The top margin is displayed on the top of the element.
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
            </table>`
    }
  }
};
export const BottomMargin = () => `${localStyles}${bottomMarginExampleHtml}`;
BottomMargin.storyName = 'Bottom Margins';
BottomMargin.parameters = {
  docs: {
    description: {
      story: `The bottom margin is displayed on the bottom of the element.
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
            </table>`
    }
  }
};
export const BeginMargin = () => `${localStyles}${beginMarginExampleHtml}`;
BeginMargin.storyName = 'Begin Margins';
BeginMargin.parameters = {
  docs: {
    description: {
      story: `The begin margin is displayed on the left side and in right-to-left mode on the right side of the element.
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
            </table>`
    }
  }
};
export const EndMargin = () => `${localStyles}${endMarginExampleHtml}`;
EndMargin.storyName = 'End Margins';
EndMargin.parameters = {
  docs: {
    description: {
      story: `The end margin is displayed on the right side and in right-to-left mode on the left side of the element.
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
            </table>`
    }
  }
};
export const HorizontalMargin = () => `${localStyles}${horizontalMarginExampleHtml}`;
HorizontalMargin.storyName = 'Horizontal Margins';
HorizontalMargin.parameters = {
  docs: {
    description: {
      story: `The horizontal margins are displayed on left and right side of the element.
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
            </table>`
    }
  }
};
export const VerticalMargin = () => `${localStyles}${verticalMarginExampleHtml}`;
VerticalMargin.storyName = 'Vertical Margins';
VerticalMargin.parameters = {
  docs: {
    description: {
      story: `The vertical margins are displayed on top and bottom of the element.
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
            </table>`
    }
  }
};
export const ResponsiveMargin = () => `${localStyles}${responsiveMarginExampleHtml}`;
ResponsiveMargin.storyName = 'Responsive Margins';
ResponsiveMargin.parameters = {
  docs: {
    description: {
      story: `The responsive margins class adds a margin around an element based on the width of the container the element is in. <br>
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
            </table>`
    }
  }
};
export const NegativeMargin = () => `${localStyles}${negativeMarginExampleHtml}`;
NegativeMargin.storyName = 'Negative Margins';
NegativeMargin.parameters = {
  docs: {
    description: {
      story: `The negative margin class adds a double sided negative margin to an element. This is useful when aligning elements with built-in paddings.
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
            </table>`
    }
  }
};
