const x=`<div class="example-container">
        <div class="fddocs-text">
            <h3>Without hyphenation</h3>
            <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>

        <div class="fddocs-text">
            <h3>Hyphenation</h3>
            <p class="sap-text-hyphenation">Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
            incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
            aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
            eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
            deserunt mollit anim id est la&shy;bo&shy;rum.</p>
        </div>
    </div>
`,g=`
    <h3>No max lines rule</h3>
    <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
    <p class="sap-text-max-lines" style="-webkit-line-clamp: 2;">
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
    <p class="sap-text-max-lines" style="-webkit-line-clamp: 3;">
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
`,f=`
    <h3>No indents or whitespace</h3>
    <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>

    <h3>Wrapped text with indents and whitespace</h3>
    <p class="sap-text-pre-wrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>
`,q=`<p class="sap-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>
`;const v={title:"Text",parameters:{description:`The text component displays text inside a form, table, or any other content area.
        It is generally used throughout the entire application and is responsive to all screen sizes.
<br>
<b>CSS Classes: </b><br>
<code>.sap-text</code><br>
<code>.sap-text-max-lines</code><br>
<code>.sap-text-pre-wrap</code><br>
<code>.sap-text-hyphenation</code><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-text(<i style="color: red;">$modifier</i>)</code><br>
where <i style="color: red;">$modifier</i> is optional and can be:
- <code>"max-lines"</code>: to display text with a maximum line count<br>
- <code>"pre-wrap"</code>: to display indents and/or whitespace<br>
- <code>"hyphenation"</code>: to display hyphens<br>`}},e=()=>q;e.storyName="Default";e.parameters={docs:{description:{story:`The default text component can display lines of text that wrap to the next line
        once they reach the end of the content container width.`}}};const t=()=>f;t.parameters={docs:{description:{story:"The text component has a property that allows browsers to render specified indents and\n        whitespace. To display indents and/or whitespace, use the\n        `.fd-text-pre-wrap` class."}}};const i=()=>g;i.storyName="Max lines";i.parameters={docs:{description:{story:'The text component can be displayed with a maximum number of lines.\nWhen the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,\nuse the `.fd-text-max-lines` class and an inline style rule with the number of\nlines to the main element. For example, add `style="-webkit-line-clamp: 3;"` to display\nthree lines of text.\n\n**Note**: The property `-webkit-line-clamp` doesn\'t work in IE11 and should be changed\nto `height`. For example, `style="height: 200px;"`.\n'}}};const a=()=>x;a.parameters={docs:{description:{story:`The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, use the \`.fd-text-hyphenation\` element.

**It is also possible to suggest line break opportunities with two Unicode characters that manually specify
potential line breakpoints:**

- Hyphen: The "hard" hyphen character indicates a visible line break opportunity.
Even if the line is not actually broken at that point, the hyphen is still displayed.

- Shy: An invisible, "soft" hyphen. Although this character is not visible, it marks a place
where the browser should break the word if hyphenation is necessary.

In HTML, add the \`&shy;\` Unicode to insert a soft hyphen.`}}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => defaultExampleExampleHtml",...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var u,l,o;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"() => whitespaceExampleHtml",...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"() => maxLinesExampleHtml",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,h,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"() => hyphenationExampleHtml",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const y=["DefaultExample","Whitespace","MaxLines","Hyphenation"];export{e as DefaultExample,a as Hyphenation,i as MaxLines,t as Whitespace,y as __namedExportsOrder,v as default};
