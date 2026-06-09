const n=`<style>
    .border-example-card {
        background: #f7f8fa;
        border: 0.0625rem solid #eaecee;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-block-end: 1rem;
    }
    .border-example-card h4 {
        margin: 0 0 0.75rem 0;
        color: #0a6ed1;
        font-size: 0.9375rem;
        font-weight: 600;
    }
    .demo-box {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        max-width: 300px;
    }
</style>

<div class="border-example-card">
    <h4>Without Hyphenation</h4>
    <div class="demo-box">
        <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
</div>

<div class="border-example-card">
    <h4>Hyphenation (with data attribute)</h4>
    <div class="demo-box">
        <p class="sap-text" data-hyphens>Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
        incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
        aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
        eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
        deserunt mollit anim id est la&shy;bo&shy;rum.</p>
    </div>
</div>

<div class="border-example-card">
    <h4>Hyphenation (with modifier class)</h4>
    <div class="demo-box">
        <p class="sap-text-hyphenation">Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
        incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
        aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
        eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
        deserunt mollit anim id est la&shy;bo&shy;rum.</p>
    </div>
</div>
`,s=`<style>
    .border-example-card {
        background: #f7f8fa;
        border: 0.0625rem solid #eaecee;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-block-end: 1rem;
    }
    .border-example-card h4 {
        margin: 0 0 0.75rem 0;
        color: #0a6ed1;
        font-size: 0.9375rem;
        font-weight: 600;
    }
    .demo-box {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <h4>No Max Lines Rule</h4>
    <div class="demo-box">
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
    </div>
</div>

<div class="border-example-card">
    <h4>2 Max Lines (with class)</h4>
    <div class="demo-box">
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
    </div>
</div>

<div class="border-example-card">
    <h4>3 Max Lines (with data attribute)</h4>
    <div class="demo-box">
        <p class="sap-text" data-lines="3">
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
    </div>
</div>

<div class="border-example-card">
    <h4>4 Max Lines (with data attribute)</h4>
    <div class="demo-box">
        <p class="sap-text" data-lines="4">
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
    </div>
</div>
`,r=`<style>
    .border-example-card {
        background: #f7f8fa;
        border: 0.0625rem solid #eaecee;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-block-end: 1rem;
    }
    .border-example-card h4 {
        margin: 0 0 0.75rem 0;
        color: #0a6ed1;
        font-size: 0.9375rem;
        font-weight: 600;
    }
    .demo-box {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <h4>No Indents or Whitespace</h4>
    <div class="demo-box">
        <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
</div>

<div class="border-example-card">
    <h4>Wrapped Text with Indents and Whitespace (with modifier class)</h4>
    <div class="demo-box">
        <p class="sap-text-pre-wrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>
    </div>
</div>

<div class="border-example-card">
    <h4>Wrapped Text with Indents and Whitespace (with data attribute)</h4>
    <div class="demo-box">
        <p class="sap-text" data-wrap>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>
    </div>
</div>
`,u=`<style>
    .border-example-card {
        background: #f7f8fa;
        border: 0.0625rem solid #eaecee;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-block-end: 1rem;
    }
    .border-example-card h4 {
        margin: 0 0 0.75rem 0;
        color: #0a6ed1;
        font-size: 0.9375rem;
        font-weight: 600;
    }
    .demo-box {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <h4>Default Text</h4>
    <div class="demo-box">
        <p class="sap-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        </p>
    </div>
</div>
`,o={title:"Text",parameters:{description:`The text component displays text inside a form, table, or any other content area. It is generally used throughout the entire application and is responsive to all screen sizes.
<br>

<b>CSS Classes: </b>
<ul>
    <li><code>.sap-text</code></li>
    <li><code>.sap-text-max-lines</code></li>
    <li><code>.sap-text-pre-wrap</code></li>
    <li><code>.sap-text-hyphenation</code></li>
</ul>
<br>
<b>SCSS Mixin: </b>
<code>@include sap-text(<i style="color: red;">$modifier</i>)</code><br>
where <i style="color: red;">$modifier</i> is optional and can be:
<ul>
    <li><code>max-lines</code>: to display text with a maximum line count</li>
    <li><code>pre-wrap</code>: to display indents and/or whitespace</li>
    <li><code>hyphenation</code>: to display hyphens</li>
</ul>`}},e=()=>u;e.storyName="Default";e.parameters={docs:{description:{story:"The default text component can display lines of text that wrap to the next line once they reach the end of the content container width."}}};const t=()=>r;t.parameters={docs:{description:{story:"The text component has a property that allows browsers to render specified indents and whitespace. To display indents and/or whitespace, use the `.fd-text-pre-wrap` class or `data-wrap` attribute to `.fd-text` class."}}};const i=()=>s;i.storyName="Max lines";i.parameters={docs:{description:{story:'The text component can be displayed with a maximum number of lines.\nWhen the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,\nuse the `.fd-text-max-lines` class and an inline style rule with the number of\nlines to the main element. For example, add `style="-webkit-line-clamp: 3;"` to display\nthree lines of text.\n\nYou can also add the `data-lines` attribute to `.fd-text` class and specify the number of lines. \n\n**Note**: The property `-webkit-line-clamp` doesn\'t work in IE11 and should be changed\nto `height`. For example, `style="height: 200px;"`.\n'}}};const a=()=>n;a.parameters={docs:{description:{story:`The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, use the \`.fd-text-hyphenation\` class or or \`data-hyphens\` attribute to \`.fd-text\` class.

**It is also possible to suggest line break opportunities with two Unicode characters that manually specify
potential line breakpoints:**

- Hyphen: The "hard" hyphen character indicates a visible line break opportunity.
Even if the line is not actually broken at that point, the hyphen is still displayed.

- Shy: An invisible, "soft" hyphen. Although this character is not visible, it marks a place
where the browser should break the word if hyphenation is necessary.

In HTML, add the \`&shy;\` Unicode to insert a soft hyphen.`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => defaultExampleExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => whitespaceExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => maxLinesExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => hyphenationExampleHtml",...a.parameters?.docs?.source}}};const l=["DefaultExample","Whitespace","MaxLines","Hyphenation"];export{e as DefaultExample,a as Hyphenation,i as MaxLines,t as Whitespace,l as __namedExportsOrder,o as default};
