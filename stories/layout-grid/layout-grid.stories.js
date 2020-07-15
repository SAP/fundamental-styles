import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Layout Grid',
    parameters: {
<<<<<<< HEAD
        description: `The layout grid is made to seperate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line without the margin at the top.
To use the grid, the user must use all of the \`fd-container\`, \`fd-row\`, and \`fd-col\` tags.

- Use the \`fd-container\` class to wrap the whole grid and help apply the proper row margin

- Use the \`fd-container--no-gap\` modifier to remove the gutter spacing between all columns.

- Use the \`fd-row\` to seperate rows and have an automatic gutter in between columns when they column wraps to the next line.

- Use the \`fd-col\` to create a column of a certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size 

- Use the \`fd-col--x\` modifier will make the column spread x-rows/12 (e.g. \`fd-col--4\` which will take 4 columns out of 12)

<h2>Breakpoints</h2>
- Default until next specified breakpoint  <br>
\`fd-col--x\` will be used until the next specified minimum breakpoint, column takes x/12 space of the row
- Medium 600px<br>
\`fd-col--x--m\` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row
- Large 1024px<br>
\`fd-col--x--l\` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row
- Extra-large 1440px<br>
\`fd-col--x--xl\` will be used from 1440px and larger, column takes x/16 space of the row`
    }
};

export const differentSizeColumns = () =>`
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">12 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--11">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">11 columns element</div>
      </div>
      <div class="fd-col fd-col--1">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">1 column element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--10">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">10 columns element</div>
      </div>
      <div class="fd-col fd-col--2">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">2 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--9">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">9 columns element</div>
      </div>
      <div class="fd-col fd-col--3">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">3 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--8">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">8 columns element</div>
      </div>
      <div class="fd-col fd-col--4">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">4 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--7">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">7 columns element</div>
      </div>
      <div class="fd-col fd-col--5">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">5 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--6">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">6 columns element</div>
      </div>
      <div class="fd-col fd-col--6">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">6 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--5">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">5 columns element</div>
      </div>
      <div class="fd-col fd-col--7">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">7 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--4">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">4 columns element</div>
      </div>
      <div class="fd-col fd-col--8">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">8 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--3">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">3 columns element</div>
      </div>
      <div class="fd-col fd-col--9">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">9 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--2">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">2 columns element</div>
      </div>
      <div class="fd-col fd-col--10">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">10 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col fd-col--1">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">1 column element</div>
      </div>
      <div class="fd-col fd-col--11">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">11 columns element</div>
      </div>
  </div>
</div>
<br />
<div class="fd-container">
  <div class="fd-row">
      <div class="fd-col">
          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">12 columns element</div>
      </div>
=======
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
        (2) 6 col at each size
      </div>
    </div>
    <div class="fd-col fd-col--6">
      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
        (2) 6 col at each size
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
>>>>>>> start layout grids
  </div>
</div>
`;

<<<<<<< HEAD
differentSizeColumns.parameters = {
    docs: {
        iframeHeight: 1150,
        storyDescription: 'To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12, or 1-16 with the extra large size modifier.'
    }
};

export const responsiveness = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--12 fd-col--6--m fd-col--4--l fd-col--4--xl ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">(1 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col--6--m fd-col--4--l fd-col--4--xl ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">(2 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col--6--m fd-col--4--l fd-col--4--xl ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">(3 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col--6--m fd-col--4--l fd-col--4--xl ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">(4 cell)</div>
=======
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
>>>>>>> start layout grids
    </div>
  </div>
</div>
`;

<<<<<<< HEAD
responsiveness.parameters = {
    docs: {
        iframeHeight: 320,
        storyDescription: 'You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 16 `fd-col--4--xl`; 4 columns out of 12 in large `fd-col--4--l`; 6 columns out of 12 in medium `fd-col--6--m`, and 12 out of 12 in small `fd-col--12`'
    }
};

export const nesting = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--2">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            6 col (1/2 = 50%)
        </div>
    </div>
    <div class="fd-col fd-col--10">
        <div class="fd-row"">
            <div class="fd-col fd-col--2">
                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2"> 
                    2 col inner row 1 (1/12 ~8%)
                </div> 
            </div>
            <div class="fd-col fd-col--10">
                <div class="fd-row">
                    <div class="fd-col fd-col--6">
                        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
                            6 coll inner row 2 (5/24 ~21%)
                        </div>
                    </div>      
                    <div class="fd-col fd-col--6">
                        <div class="fd-row">
                            <div class="fd-col fd-col--4">
                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">
                                4 coll inner row 3 (5/72 ~7%)
                                </div>
                            </div>
                            <div class="fd-col fd-col--8">
                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">
                                8 coll inner row 3 (10/72 ~14%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
=======
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
>>>>>>> start layout grids
        </div>
    </div>
  </div>
</div>
`;

<<<<<<< HEAD
nesting.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'Add an extra <code class="docs-code">fd-row</code> class in between inner rows when using nesting. It will add a gutter in between rows.'
    }
};

export const offset = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            12 columns
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
            6 columns
        </div>
    </div>
    <div class="fd-col fd-col--8 fd-col--offset-4 fd-col--6--m fd-col--offset-2--m fd-col--4--l fd-col--offset-4--l fd-col--3--xl fd-col--offset-6--xl">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5"> 
            Different column-width and offset in different inflection points 
        </div>
    </div>
    <div class="fd-col fd-col--6 fd-col--offset-6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7"> 
            6 columns with 6-column offset 
        </div>
    </div>
    <div class="fd-col fd-col--3 fd-col--offset-after-1 fd-col--offset-after-2--m fd-col--offset-after-2--l fd-col--offset-after-1--xl">
      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8"> 
          2 column-width and offset after in different inflection points 
      </div>
    </div>
    <div class="fd-col fd-col--4 fd-col--offset-after-1">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9"> 
            4 columns with 2-column offset after
        </div>
    </div>
    <div class="fd-col fd-col--2">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">2 column element</div>
=======
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
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
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
    <div class="fd-col fd-col--4 fd-col--offset-1">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1"> 
            4 col with offset of 1
        </div>
>>>>>>> start layout grids
    </div>
  </div>
</div>
`;

offset.parameters = {
    docs: {
<<<<<<< HEAD
        iframeHeight: 350,
        storyDescription: 'To add an offset to the left of the column for all sizes use the <code class="docs-code">--offset-x</code> modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the <code class="docs-code">--offset-x--size</code> modifier, where size is either s,m,l,xl. To make the offset after and not before use the <code class="docs-code">--offset-after-x--size</code> modifier.'
    }
};

export const noGap = () =>
    `
<div class="fd-container fd-container--no-gap">
  <div class="fd-row">
    <div class="fd-col fd-col--8">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            8 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--4">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            4 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">
            6 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">
            6 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--4">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">
            4 col no gap
        </div>
    </div>
    <div class="fd-col fd-col--8">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">
            8 col no gap
        </div>
    </div>
=======
        iframeHeight: 300,
        storyDescription: 'To add an offset ot the left of the column use the <code class="docs-code">--offset-x</code> modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next page'
    }
};

export const multipleRows = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--12">
        <div class="docs-layout-grid-bg">
            12 col row 1
        </div>
    </div>
    <div class="fd-col fd-col--4">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            4 col row 1
        </div>
    </div>
</div>
<div class="fd-row">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            6 col row 2
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            6 col row 2
        </div>
    </div>
  </div>
</div>
`;

multipleRows.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To use multiple rows, make <code class="docs-code">fd-row</code> siblings with each other. This will cause a line break for the new row.'
    }
};

export const autoMarginBottom = () =>
    `
<div class="fd-container">
  <div class="fd-row fd-row--auto-gutter">
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg">
            6 col auto gutter
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            6 col auto gutter
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg">
            6 col auto gutter
        </div>
    </div>
    <div class="fd-col fd-col--6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            6 col auto gutter
        </div>
    </div>
  </div>
</div>
`;

autoMarginBottom.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To add an automatic gutter in between rows, use the `fd-row fd-row--auto-gutter` class instead of the `fd-row` class.'
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
>>>>>>> start layout grids
  </div>
</div>
`;

noGap.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To remove gutters between columns apply the <code class="docs-code">fd-container--no-gap</code> modifier for the container and the <code class="docs-code">fd-col--no-gap</code> modifier with the column.'
    }
};
