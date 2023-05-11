import autoAdjustingExampleHtml from "./auto-adjusting.example.html?raw";
import noGapExampleHtml from "./no-gap.example.html?raw";
import noVerticalGapExampleHtml from "./no-vertical-gap.example.html?raw";
import noHorizontalGapExampleHtml from "./no-horizontal-gap.example.html?raw";
import offsetExampleHtml from "./offset.example.html?raw";
import nestingExampleHtml from "./nesting.example.html?raw";
import responsivenessExampleHtml from "./responsiveness.example.html?raw";
import differentSizeColumnsExampleHtml from "./different-size-columns.example.html?raw";
import '../../../src/layout-grid.scss';
export default {
  title: 'Layouts/Layout Grid',
  parameters: {
    description: `The layout grid is made to separate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line.
To use the grid, the user must use all of the \`fd-container\`, \`fd-row\`, and \`fd-col\` classes.

- Use the \`fd-container\` class to wrap the whole grid.
- Use the \`fd-container--no-vertical-gap\` modifier to remove the gutter spacing between rows.
- Use the \`fd-container--no-horizontal-gap\` modifier to remove the gutter spacing between columns.
- Use the \`fd-container--no-gap\` modifier to remove the gutter spacing between columns and rows.
- Use the \`fd-row\` to separate rows.
- Use the \`fd-col\` to separate a column of certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size.
- Use the \`fd-col--x\` modifier class to make the column spread x-rows/12 (e.g. \`fd-col--4\` which will take 4 columns out of 12).

<h2>Breakpoints</h2>

- Default until next specified breakpoint<br>
\`fd-col--x\` will be used until the next specified minimum breakpoint, column takes x/12 space of the row.
- Medium 600px<br>
\`fd-col-md--x\` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row.
- Large 1024px<br>
\`fd-col-lg--x\` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row.
- Extra-large 1440px<br>
\`fd-col-xl--x\` will be used from 1440px and larger, column takes x/12 space of the row.`
  }
};
export const DifferentSizeColumns = () => differentSizeColumnsExampleHtml;
DifferentSizeColumns.parameters = {
  docs: {
    story: {
      iframeHeight: 1150
    },
    description: {
      story: 'To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12'
    }
  }
};
export const Responsiveness = () => responsivenessExampleHtml;
Responsiveness.parameters = {
  docs: {
    story: {
      iframeHeight: 320
    },
    description: {
      story: 'You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`'
    }
  }
};
export const Nesting = () => nestingExampleHtml;
Nesting.parameters = {
  docs: {
    story: {
      iframeHeight: 150
    },
    description: {
      story: 'Add an extra `fd-row` class in between inner rows when using nesting. It will add a gutter in between rows.'
    }
  }
};
export const Offset = () => offsetExampleHtml;
Offset.parameters = {
  docs: {
    story: {
      iframeHeight: 450
    },
    description: {
      story: 'To add an offset to the left of the column for all sizes use the `--offset-x` modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the `--offset-x--size` modifier, where size is either s,m,l,xl. To make the offset after and not before use the `--offset-after-x--size` modifier.'
    }
  }
};
export const NoHorizontalGap = () => noHorizontalGapExampleHtml;
NoHorizontalGap.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'To remove gutters between columns apply the `fd-container--no-horizontal-gap` modifier to the container.'
    }
  }
};
export const NoVerticalGap = () => noVerticalGapExampleHtml;
NoVerticalGap.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'To remove gutters between rows apply the `fd-container--no-vertical-gap` modifier to the container.'
    }
  }
};
export const NoGap = () => noGapExampleHtml;
NoGap.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'To remove gutters between rows and columns apply both the `fd-container--no-vertical-gap` and `fd-container--no-horizontal-gap` modifiers to the container.'
    }
  }
};
export const AutoAdjusting = () => autoAdjustingExampleHtml;
AutoAdjusting.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'To make the column auto adjust and occupy the remaining space of the row use the `--full` modifier. There is a minimum width of 1/12 columns'
    }
  }
};