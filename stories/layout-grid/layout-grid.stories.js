export default {
    title: 'Layouts/Layout Grid',
    parameters: {
        description: `The layout grid is made to seperate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line without the margin at the top.
To use the grid, the user must use all of the \`fd-container\`, \`fd-row\`, and \`fd-col\` tags.

- Use the \`fd-container\` class to wrap the whole grid and help apply the proper row margin.
- Use the \`fd-container--no-gap\` modifier to remove the gutter spacing between all columns.
- Use the \`fd-row\` to seperate rows and have an automatic gutter in between columns when they column wraps to the next line.
- Use the \`fd-col\` to create a column of a certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size.
- Use the \`fd-col--x\` modifier will make the column spread x-rows/12 (e.g. \`fd-col--4\` which will take 4 columns out of 12).

<h2>Breakpoints</h2>

- Default until next specified breakpoint<br>
\`fd-col--x\` will be used until the next specified minimum breakpoint, column takes x/12 space of the row.
- Medium 600px<br>
\`fd-col-md--x\` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row.
- Large 1024px<br>
\`fd-col-lg--x\` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row.
- Extra-large 1440px<br>
\`fd-col-xl--x\` will be used from 1440px and larger, column takes x/12 space of the row.`,
        components: ['layout-grid']
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
  </div>
</div>
`;

differentSizeColumns.parameters = {
    docs: {
        iframeHeight: 1150,
        storyDescription: 'To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12'
    }
};

export const responsiveness = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">(1 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">(2 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">(3 cell)</div>
    </div>
    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">(4 cell)</div>
    </div>
  </div>
</div>
`;

responsiveness.parameters = {
    docs: {
        iframeHeight: 320,
        storyDescription: 'You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`'
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
        </div>
    </div>
  </div>
</div>
`;

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
    <div class="fd-col fd-col--8 fd-col--offset-4 fd-col-md--6 fd-col-md--offset-2 fd-col-lg--4 fd-col-lg--offset-4 fd-col-lx--3 fd-col-lx--offset-6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5"> 
            Different column-width and offset in different inflection points 
        </div>
    </div>
    <div class="fd-col fd-col--6 fd-col--offset-6">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7"> 
            6 columns with 6-column offset 
        </div>
    </div>
    <div class="fd-col fd-col--3 fd-col--offset-after-1 fd-col-md--offset-after-2 fd-col-lg--offset-after-2 fd-col-xl--offset-after-1">
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
    </div>
  </div>
</div>
`;

offset.parameters = {
    docs: {
        iframeHeight: 450,
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
  </div>
</div>
`;

noGap.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To remove gutters between columns apply the <code class="docs-code">fd-container--no-gap</code> modifier for the container and the <code class="docs-code">fd-col--no-gap</code> modifier with the column.'
    }
};

export const autoAdjusting = () =>
    `
<div class="fd-container">
  <div class="fd-row">
    <div class="fd-col fd-col--full">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            Auto adjusting col before 7 col
        </div>
    </div>
    <div class="fd-col fd-col--7">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">
            7 col
        </div>
    </div>
    <div class="fd-col fd-col--full">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">
            Auto adjusting col after 7 col
        </div>
    </div>
  </div>
</div>
`;

autoAdjusting.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To make the column auto adjust and occupy the remaining space of the row use the <code class="docs-code">--full</code> modifier. There is a minimum width of 1/12 columns'
    }
};

