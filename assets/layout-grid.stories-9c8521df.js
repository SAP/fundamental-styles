var _=Object.defineProperty,R=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var u=(c,l,s)=>l in c?_(c,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[l]=s,o=(c,l)=>{for(var s in l||(l={}))M.call(l,s)&&u(c,s,l[s]);if(g)for(var s of g(l))X.call(l,s)&&u(c,s,l[s]);return c},d=(c,l)=>R(c,B(l));/* empty css                    */const Y=`<div class='fd-container'>
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
`,q=`<div class='fd-container fd-container--no-horizontal-gap fd-container--no-vertical-gap'>
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
`,F=`<div class='fd-container fd-container--no-vertical-gap'>
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
`,J=`<div class='fd-container fd-container--no-horizontal-gap'>
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
`,K=`<div class='fd-container'>
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
`,P=`<div class='fd-container'>
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
`,Q=`<div class='fd-container'>
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
`,W=`<div class='fd-container'>
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
`,oo={title:"Layouts/Layout Grid",parameters:{description:"The layout grid is made to separate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line.\nTo use the grid, the user must use all of the `fd-container`, `fd-row`, and `fd-col` classes.\n\n- Use the `fd-container` class to wrap the whole grid.\n- Use the `fd-container--no-vertical-gap` modifier to remove the gutter spacing between rows.\n- Use the `fd-container--no-horizontal-gap` modifier to remove the gutter spacing between columns.\n- Use the `fd-container--no-gap` modifier to remove the gutter spacing between columns and rows.\n- Use the `fd-row` to separate rows.\n- Use the `fd-col` to separate a column of certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size.\n- Use the `fd-col--x` modifier class to make the column spread x-rows/12 (e.g. `fd-col--4` which will take 4 columns out of 12).\n\n<h2>Breakpoints</h2>\n\n- Default until next specified breakpoint<br>\n`fd-col--x` will be used until the next specified minimum breakpoint, column takes x/12 space of the row.\n- Medium 600px<br>\n`fd-col-md--x` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Large 1024px<br>\n`fd-col-lg--x` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Extra-large 1440px<br>\n`fd-col-xl--x` will be used from 1440px and larger, column takes x/12 space of the row."}},n=()=>W;n.parameters={docs:{description:{story:"To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12"}}};const i=()=>Q;i.parameters={docs:{description:{story:"You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`"}}};const a=()=>P;a.parameters={docs:{description:{story:"Add an extra `fd-row` class in between inner rows when using nesting. It will add a gutter in between rows."}}};const e=()=>K;e.parameters={docs:{description:{story:"To add an offset to the left of the column for all sizes use the `--offset-x` modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the `--offset-x--size` modifier, where size is either s,m,l,xl. To make the offset after and not before use the `--offset-after-x--size` modifier."}}};const r=()=>J;r.parameters={docs:{description:{story:"To remove gutters between columns apply the `fd-container--no-horizontal-gap` modifier to the container."}}};const t=()=>F;t.parameters={docs:{description:{story:"To remove gutters between rows apply the `fd-container--no-vertical-gap` modifier to the container."}}};const f=()=>q;f.parameters={docs:{description:{story:"To remove gutters between rows and columns apply both the `fd-container--no-vertical-gap` and `fd-container--no-horizontal-gap` modifiers to the container."}}};const v=()=>Y;v.parameters={docs:{description:{story:"To make the column auto adjust and occupy the remaining space of the row use the `--full` modifier. There is a minimum width of 1/12 columns"}}};var m,p,b;n.parameters=d(o({},n.parameters),{docs:d(o({},(m=n.parameters)==null?void 0:m.docs),{source:o({originalSource:"() => differentSizeColumnsExampleHtml"},(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source)})});var y,h,w;i.parameters=d(o({},i.parameters),{docs:d(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:"() => responsivenessExampleHtml"},(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source)})});var x,z,H;a.parameters=d(o({},a.parameters),{docs:d(o({},(x=a.parameters)==null?void 0:x.docs),{source:o({originalSource:"() => nestingExampleHtml"},(H=(z=a.parameters)==null?void 0:z.docs)==null?void 0:H.source)})});var E,k,G;e.parameters=d(o({},e.parameters),{docs:d(o({},(E=e.parameters)==null?void 0:E.docs),{source:o({originalSource:"() => offsetExampleHtml"},(G=(k=e.parameters)==null?void 0:k.docs)==null?void 0:G.source)})});var S,T,A;r.parameters=d(o({},r.parameters),{docs:d(o({},(S=r.parameters)==null?void 0:S.docs),{source:o({originalSource:"() => noHorizontalGapExampleHtml"},(A=(T=r.parameters)==null?void 0:T.docs)==null?void 0:A.source)})});var N,j,U;t.parameters=d(o({},t.parameters),{docs:d(o({},(N=t.parameters)==null?void 0:N.docs),{source:o({originalSource:"() => noVerticalGapExampleHtml"},(U=(j=t.parameters)==null?void 0:j.docs)==null?void 0:U.source)})});var C,D,I;f.parameters=d(o({},f.parameters),{docs:d(o({},(C=f.parameters)==null?void 0:C.docs),{source:o({originalSource:"() => noGapExampleHtml"},(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source)})});var V,L,O;v.parameters=d(o({},v.parameters),{docs:d(o({},(V=v.parameters)==null?void 0:V.docs),{source:o({originalSource:"() => autoAdjustingExampleHtml"},(O=(L=v.parameters)==null?void 0:L.docs)==null?void 0:O.source)})});const lo=["DifferentSizeColumns","Responsiveness","Nesting","Offset","NoHorizontalGap","NoVerticalGap","NoGap","AutoAdjusting"];export{v as AutoAdjusting,n as DifferentSizeColumns,a as Nesting,f as NoGap,r as NoHorizontalGap,t as NoVerticalGap,e as Offset,i as Responsiveness,lo as __namedExportsOrder,oo as default};
