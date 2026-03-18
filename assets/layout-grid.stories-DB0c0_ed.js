/* empty css                    */const e=`<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col fd-col--full'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                Auto adjusting col before 7 col
            </div>
        </div>

        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                7 col
            </div>
        </div>

        <div class='fd-col fd-col--full'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                Auto adjusting col after 7 col
            </div>
        </div>
    </div>
</div>
`,r=`<div class='fd-container fd-container--no-horizontal-gap fd-container--no-vertical-gap'>
  <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
`,t=`<div class='fd-container fd-container--no-vertical-gap'>
    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
`,f=`<div class='fd-container fd-container--no-horizontal-gap'>
    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
`,v=`<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                12 columns
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 columns
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--8 fd-col--offset-4 fd-col-md--6 fd-col-md--offset-2 fd-col-lg--4 fd-col-lg--offset-4 fd-col-lx--3 fd-col-lx--offset-6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                Different column-width and offset in different inflection points
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6 fd-col--offset-6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>
                6 columns with 6-column offset
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--3 fd-col--offset-after-1 fd-col-md--offset-after-2 fd-col-lg--offset-after-2 fd-col-xl--offset-after-1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>
                2 column-width and offset after in different inflection points
            </div>
        </div>

        <div class='fd-col fd-col--4 fd-col--offset-after-1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>
                4 columns with 2-column offset after
            </div>
        </div>

        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>
                2 column element
            </div>
        </div>
    </div>
</div>
`,g=`<div class='fd-container'>
  <div class='fd-row'>
    <div class='fd-col fd-col--2'>
        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
            2 col (~17%)
        </div>
    </div>

    <div class='fd-col fd-col--10'>
        <div class='fd-row'">
            <div class='fd-col fd-col--2'>
                <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                    2 col inner row 1 (~14%)
                </div>
            </div>

            <div class='fd-col fd-col--10'>
                <div class='fd-row'>
                    <div class='fd-col fd-col--6'>
                        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                            6 coll inner row 2 (~34%)
                        </div>
                    </div>

                    <div class='fd-col fd-col--6'>
                        <div class='fd-row'>
                            <div class='fd-col fd-col--4'>
                                <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                                    4 coll inner row 3 (~10%)
                                </div>
                            </div>

                            <div class='fd-col fd-col--8'>
                                <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                                    8 coll inner row 3 (~23%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,u=`<div class='fd-container'>
  <div class='fd-row'>
    <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>(1 cell)</div>
    </div>

    <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>(2 cell)</div>
    </div>

    <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>(3 cell)</div>
    </div>

    <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
        <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>(4 cell)</div>
    </div>
  </div>
</div>
`,m=`<div class='fd-container'>
  <div class='fd-row'>
      <div class='fd-col'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>12 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--11'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>11 columns element</div>
      </div>
      <div class='fd-col fd-col--1'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>1 column element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--10'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>10 columns element</div>
      </div>
      <div class='fd-col fd-col--2'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>2 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--9'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>9 columns element</div>
      </div>
      <div class='fd-col fd-col--3'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>3 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--8'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>8 columns element</div>
      </div>
      <div class='fd-col fd-col--4'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>4 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--7'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>7 columns element</div>
      </div>
      <div class='fd-col fd-col--5'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>5 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--6'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>6 columns element</div>
      </div>
      <div class='fd-col fd-col--6'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>6 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--5'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>5 columns element</div>
      </div>
      <div class='fd-col fd-col--7'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>7 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--4'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>4 columns element</div>
      </div>
      <div class='fd-col fd-col--8'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>8 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--3'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>3 columns element</div>
      </div>
      <div class='fd-col fd-col--9'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>9 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--2'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>2 columns element</div>
      </div>
      <div class='fd-col fd-col--10'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>10 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col fd-col--1'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>1 column element</div>
      </div>
      <div class='fd-col fd-col--11'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>11 columns element</div>
      </div>
  </div>

  <div class='fd-row'>
      <div class='fd-col'>
          <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>12 columns element</div>
      </div>
  </div>
</div>
`,b={title:"Layouts/Layout Grid",parameters:{description:"The layout grid is made to separate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line.\nTo use the grid, the user must use all of the `fd-container`, `fd-row`, and `fd-col` classes.\n\n- Use the `fd-container` class to wrap the whole grid.\n- Use the `fd-container--no-vertical-gap` modifier to remove the gutter spacing between rows.\n- Use the `fd-container--no-horizontal-gap` modifier to remove the gutter spacing between columns.\n- Use the `fd-container--no-gap` modifier to remove the gutter spacing between columns and rows.\n- Use the `fd-row` to separate rows.\n- Use the `fd-col` to separate a column of certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size.\n- Use the `fd-col--x` modifier class to make the column spread x-rows/12 (e.g. `fd-col--4` which will take 4 columns out of 12).\n\n<h2>Breakpoints</h2>\n\n- Default until next specified breakpoint<br>\n`fd-col--x` will be used until the next specified minimum breakpoint, column takes x/12 space of the row.\n- Medium 600px<br>\n`fd-col-md--x` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Large 1024px<br>\n`fd-col-lg--x` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Extra-large 1440px<br>\n`fd-col-xl--x` will be used from 1440px and larger, column takes x/12 space of the row."}},o=()=>m;o.parameters={docs:{description:{story:"To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12"}}};const d=()=>u;d.parameters={docs:{description:{story:"You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`"}}};const l=()=>g;l.parameters={docs:{description:{story:"Add an extra `fd-row` class in between inner rows when using nesting. It will add a gutter in between rows."}}};const s=()=>v;s.parameters={docs:{description:{story:"To add an offset to the left of the column for all sizes use the `--offset-x` modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the `--offset-x--size` modifier, where size is either s,m,l,xl. To make the offset after and not before use the `--offset-after-x--size` modifier."}}};const c=()=>f;c.parameters={docs:{description:{story:"To remove gutters between columns apply the `fd-container--no-horizontal-gap` modifier to the container."}}};const n=()=>t;n.parameters={docs:{description:{story:"To remove gutters between rows apply the `fd-container--no-vertical-gap` modifier to the container."}}};const i=()=>r;i.parameters={docs:{description:{story:"To remove gutters between rows and columns apply both the `fd-container--no-vertical-gap` and `fd-container--no-horizontal-gap` modifiers to the container."}}};const a=()=>e;a.parameters={docs:{description:{story:"To make the column auto adjust and occupy the remaining space of the row use the `--full` modifier. There is a minimum width of 1/12 columns"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => differentSizeColumnsExampleHtml",...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => responsivenessExampleHtml",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => nestingExampleHtml",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => offsetExampleHtml",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => noHorizontalGapExampleHtml",...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => noVerticalGapExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => noGapExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => autoAdjustingExampleHtml",...a.parameters?.docs?.source}}};const y=["DifferentSizeColumns","Responsiveness","Nesting","Offset","NoHorizontalGap","NoVerticalGap","NoGap","AutoAdjusting"];export{a as AutoAdjusting,o as DifferentSizeColumns,l as Nesting,i as NoGap,c as NoHorizontalGap,n as NoVerticalGap,s as Offset,d as Responsiveness,y as __namedExportsOrder,b as default};
