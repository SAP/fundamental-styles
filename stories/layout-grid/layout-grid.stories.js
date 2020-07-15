import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Layout Grid',
    parameters: {
        description: `The layout grid is made to seperate data into both data and rows. If there is not enough space on the current line of the same row, the item will go to the next line without the margin at the top.
To use the grid, the user must use all of the <code class="docs-code">fd-container</code>,<code class="docs-code>fd-row</code> and <code class="docs-code>fd-col</code> tags.
- Use the <code class="docs-code">fd-container</code> class to wrap the whole grid and help apply the proper row margin

- Use the <code class="docs-code">fd-container--no-gap</code> modifier to remove the gutter spacing between all columns.

- Use the <code class="docs-code">fd-row</code> to seperate rows

-Use the code class="docs-code">fd-row</code> to seperate rows and have an automatic gutter in between columns when they column wraps to the next line.

- Use the <code class="docs-code">fd-col</code> to create a column of a certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size 

- Use the <code class="docs-code">fd-col--x</code> modifier will make the column spread x-rows/12
<h2>Breakpoints</h2>
- Small 600px <br>
<code class="docs-code">fd-col--x</code> will be used until the next specified minimum breakpoint, column takes x/12 space of the row
- Medium 600px<br>
<code class="docs-code">fd-col--x--m</code> will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row
- Large 1024px<br>
<code class="docs-code">fd-col--x--l</code> will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row
- Extra-large 1440px<br>
<code class="docs-code">fd-col--x--xl</code> will be used from 1440px and larger, column takes x/16 space of the row`

    }
};

export const default12Columns = () =>
    `
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col">
          <div class="docs-layout-grid-bg">
          Default 12 column
          </div>
      </div>
  </div>
</div>
`;

default12Columns.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const sixColumns = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
      <div class="docs-layout-grid-bg">
      (1) 6 col at each size
      </div>
    </div>
    <div class="fd-col fd-col--6">
      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
        (2) 6 col at each size
      </div>
    </div>
    <div class="fd-col fd-col--6">
      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
        (3) 6 col at each size
      </div>
    </div>
    <div class="fd-col fd-col--6">
      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
        (4) 6 col at each size
      </div>
    </div>
  </div>
</div>
`;

sixColumns.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To define the size of that column use the <code class="docs-code">fd-col--x</code> modifier, where x can go from 1-12, or 1-16 with the extra large size modifier. All columns which do not fit in the space available will be placed in the next line with no top margin.'
    }
};

export const fourColumns = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--3">
        <div class="docs-layout-grid-bg docs-layout-grid-bg">
        (1) 3 col
        </div>
    </div>
    <div class="fd-col fd-col--3">
        <div class="docs-layout-grid-bg docs-layout-grid-bg">
        (2) 3 col
        </div>
    </div>
    <div class="fd-col fd-col--3">
        <div class="docs-layout-grid-bg docs-layout-grid-bg">
        (3) 3 col
        </div>
    </div>
    <div class="fd-col fd-col--3">
        <div class="docs-layout-grid-bg docs-layout-grid-bg">
        (4) 3 col
        </div>
    </div>
  </div>
</div>
`;

fourColumns.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To seperate the grid into 4 equal columns apply <code class="docs-code>fd-col--3</code> to each column.'
    }
};

export const unequalColumns = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--12">
        <div class="docs-layout-grid-bg docs-layout-grid-bg">
        (1) 12 col
        </div>
    </div>
    <div class="fd-col fd-col--12">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
        (2) 12 col
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
        (1) 6 col
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
        (2) 6 col
        </div>
    </div>
  </div>
</div>
`;

unequalColumns.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Achieving more than one size per row is possible. To do so specify the column width on each block.'
    }
};

export const responsiveness = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6--m">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            6 col at medium and above, 12 otherwise
        </div>
    </div>
    <div class="fd-col fd-col--6--m">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            6 col at medium and above, 12 otherwise
        </div>
    </div>
  </div>
</div>
`;

responsiveness.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Add the <code class="docs-code">fd-col--col-x--size</code> to define that column size only for a certain screen size and above.'
    }
};

export const nesting = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg">
            6 col
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="fd-row">
            <div class="fd-col fd-col--4">
                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2"> 
                    4 col outer
                </div> 
            </div>
            <div class="fd-col fd-col--8">
                <div class="fd-row">
                    <div class="fd-col fd-col--12">
                        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
                            12 out of 8 col
                        </div>
                    </div>      
                    <div class="fd-col fd-col--12">
                        <div class="fd-row">
                            <div class="fd-col fd-col--6">
                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">
                                6 out of 12 out of 8 col
                                </div>
                            </div>
                            <div class="fd-col fd-col--6">
                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
                                6 out of 12 out of 8 col 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
`;

nesting.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Add an extra <code class="docs-code">fd-row</code> class in between inner rows when using nesting. It will add a gutter in between rows.'
    }
};


export const offset = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg">
            6 col
        </div>
    </div>
    <div class="fd-col fd-col--4 fd-col--2--l fd-col--offset-1 fd-col--offset-2--l">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1"> 
            4 col with offset of 1 or 2 col with offset of 2 at large andZ 
        </div>
    </div>
  </div>
</div>
`;

offset.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To add an offset to the left of the column for all sizes use the <code class="docs-code">--offset-x</code> modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next page. To add an offset to the left of the column for certain sizes and above use the <code class="docs-code">--offset-x--size</code> modifier, where size is either s,m,l,xl'
    }
};

export const multipleRows = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--12">
        <div class="docs-layout-grid-bg">
            12 col, row 1
        </div>
    </div>
    <div class="fd-col fd-col--4">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            4 col, row 1
        </div>
    </div>
</div>
<div class="fd-row">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            6 col, row 2
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            6 col, row 2
        </div>
    </div>
  </div>
</div>
`;

multipleRows.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To use multiple rows, make <code class="docs-code">fd-row</code> siblings with each other. This will alse create a gutter in between each row applied'
    }
};


export const noGap = () =>
    `
<div class="fd-container fd-container--no-gap">
  <div class="fd-row">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg">
            6 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            6 col no gap
        </div>
    </div>
  </div>
</div>
`;

noGap.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To remove gutters between columns apply the <code class="docs-code">fd-container--no-gap</code> modifier for the container and the <code class="docs-code">fd-col--no-gap</code> modifier with the column.'
    }
};
