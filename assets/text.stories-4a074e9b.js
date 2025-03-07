/* empty css             *//* empty css             */const n=`<div class="example-container">
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
`,u=`
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
`,r=`
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
`,l=`
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
`,o=`<p class="fd-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>
`,d={title:"Components/Text",parameters:{description:`The text component displays text inside a form, table, or any other content area.
        It is generally used throughout the entire application and is responsive to all screen sizes.`,tags:["f3","a11y","theme"]}},e=()=>o;e.storyName="Default";e.parameters={docs:{description:{story:`The default text component can display lines of text that wrap to the next line
        once they reach the end of the content container width.`}}};const t=()=>l;t.parameters={docs:{description:{story:"The text component has a property that allows browsers to render specified indents and\n        whitespace. To display indents and/or whitespace, add a\n        `fd-text--pre-wrap` modifier class to the main element."}}};const i=()=>r;i.storyName="Max lines";i.parameters={docs:{description:{story:'The text component can be displayed with a maximum number of lines.\nWhen the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,\nadd the `fd-text--max-lines` modifier class and an inline style rule with the number of\nlines to the main element. For example, add `style="-webkit-line-clamp: 3;"` to display\nthree lines of text.\n\n**Note**: The property `-webkit-line-clamp` doesn\'t work in IE11 and should be changed\nto `height`. For example, `style="height: 200px;"`.\n'}}};const s=()=>u;s.parameters={docs:{description:{story:`Along with max lines, text component can display "More" and "Less" links that can show
more or less of the text.`}}};const a=()=>n;a.parameters={docs:{description:{story:`The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, add the \`fd-text--hyphenation\` to the main element.

**It is also possible to suggest line break opportunities with two Unicode characters that manually specify
potential line breakpoints:**

- Hyphen: The "hard" hyphen character indicates a visible line break opportunity.
Even if the line is not actually broken at that point, the hyphen is still displayed.

- Shy: An invisible, "soft" hyphen. Although this character is not visible, it marks a place
where the browser should break the word if hyphenation is necessary.

In HTML, add the \`&shy;\` Unicode to insert a soft hyphen.`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => defaultExampleExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => whitespaceExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => maxLinesExampleHtml",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => expandExampleHtml",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => hyphenationExampleHtml",...a.parameters?.docs?.source}}};const p=["DefaultExample","Whitespace","MaxLines","Expand","Hyphenation"];export{e as DefaultExample,s as Expand,a as Hyphenation,i as MaxLines,t as Whitespace,p as __namedExportsOrder,d as default};
