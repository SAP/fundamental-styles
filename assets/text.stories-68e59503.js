/* empty css             *//* empty css             */const q=`<div class="example-container">
        <div class="fddocs-text">
            <h3>Without hyphenation</h3>
            <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>

        <div class="fddocs-text">
            <h3>Hyphenation</h3>
            <p class="fd-text fd-text--hyphenation">Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
            incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
            aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
            eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
            deserunt mollit anim id est la&shy;bo&shy;rum.</p>
        </div>
    </div>
`,y=`
    <h3>Show More</h3>
    <p class="fd-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit amet nisl. Laoreet suspendisse interdum
    consectetur libero id faucibus nisl. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.
    Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Mauris vitae ultricies...</p>
    <a class="fd-link fd-text__link--more" tabindex="0"><span class="fd-link__content">More</span></a>

    <h3>Show Less</h3>
    <p class="fd-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
    amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
    scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
    accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
    egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
    diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
    duis at tellus at urna.</p>
    <a class="fd-link fd-text__link--more" tabindex="0"><span class="fd-link__content">Less</span></a>
`,E=`
    <h3>No max lines rule</h3>
    <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
    amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
    scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
    accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
    egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
    diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
    duis at tellus at urna.
    Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
    quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
    id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
    ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
    faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
    Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
    Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>

    <h3>2 max lines</h3>
    <p class="fd-text fd-text--max-lines" style="-webkit-line-clamp: 2;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
    amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
    scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
    accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
    egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
    diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
    duis at tellus at urna.
    Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
    quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
    id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
    ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
    faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
    Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
    Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>

    <h3>3 max lines</h3>
    <p class="fd-text fd-text--max-lines" style="-webkit-line-clamp: 3;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
    amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
    scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
    accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
    egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
    diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
    duis at tellus at urna.
    Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
    quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
    id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
    ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
    faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
    Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
    Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>
`,w=`
    <h3>No indents or whitespace</h3>
    <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>

    <h3>Wrapped text with indents and whitespace</h3>
    <p class="fd-text fd-text--pre-wrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>
`,L=`<p class="fd-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>
`,M={title:"Components/Text",parameters:{description:`The text component displays text inside a form, table, or any other content area.
        It is generally used throughout the entire application and is responsive to all screen sizes.`,tags:["f3","a11y","theme"]}},e=()=>L;e.storyName="Default";e.parameters={docs:{description:{story:`The default text component can display lines of text that wrap to the next line
        once they reach the end of the content container width.`}}};const t=()=>w;t.parameters={docs:{description:{story:"The text component has a property that allows browsers to render specified indents and\n        whitespace. To display indents and/or whitespace, add a\n        `fd-text--pre-wrap` modifier class to the main element."}}};const i=()=>E;i.storyName="Max lines";i.parameters={docs:{description:{story:'The text component can be displayed with a maximum number of lines.\nWhen the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,\nadd the `fd-text--max-lines` modifier class and an inline style rule with the number of\nlines to the main element. For example, add `style="-webkit-line-clamp: 3;"` to display\nthree lines of text.\n\n**Note**: The property `-webkit-line-clamp` doesn\'t work in IE11 and should be changed\nto `height`. For example, `style="height: 200px;"`.\n'}}};const s=()=>y;s.parameters={docs:{description:{story:`Along with max lines, text component can display "MORE" and "LESS" links that can show
more or less of the text.`}}};const a=()=>q;a.parameters={docs:{description:{story:`The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, add the \`fd-text--hyphenation\` to the main element.

**It is also possible to suggest line break opportunities with two Unicode characters that manually specify
potential line breakpoints:**

- Hyphen: The "hard" hyphen character indicates a visible line break opportunity.
Even if the line is not actually broken at that point, the hyphen is still displayed.

- Shy: An invisible, "soft" hyphen. Although this character is not visible, it marks a place
where the browser should break the word if hyphenation is necessary.

In HTML, add the \`&shy;\` Unicode to insert a soft hyphen.`}}};var n,u,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => defaultExampleExampleHtml",...(r=(u=e.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};var l,o,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"() => whitespaceExampleHtml",...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => maxLinesExampleHtml",...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"() => expandExampleHtml",...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"() => hyphenationExampleHtml",...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const U=["DefaultExample","Whitespace","MaxLines","Expand","Hyphenation"];export{e as DefaultExample,s as Expand,a as Hyphenation,i as MaxLines,t as Whitespace,U as __namedExportsOrder,M as default};
//# sourceMappingURL=text.stories-68e59503.js.map
